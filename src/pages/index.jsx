import { ApplePodcastsLogo } from "@phosphor-icons/react";
import { QuickIntro, Header, Projects } from "../utils/constant";
import CardProject from "../components/cardProject";
import Label from "../components/tools";
import Layout from "../components/layout";
import Navbar from "../components/profileCard";

const index = () => {
  return (
    <Layout className="container md:w-1/2">
      <Navbar />
      <p className="my-5 text-lg font-semibold md:my-5 md:text-xl text-slate-600">
        {Header.description}
      </p>
      <div>
        <h1 className="font-semibold uppercase text-md text-slate-400">
          quick intro
        </h1>
        {QuickIntro.map((quickIntro) => (
          <div
            key={quickIntro.id}
            className="my-2 text-xl font-semibold md:font-medium text-slate-600"
          >
            <span className="flex items-start gap-4">
              <ApplePodcastsLogo size={32} weight="duotone" color="#404e5a" />
              {quickIntro.value}
            </span>
          </div>
        ))}
      </div>
      <div className="my-14">
        <h1 className="mb-5 text-2xl font-bold md:text-4xl">Projects</h1>
        <div className="md:grid md:grid-cols-2 md:gap-4">
          {Projects.map((project) => (
            <div key={project.id}>
              <CardProject
                title={project.title}
                description={project.description}
                jobTitle={project.jobTitle}
                date={project.date}
                btnLink={project.btnLink}
                btnLabel={project.btnLabel}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h1 className="mb-5 text-2xl font-bold md:text-4xl">Tool I use</h1>
        <Label />
      </div>
    </Layout>
  );
};

export default index;
