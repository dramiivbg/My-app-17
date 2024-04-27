export interface Catalog {
    position?:number;
    catalog: string;
    activityID: string;
    location:string;
    eventTime: string;
    link: string;
    instruments: Instruments[]
}

interface Instruments{
    displayName: string;
}

