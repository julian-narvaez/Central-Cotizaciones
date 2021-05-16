import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarServiceService {

  public visibleSidebar = new Subject<boolean>();

  constructor() {
    this.visibleSidebar.next();
  }

  setVisibleSidebar(visibleSidebar: boolean) {
    this.visibleSidebar.next(visibleSidebar);
  }

  getVisibleSidebar(): Observable<boolean> {
    return this.visibleSidebar.asObservable();
  }

}
