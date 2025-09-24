import { Crown } from "lucide-react"
import { SignUp } from "@clerk/nextjs"

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-gradient-to-r from-amber-400 to-yellow-600 text-white flex size-6 items-center justify-center rounded-md">
              <Crown className="size-4" />
            </div>
            Liberty Gold & Diamonds
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <SignUp 
              signInUrl="/login"
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "shadow-none border-0 bg-transparent",
                  headerTitle: "text-2xl font-bold text-gray-900",
                  headerSubtitle: "text-gray-600 text-sm",
                  socialButtonsBlockButton: "border border-gray-300 hover:bg-gray-50 transition-colors",
                  socialButtonsBlockButtonText: "font-medium text-gray-700",
                  formButtonPrimary: "bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 border-0 text-white font-medium",
                  footerActionLink: "text-amber-600 hover:text-amber-700 font-medium",
                  formFieldInput: "border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900",
                  formFieldLabel: "text-sm font-medium text-gray-700 mb-1",
                  identityPreviewText: "text-sm text-gray-600",
                  identityPreviewEditButton: "text-amber-600 hover:text-amber-700 font-medium",
                  dividerLine: "bg-gray-200",
                  dividerText: "text-gray-500 text-sm",
                  formFieldErrorText: "text-red-600 text-sm mt-1",
                  formFieldSuccessText: "text-green-600 text-sm mt-1",
                  formHeaderTitle: "text-xl font-semibold text-gray-900",
                  formHeaderSubtitle: "text-gray-600 text-sm"
                },
                variables: {
                  colorPrimary: "#d97706",
                  colorText: "#374151",
                  colorTextSecondary: "#6b7280",
                  colorBackground: "#ffffff",
                  colorInputText: "#111827",
                  colorInputBackground: "#ffffff"
                }
              }}
              forceRedirectUrl="/"
              fallbackRedirectUrl="/"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 relative hidden lg:block">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-amber-700">
            <Crown className="w-24 h-24 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Welcome to Liberty Gold & Diamonds</h2>
            <p className="text-lg">Join our exclusive community</p>
            <p className="text-sm mt-2">Discover exquisite jewelry and personalized service</p>
          </div>
        </div>
      </div>
    </div>
  )
}