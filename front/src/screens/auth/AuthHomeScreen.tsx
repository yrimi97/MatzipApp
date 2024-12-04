import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthStackPramList } from '../../navigation/stack/AuthStackNavigator';
import { authNavigations } from '../../constants';


type AuthHomeScreenProps = StackScreenProps<AuthStackPramList, typeof authNavigations.AUTH_HOME>;

function AuthHomeScreen({ navigation }: AuthHomeScreenProps) {
    return (
        <SafeAreaView>
            <View>
                <Button title="로그인 화면으로 이동" onPress={() => navigation.navigate(authNavigations.LOGIN)} />
            </View>
        </SafeAreaView>
    );
}

export default AuthHomeScreen;