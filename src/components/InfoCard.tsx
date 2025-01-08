import { IoLink } from "react-icons/io5";

import { InfoItem } from "../types/infoItem";

const InfoCard = ({
  title,
  subTitle,
  description,
  officialLink,
  duration,
}: InfoItem) => {
  return (
    <div
      className="rounded-xl 
        hover:bg-emerald-50/60 dark:hover:bg-emerald-950/60
        p-4 group
        "
    >
      <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        {title}
      </h3>
      {subTitle && (
        <h4 className="mt-1 text-md font-medium text-zinc-600 dark:text-zinc-300">
          {subTitle}
        </h4>
      )}
      {duration && (
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          {duration}
        </p>
      )}

      {officialLink && (
        <div
          className="flex gap-2 items-center -translate-x-6
        cursor-pointer transition group-hover:translate-x-0"
        >
          <IoLink
            size={16}
            className="transition-opacity opacity-0 group-hover:opacity-100"
          />

          <a
            className="text-sm text-zinc-500
          dark:text-zinc-400 hover:underline"
            href={officialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {officialLink}
          </a>
        </div>
      )}

      <p className="mt-2 pt-2 text-zinc-700 dark:text-zinc-300">
        {description}
      </p>
    </div>
  );
};

export default InfoCard;
