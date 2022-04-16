import { useState } from "react";
import { TouchableOpacity, View , Text, Image ,Linking} from "react-native";

export default function NavBar({navigation}){
    
    return(
        <View style={{width:"100%" , height:"10%" , top:0 ,marginTop:0 ,backgroundColor:"#0E185F" , marginBottom:5}}>

            <View style={{justifyContent:"center" , width:"25%" , height:"100%" }}>
                <TouchableOpacity style={{ flexDirection:"row" , justifyContent:'center'}}
                onPress={
                    ()=>{
                        Linking.openURL('https://api.whatsapp.com/send?phone=+201278954357')
                    }
                }
                >
                    <Image 
                        source={require('../img/whats.png')}
                        style={{ height:"100%" , width:30 ,marginLeft:20,marginRight:5 }}
                    />
                    <Text style={{color:'green' , justifyContent:'flex-end',height:'100%' , fontSize:16}}>
                        connect us
                    </Text>
                    
                </TouchableOpacity>
            </View>

         
        </View>
    )
}