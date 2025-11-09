import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Assistant IA | Market-IA',
  description: 'Discutez avec notre assistant IA intelligent',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function ChatAssistantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
