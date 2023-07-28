import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-renewal-query-request',
  templateUrl: './renewal-query-request.component.html',
  styleUrls: ['./renewal-query-request.component.css']
})
export class RenewalQueryRequestComponent {
  constructor(private router: ActivatedRoute) { }

  isOtherPageRoute(): boolean {
    return this.router.snapshot.url[0].path === 'update-policy';
  }
}



