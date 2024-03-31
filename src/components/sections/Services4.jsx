import { useEffect } from "react";
import Data from "@data/sections/services-4.json";
import { servShowcaseHover } from "@common/utilits";
import Link from "next/link";

const Services4Section = ({ services }) => {
  return (
    <>
      {/* Onovo Services */}
      <section className="onovo-section gap-bottom-140">
        <div className="container">
          {/* Heading */}
          <div className="onovo-heading gap-bottom-40">
            <div className="onovo-subtitle-1">
              <span>{Data.subtitle}</span>
            </div>
            <h2 className="onovo-title-2">
              <span>{Data.title}</span>
            </h2>
          </div>

          {/* Services items */}
          <div className="onovo-services-list">
            {services.slice(0, Data.numOfItems).map((item, key) => (
              <div
                key={`services4-item-${key}`}
                className="onovo-service-item-list"
              >
                <Link href={`/services/${item.id}`}>
                  <div className="onovo-service-item-list-inner">
                    <div className="image onovo-hover-1">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="num">
                      <span> 0{key + 1}. </span>
                    </div>
                    <h5 className="title">
                      <span>{item.title}</span>
                    </h5>
                    <div className="onovo-text">
                      <div>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services4Section;
