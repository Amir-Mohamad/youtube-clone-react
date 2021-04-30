import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
function Header() {
	return (
		<div>
			<div className="header">
				<MenuIcon />
				<img
					className="header__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
					alt=""
				/>
				<input type="text" />
				<SearchIcon />
				<VideoCallIcon />
				<AppsIcon />
				<NotificationsIcon />
				<Avatar alt="Amir-Mohammad" src="" />
			</div>
		</div>
	);
}

export default Header;
