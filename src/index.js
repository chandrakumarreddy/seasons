import React from "react";
import { render } from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
	state = {
		lat: null,
		loading: true,
		errMsg: null
	};

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({
					lat: position.coords.latitude,
					loading: false
				});
			},
			err => {
				this.setState({ errMsg: err.message, loading: false });
			}
		);
	}
	renderSeasons = () => {
		if (this.state.loading) {
			return <Loader message="Please allow your current location" />;
		} else if (this.state.errMsg) {
			return <div>Error:{this.state.errMsg}</div>;
		}
		return <SeasonDisplay lat={this.state.lat} />;
	};
	render() {
		return <div>{this.renderSeasons()}</div>;
	}
}

render(<App />, document.querySelector("#root"));
