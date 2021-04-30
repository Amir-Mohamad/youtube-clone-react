import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoRoundedIcon from "@material-ui/icons/OndemandVideoOutlined";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandedRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import SideBarRow from "./SideBarRow";
import "./SideBar.css";

function SideBar() {
	return (
		<div className="sidebar">
			<SideBarRow selected Icon={HomeIcon} title="Home" />
			<SideBarRow Icon={WhatshotIcon} title="Trending" />
			<SideBarRow Icon={SubscriptionIcon} title="Subscription" />
			<hr />
			<SideBarRow Icon={VideoLibraryIcon} title="Library" />
			<SideBarRow Icon={HistoryIcon} title="History" />
			<SideBarRow Icon={OndemandVideoRoundedIcon} title="Your vidoes" />
			<SideBarRow Icon={WatchLaterIcon} title="Watch Later" />
			<SideBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
			<SideBarRow Icon={ExpandedRoundedIcon} title="Show more" />
		</div>
	);
}

export default SideBar;
