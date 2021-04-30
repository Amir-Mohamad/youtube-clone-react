import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import SideBarRow from "./SideBarRow";
import "./SideBar.css";

function SideBar() {
	return (
		<div className="sidebar">
			<SideBarRow Icon={HomeIcon} title="Home" />
			<SideBarRow Icon={WhatshotIcon} title="Trending" />
			<SideBarRow Icon={SubscriptionIcon} title="Subscription" />
		</div>
	);
}

export default SideBar;
