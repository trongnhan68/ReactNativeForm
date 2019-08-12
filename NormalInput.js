
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { Input, colors } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native'
import { CommonColors } from './CommonStyle';

const InputStatus = {
  inactive: 0,
  active: 1,
  error: 2,
  disable: 3
}

export const NormalInput = props => (

  <Formik
    initialValues={{ name: '', status: InputStatus.inactive }}
    onSubmit={values => props.submitedValue(values.name)}
    validationSchema={FormSchema}
    validateOnChange={false}
  >
    
    {props => (
      <View style={styles.container}>

        <Text style={styles.title}>
          Nhập họ tên
        </Text>

        <View style={ 1 ? styles.inputviewNormal: styles.active}>
          <TextInput style={styles.inputText}
            placeholder="Nhap vao day "
            onChangeText={props.handleChange('email')}
            onBlur={props.handleBlur('email')}
            value={props.values.email}
            onFocus = {this.handleFocus}
          
          />
        </View>
        <Button onPress={props.handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);


export default NormalInput;

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .min(5).max(10)
    .email('Invalid email')
    .required('Required'),
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    paddingBottom: 10,
    fontSize: 16,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 20,
  letterSpacing: 0,
  color: CommonColors.text2

  },
  inputviewNormal: {
    borderColor: CommonColors.textBorder,
    borderRadius: 8,
    borderWidth: 1,
    
  },

  inputviewActive: {
    borderColor: 'blue',
    borderRadius: 8,
    borderWidth: 1
  },
  inputviewError: {
    borderColor: 'red',
    borderRadius: 8,
    borderWidth: 1
  },

  inputText: {
    margin: 8,
    color: CommonColors.text1
  }

})