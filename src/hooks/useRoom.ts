import { Message } from '@material-ui/icons';
import { useGetDataApi } from 'hooks/useApi';

interface Messages{
    message: string
}

export function useRoom(uuid: string){
    const [d, error] = useGetDataApi(`/api/v1/rooms/${uuid}`);
    const data: Messages = d?.room?.userRoomMessages?.map((v: any) => ({
        message: v.message
    }));

    return [ data, error ];
}