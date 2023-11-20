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
      <div className={class1} id="searchBar">
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
            <div>
              <p style={{ color: "#757786" }}>
                Jabal Omar Hyatt Regency Makkah is a 5 star hotel with 19-floor
                of hotel rooms in the heart of Makkah with 656 guestrooms,
                including 25 suites. <br /> The hotel is just a minute walk from
                Al-Masjid Al-Haram and around 1 hour 30 min drive from King
                Abdulaziz Airport, Jeddah Airport which is 75 km away. <br />{" "}
                Prayer areas are available in the parking level for both male
                and female guests Facilities include separate men's and women's
                fitness centers. <br /> Dining options include The Oasis, Al
                Forno, Tea Lounge, and Al Tekkeya, providing diverse culinary
                experiences. The hotel also offers 24-hour in-room dining.
              </p>
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
          <TabPane tabId="5">
            <Reviews tab={false} />
          </TabPane>
          <TabPane tabId="6">
            <Policies tab={false} />
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};

export default TabDescription;
