import { container, title } from "../../../material-kit-pro-react";

import imagesStyles from "../../imagesStyles";

const sectionTextStyle = {
  container,
  title,
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
  quoteText: {
    fontSize: "1.5rem !important"
		},
		textCenter: {
			textAlign: "center"
		},
  ...imagesStyles
};

export default sectionTextStyle;
