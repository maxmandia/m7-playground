import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import { SunIcon } from "@radix-ui/react-icons";

export default function Modal(props) {
  const { visible, setModalVisible } = props;
  const translateY = useSharedValue(visible ? 1000 : 100);

  useEffect(() => {
    translateY.value = withTiming(visible ? 100 : 1000);
  }, [visible]);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View style={[styles.modal, animatedStyles]}>
      <View style={styles.modalTop}>
        <View>
          <Text>Edit Shift</Text>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  modal: {
    height: "40%",
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F6F6F6",
    padding: 20,
  },
});
