import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppText, HomeHeader } from "../components";

const ShopScreen = () => {
  return (
    <>
      <HomeHeader header={"Brandlu Watch"} />
      <View>
        <AppText>ShopScreen</AppText>
      </View>
    </>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({});
