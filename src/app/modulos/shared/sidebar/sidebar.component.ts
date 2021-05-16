import { Component, OnInit } from '@angular/core';
import { SidebarServiceService } from 'src/app/services/sidebar-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  public display: boolean;

  constructor(private sidebarService: SidebarServiceService) {

    this.sidebarService.getVisibleSidebar().subscribe(visible => {
      this.display = visible;
    });

  }

  ngOnInit(): void {
  }




}
