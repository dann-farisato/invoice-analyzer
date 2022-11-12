import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tesseract } from "tesseract.ts";
import { FileUploadService } from '../../file-upload.service';
@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css']
})
export class DropzoneComponent implements OnInit {
  result!: any;
  file: any;
  shortLink: string = "";
  loading: boolean = false; // Flag variable

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    Tesseract
      .recognize('../../../assets/img/invoice1.png')
      .progress(console.log)
      .then((res: any) => {
        console.log(res.text);
        // let regEx = /(^.{8})*(.{10,11})*/;
        this.result = res.text;
        let newArr = this.result.toLowerCase().split(' ');
        newArr.map((e: any) => {
          e === 'description';
        })
      })
      .catch(console.error);
  }
  onChange(event: any) {
    this.file = event.target.files[0];
    console.log('file', this.file)
  }
  onUpload() {
    let formData = new FormData();
    formData.set('file', this.file);
    this.http.post('http://localhost:4200/home', formData).subscribe((response) => { console.log(response) });
  }
  // searchDescrition(desc: string) {
  //   let searchWeb = this.result.split(' ');
  //   console.log(searchWeb);
  // }

}
