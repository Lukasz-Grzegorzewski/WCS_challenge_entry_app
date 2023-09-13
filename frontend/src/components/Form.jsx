import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { capitalizeFirstLetter } from "../helpers/helpers";
import Input from "./Input";

const Form = ({ getUsers }) => {
    const [data, setData] = useState({
        firstname: '',
        surname: '',
        age: '',
        role_id: 'Choose the role',
    });
    const [roles, setRoles] = useState([]);

    const selectRef = useRef()

    useEffect(() => {
        getRoles();
    }, []);

    function getRoles() {
        axios
            .get("http://localhost:5001/api/roles")
            .then((roles) => {
                setRoles(roles.data);
            })
            .catch((err) => console.error(err));
    }

    function handleChange(event) {
        setData((prev) => ({
            ...prev,
            role_id: event.target.value,
        }));
    }

    function onSubmit(event){
        event.preventDefault()

        axios
            .post("http://localhost:5001/api/users", data)
            .then((res) => {
                setData({
                    firstname: '',
                    surname: '',
                    age: '',
                })
                selectRef.current.value = "Choose the role"
                getUsers()
             })
            .catch((err) => console.error(err))
    }

    const inputs = [
        {
            attribute: "firstname",
            labelName: "First Name",
            type: "text",
            placeholder: "Enter your name",
            data: { ...data },
            setData: setData,
        },
        {
            attribute: "surname",
            labelName: "Surname",
            type: "text",
            placeholder: "Enter your surname",
            data: { ...data },
            setData: setData,
        },
        {
            attribute: "age",
            labelName: "Age",
            type: "number",
            placeholder: "Enter your age",
            data: { ...data },
            setData: setData,
        },
    ];

    return (
        <div className="flex flex-col gap-2 mt-10">
            <h1 className="text-3xl text-gray-600 text-center">
                Add argonaute
            </h1>
            <form onSubmit={onSubmit} className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <div>
                        <Input input={inputs[0]} />
                        <Input input={inputs[1]} />
                    </div>
                    <div>
                        <Input input={inputs[2]} />
                        <label className="flex flex-col gap-1" htmlFor="">
                            Role
                            <select
                                className={`
                                            p-1 w-60 
                                            drop-shadow-[0_0_5px_rgba(0,0,0,0.20)] 
                                            border-gray-500 
                                            rounded-xl 
                                            ${!roles.some(role => role.id === data.id) && "text-gray-400"} `
                                }
                                value={data.id}
                                onChange={(event) => handleChange(event)}
                                ref={selectRef}
                            >
                                <option>Choose the role</option>
                                {roles &&
                                    roles.length > 0 &&
                                    roles.map((role, index) => (
                                        <option 
                                            key={index}
                                            value={role.id}
                                        >
                                            {capitalizeFirstLetter(
                                                role.role_name
                                            )}
                                        </option>
                                    ))}
                            </select>
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-2 bg-red-100 rounded-xl hover:bg-red-200 hover:drop-shadow-[0_0_5px_rgba(0,0,0,0.20)]"
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default Form;
