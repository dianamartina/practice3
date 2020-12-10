import React from 'react';

function UserItem(props) {
    // Adaugam un prop nou: isGoldClient - daca e true => afisam mesajul "Client GOLD",
    // altfel nu afisam nimic.
    const {name, email, isGoldClient} = props;
    return (
        <div >
            <h3>{ name }</h3>
            <p>{ email }</p>            
            { isGoldClient // Daca isGoldClient are valoare truthy, intra pe prima ramura (dupa ?).
                ? <h3>Client GOLD</h3>
                : null
            }
           
        </div>
    );
}

export default UserItem;