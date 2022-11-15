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
  products: string[] = [];
  prodResult: string[] = [];
  progressBar!: number;
  constructor(private productService: FileUploadService) { }

  ngOnInit(): void {

  }
  onChange(event: any) {
    this.file = event.target.files[0];
  }
  onUpload() {
    Tesseract
      .recognize(this.file)
      .progress((data) => this.progressBar = data.progress)
      .then((res: any) => {
        console.log(res.text);
        this.result = res.text;
        this.products = detectProducts(res.text)
        this.productService.postProducts(this.products).subscribe(data => {
          this.prodResult = data;
        });
      })
      .catch(console.error);
  }

}
