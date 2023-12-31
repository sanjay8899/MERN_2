import React from "react";

import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";
import "./UsersList.css"

const UsersList = (props) => {
    if(props.items.length === 0)
    {
        return (
            <Card>
        <h2 className="center">No Users found</h2>
        </Card>
        )
    }
return <ul className="users-list">
    {props.items.map((user)=><UserItem key = {user.id} 
    id = {user.id} 
    name = {user.name} 
    image = {user.image}
     placeCount = {user.places}/>
     )}
</ul>
}

export default UsersList