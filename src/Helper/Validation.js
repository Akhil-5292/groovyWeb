export const emailValidations = (email) =>{
    const emailRegix = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(emailRegix.test(email)){
        return 'true'
    }else{
        return 'false'
    }
};
export const passwordValidations = (password) =>{
    const passwordRegix = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
    if(passwordRegix.test(password)){
        return 'true'
    }else{
        return 'false'
    }
};
export const userValidations = (user) =>{
    const userRegix = /^[a-zA-Z0-9]+([_\s/\-]?[a-zA-Z0-9])*$/;
    if(userRegix.test(user)){
        return 'true'
    }else{
        return 'false'
    }
};