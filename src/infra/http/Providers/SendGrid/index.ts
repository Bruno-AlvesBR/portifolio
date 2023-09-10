import { ISendGridProvider } from "@/domain/data";
import axios from "axios";

class SendGridProvider implements ISendGridProvider {
  async sendEmail(email: string, name: string, message: string): Promise<void> {
    await axios.post("/api/sendgrid", {
      email,
      name,
      message,
    });
  }
}

export { SendGridProvider };
