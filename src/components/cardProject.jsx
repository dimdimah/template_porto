import { ArrowSquareOut } from "@phosphor-icons/react";

const ProjectCard = ({
  title,
  description,
  date,
  jobTitle,
  btnLink,
  btnLabel,
}) => {
  return (
    <div className="p-6 mb-6 overflow-hidden bg-white shadow-sm max-w-fit rounded-xl ">
      <img
        className="rounded-md"
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        alt="Analytics Onboarding Project"
      />
      <div className="py-4">
        <div className="mb-2 text-2xl font-bold">{title}</div>
        <p className="text-xl font-medium text-slate-500">{description}</p>
        <div className="flex flex-col mt-2 text-xl font-medium text-slate-500">
          <span>— {date}</span>
          <span>— {jobTitle}</span>
        </div>
      </div>
      <div className="pt-4 pb-2">
        <a
          href={btnLink}
          className="flex justify-center px-10 py-2 mr-2 font-semibold text-gray-100 no-underline bg-[#101213] rounded-full text-md hover:bg-[#0099FF] "
        >
          {btnLabel}
          <ArrowSquareOut size={20} className="mx-2" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
