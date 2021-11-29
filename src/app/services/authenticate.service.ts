import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  sharedMessage = new BehaviorSubject<any>(null);

  constructor(private afAuth: AngularFireAuth) { }

  nextMessage(message: string) {
    this.sharedMessage.next(message)
  }

  // Registro de Usuarios
  registerUser(value) {
    return new Promise<any>((resolve, reject) => {

      this.afAuth.createUserWithEmailAndPassword(value.email.trim(), value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })

  }

  // Inicio de sesión
  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(value.email.trim(), value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  // Cierre de sesión
  logoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.afAuth.currentUser) {
        this.afAuth.signOut()
          .then(() => {
            console.log("Cierre de sesión");
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return this.afAuth.user
  }



}
