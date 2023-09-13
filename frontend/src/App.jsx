import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import ListUsers from "./components/ListUsers";
import axios from "axios";

function App() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])
    
    function getUsers() {
        axios
            .get("http://localhost:5001/api/users")
            .then((result) => setUsers(result.data) )
            .catch(err => console.error(err))
    }

    return (
        <div className="w-screen min-h-screen flex flex-col justify-center items-center">
            <Header />
            <Form getUsers={getUsers}/>
            <ListUsers users={users} getUsers={getUsers}/>
            <Footer />
        </div>
    );
}

export default App;
