import * as Vue from 'vue';
import Component from 'vue-class-component';
import { Subject } from "../../../rxjs";
import { TokenInputComponent } from "../token-input/token-input.component";
import { SearchResultsComponent } from "../search-results/search-results.component";


@Component({
  template: `
    <div>
      <token-input></token-input>
      <search-results></search-results>
    </div>
  `,
  provide: {
    'tokenSubject': new Subject<string>(),
  },
  components: {
    'search-results': SearchResultsComponent,
    'token-input': TokenInputComponent,
  },
})
export class AppComponent extends Vue {
}
