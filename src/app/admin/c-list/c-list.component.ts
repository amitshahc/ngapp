import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { CustomersService } from '../../services/customers.service';
//import { FormControl } from '@angular/forms'; 

@Component({
  selector: 'admin-c-list',
  templateUrl: './c-list.component.html',
  styleUrls: ['./c-list.component.css']
})
export class CListComponent implements OnInit {

  filter: string = '';
  customers = [];
  customersInit: any = [
    {
      "id": 1,
      "fullname": "Amit Shah",
      "email": "cust@ngapp.com",
      "phone": "+91-123456789",
      "password": "cust1234",
      "address": "76, Shilpgram tenaments, Soma talav, Dabhoi ring road, Vadodara, Gujarat, India - 390025"
    },
    {
      "id": 2,
      "fullname": "Neel Shah",
      "email": "neelshah@ngapp.com",
      "phone": "+91-986532147",
      "password": "neel1234",
      "address": "403, Samanvay apt, beside Monalisha, Manjalpur, Vadodara, Gujarat, India - 390001"
    }
  ];

  constructor(private message: MessageService, private cs: CustomersService) { }

  ngOnInit() {
    this.getCustomersList();
  }

  getCustomersList() {
    this.cs.getall4Admin().subscribe(
      res => {
        this.customersInit = res;
        this.customers = this.customersInit;
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

  resetCustId(){
    this.message.clearCustId();
  }
}
