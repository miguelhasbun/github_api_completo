import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export class Search extends Component{
    constructor(){
        super();
        this.state={
            user:''
        }
    }
    render(){
       return(
           <div>
               <input
               type="text"
               value={this.state.user}
               onChange={e=> this.setState({ user: e.target.value})}
               />
               <Link to={`/repos/${this.state.user}`}>Go to Repositories</Link>
       </div>
       ) ;
    }

}
export default Search;