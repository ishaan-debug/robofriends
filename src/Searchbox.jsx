import React from "react";

const Searchbox= ({Searchfield,SearchChange})=>{
    return (
        <div className="pa2">
            <input 
            className="b--green bg-light-green pa3 ba "
            type="search" 
            placeholder="search here" 
            onChange={SearchChange}
            />
        </div>
    );
}
export default Searchbox;