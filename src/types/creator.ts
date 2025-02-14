export interface Creator {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    bio?: string;
    avatar?: string;
    user: User;
}

type User = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    description?: string;
    bio?: string;
    avatar?: string;
}