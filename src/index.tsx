import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import VideoList from "./components/Videos/VideoList";
import VideoForm from "./components/Videos/VideoForm";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

import '@fortawesome/fontawesome-free/css/all.css'
import "bootswatch/dist/darkly/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={VideoList} />
          <Route path="/new-video" component={VideoForm} />
          <Route path="/update/:id" component={VideoForm} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
