"use client"

import * as React from "react"
import {
  Gem,
  Heart,
  Crown,
  Sparkles,
  ShoppingBag,
  Search,
  User,
  Bookmark,
  Gift,
  Star,
  Award,
  Diamond,
  Watch,
  CircleUser,
} from "lucide-react"
import { useUser, useClerk } from "@clerk/nextjs"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Welcome Guest",
    email: "Browse our collections",
    avatar: "/avatars/guest-user.jpg",
  },
  navMain: [
    {
      title: "Collections",
      url: "/collections",
      icon: Gem,
      isActive: true,
      items: [
        {
          title: "All Jewelry",
          url: "/collections",
        },
        {
          title: "New Arrivals",
          url: "/collections/new",
        },
        {
          title: "Best Sellers",
          url: "/collections/bestsellers",
        },
        {
          title: "Sale Items",
          url: "/collections/sale",
        },
      ],
    },
    {
      title: "Rings",
      url: "/rings",
      icon: Diamond,
      items: [
        {
          title: "Engagement Rings",
          url: "/rings/engagement",
        },
        {
          title: "Wedding Bands",
          url: "/rings/wedding",
        },
        {
          title: "Fashion Rings",
          url: "/rings/fashion",
        },
        {
          title: "Vintage Rings",
          url: "/rings/vintage",
        },
      ],
    },
    {
      title: "Necklaces",
      url: "/necklaces",
      icon: Sparkles,
      items: [
        {
          title: "Diamond Necklaces",
          url: "/necklaces/diamond",
        },
        {
          title: "Pearl Necklaces",
          url: "/necklaces/pearl",
        },
        {
          title: "Gold Chains",
          url: "/necklaces/gold",
        },
        {
          title: "Pendants",
          url: "/necklaces/pendants",
        },
      ],
    },
    {
      title: "Watches",
      url: "/watches",
      icon: Watch,
      items: [
        {
          title: "Luxury Watches",
          url: "/watches/luxury",
        },
        {
          title: "Sports Watches",
          url: "/watches/sports",
        },
        {
          title: "Classic Watches",
          url: "/watches/classic",
        },
        {
          title: "Smart Watches",
          url: "/watches/smart",
        },
      ],
    },
    {
      title: "My Account",
      url: "/account",
      icon: CircleUser,
      items: [
        {
          title: "Profile",
          url: "/account/profile",
        },
        {
          title: "Order History",
          url: "/account/orders",
        },
        {
          title: "Wishlist",
          url: "/account/wishlist",
        },
        {
          title: "Preferences",
          url: "/account/preferences",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Custom Design",
      url: "/custom-design",
      icon: Heart,
    },
    {
      name: "Gift Cards",
      url: "/gift-cards",
      icon: Gift,
    },
    {
      name: "Wishlist",
      url: "/wishlist",
      icon: Bookmark,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, isSignedIn } = useUser()
  const { signOut } = useClerk()

  // Dynamic user data based on authentication state
  const userData = isSignedIn && user ? {
    name: user.fullName || user.firstName || "Valued Customer",
    email: user.primaryEmailAddress?.emailAddress || "Welcome back!",
    avatar: user.imageUrl || "/avatars/default-user.jpg",
  } : {
    name: "Welcome Guest",
    email: "Browse our collections",
    avatar: "/avatars/guest-user.jpg",
  }

  // Add authenticated user projects/features
  const authenticatedProjects = isSignedIn ? [
    ...data.projects,
    {
      name: "Order History",
      url: "/orders",
      icon: ShoppingBag,
    },
    {
      name: "Account Settings", 
      url: "/account",
      icon: User,
    }
  ] : data.projects

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-4 group-data-[collapsible=icon]:px-2 group-data-[collapsible=icon]:justify-center">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-600 text-white flex size-8 items-center justify-center rounded-lg shadow-lg">
            <Crown className="size-5" />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-lg font-bold bg-gradient-to-r from-amber-600 to-yellow-700 bg-clip-text text-transparent">
              Liberty Jewelers
            </span>
            <span className="text-xs text-muted-foreground">
              Exquisite Collections
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={authenticatedProjects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
