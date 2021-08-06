import React from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native'

import {
    createDrawerNavigator,
    DrawerContentScrollView
} from '@react-navigation/drawer'
import { MainLayout } from '../views'

import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../constants'

const Drawer = createDrawerNavigator()

const CustomDrawer = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.blue
            }}
        >
            <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={{
                    flex: 1,
                    width: '65%',
                    paddingRight: 20,
                    backgroundColor: "transparent"
                }}
                sceneContainerStyle={{
                    backgroundColor: "transparent"
                }}
                initialRouteName="MainLayout"
                // drawerContent={props => {
                //     setTimeout(() => {
                //         setProgress(props.progress)
                //     }, 0)
                //     return (
                //         <CustomDrawerContent
                //             navigation={props.navigation}
                //             selectedTab={selectedTab}
                //             setSelectedTab={setSelectedTab}
                //         />
                //     )
                // }}
            >
                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout {...props}/>}
{/* 
                    setSelectedTab={setSelectedTab}
                        drawerAnimationStyle={AnimatedStyle}  */}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default CustomDrawer