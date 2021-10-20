import {Component, OnInit} from '@angular/core';
import {User} from 'src/app/interfaces/User';
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details-from-server',
  templateUrl: './user-details-from-server.component.html',
  styleUrls: ['./user-details-from-server.component.css']
})
export class UserDetailsFromServerComponent implements OnInit {

  user: User;



  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(data => console.log(data))
    this.activatedRoute.params.subscribe(params => {
      this.userService.getUserById(params.id).subscribe(value => this.user = value)
    })


  }

  ngOnInit(): void {

  }

}
