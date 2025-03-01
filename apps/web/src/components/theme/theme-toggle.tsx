// "use client"

// import { useTheme } from "next-themes"
// import { Moon, Sun } from "lucide-react"
// import { useEffect, useState } from "react"

// export function ThemeToggle() {
//   const { resolvedTheme, setTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)

//   // Avoid hydration mismatch by only rendering after mount
//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return <div className="w-9 h-9"></div> // Placeholder to avoid layout shift
//   }

//   return (
//     <button
//       onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
//       className="p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800 transition-colors hover:bg-gray-700 dark:hover:bg-gray-300"
//       aria-label="Toggle theme"
//     >
//       {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//     </button>
//   )
// }

