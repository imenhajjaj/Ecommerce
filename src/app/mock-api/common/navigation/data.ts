/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'apps',
        title   : 'Gestion',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'pages.profile',
                title: 'Home',
                type : 'basic',
                icon : 'heroicons_outline:user-circle',
                link : '/pages/profile'
            },
        
            {
                id   : 'apps.notes',
                title: 'Store',
                type : 'basic',
                icon : 'heroicons_outline:pencil-alt',
                link : '/apps/notes'
            },
            {
                id   : 'apps.contacts',
                title: 'Client',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/apps/contacts'
            },
     
            {
                id   : 'apps.tasks',
                title: 'Fournisseur',
                type : 'basic',
                icon : 'heroicons_outline:check-circle',
                link : '/apps/tasks'
            },
            {
                id   : 'apps.ecommerce',
                title: 'Produit',
                type : 'basic',
                icon    : 'heroicons_outline:pencil-alt',
                link : '/apps/ecommerce/inventory'
            },

            {
                id   : 'user-interface.cards',
                title: 'Catalogue',
                type : 'basic',
                icon : 'heroicons_outline:shopping-cart',
                link : '/ui/cards'
            },
        
            {
                id   : 'pages.settings',
                title: 'Settings',
                type : 'basic',
                icon : 'heroicons_outline:cog',
                link : '/pages/settings'
            },
       
       

            {
                id   : 'apps.file-manager',
                title: 'Produit',
                type : 'basic',
                icon : 'heroicons_outline:shopping-cart',
                link : '/apps/file-manager'
            },
            {
                id   : 'user-interface.cards',
                title: 'Compte',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : ''
            },
      
            {
                id   : 'user-interface.cards',
                title: 'Vente',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : 'dashboards/finance'
            },
     
              
            {
                id   : 'user-interface.cards',
                title: 'ABON',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : 'pages/plann'
            },
     
         
           
        
        
            {
                id      : 'user-interface.page-layouts',
                title   : 'Trombola',
                type    : 'collapsable',
                icon    : 'heroicons_outline:template',
                children: [
                    {
                        id   : 'user-interface.page-layouts.overview',
                        title: 'Overview',
                        type : 'basic',
                        link : '/ui/page-layouts/overview'
                    },
                    
                ]
            },
            {
                id      : 'apps.help-center',
                title   : 'Help-Center',
                type    : 'collapsable',
                icon    : 'heroicons_outline:support',
                link    : '/apps/help-center',
                children: [
                    {
                        id        : 'apps.help-center.home',
                        title     : 'Sondage',
                        type      : 'basic',
                        link      : '/apps/help-center',
                        exactMatch: true
                    },
             
                    {
                        id   : 'apps.help-center.support',
                        title: 'Contact',
                        type : 'basic',
                        link : '/apps/help-center/support'
                    }
                ]
            },
        ]}
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
