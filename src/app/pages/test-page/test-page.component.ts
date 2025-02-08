import { ChangeDetectionStrategy, Component, inject, signal, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-test-page',
  imports: [],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TestPageComponent {

  private route = inject(ActivatedRoute);
  private router = inject(Router);


  public pageNumber = signal<number>(
    this.parseNumber(this.route.snapshot.params['pageNumber']));
  public pageLimit = signal<number>(
    this.parseNumber(this.route.snapshot.params['limitNumber']));

  nextPage() {
    this.pageNumber.update(p => this.parseNumber((p) + 1));
    this.updateUrl();
  }
  previousPage() {
    this.pageNumber.update(p => this.parseNumber((p) - 1));
    this.updateUrl();
  }

  selectedLimit(value: string) {
    this.pageLimit.set(this.parseNumber(value))
    this.updateUrl();
  }

  private updateUrl() {
    this.router.navigate(
      ['/test/page', this.pageNumber(), 'limit', this.pageLimit()],
    );
  }

  private parseNumber(value: any): number {
    const parsed = parseInt(value, 10);
    if(isNaN(parsed) || parsed < 1){
      this.router.navigate(['/test/page',1, 'limit',5]);
    }
    return parsed;
  }
}
