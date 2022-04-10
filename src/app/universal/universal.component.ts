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

  weekList: Array<any> = [
    { name: 'Sunday', value: 'Sunday' },
    { name: 'Monday', value: 'Monday' },
    { name: 'Tuesday', value: 'Tuesday' },
    { name: 'Wednesday', value: 'Wednesday' },
    { name: 'Thrusday', value: 'Thrusday' },
    { name: 'Friday', value: 'Friday' },
    { name: 'Saturday', value: 'Saturday' },
  ];

  // prodData:any = {
  //   groups: [
  //     {
  //       id: 'sunday',
  //       name: 'sunday',
  //       products: [
  //         {
  //           type: '',
  //           start_time: '',
  //           end_time: '',
  //         }
  //       ]
  //     },
  //     {
  //       id: 'monday',
  //       name: 'monday',
  //       products: [
  //         {
  //           type: '',
  //           start_time: '',
  //           end_time: '',
  //         },
  //         {
  //           type: '',
  //           start_time: '',
  //           end_time: '',
  //         }
  //       ]
  //     },
  //     {
  //       id: 'tuesday',
  //       name: 'tuesday',
  //       products: [
  //         {
  //           type: '',
  //           start_time: '',
  //           end_time: '',
  //         },
  //         {
  //           type: '',
  //           start_time: '',
  //           end_time: '',
  //         }
  //       ]
  //     },
  //     {
  //       id: 'wednesday',
  //       name: 'wednesday',
  //       products: [
  //         {
  //           type: '',
  //           start_time: '',
  //           end_time: '',
  //         },
  //         {
  //           type: '',
  //           start_time: '',
  //           end_time: '',
  //         }
  //       ]
  //     },
  //     {
  //       id: 'thrusday',
  //       name: 'thrusday',
  //       products: [
  //         {
  //           type: '',
  //           start_time: '',
  //           end_time: '',
  //         },
  //         {
  //           type: '',
  //           start_time: '',
  //           end_time: '',
  //         }
  //       ]
  //     },
  //     {
  //       id: 'friday',
  //       name: 'friday',
  //       products: [
  //         {
  //           type: '',
  //           start_time: '',
  //           end_time: '',
  //         },
  //         {
  //           type: '',
  //           start_time: '',
  //           end_time: '',
  //         }
  //       ]
  //     },
  //     {
  //       id: 'saturday',
  //       name: 'saturday',
  //       products: [
  //         {
  //           type: '',
  //           start_time: '',
  //           end_time: '',
  //         },
  //         {
  //           type: '',
  //           start_time: '',
  //           end_time: '',
  //         }
  //       ]
  //     },
  //   ]
  // };

  weekForm:FormGroup;
// productionForm:FormGroup;
  active = 0;

  constructor(private fb:FormBuilder) {
    this.weekForm = this.fb.group({
      weeks: this.fb.array(this.weekList.map((wk:any) => 
      this.fb.group({
        day: '',
        skills: this.fb.array([])
      }))),
    });

    // this.weekForm = this.fb.group({
    //   weeks: this.fb.array([
    //     this.newWeekSunday(),
    //     this.newWeekTuesday(),
    //   ])
    // });

    // this.productionForm = this.fb.group({
    //   production: this.fb.array(
    //     this.prodData
    //       // for each...
    //       .groups
    //       .reduce((acc:any, group:any) => [
    //         ...acc,
    //         // ...product of each group
    //         ...group.products.map((product:any) =>
    //           // create a form group
    //           this.fb.group({
    //             type: [''],
    //             start_time: [''],
    //             end_time: [''],
    //           })
    //         )
    //       ], [])
    //   )
    // })
    
  }

  ngOnInit(): void {
    
  }

  weeks(): FormArray {
    return this.weekForm.get('weeks') as FormArray;
  }

  newWeek(): FormGroup {
    return this.fb.group({
      day: '',
      skills: this.fb.array([])
    });
  }

  newWeekSunday(): FormGroup {
    return this.fb.group({
      day: '',
      skills: this.fb.array([])
    });
  }
  newWeekTuesday(): FormGroup {
    return this.fb.group({
      day: '',
      skills: this.fb.array([])
    });
  }

  addEmployee() {
    this.weeks().push(this.newWeek());
  }

  weekSkills(i: number): FormArray {
    return this.weeks()
      .at(i)
      .get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      type: '',
      start_time: '',
      end_time: '',
    });
  }

  addWeekSkill(i: number) {
    this.weekSkills(i).push(this.newSkill());
  }

  removeEmployeeSkill(i: number, j: number) {
    this.weekSkills(i).removeAt(j);
  }
 

  addWeekForm(){
    console.log(this.weekForm.value);
  }

  companyEditFormSubmit(){
    console.log(this.taskForm.value,'1111111111')
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
    console.log(this.taskForm.value['name'],'nameeeeeeeeee')
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
