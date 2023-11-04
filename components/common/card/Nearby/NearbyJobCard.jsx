import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils";

const PopularJobCard = ({ job, handlePress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri:
              //  job.employer_logo,
              checkImageURL(job.employer_logo)
                ? job.employer_logo
                : "https://authenticjobs.com/wp-content/uploads/2020/04/cropped-aj-site-favicon.png",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
