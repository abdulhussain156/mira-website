import { useEffect } from "react";
import dynamic from "next/dynamic";
import Layouts from "@layouts/Layouts";

import { getSortedTeamData } from "@library/team";
import { getSortedServicesData } from "@library/services";
import Data from "@data/sections/services.json";
import CountUp from "react-countup";
import { circleText } from "@common/utilits";

import PageBanner from "@components/PageBanner";
import Team2Section from "@components/sections/Team2";
import PartnersSection from "@components/sections/Partners";
import AwardsSection from "@components/sections/Awards";
import Services4Section from "@components/sections/Services4";

const HistorySlider = dynamic(() => import("@components/sliders/History"), {
  ssr: false,
});
const Testimonial2Slider = dynamic(
  () => import("@components/sliders/Testimonial2"),
  { ssr: false }
);

const About = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  const clickedVideoButton = (e) => {
    e.preventDefault();

    e.target.parentNode.classList.add("active");
    let videoIframe = e.target.parentNode.querySelector(".js-video-iframe");
    let videoUrl = videoIframe.dataset.src;
    videoIframe.setAttribute("src", videoUrl);
  };

  return (
    <Layouts header={2} footer={2} darkHeader>
      <PageBanner
        pageTitle={"About Us"}
        pageDesc={"MIRA Empowering Future with Digital Solutions!"}
      />

      {/* Onovo About */}
      <section className="onovo-section gap-top-140 gap-bottom-140">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              {/* Heading */}
              <div className="onovo-heading gap-bottom-60">
                <div className="onovo-subtitle-1">
                  <span> Welcome to Onovo </span>
                </div>
                <h2 className="onovo-title-2">
                  <span>
                    {" "}
                    We are a digital agency, <br />
                    passionate about building <br />
                    and designing brands{" "}
                  </span>
                </h2>
                <div className="onovo-text">
                  <p>
                    From the moment our company was founded, we have helped our
                    clients find{" "}
                    <strong>exceptional solutions for their businesses</strong>,
                    creating memorable brands and digital products. Our
                    expertise grows with each year, and our accumulated
                    experience.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile">
              {/* Image */}
              <img src="/images/onovo-about-logo.png" alt="" />
            </div>
          </div>

          {/* Numbers items */}
          <div className="row gap-row gap-bottom-100">
            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value="23"
                >
                  <CountUp
                    end="23"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> + </div>
                <div className="label"> Team members </div>
              </div>
            </div>

            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value="99"
                >
                  <CountUp
                    end="99"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> + </div>
                <div className="label"> Completed projects </div>
              </div>
            </div>

            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value="12"
                >
                  <CountUp
                    end="12"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> M </div>
                <div className="label"> Lines of code </div>
              </div>
            </div>
          </div>

          {/* Video */}
          {/* <div className="onovo-video" data-onovo-overlay data-onovo-scroll>
            <div
              className="image"
              onClick={(e) => clickedVideoButton(e)}
              style={{ backgroundImage: "url(/images/hero-digital-1.jpg)" }}
            />
            <iframe
              className="js-video-iframe"
              data-src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1"
            ></iframe>
            <div
              className="play onovo-circle-text"
              onClick={(e) => clickedVideoButton(e)}
            >
              <div className="arrow" />
              <div className="label onovo-text-black onovo-circle-text-label">
                {" "}
                Play Video - Play Video - Play Video -{" "}
              </div>
            </div>
          </div> */}

          {/* Description */}
          <div className="row gap-top-100">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <h5 className="text-uppercase">Our Mission</h5>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
              Our story unfolds at MIRA Dev, where a cohesive team of software
              experts is fueled by a collective passion for innovative software
              solutions. Specializing in web apps, mobile apps, but also in
              enterprise resource planning (ERP), SAP Business One (SAPB1), and
              Point of Sale (POS) systems, we stand as pioneers in reshaping the
              digital landscape of business operations. <br />
              Though it's been just a year since we embarked on the MIRA Dev
              journey, we've already achieved remarkable milestones. However,
              our vision extends far beyond these accomplishments. We are poised
              to break new ground, pushing the boundaries of innovation and
              setting new standards in the software industry. Our commitment to
              excellence drives us forward as we continue to evolve, adapt, and
              conquer new horizons. With every challenge we overcome and every
              goal we surpass, we reaffirm our dedication to shaping a brighter
              future for MIRA Dev and the world of software solutions. <br />
              Our journey at MIRA Dev is marked by a steadfast commitment to
              growth and excellence. What began as a close-knit group of
              professionals has blossomed into a thriving community, dedicated
              to pushing the boundaries of software innovation. <br />
            </div>
          </div>

          {/* Description */}
          <div className="row gap-top-60">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <h5 className="text-uppercase">Our Goal</h5>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
              Driven by a deep-seated trust and shared vision, we forge ahead
              with each project, crafting bespoke solutions that empower
              businesses and individuals alike. With a focus on real-time
              functionality and cutting-edge technology, we elevate processes
              and drive tangible results. <br /> At MIRA Dev, we understand the
              power of SEO in enhancing online visibility and driving organic
              traffic. By optimizing every aspect of our solutions, we ensure
              that our clients stand out in the digital landscape, commanding
              attention and achieving their goals. Join us on our journey as we
              continue to script a compelling narrative for MIRA Dev, shaping
              the future of software solutions with innovation, expertise, and a
              touch of passion and dedication.
            </div>
          </div>

          {/* Gallery */}
          {/* <div className="row gap-top-100">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <a href="/images/posts1.jpg" className="mfp-image">
                <img src="/images/posts1-1024x683.jpg" alt="" />
              </a>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 gap-top-60">
              <a href="/images/posts2.jpg" className="mfp-image">
                <img src="/images/posts2-1024x683.jpg" alt="" />
              </a>
            </div>
          </div> */}
        </div>
      </section>

      <Services4Section services={props.services} />

      {/* <AwardsSection /> */}

      {/* <HistorySlider /> */}

      <Team2Section team={props.team} />

      {/* <Testimonial2Slider /> */}

      <PartnersSection />
    </Layouts>
  );
};
export default About;

export async function getStaticProps() {
  const allTeam = getSortedTeamData();
  const allServices = getSortedServicesData();

  return {
    props: {
      team: allTeam,
      services: Data.items,
    },
  };
}
