import * as React from "react";
import { View, Alert } from "react-native";
import { Text, Button } from "react-native-elements";
import InputField from "../Utils/inputField";
import validateEmail from "../Utils/ValidateEmail";
import { USER_SIGNUP_MUTATION } from "../../Resolvers/AuthResolvers";
import { useMutation } from "@apollo/react-hooks";
import { useNavigation } from "@react-navigation/native";

export interface SingUpProps {}

const SingUp = (props: SingUpProps) => {
  const navigation = useNavigation();
  const [FirstName, onChangeFirstName] = React.useState("");
  const [LastName, onChangeLastName] = React.useState("");
  const [Email, onChangeEmail] = React.useState("");
  const [UserName, onChangeUserName] = React.useState("");
  const [createUser, { loading, error }] = useMutation(USER_SIGNUP_MUTATION);

  const HandleSignUpSubmission = async () => {
    try {
      const IsValidEmail: Boolean = validateEmail(Email);
      if (Email === "") {
        Alert.alert("Please Provide A valid Email Address");
      } else if (!IsValidEmail) {
        Alert.alert(`${Email} is Not Valid Email `);
      } else if (FirstName === "") {
        Alert.alert("First Name is required");
      } else if (UserName === "") {
        Alert.alert("UserName is required");
      } else {
        try {
          const res = await createUser({
            variables: {
              username: UserName,
              email: Email,
              firstName: FirstName,
              lastName: LastName,
              avatar: "",
              bio: "",
            },
          });
          console.log("HandleSignUpSubmission -> res", res);
          Alert.alert("OPT has been generated and sent to your email address");
          navigation.navigate("Login", { email: Email });
        } catch (error) {
          Alert.alert(`${error.message}`);
          console.log(error.message);
        }
      }
    } catch (error) {
      Alert.alert(`${error.message}`);
      console.log(error.message);
    }
  };
  return (
    <View>
      <Text h3 h3Style={{ textAlign: "center" }}>
        Create New Account
      </Text>

      <InputField
        label="FirstName"
        autoCorrect={false}
        onChangeText={(text: string) => onChangeFirstName(text)}
        value={FirstName}
        returnKeyType="next"
        onSubmitEditing={HandleSignUpSubmission}
      />
      <InputField
        label="LastName"
        autoCorrect={false}
        onChangeText={(text: string) => onChangeLastName(text)}
        value={LastName}
        returnKeyType="next"
        onSubmitEditing={HandleSignUpSubmission}
      />
      <InputField
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        label="Email"
        onChangeText={(text: React.SetStateAction<string>) =>
          onChangeEmail(text)
        }
        value={Email}
        returnKeyType="next"
        onSubmitEditing={HandleSignUpSubmission}
      />
      <InputField
        autoCorrect={false}
        label="UserName"
        onChangeText={(text: string) => onChangeUserName(text)}
        value={UserName}
        returnKeyType="send"
        onSubmitEditing={HandleSignUpSubmission}
      />
      <Button
        title="Submit"
        loading={loading}
        disabled={loading}
        onPress={HandleSignUpSubmission}
      />
    </View>
  );
};

export { SingUp };
