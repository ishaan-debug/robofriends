import React,{Component} from "react";
import CardList from './CardList';
// import {robots} from './robots';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import './App.css';

class App extends Component{
    constructor(){
        super();

        this.state={
            robots: [],
            searchfield:''
        }
    }

    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})
        
        //console.log(filterRobots);
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => {this.setState({robots: user})})
    }

    render()
    {
        const filterRobots=this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length===0){
            return <h1 className="tc pa5">Loading</h1>
        }
        else{
            return (
                <div className="tc">
                    <h1 className="f1">Robot</h1>
                    <Searchbox SearchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filterRobots}/>
                    </Scroll>
                    
                </div>
                );
        }
       
    }
}
export default App;