import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'jeu',
    templateUrl    : './jeu.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class JeuComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
