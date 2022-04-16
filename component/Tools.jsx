import { View ,Image ,TouchableOpacity , Linking} from "react-native";

export default function Tools({navigation}){
    return(
        <View style={{ width:"100%" , height:"6%" , backgroundColor:"#E8FFC2",borderRadius:18  , marginBottom:10}}>
            <View style={{width:'100%' , height:'100%',flex:3 , flexDirection:'row' ,justifyContent:"center" , alignItems:'center'}}>

                <TouchableOpacity style={{justifyContent:'center' , alignItems:'center' , flex:1}}
                    onPress={
                        ()=>{
                            navigation.navigate('Option')
                        }
                    }
                >
                    <Image 
                        source={require('../img/option.png')}
                        style={{height:30 , width:30}}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{justifyContent:'center' , alignItems:'center' , flex:1}}
                onPress={
                    ()=>{
                        navigation.navigate('Profile')
                    }
                }
                >
                    <Image 
                        source={require('../img/profile.png')}
                        style={{height:30 , width:30}}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{justifyContent:'center' , alignItems:'center' , flex:1}}
                onPress={
                    ()=>{
                        navigation.navigate('HomeScreen')
                    }
                }
                >
                    <Image 
                        source={require('../img/home.png')}
                        style={{height:30 , width:30}}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

