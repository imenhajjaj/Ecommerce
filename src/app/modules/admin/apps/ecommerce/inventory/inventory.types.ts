export interface InventoryProduct
{
    _id?: string;
    category?: string;
    name: string;
    tags?: string[];
    sku?: string | null;
    barcode?: string | null;
    stock: number;
    cost: number;
    basePrice: number;
    taxPercent: number;
    price: number;
    thumbnail: string;
    images: string[];
    active: boolean;
}

export interface InventoryPagination
{
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}

export interface InventoryCategory
{
    _id: string;
    parentId: string;
    name: string;
    slug: string;
}

export interface InventoryBrand
{
    _id: string;
    name: string;
    slug: string;
}

export interface InventoryTag
{
    _id?: string;
    title?: string;
}

export interface InventoryVendor
{
    _id: string;
    name: string;
    slug: string;
}
