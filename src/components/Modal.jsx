import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Touchable,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";

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
        <View style={styles.calContainer}>
          <Ionicons name="calendar" size={24} color="black" />
          <Text
            style={{
              fontFamily: "GT-Planar",
            }}
          >
            Edit Shift
          </Text>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          paddingBottom: 10000,
        }}
      >
        <View style={styles.shiftContainer}>
          <Text style={styles.shiftText}>Select shift for this day</Text>
          <View style={styles.shiftRow}>
            <TouchableOpacity style={styles.shiftButtonContainer}>
              <Text style={styles.fontFamily}>No Shift</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shiftButtonContainer}>
              <Ionicons name="sunny" size={18} color="black" />
              <Text style={styles.fontFamily}>Day</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shiftButtonContainer}>
              <Ionicons name="moon" size={16} color="black" />
              <Text style={styles.fontFamily}>Night</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.shiftRow}>
            <TouchableOpacity style={styles.shiftButtonContainer}>
              <Ionicons name="person" size={16} color="black" />
              <Text style={styles.fontFamily}>Personal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shiftButtonContainer}>
              <Ionicons name="bookmark" size={16} color="black" />
              <Text style={styles.fontFamily}>Education</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.switchContainer}>
            <Switch />
            <Text
              style={{
                fontFamily: "GT-Planar",
              }}
            >
              Mark as Change Nurse
            </Text>
          </View>
          <View style={styles.prefContainer}>
            <Text
              style={{
                fontFamily: "GT-Planar",
              }}
            >
              Nurse Preference
            </Text>
            <TouchableOpacity style={styles.blockBtn}>
              <Ionicons name="close-circle-outline" size={16} color="black" />
              <Text
                style={{
                  fontFamily: "GT-Planar",
                }}
              >
                Block
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dateContainer}>
            <View style={styles.calBlock}>
              <Text
                style={{
                  fontSize: 18,
                }}
              >
                11
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "GT-Planar",
                  fontSize: 20,
                }}
              >
                May
              </Text>
              <Text
                style={{
                  fontFamily: "GT-Planar",
                }}
              >
                Tuesday
              </Text>
            </View>
          </View>
          <View style={styles.nursesContainer}>
            <Ionicons name="person" size={20} color="black" />
            <Text
              style={{
                fontFamily: "GT-Planar",
                fontSize: 18,
              }}
            >
              Nurses
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "GT-Planar",
              }}
            >
              Charge Nurse
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "GT-Planar",
                }}
              >
                Evelyn Lane
              </Text>
              <View
                style={{
                  backgroundColor: "#EBEAFB",
                  padding: 6,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontFamily: "GT-Planar",
                  }}
                >
                  EH
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Ionicons name="sunny" size={20} color="black" />
                <Text>Day Shifts</Text>
              </View>
              <Text>6/6</Text>
            </View>
            <View
              style={{
                width: "100%",
                height: 7,
                backgroundColor: "#F6DD96",
                marginTop: 5,
              }}
            />
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Ionicons
                  style={{
                    marginLeft: 3,
                  }}
                  name="moon"
                  size={16}
                  color="black"
                />
                <Text
                  style={{
                    marginLeft: 1,
                  }}
                >
                  Night Shifts
                </Text>
              </View>
              <Text>4/4</Text>
            </View>
            <View
              style={{
                width: "100%",
                height: 7,
                backgroundColor: "#B9B6F1",
                marginTop: 5,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 15,
              borderBottomWidth: 0.2,
              borderColor: "grey",
            }}
          >
            <Text
              style={{
                fontFamily: "GT-Planar",
              }}
            >
              Average Experience
            </Text>
            <Text
              style={{
                fontFamily: "GT-Planar",
              }}
            >
              4 Years
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingVertical: 15,
              backgroundColor: "#F6F6F6",
              marginVertical: 15,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "#EBEAFB",
                padding: 6,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: "GT-Planar",
                  fontSize: 16,
                }}
              >
                EH
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "GT-Planar",
                }}
              >
                Evelyn Lane
              </Text>
              <Text
                style={{
                  fontFamily: "GT-Planar",
                  fontSize: 12,
                }}
              >
                Cardiology
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "GT-Planar",
              }}
            >
              Shifts
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                  backgroundColor: "#F6DD96",
                  paddingHorizontal: 5,
                  borderRadius: 4,
                  paddingVertical: 1,
                }}
              >
                <Ionicons name="sunny" size={10} color="black" />
                <Text>6</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                  backgroundColor: "#B9B6F1",
                  paddingHorizontal: 5,
                  borderRadius: 4,
                  paddingVertical: 1,
                }}
              >
                <Ionicons name="moon" size={10} color="black" />
                <Text>0</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                  backgroundColor: "#F4FFDE",
                  paddingHorizontal: 5,
                  borderRadius: 4,
                  paddingVertical: 1,
                }}
              >
                <Ionicons name="leaf" size={10} color="black" />
                <Text>6</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                  backgroundColor: "#CCEBE2",
                  paddingHorizontal: 5,
                  borderRadius: 4,
                  paddingVertical: 1,
                }}
              >
                <Ionicons name="bookmark" size={10} color="black" />
                <Text>6</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 15,
            }}
          >
            <View
              style={{
                backgroundColor: "#F6DD96",
                width: 175,
                height: 10,
              }}
            />
            <View
              style={{
                backgroundColor: "#B9B6F1",
                width: 100,
                height: 10,
              }}
            />
            <View
              style={{
                backgroundColor: "#CCEBE2",
                width: 77,
                height: 10,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomWidth: 0.2,
              paddingBottom: 25,
              borderColor: "grey",
            }}
          >
            <Text
              style={{
                fontFamily: "GT-Planar",
              }}
            >
              Weekend shifts
            </Text>
            <Text>2/4</Text>
          </View>
          <View
            style={{
              paddingVertical: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Ionicons name="happy" size={20} color="black" />
              <Text
                style={{
                  fontFamily: "GT-Planar",
                  fontSize: 16,
                }}
              >
                Nurse Fairness
              </Text>
            </View>
            <View
              style={{
                paddingVertical: 15,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: "green",
                    width: 40,
                    height: 40,
                    borderRadius: 200,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "GT-Planar",
                      fontSize: 11,
                    }}
                  >
                    100%
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontFamily: "GT-Planar",
                      fontSize: 15,
                    }}
                  >
                    Requests Honored
                  </Text>
                  <Text
                    style={{
                      fontFamily: "GT-Planar",
                      color: "green",
                    }}
                  >
                    Excellent
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: "grey",
                    width: 40,
                    height: 40,
                    borderRadius: 200,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "GT-Planar",
                      fontSize: 12,
                    }}
                  >
                    4
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontFamily: "GT-Planar",
                      fontSize: 15,
                    }}
                  >
                    Total Switches
                  </Text>
                  <Text
                    style={{
                      fontFamily: "GT-Planar",
                      color: "green",
                    }}
                  >
                    Excellent
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
    fontFamily: "GT-Planar",
  },
  modalTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F6F6F6",
    padding: 20,
  },
  calContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  shiftContainer: {
    padding: 20,
    paddingBottom: 9400,
  },
  shiftText: {
    marginBottom: 10,
    fontFamily: "GT-Planar",
  },
  shiftRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 10,
  },
  shiftButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 10,
    borderColor: "grey",
    borderWidth: 0.5,
    borderRadius: 5,
    gap: 10,
  },
  fontFamily: {
    fontFamily: "GT-Planar",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 0.2,
    paddingBottom: 15,
  },
  prefContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomColor: "grey",
    borderBottomWidth: 0.2,
  },
  blockBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9DCDC",
    paddingVertical: 8,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingRight: 50,
    gap: 5,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#F6F6F6",
    marginTop: 10,
  },
  calBlock: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    borderRadius: 4,
    marginRight: 10,
  },
  nursesContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 15,
  },
});
