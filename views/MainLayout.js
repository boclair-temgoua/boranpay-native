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

import {
    Home,
    Search,
    CartTab,
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

import { Header } from '../components'

import LinearGradient from 'react-native-linear-gradient'

const MainLayout = ({ drawerAnimationStyle, navigation, setSelectedTab }) => {
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
            {/** Header */}
            <Header
                containerStyle={{
                    heigth: 50,
                    paddingHorizontal: SIZES.padding,
                    marginTop: 40,
                    alignItems: 'center'
                }}
                title={selectedTab.toUpperCase()}
                leftComponent={
                    <TouchableOpacity
                        style={style.opacityleft}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Image source={icons.menu} />
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity
                        style={style.opacityright}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Image style={style.profile} source={dummyData?.myProfile?.profile_image} />
                    </TouchableOpacity>
                }
            />

            {/** Content */}
            <View style={{ flex: 1 }}>
                <Text>MainLayout</Text>
            </View>

            {/** Footer */}
        </Animated.View>
    )
}

const style = StyleSheet.create({
    opacityleft: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.gray2,
        borderRadius: SIZES.radius
    },
    opacityright: {
        borderRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: SIZES.radius
    }
})

export default MainLayout