import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  // Variable to store shortLink from api response
  // shortLink: string = "";
  // loading: boolean = false; // Flag variable
  // file: File = null; // Variable to store file

  // // API url
  // baseApiUrl = "http://localhost:4200"
  // fileUploadService: any;

  // constructor(private http: HttpClient) { }

  // // Returns an observable
  // upload(file): Observable<any> {
  //   // Create form data
  //   const formData = new FormData();
  //   // Store form name as "file" with file data
  //   formData.append("file", file, file.name);

  //   // Make http post request over api
  //   // with formData as req
  //   return this.http.post(this.baseApiUrl, formData)
  // }
  // onChange(event) {
  //   this.file = event.target.files[0];
  // }
  // onUpload() {
  //   this.loading = !this.loading;
  //   console.log(this.file);
  //   this.fileUploadService.upload(this.file).subscribe(
  //     (event: any) => {
  //       if (typeof (event) === 'object') {

  //         // Short link via api response
  //         this.shortLink = event.link;

  //         this.loading = false; // Flag variable 
  //       }
  //     }
  //   );
  // }
}