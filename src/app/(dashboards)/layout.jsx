import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      {/* <h1>DashboardLayout</h1> */}
 
      <div className="grid border h-screen grid-cols-12">
        {/* side nav */}
        <div className="col-span-3 border">
            <ul>
                <li>User home</li>
            </ul>
        </div>
        {/* dashboard content */}
        <div className="col-span-9 border border-pink-500">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
