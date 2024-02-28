/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";

import { Profile } from "../types/profile";
import { useMessage } from "./useMessage";

export const useProfile = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profile>();
  const { showMessage } = useMessage();

  const getProfile = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<Profile>>("https://api.mochiken.work/resource/profile")
      .then((res) => {
        const data = res.data[0];
        const profile:Profile = {
            title: data.title,
            field_img: data.field_img,
            field_body: data.field_body.toString().split("<br>")
        };
        setProfile(profile);
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

  return { getProfile, loading, profile };
};