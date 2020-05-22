import React, { useEffect,useState } from 'react'
import { Text, View , FlatList, StyleSheet, Button,
    TouchableOpacity} from 'react-native'
import items from '../mokeItems.json'
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import {Input} from 'react-native-elements'



const Home = ({route}) => {
const  [itemData,setItemData]=useState(items)
const [showAddModal,setShowAddModal] = useState(false)
const [input,setInput] = useState({})

        const{email} = route.params
        let username = email.split("@")
        username = username[0]

        const deleteItem =(id) =>{
            console.log(id)
          let newData = itemData.filter(item=>{
              return item.id!==id
          })
          setItemData(newData)
        }
        const toggleModal = () =>{
            setShowAddModal(!showAddModal)
        }
        const addItem = () =>{
            let oldData = itemData
            oldData.push(input)
setItemData(oldData)
setInput({})
toggleModal()
        }
        const onTextChange = (text,fieldName) =>{
            setInput(values=>({...values,[fieldName]:text}))
             }
        return (
            <View style={{backgroundColor:'white'}}>
                <Text>{"Hello "} {username} </Text>
                <View style={{padding:16, height:150}}>
                <FlatList
        data={itemData}
        showsVerticalScrollIndicator ={false}
        renderItem={({ item }) =>
         <View style={{flexDirection:"row", flex:1}}>
             <Text style={styles.itemsStyle}>{item.id}</Text>
             <Text style={styles.itemsStyle}> {item.name} </Text>
             <Text style={styles.itemsStyle}> {item.quantity} </Text>
             <Icon
        name='trash'
        // type='font-awesome'
        color='#673bb7'
        style={{height:24,width:50,}}
        size={24}
        allowFontScaling={true}
        onPress={() => deleteItem(item.id)}
         />
         </View>
         }
        keyExtractor={item => item.id}
      />

                </View>
                <Button
                title = "ADD"
                onPress =  {toggleModal}
                />
               <Modal isVisible={showAddModal}
               style={{ backgroundColor:"white", maxHeight:400, }}
               onBackdropPress={toggleModal}
               animationOut={'zoomOutUp'}
               >
          <View style={{   alignSelf:'flex-start',  flex:1,width:"100%"}}>
          <TouchableOpacity activeOpacity={1} onPress={toggleModal}
          style = {{flexDirection:"row", alignSelf:"flex-end"}}>
            <Icon name="close" size={20} color={"#303030"}  style={{width:20,height:20}}/>
            </TouchableOpacity>
            <Text style={{textAlign:"center"}}>ADD ITEM</Text>
            <View style={{padding:16}}>
            <Input
               placeholder ={'id'}
               value={input.id}
               keyboardType ={'number-pad'}

               onChangeText={(text)=>onTextChange(text,"id")}
                // errorMessage = {errorArray.error_email===true?"invalid email":""}
               />
            <Input
               placeholder ={'name'}
               value={input.name}
               onChangeText={(text)=>onTextChange(text,"name")}
                // errorMessage = {errorArray.error_email===true?"invalid email":""}
               />
            <Input
               placeholder ={'quantity'}
               keyboardType ={'number-pad'}
               value={input.quantity}
               onChangeText={(text)=>onTextChange(text,"quantity")}
                // errorMessage = {errorArray.error_email===true?"invalid email":""}
               />
            </View>
             <Button
                title = "ADD"
                onPress =  {addItem}
                disabled = {
                    input.id && input.name && input.quantity ?
                    false  :true
                }
                />
          </View>
        </Modal>
            </View>
        )
    
}
export default Home
const styles = StyleSheet.create({
     itemsStyle:{
         flex:1
     }

})