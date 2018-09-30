/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.jsx";
import Button from "../CustomButtons/Button.jsx";

import headerLinksStyle from "../../assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
	const easeInOutQuad = (t, b, c, d) => {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	};

	const smoothScroll = (e, target) => {
		if (window.location.pathname === "/sections") {
			var isMobile = navigator.userAgent.match(
				/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
			);
			if (isMobile) {
				// if we are on mobile device the scroll into view will be managed by the browser
			} else {
				e.preventDefault();
				var targetScroll = document.getElementById(target);
				scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
			}
		}
	};
	const scrollGo = (element, to, duration) => {
		var start = element.scrollTop,
			change = to - start,
			currentTime = 0,
			increment = 20;

		var animateScroll = function() {
			currentTime += increment;
			var val = easeInOutQuad(currentTime, start, change, duration);
			element.scrollTop = val;
			if (currentTime < duration) {
				setTimeout(animateScroll, increment);
			}
		};
		animateScroll();
	};
	var onClickSections = {};

	const { classes, dropdownHoverColor } = props;
	return (
		<List className={classes.list + " " + classes.mlAuto}>
			<ListItem className={classes.listItem}>
				<Button
					href="#"
					className={classes.navLink}
					color="transparent"
				>
					Cari Dokter
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="#"
					className={classes.navLink}
					color="transparent"
				>
					Peta Dokter
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="#"
					className={classes.navLink}
					color="transparent"
				>
					Artikel Kesehatan
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="/promo"
					className={classes.navLink}
					color="transparent"
				>
					Daftarkan Praktekmu
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					navDropdown
					hoverColor={dropdownHoverColor}
					buttonText="Log in/ Sign up"
					buttonProps={{
						className: classes.navLink,
						color: "transparent"
					}}
					dropdownList={[
						<Link to="/" className={classes.dropdownLink}>
							Log in Pasien
						</Link>,
						<Link to="/" className={classes.dropdownLink}>
							Log in Dokter
						</Link>
					]}
				/>
			</ListItem>
		</List>
	);
}

HeaderLinks.defaultProps = {
	hoverColor: "dark"
};

HeaderLinks.propTypes = {
	dropdownHoverColor: PropTypes.oneOf([
		"dark",
		"primary",
		"info",
		"success",
		"warning",
		"danger",
		"rose"
	])
};

export default withStyles(headerLinksStyle)(HeaderLinks);
