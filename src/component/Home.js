import React,{Component, Fragment} from 'react';
import Banner from './Banner';
import Shopping from './Shopping';


const url=" http://localhost:3000/items";



class Home extends Component{
        constructor(){
            super()
            this.state={
                shopping:''
            }
        
        }
        render(){
            return(
                <Fragment>
                     <Banner/>
                     <h1 className="container">SHOPPING APP</h1>
                     <Shopping shoppingdata={this.state.shopping}/>
                </Fragment>
                

                )
        }
        componentDidMount(){
            fetch(url,{
                method:'GET'
            })
            .then((res) => res.json())
            .then((data) => {
               console.log(data)
               this.setState({shopping:data})
            
            })
        }
    
        
}
export default Home;