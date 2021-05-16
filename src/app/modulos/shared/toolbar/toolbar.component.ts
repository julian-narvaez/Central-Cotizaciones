import { Component, OnInit } from '@angular/core';
import { SidebarServiceService } from 'src/app/services/sidebar-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public display: boolean;

  constructor(private sidebarService: SidebarServiceService) { }

  ngOnInit(): void {
  }

  public visible() {
    this.display = true;
    this.sidebarService.setVisibleSidebar(this.display);
  }

}
