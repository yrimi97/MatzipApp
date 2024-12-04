import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Button, SafeAreaView } from 'react-native';
import { AuthStackPramList } from '../navigation/stack/AuthStackNavigator';

type LoginScreenProps = StackScreenProps<AuthStackPramList>;

function LoginSreen({ navigation }: LoginScreenProps) {
    return (
        <SafeAreaView>
            <View>
                <Button title="로그인화면으로 이동" onPress={() => navigation.navigate('Login')} />
            </View>
        </SafeAreaView>
    );
}

export default LoginSreen;
