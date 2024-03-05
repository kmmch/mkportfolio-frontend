/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";

import { useMessage } from "./useMessage";
import { Skill } from "../types/skill";
import { BACKEND_ORIGIN } from "../config/settings";

export const useSkills = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [skills, setSkills] = useState<Array<Skill>>();
  const { showMessage } = useMessage();

  const getSkills = useCallback((type:string) => {
    setLoading(true);
    axios
      .get<Array<Skill>>(`${ BACKEND_ORIGIN }/resource/term/${type}`)
      .then((res) => {
        setSkills(res.data);
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

  return { getSkills, loading, skills };
};