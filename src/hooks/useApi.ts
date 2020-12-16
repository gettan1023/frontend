import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from "axios";
import camelcaseKeys from "camelcase-keys";

const hostname = "http://localhost:3000";

export function useGetDataApi(
  url: string,
  lazy: boolean = false,
  defaultParams: any = {}
) {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  const loadFn = (params: any = defaultParams) => {
    axios
      .get(hostname + url, { params })
      .then((res: AxiosResponse<any>) => {
        setResponse(camelcaseKeys(res.data, { deep: true }));
      })
      .catch((err: Error) => {
        setError(err);
      });
  };

  useEffect(() => {
    // console.log(hostname + url);
    if (!lazy) loadFn();
  }, [url]);
  return [response, error, loadFn];
};

export function usePostDataApi(
  url: string,
  defaultParams: any = {},
  lazy: boolean = false
  ) {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  const loadFn = (params: any) => {
    axios
      .post(hostname + url, params)
      .then((res: AxiosResponse<any>) => {
        console.log(res);
        setResponse(camelcaseKeys(res.data, { deep: true }));
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  };
  useEffect(() => {
    console.log(hostname + url);
    if (!lazy && defaultParams) loadFn(defaultParams);
  }, [url]);
  return [response, error, loadFn];
}

