import { useState } from "react";
 // generic change function for multiple input fields
 
const useFormFields = (initialState) => {
    const [formData,setFormData] = useState(initialState);
    // update formData from form input
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData=>({
            // copy exisiting data
            ...formData,
            // set key values by name attribute
            [name]:value
        }))
    }
    // reset form
    const resetFormData = () =>{
        setFormData(initialState);
    };
    return [formData,handleChange,resetFormData];
}

export default useFormFields;