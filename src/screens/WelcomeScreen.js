import { BackHandler, StyleSheet, View } from "react-native";
import React from "react";
import { AppButton, AppView } from "../components";
import { SIZES, STYLES } from "../constants/theme";
import { Image } from "react-native";
import { NAVIGATION } from "../constants/routes";

const WelcomeScreen = ({ navigation }) => {
  BackHandler.addEventListener(
    "hardwareBackPress",
    () => {
      BackHandler.exitApp();
      return () => true;
    },
    []
  );
  return (
    <AppView>
      <View
        style={{
          ...STYLES,
          flex: 0.5,
        }}
      >
        <Image
          source={require("../../assets/bo.jpg")}
          style={{ width: "50%", height: 150, resizeMode: "contain" }}
        />
      </View>
      <View
        style={{
          ...STYLES,
          flex: 0.5,
          justifyContent: "flex-end",
          paddingVertical: SIZES.padding,
        }}
      >
        <AppButton
          title="REGISTER"
          style={{ marginVertical: SIZES.h4 }}
          onPress={() =>
            navigation.navigate(NAVIGATION.REGISTER, { register: true })
          }
        />
        <AppButton
          title="LOGIN"
          style={{ marginVertical: SIZES.h4 }}
          onPress={() =>
            navigation.navigate(NAVIGATION.LOGIN, { register: false })
          }
        />
      </View>
    </AppView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
