import * as Vue from 'vue';
import Component from 'vue-class-component';
import { Subject, Subscription } from "../../../rxjs";


@Component({
  template: '<div>...</div>',
  inject: ['tokenSubject'],
})
export class SearchResultsComponent extends Vue {
  tokenSubject: Subject<string>;
  private eventSub: Subscription;
  private changeSub: Subscription;

  created() {
    this.eventSub = this.subscribeOnEvents();
    this.changeSub = this.subscribeOnChanges();
  }

  private subscribeOnEvents(): Subscription {
    return this.tokenSubject.subscribe(token => {
      //set in progress flag
      console.log('user input in progress');
    });
  }

  private subscribeOnChanges(): Subscription {
    return this.tokenSubject.debounceTime(800).subscribe(token => {
      //make request
      console.log('user input complete, make http request');
    });
  }

}
