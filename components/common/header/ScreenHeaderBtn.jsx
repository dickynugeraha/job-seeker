import { Image, TouchableOpacity } from "react-native";
import styles from "./screenheader.style";

const ScreenHeaderButton = ({ iconUrl, dimensions, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        style={styles.btnImg(dimensions)}
        source={iconUrl}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderButton;
