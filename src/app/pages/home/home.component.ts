// app.component.ts
import { Component } from '@angular/core';
import { CheckCircle, Bell, RefreshCw, BarChart2, Plus, User, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'TaskularDo';
}