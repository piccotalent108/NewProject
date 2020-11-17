import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  LoginForm: FormGroup;
  array = [ ];
  items = [ ];
  
   constructor(private fb: FormBuilder, private router: Router) { }
 
   ngOnInit() {
     if( JSON.parse(localStorage.getItem('studentform')))
     {
      this.array = JSON.parse(localStorage.getItem('studentform'));
     }
    
   this.createform();
  //  this.update();
  console.log('hello world');
  console.log('the value is',this.array);
  

  
 
   
   }
  public createform() {
  this.LoginForm = this.fb.group({
    id: [' '],
    Name: [' '],
    Class: [' '],
    subject: [''],
    Marks: [' ']
    
  });
  
  
  }  
  onSubmit() { 
  console.log( 'the values are' , this.LoginForm.value);
  this.array.push(this.LoginForm.value);
  localStorage.setItem( 'studentform',JSON.stringify(this.array));
  this.router.navigate(['/','two']);
  }
//  update(){
//   this.items = JSON.parse(localStorage.getItem('update'));
//   this.LoginForm.setValue(this.items);
//  }
 }

 


