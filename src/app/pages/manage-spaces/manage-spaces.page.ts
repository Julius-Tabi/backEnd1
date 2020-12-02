import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {OwnerServiceService} from '../../owner-service.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-manage-spaces',
  templateUrl: './manage-spaces.page.html',
  styleUrls: ['./manage-spaces.page.scss'],
})
export class ManageSpacesPage implements OnInit {
  spaces: any = [];
  ownerId: any
   gallery: any = [];

  constructor(public ownerservice: OwnerServiceService,private router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.ownerservice.signAuth();
    let user = firebase.auth().currentUser.uid
    console.log('user: ', user)
    // let user = firebase.auth().currentUser.uid;
    // this.id = user.uid
      // Fetching menus
    firebase.firestore().collection('CoWorking-Space').doc(user).collection('space').where('uid', '==', user).limit(3).get().then(snapshot => {
      snapshot.docs.forEach(menu => {
        this.spaces.push(menu.data())
        console.log('menu: ', this.spaces)
      })
    })
  //      firebase.firestore().collection('restaurants').doc(this.uid).collection('Drinks').where('ownerId', '==', this.uid).limit(3).get().then(snapshot => {
  //     snapshot.docs.forEach(Drinks => {
  //       this.drinks.push(Drinks.data())
  //       console.log('Drinks: ', this.drinks)
  //     })
  //       })
  // }
  }
}
