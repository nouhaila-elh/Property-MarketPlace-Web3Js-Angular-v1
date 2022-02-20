import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JwtClientService {
  Token: any;
  idAuthenticated: any;

  isSignIn: any = 0;
  constructor(private http: HttpClient) {}

  public GetUserInfo(token: any, params: any) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get('http://localhost:9191/UpdateAccount/update', {
      headers,
      params,
    });
  }

  public SaveUpdatedUser(token: any, data: any) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post(
      'http://localhost:9191/UpdateAccount/UpdateUser',
      data,
      { headers, responseType: 'Text' as 'json' }
    );
  }

  public generateToken(request: any) {
    return this.http.post('http://localhost:9191/connexion/auth', request, {
      responseType: 'Text' as 'json',
    });
  }

  public welcome(token: any) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get('http://localhost:9191/connexion/home', {
      headers,
      responseType: 'Text' as 'json',
    });
  }

  public SaveProperty(token: any, data: any) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post(
      'http://localhost:9191/Property/saveBienImmobilier',
      data,
      { headers, responseType: 'Text' as 'json' }
    );
  }

  public saveContrat(token: any, data: any) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post('http://localhost:9191/Contrat/SaveContart', data, {
      headers,
      responseType: 'Text' as 'json',
    });
  }

  public getPropertyByTitre(token: any, titre: string) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(
      'http://localhost:9191/Property/getPropertyByTitre?Titre=' + titre,
      { headers, responseType: 'Text' as 'json' }
    );
  }

  public GetInfoProperty(data: any) {
    return this.http.get(
      'http://localhost:9191/Property/GetInfoProperty?titre=' + data,
      { responseType: 'Text' as 'json' }
    );
  }

  public giveAcess() {
    this.isSignIn = 1;
  }

  public removeAcess() {
    this.isSignIn = 0;
  }

  public giveValueofAccess() {
    return this.isSignIn;
  }

  public setToken(token: any) {
    this.Token = token;
  }

  public removeToken() {
    this.Token = null;
  }
}
