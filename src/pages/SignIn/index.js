import { connect }                                                             from 'react-redux';
import React, { Component }                                                    from 'react';
import { View, SafeAreaView, TouchableHighlight, Text, Image, AsyncStorage }   from 'react-native';
import { Item, Input, Button, Toast, Root }                                    from 'native-base';
import logo                                                                    from '../../assets/algo.png';
import { login, setError }                                                     from '../../store/actions/User';
import styles                                                                  from './style';
import UserFormInput                                                           from '../../components/UserFormInput';

class SignIn extends Component {

    componentDidMount = async () => {
        try {
            const value = await AsyncStorage.getItem('token');
            if (value) this.props.navigation.navigate('Home');

        } catch (error) {}
    }

    state = {
        password     : '',
        email        : '',
        isLoggedIn   : this.props.isLoggedIn || false,
        errors       : this.props.errors || {},
        showToast    : false
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.errors.message) {
            Toast.show({
                text     : this.props.errors.message,
                duration : 3500,
                textStyle: { textAlign: 'center' }
              })
        }

        if (prevState.isLoggedIn !== this.props.isLoggedIn) {
            this.setState({ isLoggedIn: this.props.isLoggedIn })
            if (this.props.isLoggedIn) this.props.navigation.navigate('Home');
        }
        if (prevState.errors !== this.props.errors) this.setState({ errors: this.props.errors })
    }

    login = () => {
        if ( !this.state.email || !this.state.password) {
            this.props.setError({ message: 'All fields must be filled!' })
        } else {
            var userInfo = {
                email    : this.state.email,
                password : this.state.password
            }
            this.props.login(userInfo)
        }
    }

    register = () => {
        this.props.navigation.navigate('Regis')
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Root>
                <SafeAreaView style={styles.container}>
                    <View style={styles.content}>
                        <View style={{ height: 200, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginHorizontal: 15, }}>
                            <Image style={{ height: 78, width: 350}} source={logo} />
                            <UserFormInput 
                                placeholder   = { 'Email'}
                                returnKeyType = { 'next' }
                                onChangeText  = { this.handleChange }
                                name          = { 'email' }
                                value         = { this.state.email }
                            />

                            <UserFormInput 
                               placeholder     = { 'Password'}
                               returnKeyType   = { 'go' }
                               onChangeText    = { this.handleChange }
                               name            = { 'password' }
                               value           = { this.state.password }
                               secureTextEntry = { true }
                            />                             
                        </View>

                        <View style={{ height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center', fontSize: 14, color: 'grey' }}>
                                Don't have an account yet?
                        </Text>
                            <TouchableHighlight underlayColor="#ffffff00" onPress={() => this.register()}>
                                <Text style={{ textAlign: 'center', fontSize: 14, color: 'midnightblue', fontWeight: '400' }}>
                                    Register Here
                            </Text>
                            </TouchableHighlight>
                        </View>
                        
                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'row' }}>
                            <Button onPress={this.login} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: 15, backgroundColor: 'black', borderRadius: 1 }}>
                                <Text style={{ color: 'white', fontSize: 24, fontWeight: '500'}}>Login</Text>
                            </Button>
                        </View>

                    </View>
                </SafeAreaView>
            </Root>

        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn : state.Users.isLoggedIn,
    errors     : state.Users.errors,
})

const mapDispatchToProps = (dispatch) => ({
    login   : (userInfo) => (dispatch(login(userInfo))),
    setError: (err) => (dispatch(setError(err)))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
