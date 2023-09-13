import React from "react";

const Input = ({ input }) => {
    function handleChange(event) {
        const { attribute } = input;
        input.setData((prev) => ({
            ...prev,
            [attribute]: event.target.value,
        }));
    }

    return (
        <label className="flex flex-col gap-1" htmlFor="">
            {input.labelName}
            <input
                className="p-1 w-60 drop-shadow-[0_0_5px_rgba(0,0,0,0.20)] border-gray-500 rounded-xl"
                type={input.type}
                placeholder={input.placeholder}
                value={input.data[input.attribute]}
                onChange={(event) => handleChange(event)}
            />
        </label>
    );
};

export default Input;
