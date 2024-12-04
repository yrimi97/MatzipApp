import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';

function RootNavigator() {
    const isLogggedIn = true;
    return <>{isLogggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
