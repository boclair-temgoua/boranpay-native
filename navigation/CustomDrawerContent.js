import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Touchable,
    StyleSheet
} from 'react-native'
import {
    DrawerContentScrollView
} from '@react-navigation/drawer'
import { COLORS, constants, dummyData, FONTS, icons, SIZES } from '../constants'
import CustomDrawerItem from './CustomDrawerItem'
import { useDispatch } from 'react-redux'

const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab }) => {
    const dispasth = useDispatch()
    
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1 }}
        >
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZES.radius
                }}
            >
                {/** Profile */}
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        alignItems: 'center'
                    }}
                    onPress={() => console.log('Profile')}
                >
                    <Image
                        source={dummyData.myProfile?.profile_image}
                        style={style.profile}
                    />
                    <View
                        style={{
                            marginLeft: SIZES.radius
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.radius }}>
                            {dummyData.myProfile?.name}
                        </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>View you profile</Text>
                    </View>
                </TouchableOpacity>

                {/** Drawer Items */}
                <View
                    style={{
                        flex: 1,
                        marginTop: SIZES.padding
                    }}
                >
                    {/** Home */}
                    <CustomDrawerItem
                        label={constants.screens.home}
                        icon={icons.home}
                        isFocused={selectedTab === constants.screens.home}
                        onPress={() => {
                            dispasth(setSelectedTab(constants.screens.home))
                            navigation.navigate("MainLayout")
                        }}
                    />

                    {/** Wallet */}
                    <CustomDrawerItem
                        label={constants.screens.wallet}
                        icon={icons.wallet}
                        isFocused={selectedTab == constants.screens.wallet}
                        onPress={() => {
                            dispasth(setSelectedTab(constants.screens.wallet))
                            navigation.navigate("MainLayout")
                        }}
                    />

                    {/** Notification */}
                    <CustomDrawerItem
                        label={constants.screens.notification}
                        icon={icons.notification}
                        isFocused={selectedTab === constants.screens.notification}
                        onPress={() => {
                            dispasth(setSelectedTab(constants.screens.notification))
                            navigation.navigate("MainLayout")
                        }}
                    />

                    {/** Favorite */}
                    <CustomDrawerItem
                        label={constants.screens.favourite}
                        icon={icons.favourite}
                        isFocused={selectedTab === constants.screens.favourite}
                        onPress={() => {
                            dispasth(setSelectedTab(constants.screens.favourite))
                            navigation.navigate("MainLayout")
                        }}
                    />
                    {/** Favorite */}

                    <View
                        style={{
                            height: 1,
                            marginVertical: SIZES.radius,
                            marginLeft: SIZES.radius,
                            backgroundColor: COLORS.lightGray1
                        }}
                    />

                    {/** Track */}
                    <CustomDrawerItem
                        label={"Track Your Order"}
                        icon={icons.location}
                    />

                    {/** Coupn */}
                    <CustomDrawerItem
                        label={"Coupons"}
                        icon={icons.coupon}
                    />

                    {/** Setting */}
                    <CustomDrawerItem
                        label={"Setting"}
                        icon={icons.setting}
                    />

                    {/** Invite */}
                    <CustomDrawerItem
                        label={"Invite a Friend"}
                        icon={icons.profile}
                    />

                    {/** Help */}
                    <CustomDrawerItem
                        label={"Help Center"}
                        icon={icons.help}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const style = StyleSheet.create({
    profile: {
        width: 40,
        height: 40,
        borderRadius: SIZES.radius
    }
})

export default CustomDrawerContent