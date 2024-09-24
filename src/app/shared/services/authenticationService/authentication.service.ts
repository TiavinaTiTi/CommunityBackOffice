import {inject, Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment.development";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {jwtDecode} from "jwt-decode";
import {MemberService} from "../memberService/member.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly url = `${environment.urlAPI}`;
  private http: HttpClient = inject(HttpClient);
  isAuthenticated: boolean = false;


  //Recuperer JWT de la BackEnd
  authenticate(email: string, password: string){
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    }
    let params = new HttpParams()
      .set("email", email)
      .set("password", password);
    // console.log(JSON.stringify(forms))
    // return this.http.post(this.url+'/auth/login', JSON.stringify(forms), options)
    return this.http.post(this.url+'/auth/login', params, options)
  }

  /*login(email: string, password: string): boolean {
    this.authenticate(email, password).subscribe(token => {
      console.log(token)
      let obj = JSON.parse(JSON.stringify(token))
      let value_jwt = obj['access-token']
      // console.log(`Obj ${JSON.stringify(obj)} & jwt ${value_jwt}`)
      console.log(`value_jwt ${value_jwt}`)
      if(value_jwt){
        localStorage.setItem('access-token', value_jwt)
        return true;
      }
      return false;
    })
    return false;
  }*/
  // Verification Authentification
  login(token: any): Observable<boolean> {
    console.log(token)
    //User authentifier
    this.isAuthenticated = true

    let obj = JSON.parse(JSON.stringify(token))
    let value_jwt = obj['access-token']
      // console.log(`Obj ${JSON.stringify(obj)} & jwt ${value_jwt}`)
    console.log(`value_jwt ${value_jwt}`)
    if(value_jwt){
      localStorage.removeItem('access-token')
      localStorage.setItem('access-token', `Bearer ${value_jwt}`)
      return of(true);
    }
    return of(false);
  }

  logout(){
    return localStorage.removeItem('access-token')
  }

  private _getToken(){
    const token = localStorage.getItem('access-token');
    if(token){
      this.loadProfile(token)
    }
  }

  isLoggedIn(): boolean {
    console.log(localStorage)
    if (typeof window !== 'undefined' && localStorage) {
      const _token = localStorage.getItem('access-token');
      this._getToken()
      return _token ? true : false;
    }
    return false;
  }


  loadProfile(token: string){
    let decodeJwt: string = jwtDecode(token);
    let decodeJson = JSON.parse(JSON.stringify(decodeJwt))

    let email = decodeJson.sub;
    let scope = decodeJson.scope;
    console.log(email + '-SCOPE-' + scope)
  }

}
