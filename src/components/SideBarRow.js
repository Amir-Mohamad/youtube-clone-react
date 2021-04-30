import React from "react";
import "./SideBarRow.css";
import HomeIcon from "@material-ui/icons/Home";

function SideBarRow({ Icon, title }) {
	return (
		<div className="sidebarRow">
			<Icon className="sidebarRow__icon" />
			<h2 className="sidebarRow__title">{title}</h2>
		</div>
	);
}

export default SideBarRow;
