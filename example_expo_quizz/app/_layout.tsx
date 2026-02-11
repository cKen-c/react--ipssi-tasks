import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Bienvenue !" }} />
      <Stack.Screen name="quizz" options={{ title: "Faire un quizz ?" }} />
    </Stack>
  );
}
