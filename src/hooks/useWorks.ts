/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";

import { Work } from "../types/work";
import { useMessage } from "./useMessage";

export const useWorks = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [works, setWorks] = useState<Array<Work>>();
  const { showMessage } = useMessage();

  const getWorks = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<Work>>("https://api.mochiken.work/resource/top_works")
      .then((res) => {
        // const data = res.data[0];
        // const works:Work = {
        //     title: data.title,
        //     field_description: data.field_description,
        //     field_img: data.field_img,
        //     field_url: data.field_url,
        //     field_body: data.field_body,

        // };
        // console.log(works);
        // setProfile(works);
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