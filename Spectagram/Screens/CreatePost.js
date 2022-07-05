import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CreateStory extends Component {
    render() {if (!this.state.fontsLoaded) {
        return <AppLoading />
      } else {
        let preview_images = {
          image_1: require("../assetss/image_1.png"),
          image_2: require("../assetss/image_2.png"),
          image_3: require("../assetss/image_3.png"),
          image_4: require("../assetss/image_4.png"),
          image_5: require("../assetss/image_5.png"),
        };
    
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Create Story</Text>

                <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assetss/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>New Story</Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
            <Image
              source={preview_images[this.state.previewImage]}
              style={styles.previewImage}
            ></Image>
            </View>
            <TextInput 
              style = {[styles.inputFont, styles.inputFontExtra, styles.inputTextBig]}
              onChangeText = {(description)=>this.setState({description})}
              placeholder = {'Description'}
              multiline = {true}
              numberOfLines = {4}
              placeholderTextColor = 'white'
              />
            </View>
            </View>
            
            )
        }
    }
}