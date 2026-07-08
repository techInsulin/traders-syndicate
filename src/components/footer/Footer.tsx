"use client"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center text-sm">
        <p>© {year} Traders Syndicate. All rights reserved.</p>
      </div>
    </footer>
  )
}
