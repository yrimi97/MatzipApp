import { createDrawerNavigator } from '@react-navigation/drawer';
import MapHomeScreen from '../../screens/map/MapHomeScreen';

const Drawer = createDrawerNavigator();

function MainDrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="MapHome" component={MapHomeScreen} />
        </Drawer.Navigator>
    );
}

export default MainDrawerNavigator;
