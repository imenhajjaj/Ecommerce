export interface Contact
{
    _id: string;
    avatar?: string | null;
    background?: string | null;
    name: string;
    emails?: {
        email: string;
        label: string;
    }[];
    phoneNumbers?: {
        country: string;
        phoneNumber: string;
        label: string;
    }[];
    title?: string;
    company?: string;
    birthday?: string | null;
    address?: string | null;
    notes?: string | null;
    tags: string[];
}

export interface Country
{
    _id?: string;
    iso: string;
    name: string;
    code: string;
    flagImagePos: string;
}

export interface Tag
{
    _id?: string;
    title?: string;
}
