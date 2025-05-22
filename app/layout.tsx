export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <head />
      <body className="bg-white text-black p-4">
        {children}
      </body>
    </html>
  )
}
