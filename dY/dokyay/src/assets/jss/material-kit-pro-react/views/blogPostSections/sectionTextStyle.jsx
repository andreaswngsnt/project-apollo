import { cardTitle, container, description, title, mlAuto, mrAuto } from "../../../material-kit-pro-react";

import imagesStyles from "../../imagesStyles";

const sectionTextStyle = {
		container,
		description,
		title,
		mlAuto,
		mrAuto,
		cardTitleWhite: {
			...cardTitle,
			color: "#FFFFFF !important"
		},
  section: {
    paddingBottom: "0",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    padding: "70px 0",
    "& p": {
      fontSize: "1.188rem",
      lineHeight: "1.5em",
      color: "#555",
      marginBottom: "30px"
    }
		},
		justifyContentCenter: {
				WebkitBoxPack: "center !important",
				MsFlexPack: "center !important",
				justifyContent: "center !important"
		},
  quoteText: {
    fontSize: "1.5rem !important"
		},
		textCenter: {
			textAlign: "center"
		},
  ...imagesStyles
};

export default sectionTextStyle;
