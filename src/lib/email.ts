import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAIL = "info@consigliere-residences.com";

interface EnquiryEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  type: string;
  location?: string | null;
  budget?: string | null;
  message: string;
  propertyName?: string | null;
}

export async function sendEnquiryNotification(data: EnquiryEmailData) {
  const typeLabels: Record<string, string> = {
    STAY: "Short-term Stay",
    BUY: "Property Purchase",
    ADVISORY: "Investment Advisory",
    GENERAL: "General Enquiry",
    "SHORT-TERM": "Short-term Rental",
    "LONG-TERM": "Long-term Rental",
    BUYING: "Buying Property",
    INVESTMENT: "Investment Advisory",
  };

  const typeLabel = typeLabels[data.type] || data.type;

  const { data: result, error } = await resend.emails.send({
    from: "The Consigliere <onboarding@resend.dev>",
    to: ADMIN_EMAIL,
    subject: `New Enquiry: ${typeLabel} — ${data.firstName} ${data.lastName}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
        <h2 style="border-bottom: 1px solid #c9a96e; padding-bottom: 12px; color: #1a1a1a;">
          New Enquiry Received
        </h2>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 8px 0; color: #666; width: 140px;">Name</td>
            <td style="padding: 8px 0;">${data.firstName} ${data.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          ${data.phone ? `<tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;">${data.phone}</td></tr>` : ""}
          <tr>
            <td style="padding: 8px 0; color: #666;">Type</td>
            <td style="padding: 8px 0;">${typeLabel}</td>
          </tr>
          ${data.location ? `<tr><td style="padding: 8px 0; color: #666;">Location</td><td style="padding: 8px 0;">${data.location}</td></tr>` : ""}
          ${data.budget ? `<tr><td style="padding: 8px 0; color: #666;">Budget</td><td style="padding: 8px 0;">${data.budget}</td></tr>` : ""}
          ${data.propertyName ? `<tr><td style="padding: 8px 0; color: #666;">Property</td><td style="padding: 8px 0;">${data.propertyName}</td></tr>` : ""}
        </table>

        <div style="background: #f9f7f4; padding: 16px; margin: 20px 0;">
          <strong style="display: block; margin-bottom: 8px;">Message:</strong>
          <p style="margin: 0; white-space: pre-line;">${data.message}</p>
        </div>

        <p style="color: #999; font-size: 12px; margin-top: 30px;">
          This enquiry was submitted via consigliere-residences.com
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend API error:", JSON.stringify(error));
    throw new Error(`Failed to send email: ${error.message}`);
  }

  console.log("Email sent successfully, id:", result?.id);
}
