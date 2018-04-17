import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Home from './home';
import Message from './message';
import Find from './find';
import My from './my';
import Start from './start';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MangoClient extends Component {
   
    constructor(props){
        super(props);
        this.state = {
          selectedTab:'首页'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TabNavigator style={styles.content}>
                    <TabNavigator.Item 
                        selected={this.state.selectedTab === '首页'}
                        title="首页"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Icon name={'ios-home-outline'}size={20}color={this.state.selectedTab === '首页' ? '#4D8CF4' : '#000000'}/>}
                        renderSelectedIcon={() => <Icon name={'ios-home'}size={20}color={this.state.selectedTab === '首页' ? '#4D8CF4' : '#000000'}/>}
                        onPress={() => this.setState({ selectedTab: '首页' })}>
                        <Home/>
                    </TabNavigator.Item>
                    <TabNavigator.Item 
                        selected={this.state.selectedTab === '发现'}
                        title="发现"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Icon name={'ios-videocam-outline'}size={20}color={this.state.selectedTab === '发现' ? '#4D8CF4' : '#000000'}/>}
                        renderSelectedIcon={() => <Icon name={'ios-videocam'}size={20}color={this.state.selectedTab === '发现' ? '#4D8CF4' : '#000000'}/>}
                        onPress={() => this.setState({ selectedTab: '发现' })}>
                        <Find/>
                    </TabNavigator.Item>
                    <TabNavigator.Item 
                        selected={this.state.selectedTab === '开始'}
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Icon name={'md-add-circle'} style={styles.icon}/>}
                        renderSelectedIcon={() => <Icon name={'md-add-circle'} style={styles.icon}/>}
                        onPress={() => this.setState({ selectedTab: '开始' })}>
                        <Start/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '消息'}
                        title="消息"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Icon name={'ios-text-outline'}size={20}color={this.state.selectedTab === '消息' ? '#4D8CF4' : '#000000'}/>}
                        renderSelectedIcon={() => <Icon name={'ios-text'}size={20}color={this.state.selectedTab === '消息' ? '#4D8CF4' : '#000000'}/>}
                        onPress={() => this.setState({ selectedTab: '消息' })}>
                        <Message/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '我的'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Icon name={'ios-contact-outline'}size={20}color={this.state.selectedTab === '我的' ? '#4D8CF4' : '#000000'}/>}
                        renderSelectedIcon={() => <Icon name={'ios-contact'}size={20}color={this.state.selectedTab === '我的' ? '#4D8CF4' : '#000000'}/>}
                        onPress={() => this.setState({ selectedTab: '我的' })}>
                        <My/>
                    </TabNavigator.Item>
                </TabNavigator>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        fontSize: 10,
        color: '#666666'
    },
    selectedTabText: {
        fontSize: 10,
        color: '#4D8CF4'
    },
    icon: {
        fontSize: 25,
        color:'#CD69C9'
    }
});

// AppRegistry.registerComponent('MangoClient', () => MangoClient);