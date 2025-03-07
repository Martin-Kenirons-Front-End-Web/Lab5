// Import core Angular and other relevant modules
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  // Defines the custom HTML tag for this component
  selector: 'app-root',
  // Specifies modules to import for this component
  imports: [RouterOutlet, CommonModule],
  // Points to the component's HTML template
  templateUrl: './app.component.html',
  // Points to the component’s CSS style file
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // Array to store student data fetched from the service
  students: any[] = [];
  // Array to store weather data fetched from the service
  weatherData: any[] = [];
  // Stores the temperature retrieved from the weather data
  temperature: any = "";

  // Inject DataService into the component
  constructor(private dataService: DataService) { }

  /**
   * Lifecycle hook that is called after Angular initializes this component.
   * Good place to fetch data.
   */
  ngOnInit(): void {
    // Subscribe to the service method that fetches student data
    this.dataService.getStudentData().subscribe(
      (data) => {
        // Extract the 'students' array from the API response
        this.students = data.students;
      }
    );

    // Subscribe to the service method that fetches weather data
    this.dataService.getWeatherData().subscribe(
      (data) => {
        // Extract the 'weather' array from the API response
        this.weatherData = data.weather;
        // Convert the temperature from Kelvin to Celsius
        this.temperature = (data.main.temp - 273).toFixed(2);
      }
    );
  }
}

