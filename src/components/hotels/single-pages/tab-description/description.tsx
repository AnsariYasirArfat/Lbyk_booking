"use client";
import Tabs from "@/utils/HOC/tabs/page";

import { FC, useCallback, useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import About from "../common/sections/about";
import Rooms from "../common/sections/rooms";
import Facilities from "../common/sections/facility";
import Location from "../common/sections/location";
import Reviews from "../common/sections/reviews";
import Policies from "../common/sections/policies";
import "./description.css";
interface ITabDescriptionProps {
  tabsData: ITabsDataProps[];
  class1: string;
}
const TabDescription: FC<ITabDescriptionProps> = ({ tabsData, class1 }) => {
  const [activeTab, setActiveTab] = useState("1");
  const callback = useCallback(
    (tab: string) => {
      setActiveTab(tab);
    },
    [activeTab]
  );

  return (
    <>
      <div className={class1} style={{ top: "0", zIndex: "10" }} id="searchBar">
        <div className="container-fluid p-0">
          <Tabs callbackActive={callback} data={tabsData} />
        </div>
      </div>
      <div className="description-details">
        <TabContent
          activeTab={activeTab}
          className="tab-content"
          id="pills-tabContent"
        >
          <TabPane tabId="1">
            <div className="desc-box">
              <div className="menu-part page-section">
                <div className={`booking-tab-fade-in`}>
                  <h4
                    className="content-title text-center"
                    style={{ color: "#ae926a" }}
                  >
                    Overview
                  </h4>
                  <p style={{ color: "black", fontSize: "12px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error unde repellat cum autem deserunt est similique amet
                    ipsam. Earum ab nulla ipsum neque fugit illo, veritatis
                    soluta iure dignissimos aperiam. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Asperiores perspiciatis
                    aliquam cupiditate dolorem necessitatibus, ex illo labore
                    voluptatem fugit doloribus, tempora iste saepe voluptate
                    officiis, rem autem libero cumque nisi error eum harum
                    consequuntur voluptatibus reiciendis. <br /> Pariatur odio
                    quisquam impedit soluta quaerat delectus sequi officiis
                    repellendus inventore deleniti laudantium voluptatem,
                    ratione odit architecto doloribus aliquam repellat cumque
                    officia molestiae illum quo eaque ab! Optio consectetur
                    nostrum itaque a quo eveniet? Culpa, qui facere consequatur
                    fuga porro quas expedita ab laboriosam, quasi esse aliquam
                    quia explicabo nobis at enim facilis tenetur velit
                    necessitatibus cum error non ducimus consectetur labore ad?
                    Ipsa hic odit distinctio amet fugiat, atque molestias
                    recusandae sapiente nemo laudantium? Quae, vel. <br />{" "}
                    Impedit iste eos voluptates reprehenderit ut vel, sunt
                    explicabo omnis eum distinctio culpa soluta dolore odit
                    perspiciatis quaerat placeat vitae et neque delectus
                    possimus itaque saepe quos iure. Nesciunt provident culpa
                    ducimus? Eligendi id blanditiis natus facilis distinctio
                    illo in quaerat explicabo voluptatum, a omnis? Debitis
                    aspernatur inventore error officiis tempora totam nostrum
                    deleniti placeat, temporibus optio cum, impedit enim,
                    repellendus nulla quos quia. Iusto alias quam dolorem
                    exercitationem sit? <br /> Ipsum rerum nostrum repellendus
                    delectus suscipit asperiores aliquid porro, quae deleniti
                    amet omnis quam, beatae dicta culpa.
                    {/* Jabal Omar Hyatt Regency Makkah is a 5 star hotel with 19-floor
                of hotel rooms in the heart of Makkah with 656 guestrooms,
                including 25 suites. <br /> The hotel is just a minute walk from
                Al-Masjid Al-Haram and around 1 hour 30 min drive from King
                Abdulaziz Airport, Jeddah Airport which is 75 km away. <br />{" "}
                Prayer areas are available in the parking level for both male
                and female guests Facilities include separate men's and women's
                fitness centers. <br /> Dining options include The Oasis, Al
                Forno, Tea Lounge, and Al Tekkeya, providing diverse culinary
                experiences. The hotel also offers 24-hour in-room dining. */}
                  </p>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <Rooms tab={false} />
          </TabPane>
          <TabPane tabId="3">
            <Facilities tab={false} />
          </TabPane>
          <TabPane tabId="4">
            <Location tab={false} />
          </TabPane>
          {/* <TabPane tabId="5">
            <Reviews tab={false} />
          </TabPane>
          <TabPane tabId="6">
            <Policies tab={false} />
          </TabPane> */}
        </TabContent>
      </div>
    </>
  );
};

export default TabDescription;
