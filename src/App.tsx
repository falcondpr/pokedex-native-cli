import React from 'react';

// React Navigation packages
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// icon
import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont();

// screens
import Home from './screens/Home';
import Search from './screens/Search';
import TabBar from './components/TabBar';
import Details from './screens/Details';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <TabBar {...props} />}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;
