import React, {useRef} from "react";

import { Button, View, Text, TextInput } from "react-native";
import { styles } from '../../App';


const Form = () => {
    
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const nationalityRef = useRef(null)

    // function to handle focus of the inputs
    const refFocus = (ref : any) => {
        
        ref.current.focus()
    }

    return(
        <View style={styles.button}>
            <Text>{}</Text>
            <Button  title="Fill Details" onPress={() => refFocus(firstNameRef)}></Button>
            <Text >Personal Information:</Text>

            <Text>
            First Name:
            </Text>

            <TextInput style={styles.input} ref={firstNameRef} returnKeyType="next" onSubmitEditing={() => refFocus(lastNameRef)}></TextInput>
            <Text>
            Last Name:
            </Text>

            <TextInput style={styles.input} ref={lastNameRef} onSubmitEditing={() => refFocus(nationalityRef)} returnKeyType="next"></TextInput>
            <Text>
            Nationality:
            </Text>

            <TextInput style={styles.input}  ref={nationalityRef} onSubmitEditing={() => refFocus} returnKeyType="next"></TextInput>
        </View>
    )
}


  export default Form