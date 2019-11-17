import { Subject } from 'rxjs';
import { Injectable,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GlobalVariables {
    constructor() {

    }
    userChange: EventEmitter<any> = new EventEmitter();

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': ''
        })
    };

    getUserChangeEmitter() {
        return this.userChange;
      }
    setToken(token: string): void {
        localStorage.setItem("token", token);
        this.changeToken(token);
    }
    changeToken(token: string) {
        this.httpOptions.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        });

    }
}