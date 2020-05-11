import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Me } from "./AuthResolvers";

type MeProps = {
  children: React.ReactNode | any;
};

const PleaseLogin: React.FC<MeProps> = ({ children }) => {
  // const { loading, error, data } = useQuery(Me);
  const { loading, error, data, startPolling } = useQuery(Me);
  if (loading) return <p> Loading...</p>;
  if (error) return <p> {Error}</p>;

  if (!data.me) {
    return (
      <>
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Please Sign In before Continuing
        </h2>
        <h1> Login Form</h1>
      </>
    );
  }
  return children;
};

export default PleaseLogin;
