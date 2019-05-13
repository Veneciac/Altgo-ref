import React, { PureComponent } from 'react';
import { Item, Input }          from 'native-base';
import styles                   from './style';
import { color }                from '../../style';

export default class UserFormInput extends PureComponent {
  render() {
    return (
        <Item style={styles.item} >
            <Input  style                   = { styles.input } 
                    onChangeText            = { (value) => this.props.onChangeText(this.props.name, value)} 
                    placeholderTextColor    = { color.shadow }
                    placeholder             = { this.props.placeholder }
                    underlineColorAndroid   = {'transparent'}
                    returnKeyType           = { this.props.returnKeyType }
                    autoCapitalize          = { 'none' }
                    secureTextEntry         = { this.secureTextEntry || false }
            />
        </Item>
    )
  }
}
