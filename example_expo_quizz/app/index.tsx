import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";

const HomePage = () => {
  // Partie logique

  const router = useRouter();

  // ["/"]

  // router.push("/quizz")

  // ["/", "/quizz"]

  // router.push("/quizz/easy")

  // ["/", "/quizz","/quizz/easy"]

  return (
    <ScrollView>
      <Pressable>
        <Text>Faire un quizz</Text>
      </Pressable>
    </ScrollView>
  );
};

export default HomePage;
