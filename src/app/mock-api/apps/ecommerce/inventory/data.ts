/* eslint-disable */
export const categories = [        //////ccccooonnnnnssssommateuuurrrrrr
    {
        id      : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        parentId: null,
        name    : 'Boisson',
        slug    : ''
    },
    {
        id      : '07986d93-d4eb-4de1-9448-2538407f7254',
        parentId: null,
        name    : 'Boisson',
        slug    : 'ladies'
    },
    {
        id      : 'ad12aa94-3863-47f8-acab-a638ef02a3e9',
        parentId: null,
        name    : 'BOisson',
        slug    : 'Unisex'       
    }
];
export const brands = [                 ////ccccooommmmpannnnyyyy
    {
        id  : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        name: 'Delice',
        slug: 'benton'
    },
    {
        id  : '61d52c2a-8947-4a2c-8c35-f36baef45b96',
        name: 'safia',
        slug: 'capmia'
    },
    {
        id  : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        name: 'TOM',
        slug: 'lara'
    }
];
export const tags = [      
    {
        id   : '167190fa-51b4-45fc-a742-8ce1b33d24ea',
        title: 'mens'
    },
    {
        id   : '3baea410-a7d6-4916-b79a-bdce50c37f95',
        title: 'ladies'
    },
    {
        id   : '8ec8f60d-552f-4216-9f11-462b95b1d306',
        title: 'unisex'
    }
];
export const vendors = [     //////Les Stores
    {
        id  : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029', 
        name: 'Inveep',
        slug: 'evel'
    },
    {
        id  : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        name: 'Sotudev',
        slug: 'mivon'
    },
    {
        id  : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        name: 'SocieteAB',
        slug: 'neogen'
    }
];
export const products = [
    {
        id         : '1114',
        category   : '07986d93-d4eb-4de1-9448-2538407f7254',
        name       : 'Safia',

        description: 'Nulla duis dolor fugiat culpa proident. Duis anim est excepteur occaecat adipisicing occaecat. Labore id laborum non elit proident est veniam officia eu. Labore aliqua nisi duis sint ex consequat nostrud excepteur duis ex incididunt adipisicing.',
        tags       : [
            '3baea410-a7d6-4916-b79a-bdce50c37f95',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'N120333',
        barcode    : '8278968055700',
        brand      : '2c4d98d8-f334-4125-9596-862515f5526b',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 37,
        reserved   : 'rrrrrrrr',
        comp       : 'societe delice',
        cost       : 100,
        basePrice  : 1686,
        taxPercent : 30,
        price      : 50,
        date       : 23899,
        weight     : 0.79,
        thumbnail  :  'assets/images/img/safia.jpg',
        images     : [
            'assets/images/img/coca.jpg',
            'assets/images/img/coca.jpg',
            'assets/images/img/coca.jpg'
        ],
        active     : true
    },
    {
        id         : '3f34e2fb-95bf-4f61-be28-956d2c7e4eb2',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'delice',
        description: 'societe de delice',
        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'N01023365',
        comp       : 'societe delice',

        barcode    : '8808746892183',
        brand      : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 30,
        reserved   : 'rrrrrrrr',
        cost       : 300,
        basePrice  : 950,
        taxPercent : 10,
        price      : 100,
        date       : 10000.2,
        weight     : 0.76,
        thumbnail  :  'assets/images/img/delice.jpg',
        images     : [
            'assets/images/img/delice.jpg',
            'assets/images/img/delice.jpg',
            'assets/images/img/delice.jpg'
        ],
        active     : false
    },
    {
        id         : '8fcce528-d878-4cc8-99f7-bd3451ed5405',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'TOM',
        comp       : 'societe delice',

        description: 'Velit nisi proident cupidatat exercitation occaecat et adipisicing nostrud id ex nostrud sint. Qui fugiat velit minim amet reprehenderit voluptate velit exercitation proident Lorem nisi culpa. Commodo quis officia officia eiusmod mollit aute fugiat duis quis minim culpa in. Exercitation laborum fugiat ex excepteur officia reprehenderit magna ipsum. Laboris dolore nostrud id labore sint consectetur aliqua tempor ea aute do.',
        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'N10230002',
        barcode    : '8866355574164',
        brand      : '61d52c2a-8947-4a2c-8c35-f36baef45b96',
        vendor     : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        stock      : 37,
        reserved   : 'rrrrrrrr',
        cost       : 200,
        basePrice  : 839,
        taxPercent : 30,
        price      : 90,
        date       : 99999,
        weight     : 0.62,
        thumbnail  :  'assets/images/img/papillon.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-04-01.jpg',
            'assets/images/apps/ecommerce/products/watch-04-02.jpg',
            'assets/images/apps/ecommerce/products/watch-04-03.jpg'
        ],
        active     : true
    },
    {
        id         : '91d96e18-d3f5-4c32-a8bf-1fc525cb92c0',
        category   : '07986d93-d4eb-4de1-9448-2538407f7254',
        name       : 'Cocacola',
        description: 'Pariatur proident labore commodo consequat qui et. Ad labore fugiat consectetur ea magna dolore mollit consequat reprehenderit laborum ad mollit eiusmod. Esse laboris voluptate ullamco occaecat labore esse laboris enim ipsum aliquip ipsum. Ea ea proident eu enim anim mollit non consequat enim nulla.',
        tags       : [
            '3baea410-a7d6-4916-b79a-bdce50c37f95',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'N123000',
        barcode    : '8390590339828',
        brand      : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 12,
        reserved   : 'rrrrrrrr',
        cost       : '100',
        basePrice  : 961,
        taxPercent : 20,
        price      : 250,
        date       : 12-12-1993,
        weight     : 0.67,
        thumbnail  : 'assets/images/img/coca.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-05-01.jpg',
            'assets/images/apps/ecommerce/products/watch-05-02.jpg',
            'assets/images/apps/ecommerce/products/watch-05-03.jpg'
        ],
        active     : false
    },  
];
