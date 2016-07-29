import {Component} from "@angular/core";

@Component({
    selector: "notification-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    public initFirebase() {
        console.log("init firebase");
    }
}
