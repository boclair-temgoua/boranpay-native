import React, { useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    FlatList,
    Touchable
} from 'react-native'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming
} from 'react-native-reanimated'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedTab } from '../redux/actions/tabAction'

import {
    Home,
    Search, CartTab,
    Favourite,
    Notification
} from '../screens'

import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    constants,
    dummyData
} from '../constants'
import { Header } from '../composents'

import LinearGradient from 'react-native-linear-gradient'

const MainLayout = ({ drawerAnimationStyle }) => {
    const selectedTab = useSelector(state => state.tabReducer.selectedTab)
    const dispasth = useDispatch()


    useEffect(() => {
        dispasth(setSelectedTab(constants.screens.home))
    }, [constants.screens.home])

    return (
        <Animated.View
            style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: COLORS.white,
                ...drawerAnimationStyle
            }}
        >
            {/** Content */}
            <View style={{ flex: 1 }}>
                <Text>MainLayout</Text>
            </View>
        </Animated.View>
    )
}

export default MainLayout