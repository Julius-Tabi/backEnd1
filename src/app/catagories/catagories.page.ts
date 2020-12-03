import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { from } from 'rxjs';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.page.html',
  styleUrls: ['./catagories.page.scss'],
})
export class CatagoriesPage implements OnInit {
  array: any=[];
   uid = this.router.snapshot.params.uid
  constructor(private router:ActivatedRoute) {
    var db = firebase.firestore();
    var userGroupCollecion = db.collection("CoWorking-Space");
    var query = Promise.all([


      userGroupCollecion.doc(this.uid).collection('space').get().then(snap => {
        snap.forEach(doc => {
        this.array.push(Object.assign(doc.data()) )
        console.log("ooop"+this.array)
              });
      })

    ]);  
  
  }



   userGroup(uid) {
    var db = firebase.firestore();
    var userGroupCollecion = db.collection("CoWorking-Space");
    var query = Promise.all([


      userGroupCollecion.doc("8j3w4lEbm3OBxgQYVNGQmN1YU292").collection('place').get().then(snap => {
        snap.forEach(doc => {
        this.array.push(Object.assign(doc.data()) )
        console.log("ooop"+this.array)
              });
      })





    ]);
  }


  ngOnInit() {
  }

}
