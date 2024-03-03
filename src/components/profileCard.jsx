import {
  LinkedinLogo,
  InstagramLogo,
  TwitterLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import CardBio from "./cardBio";

export default function Navbar() {
  return (
    <div>
      <div>
        <CardBio />
        <section className="flex gap-[27px]">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <LinkedinLogo size={32} />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <InstagramLogo size={32} />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <TwitterLogo size={32} />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <EnvelopeSimple size={32} />
          </a>
        </section>
      </div>
    </div>
  );
}
