import { StyleSheet, Text, View, Image, Button} from 'react-native';
  
// props
// - built in variable that every component has access to
// - component = custom standalone component
// - screen = (a screen is a component)
const PokemonComponent = (props) => {

    const btnPressed = () => {
        console.log("pressed!") 
        console.log(`What is the data of props: ${typeof(props)}`)       
        console.log(`What is inside the props`)
        console.log(props)   
        // console.log(`license plate: ${props.licensePlate}, type: ${typeof(props.licensePlate)}`)    
        // console.log(`age: ${props.age}, type: ${typeof(props.age)}`)    
        // console.log(`hasPet: ${props.hasPet}, type: ${typeof(props.hasPet)}`)    
        // console.log(`testScores: ${props.testScores}, type: ${typeof(props.testScores)}`)    
        // console.log(`testScores #3: ${props.testScores[2]}, type: ${typeof(props.testScores[2])}`)    
    }
    
    return(       
        <View style={{borderWidth:1}}>
            <Image 
                style={{}}
                source={props.imgFile}
                />  
            <Text style={{fontSize:24}}>                
                Name: {props.pokemonName}
            </Text>
            <Text style={{fontSize:24}}>
                 Attack Power: {props.attackAmt}
            </Text>
            <Button title="Click" onPress={btnPressed}/>
        </View>
    )

}

export default PokemonComponent;