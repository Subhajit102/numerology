import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loshu',
  templateUrl: './loshu.component.html',
  styleUrls: ['./loshu.component.css']
})
export class LoshuComponent implements OnInit {

  constructor() { }

  ls1: string = '';
  ls2: string = '';
  ls3: string = '';
  ls4: string = '';
  ls5: string = '';
  ls6: string = '';
  ls7: string = '';
  ls8: string = '';
  ls9: string = '';

  driver: number | undefined;
  conductor : number | undefined;
  kua : number | undefined;

  name: string = '';
  gender: string = '';
  dateOfBirth: Date | undefined;
  showGrid:boolean = false;

  numbersPresent: string = '';
  numbersMissing: string ='';

  day: number | undefined;
  month: number | undefined;
  year: number | undefined;

  ngOnInit(): void {
  }
  genderChange(event:any){
    this.gender = event.target.id;
    this.resetGrid();
  }
  onDateChange(event:any){
    console.log("hello")
    this.resetGrid();
  }

  generateGrid(){
    this.day = this.dateOfBirth?.getDate();
    this.month = this.dateOfBirth?.getMonth() ? this.dateOfBirth?.getMonth() + 1 : 0;
    this.year = this.dateOfBirth?.getFullYear();

    this.driver = this.calculateSum(this.day);
    let cd = this.calculateSum(this.day) +  this.calculateSum(this.month) +  this.calculateSum(this.year);
    if(cd > 9){
      this.conductor = this.calculateSum(cd);
    }
    else{
      this.conductor = cd;
    }

    let yy = this.year ? this.year : 0;
    let k = this.calculateSum(yy%100);
    if(this.gender == 'Male'){
      this.kua = 10 - k;
    }
    else{
      if((k+5) > 9){
        this.kua = this.calculateSum(k+5);
      }
      else{
        this.kua = k+5;
      }
    }

    let dd= this.day ? this.day : 0;
    let mm= this.month ? this.month : 0;
    let yyyy= this.year ? this.year : 0;


    this.resetGrid();
    while(dd > 0){
      this.fillGrid(dd%10);
      dd=Math.floor(dd/10);
    }

    while(mm > 0){
      this.fillGrid(mm%10);
      mm=Math.floor(mm/10);
    }

    while(yyyy > 0){
      this.fillGrid(yyyy%10);
      yyyy=Math.floor(yyyy/10);
    }

    this.fillGrid(this.driver);
    this.fillGrid(this.conductor);
    this.fillGrid(this.kua);

    this.getNumbersPresentAndMissing();

    this.showGrid = true;
  }

  calculateSum(n:any):any{
    let sum = n;
    if(sum != undefined){
      while(sum > 9){
        let k=sum;
        let s=0;
        while(k>0){
          s = s + k%10;
          k=Math.floor(k/10);      
        }
        sum = s;
      }
    }
    return sum;
  }

  fillGrid(n:any){
    if(n==1){
      if(this.ls1 == ''){
        this.ls1 = n.toString();
      }
      else{
        this.ls1 +=" "+n.toString();
      }
    }
    else if(n==2){
      if(this.ls2 == ''){
        this.ls2 = n.toString();
      }
      else{
        this.ls2 += " "+n.toString();
      }
    }
    else if(n==3){
      if(this.ls3 == ''){
        this.ls3 = n.toString();
      }
      else{
        this.ls3+= " "+n.toString();
      }
    }else if(n==4){
      if(this.ls4 == ''){
        this.ls4 = n.toString();
      }
      else{
        this.ls4+=" "+n.toString();
      }
    }else if(n==5){
      if(this.ls5 == ''){
        this.ls5 = n.toString();
      }
      else{
        this.ls5+= " "+n.toString();
      }
    }else if(n==6){
      if(this.ls6 == ''){
        this.ls6 = n.toString();
      }
      else{
        this.ls6+= " "+n.toString();
      }
    }else if(n==7){
      if(this.ls7 == ''){
        this.ls7 = n.toString();
      }
      else{
        this.ls7+= " "+n.toString();
      }
    }else if(n==8){
      if(this.ls8 == ''){
        this.ls8 = n.toString();
      }
      else{
        this.ls8+= " "+n.toString();
      }
    }else if(n==9){
      if(this.ls9 == ''){
        this.ls9 = n.toString();
      }
      else{
        this.ls9+= " "+n.toString();
      }
    }
  }
  resetGrid(){
    this.ls1='';this.ls2='';this.ls3='';this.ls4='';this.ls5='';this.ls6='';this.ls7='';this.ls8='';this.ls9='';
    this.showGrid = false;
    this.numbersMissing = '';
    this.numbersPresent ='';
  }
  getNumbersPresentAndMissing(){
    this.numbersPresent = this.ls1 + " " + this.ls2  + " " +  this.ls3  + " " +  this.ls4 + " "  +  this.ls5 + " "  +  this.ls6  + " " +  this.ls7  + " " +  this.ls8  + " " +  this.ls9;
    if(this.ls1.length == 0) this.numbersMissing += " "+ (1).toString();
    if(this.ls2.length == 0) this.numbersMissing += " "+ (2).toString();
    if(this.ls3.length == 0) this.numbersMissing += " "+ (3).toString();
    if(this.ls4.length == 0) this.numbersMissing += " "+ (4).toString();
    if(this.ls5.length == 0) this.numbersMissing += " "+ (5).toString();
    if(this.ls6.length == 0) this.numbersMissing += " "+ (6).toString();
    if(this.ls7.length == 0) this.numbersMissing += " "+ (7).toString();
    if(this.ls8.length == 0) this.numbersMissing += " "+ (8).toString();
    if(this.ls9.length == 0) this.numbersMissing += " "+ (9).toString();
  }
}
