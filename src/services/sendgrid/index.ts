export class SendgridService {
  async sendEmail(email: string, name: string, message: string): Promise<void> {
    await fetch("/api/sendgrid", {
      method: "POST",
      body: JSON.stringify({ email, name, message }),
    });
  }
}
