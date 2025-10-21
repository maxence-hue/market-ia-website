import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Webhook Zapier/n8n URL from environment variable
    const webhookUrl = process.env.ZAPIER_DEVIS_WEBHOOK_URL || process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL
    
    if (!webhookUrl) {
      console.warn('No webhook URL configured for devis')
    }

    // Prepare data
    const data = {
      ...body,
      timestamp: new Date().toISOString(),
      source: 'market-ia-website',
      type: 'devis-automatisation',
    }

    // Send to webhook if configured
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    }

    // Log for development
    console.log('Devis form submission:', {
      company: body.companyName,
      email: body.email,
      sector: body.sector,
      timestamp: data.timestamp,
    })

    return NextResponse.json({ 
      success: true,
      message: 'Votre demande de devis a été envoyée avec succès. Nous vous contacterons sous 24h.'
    })
  } catch (error) {
    console.error('Error processing devis form:', error)
    return NextResponse.json(
      { success: false, error: 'Une erreur est survenue' },
      { status: 500 }
    )
  }
}
