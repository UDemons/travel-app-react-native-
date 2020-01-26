import React, { useState } from "react";
import { Dimensions, FlatList, ImageBackground, TouchableOpacity, View } from "react-native";
import ElevatedView from "react-native-elevated-view";

import Text from "./Text";
import Bookmark from "../icons/Bookmark";
import Star from "../icons/Star";

const { width: WIDTH } = Dimensions.get("window");

import styles from "../styles";

function Recommendation ({ index, rating, locations, title, description, temperature, media: { preview } }: any) {
  return (
    <View
      style={[
        styles.flex,
        styles.column,
        {
          marginBottom: 15,
          borderRadius: 10,
          marginLeft: !index ? 36 : 9,
          marginRight: index === 4 ? 36 : 9,
        },
      ]}
    >
      <ElevatedView elevation={3} style={[styles.shadow, { backgroundColor: "#fff", borderRadius: 10 }]}>
        <ImageBackground
          source={{ uri: preview }}
          style={[styles.flex, styles.recommendation]}
          imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 295 * 0.58 }}
        >
          <View style={[styles.row, { padding: 16, justifyContent: "flex-start", alignItems: "flex-start", flex: 58 }]}>
            <View style={[styles.flex, styles.row, styles.flexSpaceCenter]}>
              <Text style={[styles.textWhite, styles.textNormal]}>{temperature}°C</Text>
              <Bookmark color="#fff" size={18} type={((index + 1) % 2 && "duotone") || "regular"} />
            </View>
          </View>
          <View
            style={[
              styles.column,
              {
                flex: 42,
                backgroundColor: "#fff",
                padding: 18,
                borderRadius: 10,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
            ]}
          >
            <Text style={[styles.textNormal, { marginBottom: 6 }]} type="medium">
              {title}
            </Text>
            <Text style={[styles.textSmall, styles.textGray, { flex: 1 }]}>{locations}</Text>
            <View style={[styles.row, styles.flexCenter, { paddingVertical: 6 }]}>
              {Array(5)
                .fill(0)
                .map((_, i: number) => (
                  <Star
                    key={i}
                    color="rgb(0, 120, 250)"
                    size={12}
                    type="solid"
                    style={{ marginRight: 5, opacity: (i + 1 <= rating && 1) || 0.2 }}
                  />
                ))}
              <Text style={[styles.textNormal, styles.textBlue]}>{rating}</Text>
            </View>
          </View>
        </ImageBackground>
      </ElevatedView>
    </View>
  );
}

export default Recommendation;
