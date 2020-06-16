import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  Book: FormGroup;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.Book = new FormGroup({
      book: new FormControl()
    });
  }
  addbook() {
this.service.AddBook(this.Book.value).subscribe(res => {
  console.log(res);
});
  }

}
