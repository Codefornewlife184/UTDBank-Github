export const isEqualfromAccount=(transfer,accNo)=>{
    if(transfer.fromAccountId===accNo){
      return true;
    }else return false;
  }
export const isEqualtoAccount=(transfer,accNo)=>{
    if(transfer.toAccountId===accNo){
      return true;
    }else return false;
  }