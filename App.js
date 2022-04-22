import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableHighlight,
  TextInput,
  Alert,
  Modal
} from 'react-native';


function App(){

  const[result,setResult]= useState('')
  const[visible,setVisible]=useState(false)

  var onDigitPress=(digit)=>{
    setResult(result+digit)
  }

  const onEqualsPress=()=>{
    if(result=='1+3+9'){
      setVisible(true)
    }
  }

  const onClearPress=()=>{
    setResult('')
  }

  const onModalPress=()=>{
    setVisible(false)
  };

  return(
    <View style={styles.container}>

      <View style={styles.typeView}>
        <Text style={styles.calcDisplay}>{result}</Text>
      </View>

      <View style={styles.numberView}>

        <View style={styles.verticalView}>
          <TouchableHighlight style={styles.boxView} onPress={()=>onClearPress()}>
            <Text style={styles.textView}>C</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.boxView} onPress={()=>onDigitPress('7')}>
            <Text style={styles.textView}>7</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.boxView} onPress={()=>onDigitPress('4')}>
            <Text style={styles.textView}>4</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.boxView} onPress={()=>onDigitPress('1')}>
            <Text style={styles.textView}>1</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.boxView} onPress={()=>onDigitPress('.')}>
            <Text style={styles.textView}>.</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.verticalView}>
          <TouchableHighlight style={styles.boxView} >
            <Text style={styles.textView}>+/-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.boxView} onPress={()=>onDigitPress('8')}>
            <Text style={styles.textView}>8</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.boxView} onPress={()=>onDigitPress('5')}>
            <Text style={styles.textView}>5</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.boxView} onPress={()=>onDigitPress('2')}>
            <Text style={styles.textView}>2</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.boxView} onPress={()=>onDigitPress('0')}>
            <Text style={styles.textView}>0</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.verticalView}>
          <TouchableHighlight style={styles.boxView} onPress={()=>onDigitPress('%')}>
            <Text style={styles.textView}>%</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.boxView} onPress={()=>onDigitPress('9')}>
            <Text style={styles.textView}>9</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.boxView} onPress={()=>onDigitPress('6')}>
            <Text style={styles.textView}>6</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.boxView} onPress={()=>onDigitPress('3')}>
            <Text style={styles.textView}>3</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.boxView}>
            <Text style={styles.textView}>oo</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.lastVerticalView}>
          <TouchableHighlight style={styles.boxView} onPress={()=>onDigitPress('/')}>
            <Text style={styles.textView}>/</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.boxView} onPress={()=>onDigitPress('×')}>
            <Text style={styles.textView}>×</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.boxView} onPress={()=>onDigitPress('-')}>
            <Text style={styles.textView}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.boxView} onPress={()=>onDigitPress('+')}>
            <Text style={styles.textView}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.equalBoxView} onPress={()=>onEqualsPress()}>
            <Text style={styles.textView}>=</Text>
          </TouchableHighlight>
        </View>

      </View>

      <Modal visible={visible} transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer} >
              <Text style={{fontSize:50,fontWeight:'bold',position:'absolute',top:40,right:40,color:'#6e6500'}} onPress={()=>onModalPress()}>×</Text>
            <Text style={styles.modalTextView}>H e l l o  W o r l d</Text>
          </View>
        </View>
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#2e2e2e',
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  verticalView:{
    width:76,
    height:'100%',
    margin:9
  },
  numberView:{
    width:'100%',
    height:'50%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:15,
    marginTop:15
  },
  boxView:{
    width:'100%',
    height:'20%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50
  },
  textView:{
    color:'#fff',
    fontSize:25,
  },
  lastVerticalView:{
    width:76,
    height:'100%',
    backgroundColor:'#1c1c1c',
    borderRadius:50,
    margin:9
  },
  equalBoxView:{
    width:'100%',
    height:'20%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#6e6500',
    borderRadius:50
  },
  typeView:{
    width:'90%',
    height:'45%',
    borderColor:'#000',
    borderBottomWidth:2,
    alignItems:'flex-end',
    justifyContent:'flex-end'
  },
  calcDisplay:{
    fontSize:40,
    fontWeight:'300',
    color:'#fffcdb',
    marginBottom:9
  },
  modalBackground:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    opacity:0.7
  },
  modalContainer:{
    width:300,
    backgroundColor:'#fff',
    height:300,
    borderRadius:75,
    alignItems:'center',
    justifyContent:'center'
  },
  modalTextView:{
    fontSize:25,
    fontWeight:'400'
  }
});

export default App;
