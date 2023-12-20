import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-basic-virtual-scroll',
  standalone: true,
  imports: [ScrollingModule],
  templateUrl: './basic-virtual-scroll.component.html',
  styleUrl: './basic-virtual-scroll.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class BasicVirtualScrollComponent {
  items = Array.from({length: 100}).map((_, i) => `Item #${i}`);


}
