import React from "react";
import { useSubscription } from "@apollo/react-hooks";
import { ChatSubscription } from "./AuthResolvers";

const Suscriptios = () => {
  const { data, loading, error } = useSubscription(ChatSubscription, {
    variables: {
      text: "Hellolll",
      chatId: "ck7z3y3p3ac2t0950io1h1f51"
    }
  });
  if (loading) return <p>Loading</p>;
  if (error) return <p>{error.message}</p>;

  console.log("data", data);

  return <div>Hello</div>;
};

export default Suscriptios;
