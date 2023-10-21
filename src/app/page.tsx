"use client";

import { useState , useEffect } from "react";
import {
  SismoConnectButton,
  SismoConnectResponse,
  SismoConnectVerifiedResult,
} from "@sismo-core/sismo-connect-react";
import { CONFIG, AUTHS, CLAIMS, SIGNATURE_REQUEST, AuthType } from "./sismo-connect-config";
import "./home.css";

export default function Home() {
  const [sismoConnectVerifiedResult, setSismoConnectVerifiedResult] =
    useState<SismoConnectVerifiedResult>();
  const [sismoConnectResponse, setSismoConnectResponse] = useState<SismoConnectResponse>();
  const [pageState, setPageState] = useState<string>("init");
  const [error, setError] = useState<string>("");

  const [name , setName] = useState<string>("")

  useEffect(()=>{
    const checkAuth =async () => {
      const res = await fetch("http://localhost:8000/check-authentication",{
      credentials:'include'
     })
     if(res.ok){
      window.location.replace('http://localhost:3000/home')
     }
    }
    checkAuth()
  }, [])


  const handleLogin = async ()=>{
    console.log(sismoConnectVerifiedResult)
    if(sismoConnectVerifiedResult){
     const body = {
      name,
      walletAddress:sismoConnectVerifiedResult.auths?.[0].userId
    }
    console.log(body)
    const res = await fetch('http://localhost:8000/auth' , {
      method:"POST",
      body:JSON.stringify(body),
       headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    const res1 = await res.body
    if(res.ok){
      window.location.replace("http://localhost:3000/choose")
    } }
   }
    return (
        <main className="main dark">
        <div className="hvcenter w-full h-screen">
          <h1 className="mb-2 text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
            Welcome to
          </h1>
          <h1 className="mb-8 text-6xl bg-clip-text bg-gradient-to-r from-oran font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-9xl dark:text-white">
            DeFund
          </h1>
          {pageState == "init" ? (
              <SismoConnectButton
                overrideStyle={{
                  background: '#fc711a',
                  border: 'none',

                }}
                config={CONFIG}
                auths={AUTHS}
                claims={CLAIMS}
                signature={SIGNATURE_REQUEST}
                text="SSO with Sismo"
                onResponse={async (response: SismoConnectResponse) => {
                  setSismoConnectResponse(response);
                  setPageState("verifying");

                  const verifiedResult = await fetch("/api/verify", {
                    method: "POST",
                    body: JSON.stringify(response),
                  });
                  const data = await verifiedResult.json();
                  console.log(data);
                  if (verifiedResult.ok) {
                    setSismoConnectVerifiedResult(data);
                    setPageState("verified");
                  } else {
                    setPageState("error");
                    setError(data);
                  }
                }} />): (
            
            <div className="status-wrapper">
              
              {///@ts-ignore
               pageState === "verifying" ? (
                <span className="verifying"> Verifying ZK Proofs... </span>
              ) : (
                <>
                  {Boolean(error) ? (
                    <span className="error"> Error verifying ZK Proofs: {error} </span>
                  ) : (
                    <span className="verified"> ZK Proofs verified!</span>
                  )}
                </>
              )}
            </div>
                )}
        {sismoConnectVerifiedResult && (
          <>
            <input onChange={(e)=>setName(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
          </>
        )} 
      </div>
      </main> 
    );
};