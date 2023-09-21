import { useState } from "react";
import { humanize } from "@lib/utils/textConverter";
import * as Icon from "react-feather";

const HomepageTab = ({ homepage_tab: { tab_list, title, description } }) => {
  const [tab, setTab] = useState(0);
  return (
    <div className="tab gx-5 mb-10 row items-center">
      <div className="lg:col-7 lg:order-2">
        <div className="tab-content">
          {tab_list.map((item, index) => (
            <div
              key={index}
              className={`tab-content-panel ${
                tab === index ? "active" : undefined
              }`}
            >
              <img className="w-full rounded-lg object-contain" src={item.image} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
        <div className="text-container">
          <h2 className="lg:text-4xl text-center">{title}</h2>
          <p className="mt-4 text-black">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HomepageTab;
