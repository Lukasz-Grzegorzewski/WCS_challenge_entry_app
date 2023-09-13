import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../helpers/helpers";
import axios from "axios";

const ListUsers = ({ users, getUsers }) => {
    
    function handleDelete(id) {
        axios
            .delete(`http://localhost:5001/api/users/${id}`)
            .then(res => getUsers() )
            .catch(err => console.error(err))
    }

    return (
        <div className="flex-1 w-screen mt-10">
            <h1 className="text-3xl text-gray-600 text-left ml-10">
                List of users :
            </h1>
            {users && users.length > 0 && (
                <table className="ml-5 mt-5 table-auto rounded-xl truncate border border-red-200">
                    <thead className="rounded-xl">
                        <tr className="bg-red-200 p-50">
                            <th className="w-5 px-6 py-4"></th>
                            {Object.keys(users[0])
                                .slice(1)
                                .map((key) => (
                                    <th
                                        className="px-5 py-4 text-center"
                                        key={key}
                                    >
                                        {capitalizeFirstLetter(key)}
                                    </th>
                                ))}
                            <th className="px-5">
                                <img
                                    className="w-5 pt-1 "
                                    src="src/assets/delete3.png"
                                    alt="bin"
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr
                                className={
                                    index % 2 != 0
                                        ? "bg-red-100 p-50  hover:bg-red-400 text-center"
                                        : "hover:bg-red-400 text-center"
                                }
                                key={index}
                            >
                                <td className="px-2 py-2 border border-red-200">
                                    {index + 1}
                                </td>
                                <td className="border border-red-200">
                                    {user.firstname}
                                </td>
                                <td className="border border-red-200">
                                    {user.surname}
                                </td>
                                <td className="border border-red-200">
                                    {user.age}
                                </td>
                                <td className="border border-red-200">
                                    {user.role_name}
                                </td>
                                <td className="border border-red-200">
                                    <button onClick={() => handleDelete(user.id)}>
                                        <img
                                            className="w-7 pt-1 hover:scale-[1.20]"
                                            src="src/assets/delete2.png"
                                            alt="bin"
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ListUsers;
