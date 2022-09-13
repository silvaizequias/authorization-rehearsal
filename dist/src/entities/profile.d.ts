export interface ProfileProps {
    role: string[];
    duty: string[];
}
export declare class Profile {
    private props;
    get role(): string[];
    get duty(): string[];
    constructor(props: ProfileProps);
}
