import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AsyncStorage } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import ApolloClientOptions from "./apollo";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/GlobalStyles";
import { AuthProvider } from "./components/Context/AuthContext";
import AuthHome from "./screens/AuthHome";
import ConfirmKey from "./screens/ConfirmKey";
import Signup from "./screens/Singup";
import Login from "./screens/Singin";
import MainTabs from "./Navigations/MainTabs";
import UploadPhoto from "./screens/photo/UploadPhoto";
import MessageNavigations from "./Navigations/MessagesNavigation";

type MainAppParamList = {
  MainTabs: undefined;
  UploadPhoto: undefined;
  AuthHome: undefined;
  ConfirmKey: undefined;
  Signup: undefined;
  Login: undefined;
  Message: undefined;
};

const Stack = createStackNavigator<MainAppParamList>();

function App(): JSX.Element {
  const [Loaded, setLoaded] = React.useState<Boolean>(false);
  const [Client, setClient] = React.useState<any>(undefined);
  const [isLoggedin, setisLoggedin] = React.useState<Boolean>(false);

  const preLoad: () => Promise<void> = async () => {
    try {
      await Font.loadAsync({
        ...Ionicons.font,
      });
      await Asset.loadAsync([require("./assets/logo.svg.webp")]);

      const cache = new InMemoryCache();
      await persistCache({
        cache: cache,
        //@ts-ignore
        storage: AsyncStorage,
      });
      const client = new ApolloClient({
        cache,
        ...ApolloClientOptions,
      });

      const UserIsLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      if (
        UserIsLoggedIn === null ||
        UserIsLoggedIn === undefined ||
        //@ts-ignore
        UserIsLoggedIn === false
      ) {
        setisLoggedin(false);
      } else {
        setisLoggedin(true);
      }

      setClient(client);
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    preLoad();
  }, []);

  return (
    <>
      {Loaded && Client ? (
        <ApolloProvider client={Client}>
          <ThemeProvider theme={theme}>
            <AuthProvider isLoggedin={isLoggedin}>
              <NavigationContainer>
                <Stack.Navigator>
                  {isLoggedin === true ? (
                    <>
                      <Stack.Screen
                        name="MainTabs"
                        component={MainTabs}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="Message"
                        component={MessageNavigations}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="UploadPhoto"
                        component={UploadPhoto}
                        options={{ headerShown: false }}
                      />
                    </>
                  ) : (
                    <>
                      <Stack.Screen
                        name="AuthHome"
                        component={AuthHome}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen name="ConfirmKey" component={ConfirmKey} />
                      <Stack.Screen name="Signup" component={Signup} />
                      <Stack.Screen name="Login" component={Login} />
                    </>
                  )}
                </Stack.Navigator>
              </NavigationContainer>
            </AuthProvider>
          </ThemeProvider>
        </ApolloProvider>
      ) : (
        <AppLoading />
      )}
    </>
  );
}

export default App;
