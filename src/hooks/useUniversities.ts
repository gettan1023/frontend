import { useGetDataApi } from 'hooks/useApi';

interface Universities {
    id: number;
    name: string;
    color?: string;
};

export function useUniversities(){
    const [ d, error ] = useGetDataApi(`/api/v1/universities`);
    const data: Universities = d?.universities?.map((v: any) => ({
        id: v?.id,
        name: v?.name,
        color: v?.color
    }))
    return [ data, error ];
    
};