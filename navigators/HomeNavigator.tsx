import { Icons } from '@components/Themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Link } from '@react-navigation/native';
import { CalculatorScreen } from '@screens/CalculatorScreen';
import { ExchangeScreen } from '@screens/ExchangeScreen';
import { MeasuresScreen } from '@screens/MeasuresScreen';

import { HomeTabParamList } from './types';

const Tab = createBottomTabNavigator<HomeTabParamList>();

export function HomeNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Calculator"
      screenOptions={({ navigation }) => ({
        tabBarStyle: { elevation: 0 },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        headerRight: () => (
          <Link to={{ screen: 'About' }}>
            <Icons name="info" />
          </Link>
        ),
        headerRightContainerStyle: { paddingRight: 12 },
      })}
    >
      <Tab.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icons name="calculator" isTinted={focused} strokeWidth={1.4} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Exchange"
        component={ExchangeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icons
                name="badgeDollarSign"
                isTinted={focused}
                strokeWidth={1.4}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Measures"
        component={MeasuresScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icons name="pencilRuler" isTinted={focused} strokeWidth={1.4} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
