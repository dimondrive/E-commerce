import { Outlet, Link } from "react-router-dom";
import Timer from "@/components/Layout/Timer/Timer";
import ProductRender from "@/components/products/ProductRender";

export default function Root() {
  return (
    <>
      <div className="container mx-auto px-4 pt-[100px]">
        До конца Акции <Timer />
        <div>
          <ProductRender />
        </div>
      </div>
    </>
  );
}
