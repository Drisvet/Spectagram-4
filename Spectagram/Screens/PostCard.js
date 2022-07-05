import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize'; 

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
  };
  
  export default class ProfileCard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fontsLoaded: false
      };
    }
  
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this._loadFontsAsync();
    }
  
    render() {
      if (!this.state.fontsLoaded) {
        return <AppLoading />;
      } else {
        return (
          <View style={styles.container}>
          <View style={styles.cardContainer}> 
          <View style={styles.authorContainer}> 
          <View style={styles.authorImageContainer}> 
          <Image source = {require("../assetss/profile_img.png")}
          style = {styles.profileImage}>
          </Image> 
          <View style={styles.authorNameContainer}>
          <Text style={styles.authorNameText}>
          {this.props.author}
          </Text>
          </View>
          </View>
          <Image source={require("../assets/posts.jpeg")} style={styles.postImage} />
          </View>
          <View style={styles.captionContainer}>
          <Text style={styles.captionText}>
            {this.props.post.caption}
            </Text>
            </View>
            <View style={styles.actionContainer}>
                <View style={styles.likebutton}>
          <Ionicons name={'heart'} size={RFValue(30)} color={'white'}/>
          <Text style={styles.likeText}> 12k </Text>
          </View>
          </View>
          </View>
          </View>
  
        );
      }
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    cardContainer:{
      margin:RFValue(13),
      backgroundColor:'#2F345D',
      borderRadius:RFValue(20)
    },
  
    storyImage: {
      resizeMode:'contain',
      width: '95%',
      alignSelf: 'center',
      height:RFValue(250)
    },
  
    titleContainer: {
      paddingLeft: RFValue(20),
      justifyContent: 'center'
    },
  
    storyTitleText: {
      fontSize:RFValue (25),
      fontFamily: 'Bubblegum-Sans',
      color: 'white'
    },
  
    storyAuthorText: {
      fontSize: RFValue (18),
      fontFamily: 'Bubblegum-Sans',
      color: 'white'
    },
  
    storyDescriptionText: {
      fontSize: RFValue(13),
      fontFamily: 'Bubblegum-Sans',
      color: 'white',
      paddingTop: RFValue(10)
    },
  
    actionContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: RFValue(10)
    },
  
    likeButton: {
      width: RFValue (160),
      height: RFValue (40),
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#EB3948',
      borderRadius: RFValue(30)
    },
  
    likeText: {
      color: 'white',
      fontfamily: 'Bubblegum-Sans',
      fontSize: RFValue (25),
      marginLeft: RFValue(5)
    }
  });
  
  
  