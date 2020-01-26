import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";

import Recommendation from "./Recommendation";
import Text from "./Text";

import styles from "../styles";

function RecommendedCarousel ({ entries }) {
  const keyExtractor = (item: any) => String(item.id);
  const renderItem = ({ item, index }: any) => Recommendation({ ...item, index });
  return (
    <View style={[styles.flex, styles.column, styles.recommended]}>
      <View
        style={[styles.row, styles.spaceBetween, styles.defaultMargin, { marginBottom: 22, alignItems: "flex-end" }]}
      >
        <Text style={[styles.h2]} type="medium">
          Recommended
        </Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={[styles.textNormal, styles.textGray]} type="medium">
            More
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={entries}
        horizontal={true}
        scrollEventThrottle={5}
        snapToAlignment="start"
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default RecommendedCarousel;
