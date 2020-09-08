import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public fetchDataOnLoad(queryParams:string): Observable<any>{ 
    let url; 
    if(queryParams)
    url = environment.api + '&' + queryParams;
    else
    url = environment.api;
		return this.httpClient.get(`${ url }`);  
	} 
}
