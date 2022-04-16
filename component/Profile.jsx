import { useState } from "react";
import { View , Text , TextInput} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile({navigation}){
    return(
        <SafeAreaView>
            <TextInput style={{width:200 ,height:100 , borderColor:'red',borderWidth:20 }} >

            </TextInput>
            <Text>
            </Text>
        </SafeAreaView>
    )
}