import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY || "";
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID || "";

async function addToMailerLite(name: string, email: string, phone: string): Promise<boolean> {
  if (!MAILERLITE_API_KEY || !MAILERLITE_GROUP_ID) {
    console.warn("[MailerLite] API key or group ID not configured");
    return false;
  }
  try {
    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        fields: { name, phone },
        groups: [MAILERLITE_GROUP_ID],
      }),
    });
    if (!response.ok) {
      const err = await response.text();
      console.error("[MailerLite] Error:", err);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[MailerLite] Request failed:", err);
    return false;
  }
}

export const appRouter = router({
  leads: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(1),
      }))
      .mutation(async ({ input }) => {
        const { name, email, phone } = input;
        const added = await addToMailerLite(name, email, phone);
        return { success: true, mailerlite: added };
      }),
  }),
});

export type AppRouter = typeof appRouter;
