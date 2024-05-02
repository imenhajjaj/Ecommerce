/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const notifications = [
    {
        id         : '493190c9-5b61-4912-afe5-78c21f1044d7',
        image      : 'assets/images/logo/offr.png',
        icon       : 'assets/images/logo/offr.png',
        title      : 'OfFFrePRo',
        link       : '/ui/cards',
        description: 'Vous avez 1000 points ! Félicitations ! Vous pouvez consulter le catalogue pour choisir un produit.`',
        time       : now.minus({minute: 55}).toISO(), // 25 minutes ago
        read       : true
    },
    {
        id         : '6e3e97e5-effc-4fb7-b730-52a151f0b641',
        image      : 'assets/images/logo/offr.png',
        title      : 'OfFFrePRo',
        icon       : 'assets/images/logo/offr.png',
        description: 'Votre commande est actuellement en chemin vers votre adresse. Veuillez vous assurer d être disponible pour la réception.',
        time       : now.minus({minute: 50}).toISO(), // 50 minutes ago
        read       : true,
        link       : '/',
        useRouter  : true
    }
];

