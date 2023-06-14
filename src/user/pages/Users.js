import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  let user = [
      {id: '0001',
        name: 'Henry',
        places: 3,
        image: 'https://wallpapers.com/images/featured-full/cool-profile-pictures-4co57dtwk64fb7lv.jpg'}
            ]
    return(
        <UsersList items ={user}/>
   )
}

export default Users