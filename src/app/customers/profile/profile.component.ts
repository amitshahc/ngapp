import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupValidator } from '../signup/signup.validator';
import { AppError } from '../../errors/app-error';
import { CustomersService } from '../../services/customers.service';
import { NotFoundError } from '../../errors/notfound-error';
import { Unauthorized } from '../../errors/unauthorized-error';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;
  showLoader: boolean = false;
  private uid = 1;
  profile: any;
  private phonePattern = "[+]{0,1}[0-9]{0,3}[-]{0,1}[0-9]{4,20}";
  private resUpdate: any;
  updateSuccess: boolean = false;
  status = {    
    fetch: {
      show: false,
      text: "Fetching account details",
      class: "alert-info"
    },
    update: {
      show: false,      
      text: "Updating account details",
      class: "alert-info"
    }
  }

  constructor(private customer: CustomersService) { }

  ngOnInit() {
    this.status.fetch.show = true;
    this.createForm();
    this.customer.get(this.uid)
      .subscribe(response => {
        this.profile = response
        this.setFormValues();
      });
  }

  setFormValues() {
    this.form.patchValue(
      {
        'fullname': this.profile.fullname,
        'email': this.profile.email,
        'phone': this.profile.phone,
        'address': this.profile.address,
        'password': this.profile.password
      }
    );
    this.status.fetch.show = false;
  }

  createForm() {
    this.form = new FormGroup({
      fullname: new FormControl('',
        {
          validators: [Validators.required, Validators.minLength(3), Validators.maxLength(30)]
        }),
      email: new FormControl({ value: '', disabled: true }),
      phone: new FormControl('',
        {
          validators: [Validators.pattern(this.phonePattern)]
        }),
      address: new FormControl('',
        {
          validators: [Validators.maxLength(100)]
        }),
      password: new FormControl('',
        {
          validators: [Validators.required, Validators.minLength(3), Validators.maxLength(10), SignupValidator.validatePassword]
        })
    })
  }

  get fullname() { return this.form.get('fullname') }
  get email() { return this.form.get('email') }
  get phone() { return this.form.get('phone') }
  get address() { return this.form.get('address') }
  get password() { return this.form.get('password') }

  log(p) {
    console.log(p);
  }

  showLoading(show: boolean) {
    this.showLoader = show;
  }

  update() {
    this.showLoading(true);
    let f = (key) => { return this.form.get(key).value };
    let data = {
      "fullname": f('fullname'),
      "phone": f('phone'),
      "address": f('address'),
      "password": f('password')
    }

    this.customer.update(this.uid, data)
      .subscribe((res) => {
        this.resUpdate = res;
        if (this.resUpdate.status === 'success') {
          this.showLoading(false);
          this.updateSuccess = true;
          setTimeout(() => { this.updateSuccess = false }, 3000);
        }
      },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            this.form.setErrors({ "notFound": { msg: "Server not found" } });
          }
          else if (error instanceof Unauthorized) {
            this.form.setErrors({ "unauthorized": { msg: "Unauthorized action" } });
          }
          else {
            this.form.setErrors({ "appError": true });
          }

          this.showLoading(false);
        }
      )
  }
}
