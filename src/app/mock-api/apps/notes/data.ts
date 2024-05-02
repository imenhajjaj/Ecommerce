/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const labels = [
    {
        id   : 'f47c92e5-20b9-44d9-917f-9ff4ad25dfd0',
        title: 'Tunis',
        email:'eeeeee@hhh'
    },
    {
        id   : 'e2f749f5-41ed-49d0-a92a-1c83d879e371',
        title: 'Mednine',
        email:'eeeeee@hhh'

    },
    {
        id   : 'b1cde9ee-e54d-4142-ad8b-cf55dafc9528',
        title: 'Sousse',

    },
    {
        id   : '6c288794-47eb-4605-8bdf-785b61a449d3',
        title: 'Benzart',
        email:'eeeeee@hhh'

    },
    {
        id   : 'bbc73458-940b-421c-8d5f-8dcd23a9b0d6',
        title: 'Mahdia'
    },
    {
        id   : '2dc11344-3507-48e0-83d6-1c047107f052',
        title: 'Tatouine'
    }
];

export const notes = [

    {
        id       : 'ced0a1ce-051d-41a3-b080-e2161e4ae621',
        title    : '',
        content  : 'Ben Yeghlane',
        email:'yeghlane@gmail.com',
        adresse:'cite riad',
        tel:'52225043',
        cashback:'1200Total',
        contrat:'Upload',
        analyse:'nombre de produit vendu et revenue',
        historique:'ref historique plateforme',
        image    : 'assets/images/img/store1.jpg',
        reminder : null,
        labels   : [
            'bbc73458-940b-421c-8d5f-8dcd23a9b0d6',
            'b1cde9ee-e54d-4142-ad8b-cf55dafc9528'
        ],
        archived : false,
        createdAt: now.set({hour: 15, minute: 37}).minus({day: 80}).toISO(),
        updatedAt: null
    },
    
   
   
    {
        id       : 'd46dee8b-8761-4b6d-a1df-449d6e6feb6a',
        title    : '',
        content  : 'Magazin Gen',
        tasks    : null,
        email:'yeghlane@gmail.com',
        adresse:'cite riad',
        tel:'52225043',
        cashback:'1200Total',
        contrat:'Upload',
        analyse:'nombre de produit vendu et revenue',
        historique:'ref historique plateforme',
        image    : 'assets/images/img/store2.jpg',
        reminder : now.set({hour: 14, minute: 56}).minus({day: 25}).toISO(),
        labels   : ['f47c92e5-20b9-44d9-917f-9ff4ad25dfd0'],
        archived : false,
        createdAt: now.set({hour: 14, minute: 56}).minus({day: 20}).toISO(),
        updatedAt: null
    },
    {
        id       : '6bc9f002-1675-417c-93c4-308fba39023e',
        title    : 'Plan the road trip',
        content  : 'MonoPrix',
        email:'yeghlane@gmail.com',
        adresse:'cite riad',
        tel:'52225043',
        cashback:'1200Total',
        contrat:'Upload',
        analyse:'nombre de produit vendu et revenue',
        historique:'ref historique plateforme',
        tasks    : null,
        image    : 'assets/images/img/store2.jpg',
        reminder : null,
        labels   : [
            '2dc11344-3507-48e0-83d6-1c047107f052',
            'b1cde9ee-e54d-4142-ad8b-cf55dafc9528'
        ],
        archived : false,
        createdAt: now.set({hour: 9, minute: 32}).minus({day: 15}).toISO(),
        updatedAt: now.set({hour: 17, minute: 6}).minus({day: 12}).toISO(),
    },

    

    {
        id       : 'c6d13a35-500d-4491-a3f3-6ca05d6632d3',
        title    : '',
        content  : 'Aziza',
        tasks    : null,
        email:'yeghlane@gmail.com',
        adresse:'cite riad',
        tel:'52225043',
        cashback:'1200Total',
        contrat:'Upload',
        analyse:'nombre de produit vendu et revenue',
        historique:'ref historique plateforme',
        image    : 'assets/images/img/store2.jpg',
        labels   : [
            'bbc73458-940b-421c-8d5f-8dcd23a9b0d6',
            '6c288794-47eb-4605-8bdf-785b61a449d3'
        ],
        archived : true,
        createdAt: now.set({hour: 17, minute: 14}).minus({day: 100}).toISO(),
        updatedAt: null
    },
    {
        id       : 'c6d13a35-500d-4491-a3f3-6ca05d6632d3',
        title    : '',
        content  : 'CareFour',
        email:'yeghlane@gmail.com',
        adresse:'cite riad',
        tel:'52225043',
        cashback:'1200Total',
        contrat:'Upload',
        analyse:'nombre de produit vendu et revenue',
        historique:'ref historique plateforme',        image    : 'assets/images/img/store3.jpg',
        reminder : null,
        labels   : ['e2f749f5-41ed-49d0-a92a-1c83d879e371'],
        archived : true,
        createdAt: now.set({hour: 10, minute: 29}).minus({day: 85}).toISO(),
        updatedAt: null
    },
    
    {
        id       : '46214383-f8e7-44da-aa2e-0b685e0c5027',
        title    : 'Géant',
        content  : 'Mall offS',
        adresse:'cite raja',
        image    : 'assets/images/img/store3.jpg',
        labels   : [
            'e2f749f5-41ed-49d0-a92a-1c83d879e371',
            'b1cde9ee-e54d-4142-ad8b-cf55dafc9528'
        ],
        archived : true,
        createdAt: now.set({hour: 15, minute: 30}).minus({day: 69}).toISO(),
        updatedAt: null
    }
];
