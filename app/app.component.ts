import {Component} from "@angular/core";
import firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "notification-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    public initFirebase() {
        
        console.log("initFirebase()");

        firebase.init({
            //
        }).then(
            instance => { console.log("firebase.init() done"); },
            error => { console.log("firebase.init() error: " + error); }
        );
    }
}
