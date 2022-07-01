import React, {useState} from 'react';
import AddedUsers from "./Components/AddedUsers";
import AddingUserField from "./Components/AddingUserField";

const App = () => {
    let [users, setUsers] = useState([
        {name: 'Mike',age: 31, id: 'g1'},
        {name: 'Kobra',age: 33, id: 'g2'}
    ]);

    const addUser = (valueName, valueAge) => {
        const newUser = {name: valueName, age: valueAge, id: Math.random()}
        setUsers([...users, newUser])
    }

    return (
        <div>
            <AddingUserField addUser={addUser}/>
            <AddedUsers users={users}/>
        </div>
    );
};

export default App;
