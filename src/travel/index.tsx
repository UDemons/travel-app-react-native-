import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import Home from "./Home";
import Article from "./Article";

// Instead of calling `createStackNavigator`, wrap it using `createSharedElementStackNavigator`
const StackNavigator = createStackNavigator(
  {
    Home,
    Article,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomColor: "transparent",
        backgroundColor: "white",
      },
    },
  },
);

export default createAppContainer(StackNavigator);
