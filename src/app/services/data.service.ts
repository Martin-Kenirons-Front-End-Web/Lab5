// Import the Injectable decorator from Angular core
import { Injectable } from '@angular/core';
// Import HttpClient to make HTTP requests
import { HttpClient } from '@angular/common/http';
// Import Observable for handling asynchronous data
import { Observable } from 'rxjs';

// The @Injectable decorator allows Angular to inject this service where needed
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Inject HttpClient into the service's constructor
  constructor(private httpClient: HttpClient) { }

  /**
   * Retrieves student data from the specified JSON endpoint.
   * Returns an Observable that will emit the fetched data.
   */
  getStudentData(): Observable<any> {
    return this.httpClient.get('https://www.jsonblob.com/api/josonblob/1347497800342102016');
  }

  /**
   * Fetches weather data from the OpenWeatherMap API for Galway.
   * Replace the city or API key as needed.
   */
  getWeatherData(): Observable<any> {
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');
  }
}

