import { useState, useEffect } from "react";
import { usePostDataApi } from "hooks/useApi";

interface User{
    id?: number;
    uuid: string;
    name?: string;
}

export function useUser(params: any){
    const [data, setData] = useState<string | null>(null);
    let userUuid = localStorage.getItem("userUuid");
    if (userUuid !== "undefined" && userUuid !== undefined && userUuid !== null ) {
      params = null;
    } 
    const [ d ] = usePostDataApi(`/api/v1/users`, params);
    useEffect(() => {
      if (userUuid !== "undefined" && userUuid !== undefined  && userUuid !== null) {
        setData(userUuid);
      } else {
        const uu = d?.user?.uuid;
        setData(uu);
        localStorage.setItem("userUuid", uu as string);
      }
    }, [params]);
    return data;
}
