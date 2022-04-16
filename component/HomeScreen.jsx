import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "./NavBar";
import Tools from "./Tools";
// export default function HomeScreen({navigation}){
export default class HomeScreen extends React.Component{

    state = {data : [] , ready : 0}

    componentDidMount(){
        fetch('https://egyptian-antiquities.com/wp-json/wp/v2/posts?per_page=10')
        .then((res)=> res.json())
        .then((resJson)=>{
            this.setState({data: resJson , ready:1})
        })
    }
render(){
    return(
        <SafeAreaView style={{height:"100%" }}>
        <View style={{height:"100%" }}>
            <NavBar />
            <ScrollView>
                    {this.showData()}
            </ScrollView>
                <Tools navigation={this.props.navigation}></Tools>
        </View>
        </SafeAreaView>
    )
}

showData(){
    if(this.state.ready === 1){
        return(
        this.state.data.map((d)=>{
            return(
            
                <TouchableOpacity key={d.id} style={{flex:3 , flexDirection:"row" , margin:3, borderRadius:20 , backgroundColor:"#2FA4FF"}}
                    onPress={()=>{this.props.navigation.navigate('Show',
                    {image:d.better_featured_image.source_url,title:d.title.rendered,content:d.content.rendered}
                    )
                }}
                >
                <Image source={{uri:d.better_featured_image.source_url}} style={{flex:1 , height:"100%", borderRadius:20 , width:150}}/>
                <View style={{flex:2 , margin:15}}>
                    <Text style={{fontSize:26 , color :"#0E185F"}}>
                        {d.title.rendered}
                    </Text>
                    <Text style={{color:"#00FFDD"}}>
                        {d.content.rendered.substring(0,150)}
                    </Text>
                    
                </View>
            </TouchableOpacity>
        
            )
        })
        )
}
}
}

