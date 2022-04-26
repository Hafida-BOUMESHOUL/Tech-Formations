import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Formation } from './Formation';
import { AuthenticationService } from "src/shared/authentication-service";
import { AngularFirestore, validateEventsArray } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class FormationService {

  constructor(
    public authService: AuthenticationService,
    public afs: AngularFirestore,
    private firestore: Firestore) {}
 
  // Get Formaions List
  getFormationList() {
    const notesRef = collection(this.firestore, 'formations');
    return collectionData(notesRef, { idField: 'id'}) as Observable<Formation[]>;
  }

  saveFormation(value){
    return new Promise<any>((resolve,reject)=>{
      let currentUser = this.authService.userData;
      this.afs.collection('users').doc(currentUser.uid).collection('RegisteredFormation').add({
        name : value.name,
        price: value.price
      }).then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
}