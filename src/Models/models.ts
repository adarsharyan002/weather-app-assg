
export interface weatherResponse{
    id:number
    
    name: string,
    visibility: number,
    wind:{
        speed:number
    },
    icom: string
    main: {
        temp:number
        humidity:number
    }
    weather:[{icon:string,description:string}]
}