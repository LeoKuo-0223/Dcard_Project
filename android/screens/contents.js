import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator, SafeAreaView, Image, FlatList } from 'react-native'
import axios from 'axios';

export default class Contents extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photodict: {},
            media: [],
            title: '',
            content: '',
            isLoading: true,
            data: [],
        };
    }


    componentDidMount() {
        const { navigation } = this.props;
        const id = navigation.getParam('id',)
        axios.get(`https://dcard.tw/_api/posts/` + String(id))
            .then(res => {
                const rawdata = res.data;
                const content = rawdata.content;
                const title = rawdata.title;
                const media = rawdata.media;
                this.setState({ content: content });
                this.setState({ title: title });
                this.setState({ media: media });
                // this.setState({ isLoading: false });
            })

        fetch('https://dcard.tw/_api/posts/' + String(id) + '/comments')
            .then((response) => response.json())
            .then((json) => {
                console.log('get data')
                this.setState({ data: json });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }


    showimage() {
        const state = this.state;
        const media = state.media;
        let photolist = media.map(item => Object.values(item)[0])//取得第0個屬性的值
        return (
            <View>
            <Image
                style={styles.stretch}
                resizeMode='center'
                source={{ uri: photolist[0] }}
            />
            <Image
                style={styles.stretch}
                resizeMode='center'
                source={{ uri: photolist[1] }}
            />
             <Image
                style={styles.stretch}
                resizeMode='center'
                source={{ uri: photolist[2] }}
            />
            </View>
        )

    }


    render() {
        let state = this.state;
        const isLoading = state.isLoading;
        const content = state.content;
        const title = state.title;
        const data = state.data;
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="pink" />
                </View>
            );
        } else {

            return (
                <SafeAreaView>
                    <ScrollView >
                        <View style={styles.container}>
                            <View style={{ flex: 0.2 }}>
                                <Text style={styles.title}>{title}</Text>
                            </View>
                            <View style={{ flex: 0.3 }}>
                                <Text style={styles.contents}>{content}</Text>
                            </View>
                            <View style={{ flex: 0.2 }}>
                                {this.showimage()}
                                <View style={{ flex: 0.3 }}>
                                    <Text style={{ fontSize: 32, paddingLeft: 10, paddingTop: 10 }}>留言區</Text>
                                    <FlatList
                                        data={data}
                                        keyExtractor={({ id }) => id}
                                        renderItem={({ item }) => (
                                            <Text style={styles.item}>{item.content}</Text>
                                        )}
                                    />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>

            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'space-between',
        // flexDirection: 'column',


    },
    title: {
        fontSize: 32,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'lightblue',
    },
    text: {
        fontSize: 32,
    },
    contents: {
        fontSize: 16,
        justifyContent: 'center',
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    stretch: {
        alignItems: 'stretch',
        width: 300,
        height: 300,
    },
    item: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
})