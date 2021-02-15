import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaderModel } from './models/http-header';

@Injectable()
export class RestConnector {

    constructor(private http: HttpClient) { }

    getHeaders(observe, responseType?, contentType?, headers?: HttpHeaders): HttpHeaderModel {

        let headerModel: HttpHeaderModel = { observe };
        headerModel = !!responseType ? Object.assign(headerModel, { 'responseType': responseType }) : headerModel;

        if (!headers) {

            headers = new HttpHeaders();
        }

        if (!!contentType) {

            headers = headers.set('Content-Type', contentType);
        }

        headerModel.headers = headers;
        return headerModel;
    }

    getRequest(url: string, responseType?, contentType?): Observable<any> {

        url = url || '';
        return this.http.get(url, this.getHeaders('response', responseType, contentType)).pipe(map((response: HttpResponse<any>) => {

            return {
                status: response.status,
                headers: response.headers,
                data: response.body
            };
        }), catchError(err => { throw err; }));
    }

    postRequest(url: string, requestBody: any, responseType?, contentType?, headers?: HttpHeaders): Observable<any> {

        requestBody = requestBody || {};
        url = url || '';
        return this.http.post(url, requestBody, this.getHeaders('response', responseType, contentType, headers)).pipe(map((response: HttpResponse<any>) => {

            return {
                status: response.status,
                headers: response.headers,
                data: response.body
            };

        }), catchError(err => { throw err; }));
    }

    putRequest(url: string, requestBody: any, responseType?, contentType?): Observable<any> {

        requestBody = requestBody || {};
        url = url || '';
        return this.http.put(url, requestBody, this.getHeaders('response', responseType, contentType)).pipe(map((response: HttpResponse<any>) => {

            return {
                status: response.status,
                headers: response.headers,
                data: response.body
            };

        }), catchError(err => { throw err; }));
    }

    deleteRequest(url: string, responseType?, contentType?): Observable<any> {

        url = url || '';
        return this.http.delete(url, this.getHeaders('response', responseType, contentType)).pipe(map((response: HttpResponse<any>) => {
            return {
                status: response.status,
                headers: response.headers,
                data: response.body
            };
        }), catchError(err => { throw err; }));
    }

}
