import {Injectable} from '@angular/core';


@Injectable()
export class AppService {
    public isAuthenticated = false;

    public Authentication(): void {
       this.isAuthenticated =  !this.isAuthenticated;
    }

}
