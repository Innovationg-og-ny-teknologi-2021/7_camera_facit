import React, {useEffect, useState} from "react";
import {Dimensions, Image, StyleSheet, View} from "react-native";

const ImageScreen = ({route}) => {

    const [image,setImage] = useState('')

    /* du sætter billedet fra dine parameter og i return fjerne du val*/
    useEffect(() => {
        setImage(route.params.image);

        return () => {
            setImage('')
        }
    },[]);

    return(
        <View>
            <Image
                source={{ uri: image ?  image : null }}
                width={Dimensions.get('window').width}
                height={Dimensions.get('window').height}
            />
        </View>
    )
}

export default ImageScreen;