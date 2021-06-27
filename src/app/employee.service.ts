import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as ObservableThrowError ,Observable } from 'rxjs';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
  private _url:string = "assets/data/employee.json";

  constructor(private http:HttpClient) { }

  getEmployees():Observable<IEmployee[]>{

    return this.http.get<IEmployee[]>(this._url).pipe(
                    catchError(this.errorHandler))
                
    }
    errorHandler(error:HttpErrorResponse){
        return ObservableThrowError(error.message|| "Server Error");

    }
    

}