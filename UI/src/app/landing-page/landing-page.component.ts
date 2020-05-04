import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  public linesInterval = 10;

  public commingSoonText = '';
  public textToType = 'Coming Soon';

  public firstLine = '';
  public firstLineText = 'This CV is under construction. ';

  public secondLine = '';
  public secondLineText = 'In the meanwhile, you can check my profile on ';
  public secondLineSpan = '';
  public secondLineSpanText = 'LinkedIN';

  public thirdLine = '';
  public thirdLineText = 'and download my resume in ';
  public thirdLineSpan = '';
  public thirdLineSpanText = '.PDF format';

  constructor() {}

  ngOnInit() {
    this.typeCommandLine(0);
  }

  typeCommandLine(charIndex: number) {

    const MAX_INTERVAL = 200;
    const MIN_INTERVAL = 50;

    const interval = this.getTypingInterval(MIN_INTERVAL, MAX_INTERVAL);

    setTimeout(() => {
      this.commingSoonText = this.commingSoonText + this.textToType[charIndex];
      charIndex++;

      if (charIndex < this.textToType.length) {
        this.typeCommandLine(charIndex);
      } else {

        this.typeFirstLine(0);
      }
    }, interval);

    return;
  }

  typeFirstLine(charIndex: number) {

    setTimeout(() => {
      this.firstLine = this.firstLine + this.firstLineText[charIndex];
      charIndex++;

      if (charIndex < this.firstLineText.length) {
        this.typeFirstLine(charIndex);
      } else {
        this.typeSecondLine(0);
      }
    }, this.linesInterval);

    return;
  }

  typeSecondLine(charIndex: number) {

    setTimeout(() => {
      this.secondLine = this.secondLine + this.secondLineText[charIndex];
      charIndex++;

      if (charIndex < this.secondLineText.length) {
        this.typeSecondLine(charIndex);
      } else {
        this.typeSecondLineSpan(0);
      }
    }, this.linesInterval);

    return;
  }

  typeSecondLineSpan(charIndex: number) {
    setTimeout(() => {
      this.secondLineSpan = this.secondLineSpan + this.secondLineSpanText[charIndex];
      charIndex++;

      if (charIndex < this.secondLineSpanText.length) {
        this.typeSecondLineSpan(charIndex);
      } else {
        this.typethirdLine(0);
      }
    }, this.linesInterval);

    return;
  }

  typethirdLine(charIndex: number) {

    setTimeout(() => {
      this.thirdLine = this.thirdLine + this.thirdLineText[charIndex];
      charIndex++;

      if (charIndex < this.thirdLineText.length) {
        this.typethirdLine(charIndex);
      } else {
        this.typeThirdLineSpan(0);
      }
    }, this.linesInterval);

    return;
  }

  typeThirdLineSpan(charIndex: number) {

    setTimeout(() => {
      this.thirdLineSpan = this.thirdLineSpan + this.thirdLineSpanText[charIndex];
      charIndex++;

      if (charIndex < this.thirdLineSpanText.length) {
        this.typeThirdLineSpan(charIndex);
      }
    }, this.linesInterval);

    return;
  }

  getTypingInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public linkedinClick() {
    console.log('Linkedin clicked');

    window.open('https://www.linkedin.com/in/javier-olazar%C3%A1n-703384131/', 'blank');
  }

  public resumeDownloadClick() {
    console.log('resume clicked');
  }
}
