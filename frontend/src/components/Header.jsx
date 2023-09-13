import React from "react";

const Header = () => {
    return (
        <div className="bg-gradient-to-r 
                        from-0%
                        from-white
                        from-10%
                        to-red-500
                        h-40 
                        flex justify-center items-center
                        w-screen
                        drop-shadow-[0_0_20px_rgba(0,0,0,0.20)]"
        >
            <img className="w-40 absolute top-5 left-5" src="src/assets/logo.png" alt="logo" />
            <h1 className="text-6xl text-gray-600">Argonautes</h1>
        </div>
    );
};

export default Header;
