/**
 * Layout pour Sanity Studio
 */

export const metadata = {
  title: 'Market-IA CMS - Admin',
  description: 'Interface d\'administration Sanity pour Market-IA',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
