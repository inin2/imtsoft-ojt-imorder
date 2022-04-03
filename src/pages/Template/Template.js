import React from "react";
import './Template.css'

function Template({children}) {
    return (
    <div className="mobile_wrap">
        {children}
    </div>
    );
}

export default Template;