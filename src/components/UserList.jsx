import React from 'react';
// nu uitai sa importati componentele folosite!
import UserItem from './UserItem';

class UserList extends React.Component{
    
    render() {
        // console.log('3.UserList component rendered!');
        // preluam informatiile despre useri
        const { users } = this.props;
        return (
            <div>
                <h2>Users list:</h2>               
                {users.map((user, index) => {
                    // Fiecare obiect de tip user e transformat intr-o componenta UserItem.
                    return <UserItem
                        // Pasam props-urile corespunzatoare.
                        name={user.name}
                        email={user.email}
                        isGoldClient={user.isGoldClient}
                        
                        key={index}
                    />
                })}
            </div>
        );
    }
}

export default UserList;