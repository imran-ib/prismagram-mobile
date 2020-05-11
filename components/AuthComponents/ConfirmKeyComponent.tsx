import * as React from "react";
import InputField from "../Utils/inputField";
import { Text } from "react-native-elements";
import { Button } from "react-native-elements";
import { useMutation } from "@apollo/react-hooks";
import { CONFIRM_LOGIN_SECRETE, Me } from "../../Resolvers/AuthResolvers";
import {
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  AsyncStorage,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLogIn } from "../Context/AuthContext";

interface ConfirmKeyComponentProps {
  navigation: any;
}
interface RouteProps {
  email?: string;
}

const ConfirmKeyComponent: React.FC<ConfirmKeyComponentProps> = ({
  navigation,
}) => {
  const route = useRoute();
  const login = useLogIn();
  const values: RouteProps | any = route.params;
  const [email, onChangeEmail] = React.useState(values.email || "");
  const [key, onChangeKey] = React.useState("");
  const [
    RequestLoginSecret,
    { loading, error, called },
  ] = useMutation(CONFIRM_LOGIN_SECRETE, { refetchQueries: [{ query: Me }] });

  if (error) {
    Alert.alert(`Something Went Wrong ${error.message}`);
  }
  const HandleLoginSubmission = async (): Promise<void> => {
    try {
      if (email === "" || key === "") {
        Alert.alert("Please Provide A valid Invalid Key");
      } else {
        const res = await RequestLoginSecret({
          variables: { email, key },
        });
        const token = res.data.ConfirmSecret;
        AsyncStorage.setItem("isLoggedIn", "true");
        AsyncStorage.setItem("Token", token);
      }
      if (called && !error && !loading) {
        return navigation.navigate("Home");
      }
    } catch (error) {
      console.log("HandleLoginSubmission -> error", error.message);
      Alert.alert(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <Text h3 h3Style={{ textAlign: "center" }}>
          Confirm Key
        </Text>
        <InputField
          autoCorrect={false}
          onChangeText={(text: string) => onChangeEmail(text)}
          label="email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          returnKeyType="send"
          onSubmitEditing={HandleLoginSubmission}
        />
        <InputField
          autoCorrect={false}
          onChangeText={(text: string) => onChangeKey(text)}
          label="One Time Password"
          keyboardType="default"
          autoCapitalize="none"
          value={key}
          returnKeyType="send"
          onSubmitEditing={HandleLoginSubmission}
        />
        <Button
          onPress={HandleLoginSubmission}
          loading={loading}
          disabled={loading}
          title="Submit"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ConfirmKeyComponent;
