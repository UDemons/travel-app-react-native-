import {Dimensions, StyleSheet} from "react-native";


const { width: WIDTH } = Dimensions.get("window");
const styles = StyleSheet.create({
  defaultMargin: {
    marginHorizontal: 36,
  },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  flexSpaceCenter: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexCenter: {
    alignItems: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  h1: {
    fontSize: 26,
    lineHeight: 1.3 * 26,
  },
  h2: {
    fontSize: 20,
    lineHeight: 1.3 * 18,
  },
  h3: {
    fontSize: 18,
    lineHeight: 1.3 * 18,
  },
  h4: {
    fontSize: 16,
    lineHeight: 1.3 * 16,
  },
  textNormal: {
    fontSize: 14,
    lineHeight: 1.3 * 14,
  },
  textSmall: {
    fontSize: 12,
  },
  textGray: {
    color: "#AAA",
  },
  textBlue: {
    color: "rgb(0, 120, 250)"
  },
  textWhite: {
    color: "#fff",
  },
  header: {
    position: "relative",
    backgroundColor: "#fff",
    paddingHorizontal: 36,
    paddingTop: 36 + 12,
    paddingBottom: 12,
  },
  headerBar: {
    backgroundColor: "rgb(0, 120, 250)",
    height: 24,
    position: "absolute",
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    paddingBottom: 36,
    backgroundColor: "#fff",
  },
  destinations: {
    marginTop: 10,
  },
  pagination: {
    height: 32,
    paddingVertical: 11,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: "#fff",
    borderColor: "rgb(0, 120, 250)",
  },
  inactiveDot: {
    borderWidth: 0,
    backgroundColor: "rgb(220, 224, 233)",
  },
  destination: {
    width: WIDTH - 36 * 2,
    paddingVertical: 36 * 0.5,
    paddingHorizontal: 36 * 0.75,
    height: (WIDTH - 36 * 2) * 0.86,
  },
  itemDetails: {
    backgroundColor: "#fff",
    position: "absolute",
    borderRadius: 8,
    bottom: 10,
    right: 26,
    left: 26,
    paddingVertical: 16,
    paddingHorizontal: 24,
    height: 100,
  },
  destinationDesc: {
    lineHeight: 1.5 * 13,
    overflow: "hidden",
    height: 40,
  },
  recommended: {
    marginTop: 18,
    marginBottom: 22,
  },
  recommendation: {
    width: 165,
    height: 295,
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});


export default styles;
