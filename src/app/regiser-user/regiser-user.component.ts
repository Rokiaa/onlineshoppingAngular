import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-regiser-user',
  templateUrl: './regiser-user.component.html',
  styleUrls: ['./regiser-user.component.css']
})
export class RegiserUserComponent implements OnInit {
 //public user:User[]=[];
 user:User= new User(); 
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  // userRegister(){
  //   console.log(this.user);
  //   this.userService.addUser(this.user).subscribe(data=>{
      
  //     alert("Successsfully user is register")
      
  //   },error=>alert("not register")
  //   );
  // }


}
