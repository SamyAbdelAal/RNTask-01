import React from "react";
import Expo, { AppLoading } from "expo";
import { Provider } from "react-redux";
import store from "./store";
import { connect } from "react-redux";
import HomePage from "./Components/HomePage";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsAreLoaded: false
    };
  }

  componentDidMount() {
    Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    }).then(() => this.setState({ fontsAreLoaded: true }));
  }
  render() {
    if (!this.state.fontsAreLoaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getCoffeeShops: () => dispatch(actionCreators.getCoffeeShops())
  };
};

export default App;
