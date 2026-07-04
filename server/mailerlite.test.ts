import { describe, expect, it } from "vitest";

describe("MailerLite credentials", () => {
  it("should have API key and group ID set", () => {
    expect(process.env.MAILERLITE_API_KEY).toBeTruthy();
    expect(process.env.MAILERLITE_GROUP_ID).toBeTruthy();
  });

  it("should be able to reach MailerLite API", async () => {
    const apiKey = process.env.MAILERLITE_API_KEY;
    if (!apiKey) return;

    const response = await fetch("https://connect.mailerlite.com/api/subscribers?limit=1", {
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Accept": "application/json",
      },
    });

    expect(response.status).toBe(200);
    const data = await response.json() as { data?: unknown[] };
    expect(Array.isArray(data.data)).toBe(true);
  }, 15000);
});
