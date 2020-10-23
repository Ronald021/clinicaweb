import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './Service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MultiClinicaWeb';

  constructor(public json:DataService, private router:Router){
    this.json.getEmployee('/ClinicaWeb-1.0-SNAPSHOT/crudemployee').subscribe((res: any) => {
      console.log(res);
    })
  }
  
  List(){
    this.router.navigate(["list"]);
  }
}
