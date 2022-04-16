import React, { useState } from "react";
import { Image, ScrollView, Text, View  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "./NavBar";
import Tools from "./Tools";

export default class Show extends React.Component{
    render(){
        return(
            <SafeAreaView style={{height:"100%"}}>
        <View style={{height:"100%" ,backgroundColor:'#2FA4FF' , alignItems:'center'}}>
            <NavBar></NavBar>
            <Image 
            source={{uri:this.props.route.params.image}}
            style={{width:'100%' ,height:200,borderRadius:20,marginBottom:10 , marginLeft:4,marginRight:4}}
            />
            <Text  style={{fontSize:26,fontStyle:"normal",margin:5 , color :"#0E185F",color:'#0E185F'}}>
                {this.props.route.params.title}
                </Text>
            <ScrollView >
                <View style={{alignItems:'center'}}>
                
                <Text style={{fontSize:20,color:'#00FFDD'}}>
                    {this.props.route.params.content}
                </Text>
                </View>
            </ScrollView>
            <Tools navigation={this.props.navigation}></Tools>
        </View>
        </SafeAreaView>
        )
    }
}