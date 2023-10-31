import { BackHandler, FlatList, Image, StyleSheet, View } from "react-native";
import React from "react";
import { COLORS, SIZES, STYLES } from "../constants/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { FSTYLES } from "../constants/theme";
import {
  AppButton,
  AppText,
  ProductDetailsHeader,
} from "../components";
import { changeqtyofProduct } from "../store/userReducer";
const CartScreen = ({ navigation }) => {
  const {  cart } = useSelector((state) => state.entities.userReducer);
  BackHandler.addEventListener(
    "hardwareBackPress",
    () => {
      navigation.goBack();
      return true;
    },
    []
  );
  const dispatch = useDispatch();
  const changeQty = (data) => {
    dispatch(changeqtyofProduct({ id: data.id, qty: data.qty }));
  };
  const reducecart = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          marginVertical: SIZES.base,
          height: 200,
          elevation: 2,
          ...STYLES,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <View style={{ width: "30%", alignItems: "center" }}>
            <Image
              resizeMode="contain"
              style={{ width: "100%", height: "55%" }}
              source={{ uri: item.image }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-around",
                top: 12,
              }}
            >
              <AntDesign
                onPress={() => {
                  changeQty({ id: item.id, qty: item.qty + 1 });
                }}
                name="pluscircleo"
                size={SIZES.h3}
                color={"black"}
              />
              <AppText>{item.qty}</AppText>
              <AntDesign
                onPress={() =>
                  changeQty({
                    id: item.id,
                    qty: item.qty === 1 ? 1 : item.qty - 1,
                  })
                }
                name="minuscircleo"
                size={SIZES.h3}
                color={"black"}
              />
            </View>
          </View>
          <View style={{ width: "60%" }}>
            <AppText bold={true} size={1.8}>
              {item.name}
            </AppText>
            <AppText size={1.5}>₹ {item.price}</AppText>
          </View>
        </View>
        <View style={{ ...FSTYLES, padding: 0 }}>
          <AppButton
            style={{ width: "48%" }}
            varient={true}
            onPress={() => console.log("first")}
            title="Save for later"
          />
          <AppButton
            varient={true}
            borderColor={COLORS.red}
            style={{ width: "48%" }}
            onPress={() => dispatch(removeToCart(item.name))}
            title="Remove"
          />
        </View>
      </View>
    );
  };
  return (
    <>
      <ProductDetailsHeader cartScreen={true} />
      <View style={styles.container}>
        {cart.length ? (
          <>
            <FlatList
              data={cart}
              renderItem={renderItem}
              keyExtractor={(item, index) => index}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderTopColor: COLORS.lightgray1,
                padding: SIZES.base,
                borderTopWidth: 0.9,
                justifyContent: "space-between",
              }}
            >
              <View 
                style={{ width: "30%" }}>
                <AppText>Total</AppText>
                <AppText size={1.5}>₹ {Math.round(reducecart)}</AppText>
              </View>
              <AppButton
                style={{ width: "70%" }}
                onPress={() => console.log("first")}
                title="Place Order"
                />
            </View>
          </>
        ) : (
          <View style={{ flex: 1, ...STYLES }}>
            <Image
              source={require("../../assets/empty.jpeg")}
              resizeMode="contain"
              style={{ width: SIZES.width, height: SIZES.height / 2 }}
            />
          </View>
        )}
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  textWrapper: {
    backgroundColor: "red",
    ...STYLES,
    height: "30%", // 70% of height device screen
    width: "90%", // 80% of width device screen
  },
  textWrapper1: {
    backgroundColor: "blue",
    ...STYLES,
    height: "30%", // 70% of height device screen
    width: "95%", // 80% of width device screen
  },
  textWrapper2: {
    backgroundColor: "pink",
    ...STYLES,
    height: "30%", // 70% of height device screen
    width: "100%", // 80% of width device screen
  },
  myText: {
    fontSize: 25, // End result looks like the provided UI mockup
  },
});
