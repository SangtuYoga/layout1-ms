import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import Topbar from "../topbar/Topbar";
import SideBar from "../sidebar/SideBar";

const LayoutDashboard = ({ children }) => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  return (
    <>
      <Row>
        <Col>
          <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        </Col>
      </Row>
      <Col>
        <Row>
          <Col>
            <Topbar toggleSidebar={toggleSidebar} />
          </Col>
        </Row>
        <Col>
          <main>{children}</main>
        </Col>
      </Col>
    </>
  );
};

export default LayoutDashboard;
