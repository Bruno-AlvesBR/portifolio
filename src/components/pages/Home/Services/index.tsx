import { serviceList } from "./list";
import { ServiceCard } from "./Card";

const Services = () => (
  <div
    id="services"
    className="sm:px-3 sm:gap-6 relative flex flex-col gap-24 w-full min-h-[100vh] snap-center justify-center items-center"
  >
    <h2 className="text-blue800 text-8 font-bold uppercase text-center">
      Services
    </h2>

    <main className="sm:gap-2 flex w-full h-max flex-row gap-8 md:flex-wrap justify-center">
      {serviceList.map(({ id, ...props }) => (
        <ServiceCard key={id} {...props} />
      ))}
    </main>
  </div>
);

export { Services };
