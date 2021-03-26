import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import AddCourse from "./components/Courses/AddCourse";
import UpdateCourse from "./components/Courses/UpdateCourse";
import DeleteCourse from "./components/Courses/DeleteCourse";
import Courses from "./components/Courses/Courses";
import "./custom.css"

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/add" component={AddCourse} />
        <Route path="/update/:id" component={UpdateCourse} />
        <Route path="/delete/:id" component={DeleteCourse} />
      </Layout>
    );
  }
}
