import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
declare var window: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  clientList: Array<Object> = [];

  constructor(public navCtrl: NavController, private storage: Storage, private alertCtrl: AlertController) {
    this.storage.ready()
      .then(_ => {
        this.storage.get('clientList')
          .then(value => {
            if (value)
              this.clientList = value
          })
      })
  }


  editClient(item) {

    this.alertCtrl.create({
      title: 'Edit item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Label of server/app',
          value: item['name']
        },
        {
          name: 'url',
          placeholder: 'http://192.120.134.33:8088',
          value: item['url']
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {

          }
        },
        {
          text: 'Save',
          handler: data => {
            item['url'] = data['url'];
            item['name'] = data['name'];

            this.saveList();
          }
        }
      ]
    }).present();
  }

  saveList() {
    this.clientList.sort((a, b) => {
      return b['lastDate'] - a['lastDate'];
    })
    return this.storage.set('clientList', this.clientList);
  }

  addItem() {
    this.alertCtrl.create({
      title: 'Edit item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Label of server/app'

        },
        {
          name: 'url',
          value:'http://',
          placeholder: 'http://192.120.134.33:8088'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {

          }
        },
        {
          text: 'Save',
          handler: data => {
            this.clientList.push({
              url: data['url'],
              name: data['name'],
              lastDate: 0
            })

            this.saveList();
          }
        }
      ]
    }).present();
  }

  openClient(item) {

    this.alertCtrl.create({
      title: item['name'],
      message: 'Confirm open of client ' + item['name'],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Ok',
          handler: () => {
            item['lastDate'] = new Date().getTime() / 1000;


            this.saveList()
              .then(_ => {
                window.location = item.url;
              })

          }
        }
      ]
    }).present();



  }

}
