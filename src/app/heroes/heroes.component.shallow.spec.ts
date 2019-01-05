import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { of } from "rxjs";
import { Hero } from "../hero";
import { By } from "@angular/platform-browser";

describe('HeroesComponent (shallow tests)', () => {
    let HEROES;
    let mockServiceHero;
    let fixture: ComponentFixture<HeroesComponent>;

    @Component({
        selector: 'app-hero',
        template: `<div></div>`
    })
    class FakeHeroComponent {
        @Input() hero: Hero;
    }

    beforeEach(() => {
        HEROES = [
            { id: 1, name: "SpiderDude", strength: 8 },
            { id: 2, name: "Worderful Woman", strength: 24 },
            { id: 3, name: "SuperDude", strength: 55 }
        ];

        mockServiceHero = jasmine.createSpyObj(["getHeroes", "addHero", "deleteHero"]);

        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                FakeHeroComponent
            ],
            providers: [
                { provide: HeroService, useValue: mockServiceHero }
            ]
            // schemas: [
            //     NO_ERRORS_SCHEMA
            // ]
        });

        fixture = TestBed.createComponent(HeroesComponent);

    });



    it('should set heroes correctly from the service', () => {
        mockServiceHero.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(3);
    });

    it('should create one li for each hero', () => {
        mockServiceHero.getHeroes.and.returnValue(of(HEROES))
        fixture.detectChanges();

        let deLI = fixture.debugElement.queryAll(By.css("li"));

        expect(deLI.length).toBe(3);
    });
    

});
