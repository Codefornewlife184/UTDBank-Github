

export const isUserEmployeeorManager=(user)=>{
    if(user.roles.includes("Employee") || user.roles.includes("Manager")){
    return user.roles && true;
}
}


export const isUserManager = (roles) => {
  return roles && roles.includes("Manager");
};

export const isUserEmployee = (roles) => {
  return roles && roles.includes("Employee");
};


export const isUserCustomer = (roles) => {
  return roles && roles.includes("Customer");
};





