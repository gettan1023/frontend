import { Message } from '@material-ui/icons';
import React, { useState } from "react";
import { useGetDataApi } from 'hooks/useApi';

interface Messages{
    message: string;
    userUuid: string;
}

export function useRoom(uuid: string){
    const [url, setUrl ] = useState(`/api/v1/rooms/${uuid}`)
    const [d, error, loading] = useGetDataApi(url);
    console.log(d);
    const data: Messages[] = d?.room?.userRoomMessages?.map((v: any) => ({
        message: v.message,
        userUuid: v.userUuid
    }));
    return [data, loading];
}