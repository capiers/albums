import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const CarDetails = ({ carData }) => {
    const {title, price, image, thumbnail, url} = carData;
    const {
        cardSectionStyle,
        headerContentStyle, 
        imageStyle,
        thumbnailstyle, 
        thumbnailContainerStyle,
        titleTextStyle,
        priceTextStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailstyle} source={{uri: thumbnail}}/>
                </View>
                <View style={headerContentStyle}>
                    <Text style={titleTextStyle}>{title}</Text>
                    <Text>{price}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{uri: image}}/>
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Details
                </Button>
            </CardSection>
        </Card>
    )
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailstyle: {
        backgroundColor: '#ddd',
        width: 50,
        height: 50
    },
    imageStyle: {
        height: 180,
        flex: 1,
        width: null
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 2,
        marginRight: 10
    },
    titleTextStyle: {
        fontSize: 16,
        fontWeight: '600'
    }
};

export default CarDetails;