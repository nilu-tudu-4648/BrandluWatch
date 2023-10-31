import { StyleSheet, View } from "react-native";
import React from "react";
import { AppText, HomeHeader } from "../components";

const BagScreen = () => {
  return (
    <>
      <HomeHeader header={"Brandlu Watch"} />
      <View>
        <AppText>BagScreen</AppText>
      </View>
    </>
  );
};

export default BagScreen;

const styles = StyleSheet.create({});
