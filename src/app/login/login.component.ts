import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  username:string='';
  password:string= '';
  visible = false;
  constructor(private fb:FormBuilder) { 
  }
  ngOnInit(): void {
    this.loginform = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
    
  login(){
    if(this.loginform.valid) {
    this.visible = true;
  }else{
    alert("login failed");
  }
  }}