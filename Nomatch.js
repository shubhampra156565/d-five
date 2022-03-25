import React from "react";
const Nomatch=({history})=> {
    
        return(
            <div style={{marginleft:'10px'}}>
                <h1>
                    404 Page
                    <p>
                        redirectiong to 
                        {/* <span style={{color:'dodgerblue'} } onclick={()=>history.push='/'}> Log in </span> */}
                        </p>
                </h1>
            </div>

        )
    
}
export default Nomatch;