import React, {useState} from 'react';
import style from './AddingUserField.module.css'

const AddingUserField = (props) => {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState(0)

    const changeNameHandler = (e) => {
        setUserName(e.currentTarget.value)
    }
    const changeAgeHandler = (e) => {
        setUserAge(e.currentTarget.value)
    }
    const addUserHandler = () => {
        props.addUser(userName, userAge)
        setUserName('')
        setUserAge(0)
    }


    return (
        <div className={style.mainDiv}>
            <div className={style.userField}>
                Username
                <input type="text" value={userName} onChange={changeNameHandler}/>
                Age (Years)
                <input type="number" value={userAge} onChange={changeAgeHandler}/>
            </div>
            <button className={style.button} onClick={addUserHandler}>Add User</button>
        </div>
    );
};

export default AddingUserField;