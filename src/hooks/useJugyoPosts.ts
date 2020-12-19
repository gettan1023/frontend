import { useGetDataApi } from "hooks/useApi";

interface Jugyo{
    id: number;
    name: string;
    universityId: number;
    day: string;
    period: number;
    teacherName: string;
    roomUuid: string;
    isMainRoom: boolean;
}

export function useJugyoPosts(){
    const [ d, error, loading ] = useGetDataApi(`/api/v1/jugyos`);
    const data: Jugyo = d?.jugyos?.map((v:any) => ({
        id: v.id,
        name: v.name,
        universityId: v.universityId,
        day: v.day,
        period: v.period,
        teacherName: v.teacherName,
        roomUuid: v.rooms[0].uuid,
        isMainRoom: v.rooms[0].isMainRoom
    }));

    return [ data, loading ];
};