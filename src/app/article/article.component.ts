import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row'; 
  @Input() article: Article;
  articles: Article[];

  constructor() { 
  	//this.articles = [
	//	new Article('Angular 2', 'http://angular.io', 3),
	//	new Article('Fullstack', 'http://fullstack.io', 2),
	//	new Article('Angular Homepage', 'http://angular.io', 1)
	//	];
  }

  ngOnInit() {
  }

  voteUp(): boolean {
  	this.article.voteUp();
  	return false;
  }

  voteDown(): boolean {
  	this.article.voteDown();
  	return false;
  }
}
