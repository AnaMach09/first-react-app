import React from "react";


export const Child = ({userList, isUserLogedIn}) => {
    console.log(userList)
    if(!isUserLogedIn){
        return <h1>
            you are not authorized
        </h1>
    }
    return <div>{isUserLogedIn && (<>
    {userList.map((item) => {
        return <div>
            <h1>{item.name}</h1>;
         <h1>{item.lastName}</h1>
            <h1>{item.age}</h1>
        </div> 
    })}
    </>)}</div>;
    
}