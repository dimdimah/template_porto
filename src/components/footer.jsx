import {
  LinkedinLogo,
  InstagramLogo,
  TwitterLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";

export default function footer() {
  return (
    <div className="bg-[#ebebeb]">
      <div className="py-5 mx-5 font-semibold shadow-sm md:mb-0 md:my-10 md:mx-auto md:w-1/2 text-slate-600 md:flex md:pb-6 md:pt-10 md:justify-between ">
        <h1 className="mb-5 text-xl font-bold">Your Name 2022</h1>
        <div className="flex flex-col gap-3 mx-4 md:flex-row text-slate-500">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2"
          >
            <LinkedinLogo size={30} />
            Linkedin
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2"
          >
            <InstagramLogo size={30} /> Instagram
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2"
          >
            <TwitterLogo size={30} /> Twitter
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2"
          >
            <EnvelopeSimple size={30} /> Email
          </a>
        </div>
      </div>
    </div>
  );
}
