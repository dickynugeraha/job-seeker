import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { View, SafeAreaView, ScrollView } from "react-native";
import { COLORS, SIZES, icons, images } from "../constants";

import ScreenHeaderButton from "../components/common/header/ScreenHeaderBtn";
import Welcome from "../components/home/welcome/Welcome";
import PopularJobs from "../components/home/popular/PopularJobs";
import NearbyJobs from "../components/home/nearby/NearbyJobs";

const Home = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          title: "",
          headerLeft: () => (
            <ScreenHeaderButton iconUrl={icons.menu} dimensions="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderButton iconUrl={images.profile} dimensions="100%" />
          ),
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => router.push("/search/" + searchTerm)}
          />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
