import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordPolicy {
    static validate(c: AbstractControl): ValidationErrors | null {
        
        let report: any = {};

        let p = c.value;
        
        if (p.length == 0)
            return null;

        if  (p.search(/[A-Z]/) < 0) {
            report.upper = true;            
        }
        if  (p.search(/[a-z]/) < 0) {
            report.lower = true;            
        }
        if  (p.search(/[0-9]/) < 0) {
            report.number = true;            
        }
        if  (p.search(/[!@#$%^&*]/) < 0) {
            report.special = true;            
        }
        if  (p.search(/[\s]/) > 0) {
            report.space = true;            
        }        

        //console.log(report);
        if (report)
            return report;
        else
            return null;
    }

}