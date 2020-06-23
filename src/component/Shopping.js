import React from 'react';
import {Link} from 'react-router-dom';

const Shoppinglist=(props)=>{

    const renderList=({shoppingdata})=>{
        if(shoppingdata){
            return shoppingdata.map((item)=>{
                const myimage={
                    background:`url('/images/covers/${item.cover}.jpg')`                    
                }
                return(
                    <Link to="/"  className="artist_item" style={myimage} key={item._id}>                   
                      <div>{item.name}</div>
                       
                    </Link>
                )
            })
        }

    }
    return(
        <div className="artist-list">
            <h4>List of shopping</h4>
            {renderList(props)}
        </div>
    )
    
}
export default Shoppinglist;