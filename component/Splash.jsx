import { Image , Text, View } from "react-native";

export default function Splash({navigation}){
    setTimeout(() => {
        navigation.navigate('HomeScreen')
    }, 1000);
    return(
    <View>
        <View style={{alignItems:"center" , marginTop:"30%"}}>
            <Image 
                source={require('../img/logo.png')}
                style={{height:100 , width:150}}
            />

            <Text style={{margin:15, fontSize:25}}>
                Welcome in Egypt
            </Text>
        </View>
    </View>
    )
}