import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tesseract } from "tesseract.ts";
import { FileUploadService } from '../../file-upload.service';
import { detectProducts } from 'src/utils/detectProducts';
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
  percentage!: Observable<number>;
  products: string[] = [];
  prodResult: string[] = [];
  progressBar!: number;
  constructor(private productService: FileUploadService) { }

  ngOnInit(): void {

  }
  onChange(event: any) {
    this.file = event.target.files[0];
    console.log('file', this.file)
  }
  onUpload() {
    // let formData = new FormData();
    // formData.set('file', this.file);
    // this.http.post('http://localhost:3007/upload', formData).subscribe((response) => { console.log(response) });
    Tesseract
      .recognize(this.file)
      .progress((data) => this.progressBar = data.progress)
      .then((res: any) => {
        console.log(res.text);
        this.result = res.text;
        this.products = detectProducts(res.text)
        console.log('products : ', this.products)
        this.productService.postProducts(this.products).subscribe(data => {
          console.log(this.prodResult);
          this.prodResult = data;

        });
      })
      .catch(console.error);
  }

}
