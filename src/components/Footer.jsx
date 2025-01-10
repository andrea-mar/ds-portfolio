import React from "react";

function Footer(){
    return(
        <div className="mb-5 text-center" >
            <p className=" text-sm 2xl:text-lg opacity-50">
                &copy; {new Date().getFullYear()} Andreea Nistor. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;