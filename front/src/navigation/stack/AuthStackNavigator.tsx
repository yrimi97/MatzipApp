import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';
import LoginSreen from '../../screens/auth/LoginSreen';
import { authNavigations } from '../../constants';

// KEY : 스크린 이름(name) VALUE : 파라미터
export type AuthStackPramList = {
    [authNavigations.AUTH_HOME]: undefined;
    [authNavigations.LOGIN]: undefined;
}
const Stack = createStackNavigator<AuthStackPramList>();

function AuthStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={authNavigations.AUTH_HOME} component={AuthHomeScreen} />
            <Stack.Screen name={authNavigations.LOGIN} component={LoginSreen} />
        </Stack.Navigator>
    );
}

export default AuthStackNavigator;
