export interface Tag
{
    _id?: string;
    title?: string;
}

export interface Task
{
    _id?: string;
    type: 'task' | 'section';
    title: string;
    notes: string;
    completed: boolean;
    dueDate: string | null;
    priority: 0 | 1 | 2;
    tags: string[];
    order: number;
}
