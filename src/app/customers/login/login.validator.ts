import { AbstractControl, ValidationErrors } from "@angular/forms";

export class LoginValidator {
    static toLowercase(c: AbstractControl) : ValidationErrors {
        return c.value.toLowercase;
    }
}