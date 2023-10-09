import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/home";
import Hall from "../pages/hall";

const stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <stack.Navigator>
            <stack.Screen nome="Home" component={Home} options={{ headerShown: false }} />
            <stack.Screen nome="Hall" component={Hall} options={{ headerShown: false }} />
           
        </stack.Navigator>

    )
       

}