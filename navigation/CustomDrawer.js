import React, { useState } from 'react'
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
import CustomDrawerContent from './CustomDrawerContent'
import Animated from 'react-native-reanimated'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedTab } from '../redux/actions/tabAction'


const Drawer = createDrawerNavigator()

const CustomDrawer = () => {
    const [progress, setProgress] = useState(new Animated.Value(0))
    const selectedTab = useSelector(state => state.tabReducer.selectedTab)

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    })

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 26]
    })

    const AnimatedStyle = { borderRadius, transform: [{ scale }] }

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
                drawerContent={props => {
                    setTimeout(() => {
                        setProgress(props.progress)
                    }, 0)
                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                        />
                    )
                }}
            >
                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout {...props}
                        drawerAnimationStyle={AnimatedStyle}
                    />}
                    {/* 
                    setSelectedTab={setSelectedTab} */}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default CustomDrawer