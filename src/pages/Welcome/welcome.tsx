import { 
    View, 
    Text, 
    Button, 
    Image, 
    TouchableOpacity
} from "react-native";
//import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Logo from '../../assets/logoFinance.png';

export default function Welcome() {
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image
            source={Logo}
            style={{ width: "100%" }}
            resizeMode="contain"
          />
        </View>
  
        <View style={styles.containerForm}>
          <Text style={styles.title}>
            Monitore e organize seus gastos de qualquer lugar!
          </Text>
          <Text style={styles.text}>Faça login para começar</Text>
  
          <TouchableOpacity 
            style={styles.button}
            onPress={ () => navigation.navigate('SignIn')}
          >
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#a665c2",
    },
    containerLogo: {
      flex: 2,
      backgroundColor: "#a665c2",
      justifyContent: "center",
      alignItems: "center",
    },
    containerForm: {
      flex: 1,
      backgroundColor: "#fff",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: "5%",
      paddingEnd: "5%",
    },
  
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 28,
      marginBottom: 12,
    },
  
    text: {
      color: "#c4c4cc",
    },
  
    button: {
      position: "absolute",
      backgroundColor: "#871cfe",
      borderRadius: 50,
      paddingVertical: 8,
      width: "60%",
      alignSelf: "center",
      bottom: "15%",
      justifyContent: "center",
      alignItems: "center",
    },
  
    buttonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
    }
  });