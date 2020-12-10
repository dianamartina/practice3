import React from 'react';
// ATENTIE! Nu uitati sa importati componentele create!
import UserList from './components/UserList';
import PostList from './components/PostList';
import './App.css';

class App extends React.Component {
  constructor() {
    // MOUNTING: cand componenta este montata(incarcata), prima metoda apelata este constructor
    // console.log('1.Constructor called!');
    super();
    // Pentru a putea prelucra informatia userilor, trebuie sa le tinem datele in state
    // structura adecvata este un vector de obiecte.
    this.state = {
      background: 'white',
      // Pana sa vina datele despre useri de la API, users va fi un array gol.
      users: [],
      posts: [],
      showUsers: true
    };
  }

  componentDidMount() {
    // console.log('5.App component finished mounting!');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        const filterUsers = users.filter((user) => user.id <= 4);         
        // this.setState({ users: users})// sau
        this.setState({users: filterUsers})
      })      

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())      
      .then(posts => {
        // console.log(posts);
        // this.setState({posts: info}) 
        const filterPosts = posts.filter((post) => post.id <= 4);
        this.setState({posts: filterPosts})       
      })
      
  }  

  handlerChangeColor(event) {
    this.setState({background: event.target.value});
  }
  
  handlerAddUsers() {    
    // console.log(event);    
    this.setState((prevState) => {
      return {users: prevState.users, showUsers: true};
    });
  }

  handlerAddPosts() {    
    // console.log(event);  
    this.setState((prevState) => {
      return {posts: prevState.posts, showUsers: false };
    });        
  }

  render() {
    
    // console.log('2.App component rendered!');
    return(
      <div className="app" style={{background: this.state.background}}>             
        <h1> Practice 3 </h1>
        {this.state.showUsers === true 
          ? <UserList users={this.state.users}/>
          : <PostList posts={this.state.posts}/> 
        }         

        <input type="color" onChange={(event) => this.handlerChangeColor(event)}/>        
        
        <button onClick={()=>this.handlerAddUsers('users')}>Users</button>
        <button onClick={()=>this.handlerAddPosts('posts')}>Posts</button>

      </div>
    );
  }
}

export default App;
