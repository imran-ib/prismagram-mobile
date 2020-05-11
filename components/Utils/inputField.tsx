import * as React from "react";
import { Input, Text, Button } from "react-native-elements";
import styled from "styled-components/native";
import { TextInput, View } from "react-native";
import { screen } from "./Dimensions";

const ScreenWidth = Math.floor(screen.width / 1.5);

const InputFieldStyles = styled(Input).attrs({
  width: ScreenWidth,
})``;

/* const InputFieldStyles = styled.TextInput`
  border: ${({ theme }) => theme.lightGreyColor};
  border-radius: 5px;
  width: ${Math.floor(screen.width / 1.5)}px;
  margin-bottom: 20px;
  padding: 10px;
`; */

const Wrapper = styled.View`
  margin: 0 15px;
  margin-top: 20px;
`;

interface InputFieldProps {
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  returnKeyType?: "done" | "go" | "next" | "search" | "send";
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "number-pad"
    | "decimal-pad"
    | "visible-password"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "name-phone-pad"
    | "twitter"
    | "web-search"
    | undefined;
  label?: string;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
  value?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  autoCorrect?: boolean;
}

const InputField: React.SFC<InputFieldProps> = ({
  autoCapitalize = "none",
  keyboardType = "default",
  label,
  onChangeText,
  value,
  placeholder,
  secureTextEntry = false,
  autoCorrect = false,
  returnKeyType = "done",
  onSubmitEditing = () => null,
}) => {
  return (
    <Wrapper>
      <InputFieldStyles
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        label={label}
        value={value}
        secureTextEntry={secureTextEntry}
        autoCorrect={autoCorrect}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
      />
    </Wrapper>
  );
};

export default InputField;
