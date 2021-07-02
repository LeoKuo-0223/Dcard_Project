import React, { Component } from 'react';
import {
    ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableOpacity, Alert, Image
    , Modal,TouchableHighlight,
    Button
} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";


export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: [],
            data: [],
            title: '',
            content: '',
            isLoading: true
        };
    }

    componentDidMount() {
        fetch('https://dcard.tw/_api/posts?popular=true')
            //https://dcard.tw/_api/posts?popular=true
            //https://dcard.tw/_api/posts
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }



    showcontent() {
        let state = this.state;
        const content = state.content;
        const title = state.title;
        return (title, content);
    }




    render() {
        let state = this.state;
        const data = state.data;
        const isLoading = state.isLoading;
        const content = state.content;
        if (isLoading) {
            return (
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="pink" />
                </View>
            );
        } else {

            return (
                <View style={styles.container}>
                    <TouchableHighlight underlayColor='skyblue' style={styles.highlight} onPress={()=> this.setState({ isLoading: true },this.componentDidMount())}>
                    <View style={{paddingBottom:5}}>
                        <AntDesign  name={'reload1'} size={25} style={styles.reload} />
                    </View>
                    </TouchableHighlight>
                    <FlatList
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() =>
                                this.props.navigation.navigate('contents', { id: item.id })}>
                                <Text style={styles.item}># {item.title}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View >
            );
        }

    }
};









const styles = StyleSheet.create({
    activity:{
        paddingTop: 250,
    },
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    item: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomColor: 'lightblue',
        borderBottomWidth: 5,
    },
    touch: {
        color: 'black',
    },
    stretch: {
        width: 200,
        height: 200,
        resizeMode: 'stretch'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    hidebutton: {
        position: 'absolute',
        bottom: 0,
        width: 500,
        backgroundColor: 'grey',
        alignItems: 'center'
    },
    hidebutton2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    reload:{
        paddingLeft: 10,
        paddingTop: 10,
    },
    highlight:{
        borderBottomColor: 'skyblue',
        borderBottomWidth:2, 
    }
})




{/* <View>
                  <Image
                    style={styles.stretch}
                    source={{ uri: 'https://i.imgur.com/JHMXI3m.jpg' }}
                  />
                </View> */}