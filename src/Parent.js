import React from "react";
import {Child} from "./Child";
const users = [
    {
      name: 'ana',
      lastName: 'match',
      age: 25,
      id: 1
    },
    {
      name: 'mar',
      lastName: 'kapa',
      age: 30,
      id: 2
    },
    {
      name: '',
      lastName: '',
      age: '',
      id: ''
    }
    
  ];
export const Parent = () => {
    return <div>
        <Child userList={users} isUserLogedIn={true} />
    </div>;
    
}