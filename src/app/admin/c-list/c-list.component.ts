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
  customersInit: any;
  showList: boolean = false;

  constructor(private message: MessageService, private cs: CustomersService) { }

  ngOnInit() {
    this.getCustomersList();
  }

  getCustomersList() {
    this.cs.getall4Admin().subscribe(
      res => {
        this.customersInit = res;
        this.customers = this.customersInit;
        this.showList = true;
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
