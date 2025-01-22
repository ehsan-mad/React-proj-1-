import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
const MasterLayout = ({title}) => {
  return (
    <div style={{minWidth:'100vw'}}>
      <Header app={title}/>
      <div style={{minWidth:'100vw',display:'flex'}}>
        <Sidebar />
        <main style={{marginLeft:'100px',padding:'12px'}}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MasterLayout;
