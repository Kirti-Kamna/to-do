import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
 StyleSheet,
 Text,
 View,
 TextInput,
 TouchableOpacity,
 FlatList,
 ImageBackground,
 Image,
 ScrollView,
} from "react-native";
 
export default function App() {
 const [newTask, setNewTask] = useState("");
 const [taskList, updateTaskList] = useState([]);
 
 const addNewTask = (enteredTask) => {
   setNewTask(enteredTask);
 };
 
 const addNewTasksToList = () => {
   updateTaskList([
     ...taskList,
     { id: Math.random().toString(), value: newTask },
   ]);
 };
 
 const deleteTask = (id) => {
   updateTaskList(taskList.filter((currentGoals) => currentGoals.id !== id));
 };
 
 return (
   <View style={styles.container}>
     <ImageBackground
       source={require("./assets/TODO2.jpeg")}
       style={{ flex: 1 }}
       resizeMode="cover"
     >
       <View style={{ justifyContent: "center", alignItems: "center" }}>
         <TextInput
           style={styles.inputBox}
           placeholder="enter a new task"
          
           onChangeText={addNewTask}
           value={newTask}
         ></TextInput>
       </View>
 
       <View
         style={{
           flexDirection: "row",
           width: "50%",
           marginLeft: 120,
           marginTop: 20,
           justifyContent: "space-between",
         }}
       >
         <TouchableOpacity
           style={styles.buttonDesign}
           onPress={addNewTasksToList}
         >
           <Text style={styles.buttonText}>Add</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.buttonDesign}
           onPress={() => {
             setNewTask("");
           }}
         >
           <Text style={styles.buttonText}>Clear</Text>
         </TouchableOpacity>
       </View>
 
       <View style={{ flex: 0.8, marginTop: 20 }}>
         <FlatList
           keyExtractor={(item) => item.id}
           data={taskList}
           renderItem={(itemData) => (
             <ScrollView>
               <View
                 style={{
                   flexDirection: "row",
                   width: "80%",
                   marginTop: 30,
                   marginLeft: 40,
                   justifyContent: "space-between",
                   alignItems: "center",
                 }}
               >
                 <TouchableOpacity style={styles.taskDesign}>
                   <Text style={{ fontSize: 25,  }}>{itemData.item.value}</Text>
                 </TouchableOpacity>
 
                 <TouchableOpacity
                   onPress={() => {
                     deleteTask(itemData.item.id);
                   }}
                 >
                   <Image
                     style={styles.deleteButton}
                     source={require("./assets/delete-button.png")}
                   />
                 </TouchableOpacity>
               </View>
             </ScrollView>
           )}
         />
       </View>
       <View style={styles.buttonContainer}>
         <TouchableOpacity
           style={[styles.buttonDesign, { width: 150 }]}
           onPress={() => {
             updateTaskList([]);
           }}
         >
           <Text style={styles.buttonText}>Delete All</Text>
         </TouchableOpacity>
       </View>
     </ImageBackground>
     <StatusBar style="auto" />
   </View>
 );
}
 
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#fff",
 },
 inputBox: {
   width: "80%",
   height: 50,
   borderWidth: 5,
   borderColor: "rgba(230, 191, 131,0.7)",
   marginTop: 100,
   fontSize :25,
 },
 buttonDesign: {
   backgroundColor: "rgba(230, 191, 131,0.3)",
   width: 80,
   height: 40,
   borderColor: "black",
   borderWidth: 1,
   borderRadius: 20,
 },
 buttonText: {
   fontSize: 25,
   alignSelf: "center",
   marginTop: 5,
 },
 deleteButton: {
   width: 30,
   height: 30,
 },
 taskDesign: {
   backgroundColor: "rgba(230, 191, 131,0.3)",
   width: "90%",
   height: 30,
   paddingLeft: 20,
  
 },
 buttonContainer: {
   flex: 0.1,
   alignSelf: "center",
   marginTop: 25,
   marginBottom: -75,
 },
});
