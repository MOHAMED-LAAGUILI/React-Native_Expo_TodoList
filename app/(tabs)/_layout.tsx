import { Tabs } from "expo-router";
import { Ionicons, Feather } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        headerTitle: route.name,
        tabBarStyle: {
          backgroundColor: '#181f2a',
          borderTopColor: '#232b3b',
          height: 68,
        },
        tabBarActiveTintColor: '#4f8cff',
        tabBarInactiveTintColor: '#a0aec0',
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 13,
          textAlign: 'center',
          alignSelf: 'center',
          width: '100%',
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'todos') {
            return <Feather name="check-square" size={size} color={color} />;
          } else if (route.name === 'settings') {
            return <Ionicons name="settings-outline" size={size} color={color} />;
          }
          return null;
        },
      })}
    >
      <Tabs.Screen name="todos" options={{ 
        title: 'Todos',
        tabBarIcon: ({ color, size }) =>
         <Feather name="check-square" size={size} color={color} />
          }} />
      <Tabs.Screen name="settings" options={{ 
        title: 'Settings',
        tabBarIcon: ({ color, size }) =>
         <Ionicons name="settings-outline" size={size} color={color} /> }} />
    </Tabs>
  );
}

