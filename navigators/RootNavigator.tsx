import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AboutScreen } from '@screens/AboutScreen';
import { UnitConverterScreen } from '@screens/UnitConverterScreen';

import { HomeNavigator } from './HomeNavigator';
import { RootStackParamList } from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <RootStack.Navigator
      screenOptions={{
        contentStyle: {
          overflow: 'hidden',
        },
      }}
    >
      <RootStack.Screen
        name="Home"
        component={HomeNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="About" component={AboutScreen} />
      <RootStack.Screen
        name="Converter"
        component={UnitConverterScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </RootStack.Navigator>
  );
}
