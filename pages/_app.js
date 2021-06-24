import React from "react";
import App from "next/app";
import Head from "next/head";

import "../styles/main.css";
import Nav from "../components/Nav";

export default class MainApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <div>
        <Head>
          <title>Next.js</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        </Head>

        <h1 className="page-title">Hello, Next tutorial 2021</h1>
        
        <Nav />
        <Component />

      </div>
    );
  }
}
