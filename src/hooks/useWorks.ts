/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";

import { Work } from "../types/work";
import { useMessage } from "./useMessage";
import { BACKEND_ORIGIN } from "../config/settings";

export const useWorks = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [works, setWorks] = useState<Array<Work>>();
  const { showMessage } = useMessage();

  const getWorks = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<Work>>(`${ BACKEND_ORIGIN }/resource/top_works`)
      .then((res) => {
        setWorks(res.data);
      })
      .catch(() => {
        showMessage({
          title: "ユーザー情報が取得できませんでした。",
          status: "error"
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { getWorks, loading, works };
};