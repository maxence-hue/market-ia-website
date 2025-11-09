import { NextRequest, NextResponse } from 'next/server'

const DEFAULT_WEBHOOK = 'https://adsolar.app.n8n.cloud/webhook-test/3a780463-bb30-4848-8d77-995ccb8d056a'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Webhook n8n URL from environment variable or fallback to default
    const webhookUrl =
      process.env.N8N_CONTACT_WEBHOOK ||
      process.env.ZAPIER_WEBHOOK_URL ||
      DEFAULT_WEBHOOK
    
    // Prepare data
    const data = {
      ...body,
      timestamp: new Date().toISOString(),
      source: 'market-ia-website',
      type: 'automation-quote',
      formType: 'Automatisation IA',
    }

    // Send to webhook
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
    console.log('Automation quote submission:', {
      email: body.email,
      company: body.companyName,
      timestamp: data.timestamp,
    })

    return NextResponse.json({ 
      success: true,
      message: 'Votre demande de devis automatisation a été envoyée avec succès'
    })
  } catch (error) {
    console.error('Error processing automation quote:', error)
    return NextResponse.json(
      { success: false, error: 'Une erreur est survenue' },
      { status: 500 }
    )
  }
}
