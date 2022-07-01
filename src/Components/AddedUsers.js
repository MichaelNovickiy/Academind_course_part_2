import React from 'react';
import style from './AddingUserField.module.css'

const AddedUsers = (props) => {
    return (
        <div className={style.mainDiv}>
            {props.users.map(user => <div key={user.id}>
                {user.name} ({user.age} years old)
            </div>)}
        </div>
    );
};

export default AddedUsers;