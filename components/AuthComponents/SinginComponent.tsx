import * as React from "react";
import InputField from "../Utils/inputField";
import { Text } from "react-native-elements";
import { Button } from "react-native-elements";
import { useMutation } from "@apollo/react-hooks";
import { REQUEST_LOGIN_SECRETE } from "../../Resolvers/AuthResolvers";
import { View, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import validateEmail from "../Utils/ValidateEmail";
import { useNavigation, useRoute } from "@react-navigation/native";

interface SignInComponentProps {}
interface RouteProps {
  email?: string;
}

const SignInComponent: React.FC<SignInComponentProps> = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const values: RouteProps | any = route.params;
  const [value, onChangeText] = React.useState(
    values.email || "imran.ib@live.com"
  );
  const [RequestLoginSecret, { loading, error }] = useMutation(
    REQUEST_LOGIN_SECRETE
  );
  if (error) {
    Alert.alert(`Something Went Wrong ${error.message}`);
  }
  const HandleLoginSubmission = async (): Promise<void> => {
    try {
      const IsValidEmail: Boolean = validateEmail(value);
      if (value === "") {
        Alert.alert("Please Provide A valid Email Address");
      } else if (!value.includes("@") || !value.includes(".")) {
        Alert.alert("Please Provide Valid Email Address");
      } else if (!IsValidEmail) {
        Alert.alert(`${value} is Not Valid Email `);
      } else {
        const res = await RequestLoginSecret({
          variables: { email: value },
        });

        Alert.alert("OPT has been generated and sent to your email address");
        navigation.navigate("ConfirmKey", { email: value });
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
          Login
        </Text>
        <InputField
          autoCorrect={false}
          onChangeText={(text: string) => onChangeText(text)}
          label="email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={value}
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

export default SignInComponent;
