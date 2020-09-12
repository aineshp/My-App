import React,{Component} from 'react';
import{Text,TouchableOpacity,View,StyleSheet,Alert} from 'react-native';
import db from 'config';
import firebase from 'firebase';
export default class PlannerScreen extends Component{
    constructor(props){
        super();
        this.state={

        }
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
               
                <TouchableOpacity style={styles.button} 
                onChange >
                    <Text style={styles.buttonText}>Medicines</Text>
                    <Text style={styles.text}>Next: </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button}
                 onChange>
                    <Text style={styles.buttonText}>Activities</Text>
                    <Text styles={styles.text}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onChange>
                    <Text style={styles.buttonText }>Bills</Text>
                    
                </TouchableOpacity>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:'lightyellow',
        borderRadius:5,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color:'black',
        fontSize:25,
        
    },
    text:{
        color:'grey',
        fontSize:15,
    }
})
