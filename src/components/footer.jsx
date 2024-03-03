import {
  LinkedinLogo,
  InstagramLogo,
  TwitterLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";

export default function footer() {
  return (
    <div className="mx-5 mb-5 shadow-sm text-slate-600">
      <h1 className="mb-5 text-xl font-bold">Your Name 2022</h1>
      <div className="flex flex-col gap-3 mx-4">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2"
        >
          —
          <LinkedinLogo size={25} /> Linkedin
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2"
        >
          — <InstagramLogo size={25} /> Instagram
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2"
        >
          — <TwitterLogo size={25} /> Twitter
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2"
        >
          — <EnvelopeSimple size={25} /> Email
        </a>
      </div>
    </div>
  );
}
