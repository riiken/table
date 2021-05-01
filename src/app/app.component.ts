import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table';
ulist=Array();
data=Array();
user:any;
isDesc:boolean=true;
way:any;
// 

 adduser(naam,saal){
   if(naam.value.length>0 &&saal.value.length>0){
   this.ulist.push({
     name:naam.value,
     age:saal.value
   });
   naam.value="";
   saal.value="";
  }

 }

 delete(item){
   this.ulist.splice(item,1);
 }


 sortData(){
   if(this.user){
   let newarr=this.ulist.sort((a,b)=>a.age - b.age);
   this.data=newarr;
 }else{
  let newarr=this.ulist.sort((a,b)=>b.age - a.age);
  this.data=newarr;
 }
 this.user=!this.user;
}

sortName(property){
  this.isDesc=!this.isDesc;
  let way=this.isDesc?1:-1;
  this.ulist.sort(function (a,b) {
    if(a[property]<b[property]){
      return -1*way;;
    }else if(a[property]>b[property]){
      return 1*way;
    }
    else{
      return 0;
    }
  })
}
}

