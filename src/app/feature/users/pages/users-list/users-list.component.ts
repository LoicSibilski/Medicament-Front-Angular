import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssistantOuAssiste } from '../../models/assistant-ou-assiste';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  compteId : string = "60d33cc7d6a0c74f0c8f0936";

  users : User[];
  assistants : AssistantOuAssiste[];
  assistantsTailleTableau : number;
  assistes : AssistantOuAssiste[];

  constructor(
    private service : UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.findAllByCompteId(this.compteId).subscribe(
      (data:User[])=>this.users = data,
      console.error)

    this.service.findAllAssistantsByCompteId(this.compteId).subscribe(
      (data:AssistantOuAssiste[])=>this.assistants = data,
      console.error)

    this.service.findAllAssistantsByCompteId(this.compteId).subscribe(
      (data:AssistantOuAssiste[])=>this.assistantsTailleTableau = data.length,
      console.error)  
  }

  montrerLogs = () => {
    console.log(this.assistants.length)
  }

}
