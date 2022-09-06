import React, {useState} from 'react';
import{View, TouchableOpacity, Text, TextInput,StyleSheet, ScrollView} from 'react-native';

export default function App() {
    const funcionarios = [
        {
            "nome":"Maria",
            "cargo":"Funcionaria"
        },
        {
            "nome":"Julio",
            "cargo":"Gerente"
        }
    ];

    const [name, setName] = useState('');
    const [cargos, setCargos] = useState('');
    const [funcio, setFuncio] = useState('');

     
    return(



    <View style={style.container}>
      
        <View style={style.cont}>
        <TextInput style={style.input} placeholder='Nome...' onChangeText={text=>setName(text)}></TextInput>
        <TextInput style={style.input} placeholder='Cargo...' onChangeText={text=>setName(text)}></TextInput>
        <TouchableOpacity style={style.btExclui} onPress={()=>cadastraFuncio()}><Text>Cadastrar</Text></TouchableOpacity>
        
        <View>
        <ScrollView>
            {
                funcionarios.map(funcios =>{
                    return(
                        <View>
                            <Text style={style.users}>{`${funcios.nome} - ${funcios.cargo}`}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
        </View>
        </View>
    </View>
);
          }

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E4EAFA',
  },
  cont: {
     border: ' 1px solid #000000',
     width: '67%',
     height: '40%',
     backgroundColor: '#ffffff',

  },
  input : {
    backgroundColor: '#ffffff',
    borderBottomWidth: '1px',
    borderBottomColor: '#CFD1E3',
    padding: '5px',
    marginTop: '5px',
    marginBottom: '5px',
    marginLeft: '24px',
    alignContent: 'center',
    width: '80%',
  
  },
  btExclui: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BDE0F7',
    border: 'none',
    borderRadius: '10px',
    padding: '4px',
    marginTop: '5px',
    marginBottom: '15px',
    marginLeft: '25px',
    width: '80%',
  },
  users: {
    backgroundColor: '#ffffff',
    borderBottomWidth: '1px',
    borderBottomColor: '#CFD1E3',
    padding: '5px',
    marginTop: '5px',
    marginBottom: '5px',
    marginLeft: '24px',
    alignContent: 'center',
    width: '80%',
  },
});