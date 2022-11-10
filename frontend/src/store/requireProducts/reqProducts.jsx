import { getRecoil, setRecoil } from "recoil-nexus";
import { productsState } from "../../store/atoms";

export function reqProducts() {
  const requireProducts = () => {
    axios
      .get("http://localhost:5000/api/products")
      .then((result) => result.data)
      .then((result) => {
        productsState(result);
      });
  };

  const req = getRecoil(requireProducts);
  setRecoil(requireProducts, !req);
}
