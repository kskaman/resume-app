interface InfoCardProps {
  title: string;
  subTitle?: string;
  description: string;
  officialLink?: string;
  duration?: string;
}

const InfoCard = ({
  title,
  subTitle,
  description,
  officialLink,
  duration,
}: InfoCardProps) => {
  return (
    <div
      className="space-y-2 rounded-lg p-4
    hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
    >
      <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        {title}
      </h3>
      {subTitle && (
        <h4 className="text-md font-medium text-zinc-600 dark:text-zinc-300">
          {subTitle}
        </h4>
      )}
      {duration && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{duration}</p>
      )}

      {officialLink && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {officialLink}
        </p>
      )}

      <p className="mt-2 text-zinc-700 dark:text-zinc-300">{description}</p>
    </div>
  );
};

export default InfoCard;
