import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User= new User();
 email:string='';
 users:User[]=[];
  constructor(private userService:UserService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  userLogin(){
     console.log(this.user.username);
     console.log(this.user.password);
    this.userService.loginUser(this.user).subscribe(
      (res: any)=>{
     // console.log(res.user.user_id);
    if(res.authorities[0].authority=="USER"){
     // console.log(this.user.user_id)
      this.router.navigate(['orders']);
    }
    else if(res.authorities[0].authority=="ADMIN"){
      this.router.navigate(['showProducts']);
     //this.getByEmail(this.user.username);
    }
      },
      error=>{console.log(error.error.error)}
    );
    // .subscribe(data=>{
    //   alert("Login Successfully")
    // },error=>alert("Sorry enter corect username and password"));
    
  }

  public getByEmail(username: string):void{
    this.userService.getByEmail(this.email).subscribe(
      (res: User[])=>{
        this.users= res;
        console.log(res[0]);

      }
    )
  }
 
}
