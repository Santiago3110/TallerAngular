import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './Serie.service';

@Component({
  selector: 'app-Series',
  templateUrl: './Series.component.html',
  styleUrls: ['./Series.component.css']
})
export class SeriesComponent implements OnInit {
  public series: Array<Serie> = [];

  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  getSeasonsAverage = () : number => {
    let totalSeasons: number = 0;
    let count: number = 0;

    this.series.forEach(s => {
      totalSeasons = totalSeasons + s.seasons;
      count += 1
    });
    let answer = totalSeasons / count;
    return answer;
  }

  ngOnInit() {
    this.getSeries();
    this.getSeasonsAverage();
  }

}
