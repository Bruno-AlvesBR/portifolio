import { ContactsForm } from "./Form";

const Contacts = () => (
  <div className="relative flex flex-col gap-8 w-full h-full justify-between">
    <header>
      <h2 className="text-blue800 text-8 font-bold uppercase text-center">
        Contacts
      </h2>
    </header>

    <main className="flex h-full flex-row gap-8 md:flex-wrap items-center justify-center">
      <ContactsForm />
    </main>
  </div>
);

export { Contacts };
