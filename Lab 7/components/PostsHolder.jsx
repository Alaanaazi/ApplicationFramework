import React from 'react';
import Posts from './Posts';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import AddPost from './AddPost';


export default class PostsHolder extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = {
        posts: [
            {
            id: 1,
            name: 'React',
            description: 'Best UI library'
            }, {
            id: 2,
            name: 'Node',
            description: 'Server side JS'
            }
           ]
    }
    }

    
    addNewPost ({name, description}) {
        const post = {
            id: this.state.posts.length + 1,
            name,
            description
        }

        this.setState({posts: [...this.state.posts,post]});
    }
    

       
    render() {

        const posts = [
            {
            id: 1,
            name: 'React',
            description: 'Best UI library'
            }, {
            id: 2,
            name: 'Node',
            description: 'Server side JS'
            }
           ];
           
           
    return (<React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Posts posts={this.state.posts} />
                        </Route>
                        <Route path="/add">
                            <AddPost save = {this.addNewPost.bind(this)}/>
                        </Route>
                    </Switch>
                </Router>

                
            </React.Fragment>
    )
    }
   }
   