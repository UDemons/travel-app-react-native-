import React, { useContext } from "react";
import ElevatedView from "react-native-elevated-view";
import { TouchableOpacity, View, ImageBackground, Image } from "react-native";
import Navigation from "../context/Navigation";
import Text from "./Text";
import MapMarker from "../icons/MapMarker";

import styles from "../styles";

const Destination = ({ item, index }: { item: any; index?: number }) => {
  const { navigation } = useContext(Navigation);
  const {
    rating,
    locations,
    title,
    description,
    user: { name, avatar },
    media: { preview },
  } = item;
  const goToItem = () => navigation?.navigate("Article", { item, index });
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={goToItem}>
      <View style={[styles.flex, styles.column, { paddingBottom: 45 }]}>
        <ImageBackground
          source={{ uri: preview }}
          style={[styles.flex, styles.destination]}
          imageStyle={{ borderRadius: 11 }}
        >
          <View style={[styles.flex, styles.row, { justifyContent: "flex-start", alignItems: "flex-start" }]}>
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
        <ElevatedView elevation={5} style={styles.itemDetails}>
          <Text style={[styles.h3, { marginBottom: 6 }]} type="medium">
            {title}
          </Text>
          <Text style={[styles.textSmall, styles.textGray, styles.destinationDesc]}>{description}</Text>
        </ElevatedView>
      </View>
    </TouchableOpacity>
  );
};

export default Destination;
