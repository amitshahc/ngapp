import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'admin-c-details',
  templateUrl: './c-details.component.html',
  styleUrls: ['./c-details.component.css']
})
export class CDetailsComponent implements OnInit {

  customerId: string = '';
  custDetails: any;
  showDetails: boolean = false;
  showLoader: boolean = false;

  constructor(private message: MessageService, private cs: CustomersService) {
    this.message.getCustId().subscribe(msg => {
      if (!msg.cid) {
        this.customerId = '';
        this.showDetails = false;
        return;
      }
      else {
        this.customerId = msg.cid as string;
        this.getCustDetail();
      }
    },
      (error) => {
        console.log("error", error);
      });
  }

  ngOnInit() {
  }

  ngDestroy() {
    console.log("Destroy");
    //this.message.getCustId().unsubscribe();
  }

  getCustDetail() {
    
    this.custDetails = null;
    this.showDetails = false;
    this.showLoading(true);

    setTimeout(() =>{
    this.cs.get4Admin(this.customerId)
      .subscribe(response => {
        //console.log(response);
        this.custDetails = response;
        this.showLoading(false);
        this.showDetails = true;        
      })
    }, 1000);
  }

  showLoading(show){
    this.showLoader = show;
  }


}
