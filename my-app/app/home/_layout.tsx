import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
      <Stack
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen
          name="index"
          options={() => ({
            title: 'Home',
          })}
        />
        <Stack.Screen
          name="detail"
          options={() => ({
            title: 'Details',
          })}
        />
      </Stack>
  );
}
