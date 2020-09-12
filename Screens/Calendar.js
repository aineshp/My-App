import React,{Component} from 'react';
import {Calendar,CalendarList,Agenda,LocaleConfig} from 'react-native-calendars';
import {RN} from 'react-native';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
const month = ['Januay','February','March','April','May','June','July','August','September','October','November','December'],
const weekDays=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],

export default class Calender extends Component{
    constructor(){
        super()
        this.state={
            activeDate:new Date(),
        

        }
    }
    generateMatrix(){
     var matrix=[]; 
     matrix[0] = this.weekDays;
    }
}