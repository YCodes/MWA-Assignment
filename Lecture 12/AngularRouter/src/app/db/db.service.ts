import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  constructor() { }

  studentData = [{id:'1', name: 'Asaad Saad', stuID:'12345', email:'abc@gmail.com'}, {id:'2', name: 'Mike Williams', stuID:'12346', email:'abcd@gmail.com'}];
  getData(){
    return this.studentData;
  }

  getDetailsData(id){
    for(var i=0; i<this.studentData.length; i++){
      if(this.studentData[i].id == id){
        return this.studentData[i];
      }
    }
  }
}
