import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CamisaAdd from './CamisaAdd';
import CamisaList from './CamisaList';

const Stack = createNativeStackNavigator();

export default function Camisa() {
  return (
    <Stack.Navigator initialRouteName="CamisaList">
      <Stack.Screen
        name="CamisaList"
        component={CamisaList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CamisaAdd"
        component={CamisaAdd}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}