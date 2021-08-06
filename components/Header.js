import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import {
    FONTS
} from '../constants'

const Header = ({ containerStyle, title, leftComponent, rightComponent }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                ...containerStyle

            }}>

            {/** Left */}
            {leftComponent}

            {/** Title */}
            <View style={style.title}>
                <Text style={{ ...FONTS.h3 }}>
                    {title}
                </Text>
            </View>

            {/** Right */}
            {rightComponent}
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Header

