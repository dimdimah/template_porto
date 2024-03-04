import {
  LinkedinLogo,
  InstagramLogo,
  TwitterLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import CardBio from "./cardBio";

export default function Navbar() {
  return (
    <div className="md:flex md:justify-between">
      <CardBio />
      <section className="flex gap-[27px]">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <LinkedinLogo size={30} color="#404e5a" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <InstagramLogo size={30} color="#404e5a" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <TwitterLogo size={30} color="#404e5a" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <EnvelopeSimple size={30} color="#404e5a" />
        </a>
      </section>
    </div>
  );
}
