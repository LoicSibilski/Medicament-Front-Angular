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

  compteId : string = "60bf6ba371add870faebfc20";

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

    this.service.findAllAssistesByUtilisateurId('60c7089d62cc546af3942df3').subscribe(
      (data:AssistantOuAssiste[])=> this.assistes = data,
      console.error
    )

    this.service.findAllAssistesByCompteId(this.compteId);
  }

  montrerLogs = () => {
    console.log(this.assistants.length)
  }

}
