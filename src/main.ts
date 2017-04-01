import * as Vue from 'vue';
import { AppComponent } from "./app/components/app/app.component";


window.addEventListener('DOMContentLoaded', event => {
  new AppComponent({el: '#event-app'});
});
