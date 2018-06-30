import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { CustomersService } from '../../services/customers.service';
import { NotFoundError } from '../../errors/notfound-error';
import { AppError } from '../../errors/app-error';
//import { FormControl } from '@angular/forms'; 

@Component({
  selector: 'admin-c-list',
  templateUrl: './c-list.component.html',
  styleUrls: ['./c-list.component.css']
})
export class CListComponent implements OnInit {

  filter: string = '';
  customers = [];
  customersInit: any;
  showList: boolean = false;
  status = { text: "Loading...", class: "alert-info"}  

  constructor(private message: MessageService, private cs: CustomersService) { }

  ngOnInit() {
    setTimeout(() => this.getCustomersList(), 1000);
  }

  getCustomersList() {
    this.cs.getall4Admin().subscribe(
      res => {
        this.customersInit = res;
        this.customers = this.customersInit;
        this.showList = true;
      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          this.status.text = "Resource not found.";
          this.status.class = "alert-danger";
        }
        else{
          this.status.text = "Application error occured.";
          this.status.class = "alert-danger";
        }
      });
  }

  resetCustomerList() {
    this.customers = this.customersInit;
  }

  filterList() {
    let search = this.filter.trim().toLowerCase();

    //console.log(search);

    //if (search == '') {
    this.resetCustomerList();
    this.resetCustId();
    //}

    this.customers = this.customers.filter(obj => {
      if (obj.name.toLowerCase().indexOf(search) !== -1)
        return true;
      // if (obj.address.toLowerCase().indexOf(search) !== -1)
      //   return true;
      if (obj.email.toLowerCase().indexOf(search) !== -1)
        return true;
      if (obj.phone.toLowerCase().indexOf(search) !== -1)
        return true;
    })
  }

  sendCustId(id: string) {
    this.message.sendCustId(id);
  }

  resetCustId() {
    this.message.clearCustId();
  }
}
