import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  getProductAPI(): Observable<any> {
      var response = this.http.get('../../assets/new_product.json');
      return response;
  }

  getCategoryAPI(): Observable<any> {
      var response = this.http.get('../../assets/category.json');
      return response;
  }
  getSubcategoryAPI(): Observable<any> {
      var response = this.http.get('../../assets/subcategory.json');
      return response;
  }
  getColorAPI(): Observable<any> {
      var response = this.http.get('../../assets/color.json');
      return response;
  }
  getSizeAPI(): Observable<any> {
      var response = this.http.get('../../assets/size.json');
      return response;
  }
}
