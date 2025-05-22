export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
