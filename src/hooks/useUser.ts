import { useState } from "react";
import { usePostDataApi } from "hooks/useApi";

interface User{
    id?: number;
    uuid: string;
    name?: string;
}

export function useUser(params: any){
    const userUuid = !!localStorage.getItem("userUuid") ? JSON.parse(localStorage.getItem("userUuid") as string) : null;
    console.log(userUuid)
    params = userUuid ? null : params;
    let data = "";
    console.log("called");
    const [d, error] = usePostDataApi(`/api/v1/users`, params);
    console.log(d);
    if(userUuid){
      data = userUuid;
    }else{
      data = d?.user?.uuid;
      localStorage.setItem("userUuid", JSON.stringify(data));
      console.log(data);
    }
    
    return data;
}
