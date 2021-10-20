import {EventEmitter, Input, Output} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/User";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;
  @Output()
  lift = new EventEmitter(true)


  constructor(private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToDetails(): void {
this.router.navigate(['detailsFromState', this.user.id], {relativeTo: this.activatedRoute, state: this.user})
  }

  lifting(): void {
this.lift.emit(this.user)
  }

}
