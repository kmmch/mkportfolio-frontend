/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";

import { useMessage } from "./useMessage";

export const useCsrfToken = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [csrf_token, setCsrfToken] = useState<Array<string>>();
  const { showMessage } = useMessage();

  const getCsrfToken = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<string>>("https://api.mochiken.work/session/token")
      .then((res) => {
        setCsrfToken(res.data);
      })
      .catch(() => {
        showMessage({
          title: "サーバーに接続できませんでした。",
          status: "error"
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { getCsrfToken, loading, csrf_token };
};