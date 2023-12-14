export interface Experience{
    position: string;
    company: string;
    duration: string;
    description: string;
}

export interface UserResume{
    name: string;
    linkPhoto: string;
    professionalPosition: string;
    aboutMe: string;
    experiences: Experience[];
}