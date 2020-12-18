import { Message } from '@material-ui/icons';
import { useGetDataApi } from 'hooks/useApi';

interface Messages{
    message: string;
    userUuid: string;
}

export function useRoom(uuid: string){
    const [d, error, loading] = useGetDataApi(`/api/v1/rooms/${uuid}`);
    const data: Messages[] = d?.room?.userRoomMessages?.map((v: any) => ({
        message: v.message,
        userUuid: v.userUuid
    }));
    return [data, loading];
}