import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-universal',
  templateUrl: './universal.component.html',
  styleUrls: ['./universal.component.scss']
})
export class UniversalComponent implements OnInit {

  hide = true;
  chide = true;
  passwordMatch = true;
  firstForm:Boolean = true;
  secondForm:Boolean = false;
  thirdForm:Boolean = false;
  taskForm = this.fb.group({
    name:['',Validators.required],
    email :[null, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password :[null, [Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern(new RegExp('^(?=.*[a-z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])'))]],
    cpassword :[null, [Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern(new RegExp('^(?=.*[a-z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])'))]],
    address:[''],
    country:['',Validators.required],
    state:[''],
    city:['',[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
    postcode:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
    phone:[null,[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(8),Validators.maxLength(12)]],
    season:['',Validators.required],
    language:['',Validators.required],
    checkArray: this.fb.array([]),
    countryArray: this.fb.array([])
  })
  get j() { return this.taskForm.controls; }
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  languages: string[] = ['Python', 'Php', 'Java', 'C'];
  Data: Array<any> = [
    { name: 'Pear', value: 'pear' },
    { name: 'Plum', value: 'plum' },
    { name: 'Kiwi', value: 'kiwi' },
    { name: 'Apple', value: 'apple' },
    { name: 'Lime', value: 'lime' }
  ];
  Data1: Array<any> = [
    { name: 'India', value: 'India' },
    { name: 'USA', value: 'USA' },
    { name: 'Dubai', value: 'Dubai' },
    { name: 'England', value: 'England' },
    { name: 'France', value: 'France' }
  ];
  constructor(private fb:FormBuilder) {

  }

  ngOnInit(): void {
  }

  companyEditFormSubmit(){
  }

  passwordMatchFunction(){
    if(this.taskForm.get('password')?.value != this.taskForm.get('cpassword')?.value){
      this.passwordMatch = false
    }else{
      this.passwordMatch = true
    }
  }

  nextButtonForm(){
    // if(this.taskForm.invalid){
    //   return
    // }else{
    //   this.firstForm = false;
    //   this.secondForm = true;
    // }
    // if(this.taskForm.value['name'] != '' && this.taskForm.value['email'] != '' && this.taskForm.value['phone'] && this.taskForm.value['password'] != ''){
    //   this.firstForm = false;
    //   this.secondForm = true;
    // }
    this.firstForm = false;
      this.secondForm = true;
  }

  nextButtonSecondForm(){
    this.firstForm = false;
    this.secondForm = false;
    this.thirdForm = true;
  }

  onCheckboxChange(e:any) {
    const checkArray: FormArray = this.taskForm.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onCheckboxChange1(e:any) {
    const countryArray: FormArray = this.taskForm.get('countryArray') as FormArray;
    if (e.target.checked) {
      countryArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      countryArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          countryArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

}
