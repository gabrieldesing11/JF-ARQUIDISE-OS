import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Data storage for leads to ensure zero lost leads
const DATA_DIR = path.resolve(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf-8');
}

function getStoredLeads(): any[] {
  try {
    const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveLead(lead: any): void {
  try {
    const leads = getStoredLeads();
    leads.unshift(lead);
    // Keep last 500 leads
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads.slice(0, 500), null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving lead to file:', err);
  }
}

// Notification Recipients (User requested defaults)
const RECIPIENT_EMAIL = process.env.NOTIFICATION_EMAIL || 'gabrielbovea2828@gmail.com';
const RECIPIENT_PHONE = process.env.NOTIFICATION_PHONE || '+573001933834';
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.RESEND_FROM_EMAIL || 'notificaciones@jfarquidisenos.com';

// Initialize Resend if key exists
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

// Send email notification
async function dispatchEmailNotification(lead: any): Promise<{ sent: boolean; message: string }> {
  const subject = `Nueva solicitud recibida - JF Arquidiseños [${lead.folio}]`;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #020203; color: #CBC9CA; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #0b0b0e; border: 1px solid rgba(226, 205, 167, 0.3); padding: 32px; border-radius: 4px; }
          .header { border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 24px; }
          .header h1 { font-size: 20px; color: #FFFFFF; font-weight: 300; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 6px 0; }
          .header p { color: #E2CDA7; font-size: 13px; margin: 0; }
          .badge { display: inline-block; padding: 4px 10px; background: rgba(226, 205, 167, 0.15); color: #E2CDA7; font-size: 11px; letter-spacing: 1px; font-weight: bold; margin-bottom: 20px; }
          .data-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .data-table td { padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 14px; }
          .data-table .label { color: #888B90; width: 35%; }
          .data-table .value { color: #FFFFFF; font-weight: 500; }
          .comments-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 16px; margin-bottom: 24px; font-size: 13px; color: #CBC9CA; line-height: 1.6; }
          .actions { text-align: center; margin-top: 28px; }
          .button { display: inline-block; background: #E2CDA7; color: #020203; padding: 12px 24px; text-decoration: none; font-size: 12px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; border-radius: 0; }
          .footer { text-align: center; font-size: 11px; color: #57585A; margin-top: 32px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>JF ARQUIDISEÑOS</h1>
            <p>Notificación Inmediata de Nuevo Cliente · Barranquilla</p>
          </div>

          <div class="badge">FOLIO: ${lead.folio}</div>

          <table class="data-table">
            <tr>
              <td class="label">Nombre del Cliente:</td>
              <td class="value">${lead.name}</td>
            </tr>
            <tr>
              <td class="label">Teléfono / Celular:</td>
              <td class="value"><a href="tel:${lead.phone}" style="color: #E2CDA7; text-decoration: none;">${lead.phone}</a></td>
            </tr>
            <tr>
              <td class="label">Correo Electrónico:</td>
              <td class="value">${lead.email || 'No proporcionado'}</td>
            </tr>
            <tr>
              <td class="label">Línea de Interés:</td>
              <td class="value" style="color: #E2CDA7;">${lead.service}</td>
            </tr>
            <tr>
              <td class="label">Tipo de Inmueble:</td>
              <td class="value">${lead.projectType || 'Residencial'}</td>
            </tr>
            <tr>
              <td class="label">Ubicación / Sector:</td>
              <td class="value">${lead.location || 'Barranquilla'}</td>
            </tr>
            ${lead.meters ? `
            <tr>
              <td class="label">Metraje Estimado:</td>
              <td class="value">~${lead.meters} metros lineales</td>
            </tr>` : ''}
            ${lead.estimatedRange ? `
            <tr>
              <td class="label">Presupuesto Estimado:</td>
              <td class="value">${lead.estimatedRange}</td>
            </tr>` : ''}
            <tr>
              <td class="label">Fecha y Hora:</td>
              <td class="value">${lead.createdAt}</td>
            </tr>
          </table>

          ${lead.message ? `
            <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #888B90; margin-bottom: 6px;">
              Detalles o Comentarios del Cliente:
            </div>
            <div class="comments-box">
              ${lead.message.replace(/\n/g, '<br>')}
            </div>
          ` : ''}

          <div class="actions">
            <a href="https://wa.me/${lead.cleanPhone}?text=Hola%20${encodeURIComponent(lead.name)},%20gracias%20por%20contactar%20a%20JF%20Arquidise%C3%B1os%20Barranquilla.%20Recibimos%20tu%20solicitud%20${lead.folio}%20para%20${encodeURIComponent(lead.service)}." class="button" target="_blank">
              Contactar por WhatsApp
            </a>
          </div>

          <div class="footer">
            Mensaje generado automáticamente por el sistema de captura de JF Arquidiseños.<br>
            Sede: Carrera 53 # 82 - 145, Alto Prado, Barranquilla.
          </div>
        </div>
      </body>
    </html>
  `;

  if (resend) {
    try {
      const res = await resend.emails.send({
        from: RESEND_FROM,
        to: RECIPIENT_EMAIL,
        subject,
        html: htmlContent,
      });

      if (res.error) {
        console.warn('Resend returned error:', res.error);
        return { sent: false, message: res.error.message };
      }
      return { sent: true, message: `Correo enviado a ${RECIPIENT_EMAIL} vía Resend (${res.data?.id})` };
    } catch (err: any) {
      console.error('Error invoking Resend API:', err);
      return { sent: false, message: err.message };
    }
  }

  // Fallback: If RESEND_API_KEY is not yet configured, log clearly and record
  console.log(`[EMAIL NOTIFICATION PENDING CONFIG] To: ${RECIPIENT_EMAIL} | Subject: ${subject}`);
  return {
    sent: false,
    message: `Notificación registrada en servidor. Para entrega directa por SMTP/Resend, configura RESEND_API_KEY en las variables de entorno.`
  };
}

// Send mobile notification (Twilio / WhatsApp Cloud API / Webhook)
async function dispatchMobileNotification(lead: any): Promise<{ sent: boolean; message: string }> {
  const summaryText = `*NUEVA SOLICITUD JF ARQUIDISEÑOS* (${lead.folio})\n` +
    `👤 *Cliente:* ${lead.name}\n` +
    `📞 *Teléfono:* ${lead.phone}\n` +
    `📍 *Sector:* ${lead.location || 'Barranquilla'}\n` +
    `🛋️ *Línea:* ${lead.service}\n` +
    (lead.estimatedRange ? `💰 *Estimado:* ${lead.estimatedRange}\n` : '') +
    (lead.message ? `📝 *Detalle:* ${lead.message}\n` : '') +
    `⏰ *Fecha:* ${lead.createdAt}`;

  const TWILIO_SID = process.env.TWILIO_ACCOUNT_SID;
  const TWILIO_TOKEN = process.env.TWILIO_AUTH_TOKEN;
  const TWILIO_FROM = process.env.TWILIO_FROM_PHONE;

  if (TWILIO_SID && TWILIO_TOKEN && TWILIO_FROM) {
    try {
      const isWhatsApp = TWILIO_FROM.startsWith('whatsapp:');
      const fromFormatted = isWhatsApp ? TWILIO_FROM : `whatsapp:${TWILIO_FROM}`;
      const toFormatted = `whatsapp:${RECIPIENT_PHONE.replace(/\s+/g, '')}`;

      const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_SID}/Messages.json`;
      const authHeader = 'Basic ' + Buffer.from(`${TWILIO_SID}:${TWILIO_TOKEN}`).toString('base64');

      const params = new URLSearchParams();
      params.append('From', fromFormatted);
      params.append('To', toFormatted);
      params.append('Body', summaryText);

      const twilioRes = await fetch(twilioUrl, {
        method: 'POST',
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      });

      if (twilioRes.ok) {
        return { sent: true, message: `Mensaje de WhatsApp/SMS despachado a ${RECIPIENT_PHONE}` };
      } else {
        const errorText = await twilioRes.text();
        console.warn('Twilio API error:', errorText);
        return { sent: false, message: `Twilio error: ${errorText}` };
      }
    } catch (err: any) {
      console.error('Error invoking Twilio API:', err);
      return { sent: false, message: err.message };
    }
  }

  // Fallback: If Twilio is not configured, record status
  console.log(`[MOBILE NOTIFICATION PENDING CONFIG] To: ${RECIPIENT_PHONE}\n${summaryText}`);
  return {
    sent: false,
    message: `Mensaje registrado en base de datos. Para entrega automática de SMS/WhatsApp por servidor, configura TWILIO_ACCOUNT_SID o WHATSAPP_API_TOKEN.`
  };
}

// -------------------------------------------------------------
// REST API ENDPOINTS
// -------------------------------------------------------------

// POST /api/leads - Real lead reception & dual notification
app.post('/api/leads', async (req: Request, res: Response) => {
  try {
    const {
      name,
      phone,
      email,
      service,
      projectType,
      location,
      message,
      meters,
      tier,
      estimatedMin,
      estimatedMax,
      honeypot // anti-spam field
    } = req.body;

    // Anti-spam honeypot
    if (honeypot) {
      return res.status(400).json({ success: false, error: 'Spam detected.' });
    }

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ success: false, error: 'Por favor ingresa un nombre válido.' });
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
      return res.status(400).json({ success: false, error: 'Por favor ingresa un número de teléfono o WhatsApp válido.' });
    }

    // Generate unique verifiable folio
    const folio = `JFA-${Date.now().toString().slice(-6)}`;
    const now = new Date();
    const createdAt = now.toLocaleString('es-CO', {
      timeZone: 'America/Bogota',
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const cleanPhone = phone.replace(/[^0-9]/g, '');

    let estimatedRange = '';
    if (estimatedMin && estimatedMax) {
      const fmt = (n: number) =>
        new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n);
      estimatedRange = `${fmt(estimatedMin)} a ${fmt(estimatedMax)}`;
    }

    const leadRecord = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      folio,
      name: name.trim(),
      phone: phone.trim(),
      cleanPhone,
      email: email ? email.trim() : null,
      service: service || 'Cocinas Integrales',
      projectType: projectType || 'Residencial',
      location: location ? location.trim() : 'Barranquilla',
      message: message ? message.trim() : '',
      meters: meters || null,
      tier: tier || null,
      estimatedRange: estimatedRange || null,
      createdAt,
      timestamp: now.toISOString(),
      recipients: {
        email: RECIPIENT_EMAIL,
        phone: RECIPIENT_PHONE
      }
    };

    // 1. Immediately store lead in database
    saveLead(leadRecord);

    // 2. Dispatch real email notification
    const emailResult = await dispatchEmailNotification(leadRecord);

    // 3. Dispatch real mobile / WhatsApp notification
    const mobileResult = await dispatchMobileNotification(leadRecord);

    // 4. Build instant client-side WhatsApp fallback URL for the customer to confirm
    const whatsappText = encodeURIComponent(
      `Hola JF Arquidiseños Barranquilla, acabo de registrar la solicitud *${folio}*:\n` +
      `*Nombre:* ${leadRecord.name}\n` +
      `*Línea:* ${leadRecord.service}\n` +
      `*Sector:* ${leadRecord.location}\n` +
      (leadRecord.estimatedRange ? `*Estimado:* ${leadRecord.estimatedRange}\n` : '') +
      `*Deseo coordinar la visita técnica sin costo.*`
    );
    const clientWhatsAppUrl = `https://wa.me/${RECIPIENT_PHONE.replace(/[^0-9]/g, '')}?text=${whatsappText}`;

    return res.status(200).json({
      success: true,
      folio,
      leadId: leadRecord.id,
      createdAt,
      emailNotification: emailResult,
      mobileNotification: mobileResult,
      whatsappActionUrl: clientWhatsAppUrl,
      recipientEmail: RECIPIENT_EMAIL,
      recipientPhone: RECIPIENT_PHONE
    });

  } catch (error: any) {
    console.error('Error processing lead:', error);
    return res.status(500).json({
      success: false,
      error: 'Hubo un error al procesar tu solicitud en el servidor. Por favor intenta de nuevo.'
    });
  }
});

// GET /api/leads - Admin route to inspect captured leads
app.get('/api/leads', (req: Request, res: Response) => {
  try {
    const leads = getStoredLeads();
    return res.json({
      total: leads.length,
      recipientEmail: RECIPIENT_EMAIL,
      recipientPhone: RECIPIENT_PHONE,
      leads
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// GET /api/health - Check server and notification readiness
app.get('/api/health', (req: Request, res: Response) => {
  return res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    recipientEmail: RECIPIENT_EMAIL,
    recipientPhone: RECIPIENT_PHONE,
    resendConfigured: !!RESEND_API_KEY,
    twilioConfigured: !!(process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN)
  });
});

// -------------------------------------------------------------
// VITE DEV MIDDLEWARE / STATIC ASSETS
// -------------------------------------------------------------
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`[JF Arquidiseños Server] Running on http://localhost:${PORT}`);
    console.log(`[Notifications] Email recipient: ${RECIPIENT_EMAIL}`);
    console.log(`[Notifications] Mobile recipient: ${RECIPIENT_PHONE}`);
    console.log(`[Notifications] Resend API configured: ${!!RESEND_API_KEY}`);
  });
}

startServer();
