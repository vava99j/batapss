import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'yellow',
  },
 logoConteiner:{
  flexDirection:'column',
  
  justifyContent:'center',
  alignSelf:'center',
  marginBottom:20,
  paddingTop:20
 },
 inputConteiner: {
  justifyContent:'center',
  alignSelf:'center',
  flexDirection:'column',
  marginBottom:20,
  textAlign:'center',

 },
 
});

export default styles