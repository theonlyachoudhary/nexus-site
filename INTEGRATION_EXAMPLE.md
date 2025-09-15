// Example integration in layout.tsx
import { Footer } from '@/Footer/Component'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
