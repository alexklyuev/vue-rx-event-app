import * as Vue from 'vue';
import Component from 'vue-class-component';
import { Subject } from "../../../rxjs";


@Component({
  template: `<input @keyup="eventSource" v-model="token" />`,
  inject: ['tokenSubject'],
})
export class TokenInputComponent extends Vue {
  public tokenSubject: Subject<string>;
  public token: string = '';


  public eventSource() {
    this.tokenSubject.next(this.token);
  }

  public destroyed() {
    this.tokenSubject.complete();
  }

}
