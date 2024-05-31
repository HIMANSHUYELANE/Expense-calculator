import React, { useState } from "react";
import InputField from "./InputField";
import Select from "./Select";

export default function Form({ setExpenses }) {
  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  // const [amount, setAmount] = useState("");
  const [errors, setErrors]=useState({})
  
  const validator =(formData)=>{
  console.log(formData)
  let  errorData={}
  if(!formData.title){
    errorData.title='Title is Required'
  }
  if(!formData.category){
    errorData.category='select the category'
  }
  if(!formData.amount){
    errorData.amount='Amount is Required'
  }
  setErrors(errorData)
  return errorData
 }

  const [exp, setExp] = useState({
    id: crypto.randomUUID(),
    title: "",
    category: "",
    amount: "",
  });

  function handler(e) {
    e.preventDefault();
    const validate=validator(exp)
    console.log(Object.keys(validate))
    if(Object.keys(validate).length) return
    // const exp={...getFormData(e.target), id: crypto.randomUUID()}
    // console.log(getFormData(e.target))
    setExpenses((prevState) => [
      ...prevState,
      { ...exp, id: crypto.randomUUID() },
    ]);
    setExp({
      title: "",
      category: "",
      amount: "",
    });
    // e.target.reset()
  }
  const handleChange = (e) =>{
    const {name,value}=e.target
 setExp((prevState) => ({ ...prevState, [name]: value }))
  }
  // function getFormData(form){
  //     const formData=  new FormData(form)
  //     const Data={}
  //     for(const [key,value] of formData.entries()){
  //         Data[key]=value
  //     }
  //     // console.log(Data)
  //     return Data
  // }
  return (
    <form className="expense-form" onSubmit={handler}>
      <InputField
      label='Title'
      id='title'
      name='title'
      value={exp.title}
      onChange={handleChange}
      error={errors.title}
       />
       
      <Select
      label='Catogory'
      id='category'
      name='category'
      options={['grocery','clothes','bills','education','medicine']}
      value={exp.category}
      onChange={handleChange}
      error={errors.category}
       />


      <InputField
      label='Amount'
      id='amount'
      name='amount'
      value={exp.amount}
      onChange={handleChange}
      error={errors.amount}
       />
      <button className="add-btn border-2 ">Add</button>
    </form>
  );
}
