 import React from "react";

const Validation = (values) => {
    let errors = {};

    if(!values.name){
        errors.name = "Name is required"
    }
    if(!values.email){
        errors.email = "email is required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Name is invalid";
    }
    if(!values.city){
        errors.city = "City name is required"
    }
    if(!values.password){
        errors.city = "Name is required"
    }else if(values.password.length < 5 ){
        errors.password = 'Password must be more than five characters'
    }

    return errors;
}

export default Validation
