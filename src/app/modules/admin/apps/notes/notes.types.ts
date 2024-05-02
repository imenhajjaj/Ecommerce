export interface Task   
{
    _id?: string;
    content?: string;
    completed?: string;
}

export interface Label
{
    _id?: string;
    title?: string;
}

export interface Note
{
    _id?: string;
    title?: string;
    content?: string;
    tasks?: Task[];
    image?: string | null;
    labels?: Label[];
    archived?: boolean;
    createdAt?: string;
    updatedAt?: string | null;
}
