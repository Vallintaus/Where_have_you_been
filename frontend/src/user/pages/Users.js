import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {

    const USERS =[
    {
        id: 'u1', 
        name: 'Matti', 
        image: 'https://www.shutterstock.com/image-photo/portrait-mixed-race-alternative-woman-600w-1895481898.jpg',
        places: 3
    } ,
    {
        id: 'u2', 
        name: 'Hippi', 
        image: 'https://www.shutterstock.com/image-illustration/peace-symbol-made-common-metal-600w-2161222931.jpg',
        places: 6
    } 
];
    return <UsersList items={USERS}/>
};

export default Users;