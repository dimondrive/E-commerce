import { getRecoil, setRecoil } from "recoil-nexus";
import { productsState } from "@/store/atoms";

export const  fetchState = async () =>  {
  //const '' = await getRecoil(productsState);
  setRecoil(productsState, "success");
};
