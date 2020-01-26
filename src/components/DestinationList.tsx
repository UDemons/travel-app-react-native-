import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import Destination from "./Destination";

const { width: WIDTH } = Dimensions.get("window");

import styles from "../styles";

function DestinationCarousel ({ entries }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const renderItem = ({ item, index }: any) => <Destination item={item} index={index} />;
  return (
    <View style={[styles.flex, styles.column, styles.destinations]}>
      <Carousel
        data={entries}
        sliderWidth={WIDTH}
        itemWidth={WIDTH - 72}
        renderItem={renderItem}
        inactiveSlideOpacity={0.9}
        onSnapToItem={setActiveSlide}
        containerStyle={{ overflow: "visible" }}
        style={{ overflow: "visible" }}
      />

      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.pagination}
        dotContainerStyle={{ marginHorizontal: 4 }}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={1}
        inactiveDotScale={0.9}
      />
    </View>
  );
}

export default DestinationCarousel;
