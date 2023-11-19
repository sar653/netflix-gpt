

 const checkValidate=(email,password,username)=>{
   
    const isEmailValid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)

     const isPasswordValid=  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
     .test(password)

    // const isUsernameValid= /^[A-Za-z]\\w{5, 29}$/.test(username)


     if(!isEmailValid) return "Email is not valid";

     if(!isPasswordValid) return "Email is not valid";
      
    // if(!isUsernameValid) return"usernameis not valid"


    
     return null
}
export default checkValidate