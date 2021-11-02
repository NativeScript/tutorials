import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { MainStackParamList } from './NavigationParamList';
import { HomeScreen } from "./HomeScreen";
import { DetailsScreen } from "./DetailsScreen";
import { FlickService } from "../services";

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => {
    const flickTitle = (flickId) => FlickService.getFlickById(flickId).title;
    return (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: true
            }}
        >
            <StackNavigator.Screen
                name="Home"
                options={{
                    headerTitle: "NativeFlix"
                }}
                component={HomeScreen}
            />
            <StackNavigator.Screen
                name="Details"
                options={
                    ({ route }) => ({ title: flickTitle((route.params as MainStackParamList['Details']).flickId) })
                }
                component={DetailsScreen}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
)
            };
