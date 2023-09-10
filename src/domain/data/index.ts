abstract class ISendGridProvider {
  abstract sendEmail(
    email: string,
    name: string,
    message: string
  ): Promise<void>;
}

export { ISendGridProvider };
