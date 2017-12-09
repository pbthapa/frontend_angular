import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'main-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selected = null;
  
  menus = [
      { route: '', title_a: 'Subject', title_b: 'Area', description: 'Subject Area' }
  ];
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onSelect(type) {
    this.selected = type;
  }

  onSubmenuSelect(submenu) {
    if (submenu.route && submenu.route != '') {
      this.router.navigate([submenu.route], { relativeTo: this.route });
    }
  }

  onClose() {
    this.selected = null;
  }

  is(type) {
    return !this.selected || this.selected == type;
  }

  isSm(type) {
    return this.selected && this.selected == type;
  }
}
