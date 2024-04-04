
export const checkValidation = (email,password,fullName) =>
{
    const isemailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    const ispasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    const isFullnameValid = /^[a-z,',-]+(\s)[a-z,',-]+$/i.test(fullName);

    if(!isemailValid) return "Email is not valid";

    if(!ispasswordValid) return "Password is  not valid";

    if(!isFullnameValid) return "Please enter a valid name";

    return;

    
}





