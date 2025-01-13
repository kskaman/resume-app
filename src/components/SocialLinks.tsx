import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoCheckmarkDoneSharp, IoCopyOutline } from "react-icons/io5";

const SocialLinks: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "kskaman@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <>
      <ul
        className="
          flex flex-col sm:flex-row lg:flex-col
          items-center lg:items-start
           justify-center sm:justify-start
            gap-12 lg:gap-8
        "
      >
        <li className="lg:w-full">
          <a
            href="https://github.com/kskaman"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex gap-2 hover:text-teal-500"
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>
        </li>
        <li className="lg:w-full">
          <a
            href="https://www.linkedin.com/in/kamanpreet-singh-b64672119/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex gap-2 hover:text-teal-500"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </li>
        <li className="lg:w-full lg:pt-8 lg:border-solid lg:border-t-2">
          <button
            onClick={handleCopyEmail}
            aria-label="Copy Email"
            className="flex gap-2.5 items-center justify-center
                       transition active:transition-none 
                       bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-800
                       dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700
                       font-semibold text-base text-zinc-100 active:text-zinc-100/70
                       outline-offset-2 rounded-lg w-full w-[200px] px-4 py-2.5"
          >
            {isCopied ? (
              <IoCheckmarkDoneSharp size={24} />
            ) : (
              <IoCopyOutline size={24} />
            )}
            <span>{isCopied ? "Copied" : "Copy Email"}</span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default SocialLinks;
