import React from "react";
import "./Seasoneddisplay.css";

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};

const seasonedData = {
	winter: {
		iconName: "snowflake.png",
		item: "Its too cool!!"
	},
	summer: {
		iconName: "sun.gif",
		item: "Its Beach time"
	}
};

const SeasonDisplay = props => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { iconName, item } = seasonedData[season];
	return (
		<div className={`season-display ${season}`}>
			<img
				src={`/images/${iconName}`}
				alt="sun"
				className="icon-left"
			/>
			<h1>{item}</h1>
			<img
				src={`/images/${iconName}`}
				alt="sun"
				className="icon-right"
			/>
		</div>
	);
};

export default SeasonDisplay;
