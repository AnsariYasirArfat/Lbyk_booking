import React, { FC, Fragment, useState } from "react";
import { Nav, NavLink, NavItem } from "reactstrap";

const Tabs: FC<ITabProps> = ({ data, callbackActive }) => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <Fragment>
      <Nav
        tabs
        className="nav nav-tabs d-flex justify-content-around py-1 "
        style={{ marginBottom: "" }}
      >
        {data?.map((item: ITabsDataProps, i: number) => (
          <NavItem
            key={i}
            className={`nav - item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => {
              setActiveTab(item.id);
              callbackActive(item.id);
            }}
          >
            <NavLink
              style={{ padding: "6px", fontSize: "11px", fontWeight: 900 }}
            >
              {item.title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </Fragment>
  );
};
export default Tabs;
