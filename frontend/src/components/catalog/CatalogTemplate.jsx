import React from "react";
import CatalogView from "@/components/catalog/CatalogView";

function CatalogTemplate({ category, section, index }) {
  return (
    <>
      <div className="flex container h-full mx-auto px-4 ">
        <div className="flex catalog_section_list row ">
          <div className="secrion_item item">
            <table className="section_item_inner">
              <tbody>
                <tr className="flex gap-5">
                  <td className="image">
                    <a href="">IMG</a>
                    <img src="" alt="" />
                  </td>
                  <td className="section_info">
                    <ul className="flex gap-10">
                      <li className="name">
                        <a href="">{category}</a>
                      </li>
                      <li className="section flex gap-10">
                        <a href="">{section}</a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default CatalogTemplate;
