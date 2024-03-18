import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedProjectsData } from "@library/projects";

import PageBanner from "@components/PageBanner";

const ProjectsGrid = dynamic(() => import("@components/ProjectsGrid"), {
  ssr: false,
});
const Hero4Slider = dynamic(() => import("@components/sliders/Hero4"), {
  ssr: false,
});
const Portfolio = (props) => {
  return (
    <Layouts noFooter>
      <>
        <Hero4Slider />
      </>
    </Layouts>
  );
};
export default Portfolio;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects,
    },
  };
}
