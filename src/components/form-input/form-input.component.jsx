import React from "react";
import "./form-input.styles.scss";

function FormInput({handleChange,label,value, ...otherProps}){
    return(
        <div className="group">
            <input className="form-input" onChange={handleChange} value={value} {...otherProps} autoComplete="on"/>
            { label?
            <label className={`${value.length? "shrink":""} form-input-label`}>
                {label}
            </label>
            :null
            }
        </div>
    )

}

export default FormInput;
