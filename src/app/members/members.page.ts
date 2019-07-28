import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  users: Object;

  constructor(private data: DataService,  public loadingController: LoadingController) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
      loading.dismiss();
    });
  }

}
