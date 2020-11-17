import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Identifiers } from '@angular/compiler';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-student-form2',
  templateUrl: './student-form2.component.html',
  styleUrls: ['./student-form2.component.css']
})
export class StudentForm2Component implements OnInit {
 item=[ ];
  todos;
  text;
  oldid
  appState = 'default' ;
  constructor(private router:Router) { }

  ngOnInit(): void {

    this.getItem();
  }
getItem(){
      this.item = JSON.parse(localStorage.getItem('studentform'));
    }
edit(id: Number){
  localStorage.removeItem('update');
  this.router.navigate(['/three/' + Number(id)]);
  console.log(id ,'id from list'); 

  localStorage.setItem('update',JSON.stringify(id));
}
deleteitem(id) {
  for(let i = 0; i < this.item.length; i++) 
  {
    if(this.item[i].id == id) {
       this.item.splice(i,1) 
       localStorage.setItem( 'studentform',JSON.stringify(this.item));
      }
    }
  }
}







