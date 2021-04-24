import React from 'react';
import PostsHolder from './components/PostsHolder';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


export default class App extends React.Component {
 constructor(props) {
 super(props);
 }

 
 render() {
    

    return <PostsHolder />

   
 }
}
