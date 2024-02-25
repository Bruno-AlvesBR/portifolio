import { ContactsForm } from "./Form";

const Contacts = () => (
  <div
    id="contacts"
    className="sm:px-4 sm:mb-4 sm:gap-6 mb-20 relative flex flex-col gap-16 w-full min-h-[100vh] snap-end justify-center"
  >
    <header>
      <h2 className="sm:text-6 text-blue600 text-8 font-bold uppercase text-center">
        Contacts
      </h2>
    </header>

    <main className="flex h-fit justify-center">
      <ContactsForm />
    </main>
  </div>
);

export { Contacts };
