import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import styles from "./jobtabs.style";
import { SIZES } from "../../../constants";

const TabButton = ({ name, activeTabs, onPressButton }) => (
  <TouchableOpacity
    style={styles.btn(name, activeTabs)}
    onPress={onPressButton}
  >
    <Text style={styles.btnText(name, activeTabs)}>{name}</Text>
  </TouchableOpacity>
);

const JobTabs = ({ tabs, activeTabs, setActiveTabs }) => {
  return (
    <View>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTabs={activeTabs}
            onPressButton={() => setActiveTabs(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default JobTabs;
