import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { worksList } from "./lists";
import { Link } from "@/components/ui/Link";
import { VerifyIcon } from "@/assets/icons/verify";
import { ChevronDownIcon } from "@/assets/icons/chevron-down";

dayjs.extend(relativeTime);

export const Works = () => {
  const formatWorkDate = (date: string) => dayjs(date).format("DD / MMM / YY");
  const workTime = (startedAt: string, endedAt: string) =>
    dayjs(startedAt).from(dayjs(endedAt)).replace("ago", "").trim();

  return (
    <ul id="jobs" className="timeline timeline-vertical flex">
      {worksList.map((work) => (
        <li
          key={work.id}
          className={
            "sm:flex-col sm:justify-center sm:gap-6 sm:px-3 flex snap-start min-h-[100vh] w-[100vw] gap-32 px-16"
          }
          style={{ background: work.color }}
        >
          <div className="sm:py-0 flex flex-row gap-2 items-center justify-start backdrop-blur-sm border-white/10 border-[0.1px] bg-white/90 shadow-md rounded-lg p-2">
            <span className="sm:flex-row sm:w-full flex flex-col gap-0 items-center w-[120px]">
              <p className="timeline-start text-black text-3 w-fit font-bold">
                {formatWorkDate(work.startedAt.toISOString())}
              </p>
              <ChevronDownIcon className="sm:-rotate-90" />
              <p className="timeline-start text-black text-3 w-fit font-bold">
                {!work.isActing ? (
                  `${formatWorkDate(work.endedAt.toISOString())}`
                ) : (
                  <strong className="text-black">Acting now</strong>
                )}
              </p>
              <p
                className="timeline-start text-white px-2 rounded-md w-full text-center"
                style={{ background: work.color }}
              >
                {workTime(
                  work.startedAt.toISOString(),
                  work.endedAt.toISOString()
                )}
              </p>
            </span>
          </div>

          <div className="sm:items-center sm:w-full md:px-4 sm:pr-2 sm:pl-2 sm:gap-4 timeline-end flex flex-col gap-10 mx-auto px-52">
            <div className="sm:w-full flex flex-col items-start gap-2">
              <h1 className="sm:w-full sm:justify-center sm:text-4 flex flex-row items-center gap-4 bg-white w-fit px-4 py-2 font-bold text-6 rounded-md text-gray-700">
                <span
                  className="tooltip w-5 h-5"
                  data-tip="Verified experience"
                >
                  <VerifyIcon fill="black" />
                </span>

                {work.title}
              </h1>

              <span className="flex flex-row gap-1 items-center">
                <p className="text-white font-medium sm:text-4">Company:</p>
                <Link
                  href={work.company.url}
                  target="_blank"
                  className="text-white underline sm:text-4"
                >
                  {work.company.name}
                </Link>
              </span>
            </div>

            <p className="sm:w-full sm:text-4 font-light text-white text-5">
              {work.description.label}
            </p>

            <ul className="sm:w-full flex flex-col gap-4 sm:gap-2">
              {work.description.lists.map((label, index) => (
                <li
                  key={Number(index)}
                  className="collapse collapse-arrow bg-white/70 backdrop-blur-sm duration-150 transition-all hover:brightness-95"
                >
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title sm:text-lg text-xl font-medium text-black">
                    {label.title}
                  </div>
                  <div className="collapse-content text-black">
                    <p>{label.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};
