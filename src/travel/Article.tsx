import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import ElevatedView from "react-native-elevated-view";
import HomePageData from "../../mock/HomePage";
import Text from "../components/Text";
import MapMarker from "../icons/MapMarker";

import globalStyle from "../styles";

const { width: WIDTH } = Dimensions.get("window");

const styles = {
  ...globalStyle,
  ...StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    btn: {
      marginVertical: 20,
      width: WIDTH - 55,
      height: 45,
      borderRadius: 25,
      backgroundColor: "#ff822d",
      alignItems: "center",
      justifyContent: "center",
    },

    header: {
      ...globalStyle.header,
      opacity: 0
    },
    destination: {
      ...globalStyle.destination,
      width: WIDTH,
    },
    itemDetails: {
      ...globalStyle.itemDetails,
      paddingVertical: 36 * .88,
      paddingHorizontal: 36,
      flex: .51,
      position: "relative",
      top: -20,
      right: 0,
      left: 0,
    },
    h3: {
      fontSize: 26,
      lineHeight: 1.3 * 26,
    }
  })
};

export default function Article ({ navigation, ...props}) {
  const { item } = navigation?.state?.params || {};
  const { rating, locations, title, description, user: { name, avatar }, media: { preview } } = item || HomePageData.destinations[0];
  const onPress = () => navigation.goBack();
  return (
    <View style={[styles.container, { marginTop: -110 }]}>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
        <View style={[styles.flex, styles.column, { paddingBottom: 45 }]}>
          <ImageBackground source={{ uri: preview }} style={[styles.flex, styles.destination]}>
            <View style={[styles.flex, styles.row, { justifyContent: "flex-start", alignItems: "flex-start", opacity: 0 }]}>
              <View style={[styles.flex, styles.row]}>
                <View style={{ flex: 0 }}>
                  <Image source={{ uri: avatar }} style={styles.avatar} />
                </View>
                <View style={{ marginHorizontal: 10, flex: 2 }}>
                  <Text style={[styles.textWhite, styles.textSmall]} type="bold">
                    {name}
                  </Text>
                  <View style={[styles.flex, styles.row, styles.flexCenter]}>
                    <MapMarker color="#fff" type="solid" />
                    <Text style={[styles.textWhite, styles.textSmall, { marginLeft: 5 }]}>{locations}</Text>
                  </View>
                </View>
                <View style={{ flex: 0 }}>
                  <Text style={[styles.textWhite, styles.h1]} type="medium">
                    {rating}
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <ElevatedView elevation={0} style={styles.itemDetails}>
            <Text style={[styles.h3, { marginBottom: 6 }]} type="medium">
              {title}
            </Text>
            <Text style={[styles.textSmall, styles.textGray, styles.destinationDesc]}>{description}</Text>
          </ElevatedView>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text>Toggle</Text>
      </TouchableOpacity>
    </View>
  );
}

Article.navigationOptions = {
  title: "Article",
  headerShown: true,
  header: () => (
    <View style={[styles.header, { backgroundColor: "transparent" }]}>
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
