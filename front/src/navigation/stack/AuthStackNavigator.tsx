import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';
import LoginSreen from '../../screens/auth/LoginSreen';
import { authNavigations } from '../../constants';
import SignUpScreen from '../../screens/auth/SignUpScreen';

// KEY : 스크린 이름(name) VALUE : 파라미터
export type AuthStackParamList = {
    [authNavigations.AUTH_HOME]: undefined;
    [authNavigations.LOGIN]: undefined;
    [authNavigations.SIGN_UP]: undefined;
}
const Stack = createStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {
                backgroundColor: 'white',
            },
            headerStyle: {
                backgroundColor: 'white',
                shadowColor: 'grey',
            },
            headerTitleStyle: {
                fontSize: 18,
            },
            headerTintColor: 'Black',
        }}>
            <Stack.Screen
                name={authNavigations.AUTH_HOME}
                component={AuthHomeScreen}
                options={{
                    headerTitle: '', //각 화면에서 BACK BUTTON 문구 + 인증화면 헤더
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={authNavigations.LOGIN}
                component={LoginSreen}
                options={{
                    headerTitle: '로그인',

                }}
            />
            <Stack.Screen
                name={authNavigations.SIGN_UP}
                component={SignUpScreen}
                options={{
                    headerTitle: '회원가입',
                }}
            />
        </Stack.Navigator>
    );
}

export default AuthStackNavigator;
