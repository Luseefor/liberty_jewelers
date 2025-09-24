"use client"

import * as React from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  attribute?: string
  defaultAttribute?: string
  themeValue?: Partial<Record<Theme, string>>
  disableTransitionOnChange?: boolean
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "liberty-gold-diamonds-theme",
  attribute = "class",
  defaultAttribute = "data-theme",
  themeValue,
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme)

  React.useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [storageKey])

  React.useEffect(() => {
    const root = window.document.documentElement

    if (disableTransitionOnChange) {
      root.style.setProperty("transition", "none")
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const systemTheme = mediaQuery.matches ? "dark" : "light"

    const applyTheme = (newTheme: Theme) => {
      const resolvedTheme = newTheme === "system" ? systemTheme : newTheme
      
      root.classList.remove("light", "dark")
      
      if (themeValue) {
        const value = themeValue[resolvedTheme]
        if (value) {
          root.setAttribute(attribute, value)
        } else {
          root.setAttribute(attribute, resolvedTheme)
        }
      } else {
        root.classList.add(resolvedTheme)
        root.setAttribute(attribute, resolvedTheme)
      }
    }

    applyTheme(theme)

    if (disableTransitionOnChange) {
      setTimeout(() => {
        root.style.removeProperty("transition")
      }, 1)
    }

    const handleSystemThemeChange = () => {
      if (theme === "system") {
        applyTheme(theme)
      }
    }

    mediaQuery.addEventListener("change", handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange)
    }
  }, [theme, themeValue, attribute, disableTransitionOnChange])

  const contextValue = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={contextValue}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}