import React, { useEffect,useState } from 'react'
import { Text, View,} from 'react-native'
import {Input,Button} from 'react-native-elements'


const SignIn = ({navigation}) => {
    const [input,setInput] = useState({})
    const [errorArray, setErrorArray] = useState({})
    const onTextChange = (text,fieldName) =>{
        let _error = validate(text,fieldName)
        let error_key = "error_"+fieldName
        setInput(values=>({...values,[fieldName]:text}))
        setErrorArray(error =>({...error,[error_key]:_error}))
    }
    const  validate = (text,fieldName) =>{
        let status=true
        switch(fieldName){
            case "email" :
                let emailRegex = /[a-zA-Z0-9]+([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]?[a-zA-Z0-9]+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/;
                if (emailRegex.exec(text))  {  
                   status=false
                   }
                   else {
                     status=true 
                   }
                   break
                   case "password" :
                       let passwordRegex=/[A-Z]/
                       if (passwordRegex.exec(text)) status = false
                       else status = true
        }
        return status
    }
    const signinpress = () =>{
        console.log("dd")
        // if (input.email.toLowerCase() ==="clarion@clarion.com" &&
        //      input.password ==="Clarion@123")
             navigation.navigate("HomePage",{email:input.email})
    }
        return (
            <View>
               <Input
               placeholder ={'email'}
               value={input.email}
               onChangeText={(text)=>onTextChange(text,"email")}
                errorMessage = {errorArray.error_email===true?"invalid email":""}
               />
               <Input
               placeholder = {'password'}
               value={input.password}
               onChangeText={(text)=>onTextChange(text,"password")}
                errorMessage = {errorArray.error_password===true?"invalid password":""}
               />
               <Button
               title = "Sign In"
               disabled = {
                errorArray.error_password===false &&
                errorArray.error_email===false &&
                input.email && input.password ? false : true
               }
               onPress = {signinpress}
               />

             
            </View>
        )
    
}
export default SignIn