import { Component, OnInit } from '@angular/core';
import { Tesseract } from "tesseract.ts";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result!: string;

  constructor() { }

  ngOnInit(): void {

    Tesseract
      .recognize('../../../assets/img/Screenshot 2022-11-10 at 11.58.48.png')
      .progress(console.log)
      .then((res: any) => {
        console.log(res.text);
        let regEx = /(^.{8})*(.{10,11})*/;
        this.result = res.text;

        console.log(this.result.search(regEx));
        // console.log(this.result.split(' '));
      })
      .catch(console.error);

  }


}
