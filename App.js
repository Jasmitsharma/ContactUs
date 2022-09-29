import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, Button, Platform, TextInput, TouchableOpacity, ImagePickerIOS } from 'react-native';

export default function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submit = () => {
    if (!name && !email && !phone && !company && !subject&& !message ) {
      Alert.alert(" *Please Fill Up All The Fields*");
    }
    else {
      Alert.alert('Thank You For Contacting Us.');
    }
  };
  
  return (
    <View style={styles.container}>
        <Text style={styles.mainHeader}> LEAVE US A MESSAGE</Text>
        <Text style={styles.base}>How can we help you?</Text>

        <View style={styles.inputContainer1}>
          <Text style={styles.labels1}> Your Name </Text>
          <Text style={styles.labels1}> Your Email</Text>
        </View>

      <View style={styles.inputContainer1}>
      <TextInput style={styles.inputStyle1} 
          placeholder={" Name"} 
          value={name}
          onChangeText={(userdata) => setName(userdata) }
          />
           <TextInput style={styles.inputStyle1} 
          placeholder={" Email"} 
          value={email}
          onChangeText={(email) => setEmail(email) }
          keyboardType="email-address"
          
          />
      </View>  

        <View style={styles.inputContainer1}>
          <Text style={styles.labels1}> Your Phone No.</Text>
          <Text style={styles.labels1}> Your Company Name</Text>
          
        </View>

        <View style={styles.inputContainer1}>
        <TextInput style={styles.inputStyle1} 
          placeholder={" Phone Number"} 
          value={phone}
          onChangeText={(phone) => setPhone(phone) }
          keyboardType="phone-pad"
          />
          <TextInput style={styles.inputStyle1} 
          placeholder={" Comapny Name"}
          value={company}
          onChangeText={(company) => setCompany(company) }
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Subject</Text>
          <TextInput style={styles.inputStyle} 
          placeholder={"Subject"}
          numberOfLines={2}
          value={subject}
          onChangeText={(subject) => setSubject(subject) }
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Message</Text>
          <TextInput style={styles.inputStyle}
          placeholder={"Message"}
          numberOfLines={6}
          multiline={true}
          value={message}
          onChangeText={(message) => setMessage(message) }
          />

          <TouchableOpacity style={[styles.button,
            
          ]}
   
          onPress={submit}
          >
            <Text style={styles.text}>
              Send
            </Text>
          </TouchableOpacity>
        </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    paddingTop: Platform.OS ==='android' ? 50 : 0,   
    height: "100%",
    paddingHorizontal: 40,

  },

  mainHeader: {
    fontSize: 20, 
    color: "black",
    fontWeight: "600",
    paddingTop: 20,
    paddingBottom: 10,

  },

  base: {
    fontSize: 18, 
    color: "black",
    paddingBottom: 25,
    paddingHorizontal: 5, 
  },

  inputContainer1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
    },

  labels1: {
    width: '45%',

  },

  
  inputStyle1: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 3,
    marginTop: 5,
    marginBottom:15,
    marginHorizontal: 5,
    paddingHorizontal:10,
    height:40,
    

   },

  inputContainer:{
    paddingHorizontal: 5,   
  },

  inputStyle:{
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 3,
    marginTop: 5,
    marginBottom:10,
    paddingHorizontal:13,
   
  },

  button: {
    display: 'flex',
    alignItems: 'flex-end',
    margin: 10,
    color: "red",
 
 },

 text:{
  borderWidth: 0.5,
  paddingLeft: 30,
  paddingRight: 30,
  paddingTop:20,
  paddingBottom:20,
  backgroundColor: 'red',
  borderColor: 'red',
  color: 'white',
  borderRadius: 3,
  alignItems:'center',
 }
});
