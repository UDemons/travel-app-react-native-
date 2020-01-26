import React, {useContext, useState} from "react";
import {
  Image,
  Platform,
  ScrollView,
  View
} from "react-native";
import { Provider } from "../context/Navigation";
import HomePageData from "../../mock/HomePage";
import DestinationCarousel from "../components/DestinationList";
import RecommendedCarousel from "../components/RecommendedCarousel";
import Text from "../components/Text";

import styles from "../styles";

function Home (props: any) {
  return (
    <Provider value={props}>
      <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
        <DestinationCarousel entries={HomePageData.destinations} />
        <RecommendedCarousel entries={HomePageData.recommendation} />
      </ScrollView>
    </Provider>
  );
}

Home.navigationOptions = {
  title: "MainActivity",
  headerShown: true,
  header: () => (
    <View style={[styles.header]}>
      {Platform.OS === "android" && <View style={styles.headerBar} />}
      <View style={[styles.row, styles.flexSpaceCenter]}>
        <View>
          <Text style={[styles.textGray, styles.textSmall]}>Search for place</Text>
          <Text style={styles.h1} type="medium">
            Destination
          </Text>
        </View>
        <View>
          <Image source={{ uri: HomePageData.user.avatar }} style={styles.avatar} />
        </View>
      </View>
    </View>
  ),
};

export default Home;
