import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/User";
import {ActivatedRoute, Router} from "@angular/router";
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User

  constructor(private router: Router, activatedRoute: ActivatedRoute, private dataTransferService : DataTransferService) {
    activatedRoute.params.subscribe(value => {
     this.user = this.router.getCurrentNavigation()?.extras.state as User;
     this.dataTransferService.store.next(this.user)
    })


  }

  ngOnInit(): void {
  }

}
