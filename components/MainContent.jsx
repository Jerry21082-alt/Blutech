"use client";
import { contextFun } from "@/context/UseContext";
import FallbackImg from "./FallbackImg";

export default function MainContent() {
  const { data, isLoading } = contextFun();
  const alternateImgSrc = "/images/Frame 1171274981.png";

  return (
    <section className="flex-grow">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-2xl loader">Loading...</div>
        </div>
      ) : (
        <div className="table-container">
          <h2 className="text-[18px] text-h2Color font-medium">
            Department List
          </h2>
          <table className="w-full mt-7 styled-table">
            <thead className="bg-tableHeadBg h-[44px] px-6">
              <tr className="h-4 w-full">
                <th>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <div className="custom-checkbox">
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox"></label>
                    </div>

                    <div className="sub">S/N</div>
                  </div>
                </th>
                <th>
                  <h3 className="font-bold h3">Image</h3>
                </th>
                <th>
                  <h3 className="font-bold h3">SKU</h3>
                </th>
                <th>
                  <h3 className="font-bold h3">Name</h3>
                </th>
                <th>
                  <h3 className="font-bold h3">Title</h3>
                </th>
                <th>
                  <h3 className="font-bold h3">Description</h3>
                </th>
                <th>
                  <h3 className="font-bold h3">Brand</h3>
                </th>
                <th>
                  <h3 className="font-bold h3">Cost Price</h3>
                </th>
                <th>
                  <h3 className="font-bold h3">Quantity</h3>
                </th>
                <th>
                  <h3 className="font-bold h3">Size</h3>
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td>
                    <div className="flex items-center space-x-1 md:space-x-3">
                      <div className="custom-checkbox">
                        <input type="checkbox" id={i} />
                        <label htmlFor={i}></label>
                      </div>

                      <div className="sub">{i + 1}.</div>
                    </div>
                  </td>

                  <td>
                    <div className="rounded-[4px] w-10 h-10 overflow-hidden flex items-center justify-center">
                      <FallbackImg
                        src={item.Image_1}
                        fallbackSrc={alternateImgSrc}
                        width={500}
                        height={500}
                        alt="product image"
                      />
                    </div>
                  </td>

                  <td>
                    <h3 className="h3 text-sm text-tableText">{item.SKU}</h3>
                  </td>

                  <td>
                    <h3 className="h3 text-sm text-tableText">{item.Name}</h3>
                  </td>

                  <td>
                    <h3 className="h3 text-sm text-tableText">{item.Title}</h3>
                  </td>

                  <td>
                    <h3
                      className="h3 text-sm text-tableText"
                      style={{ width: "214px" }}
                    >
                      {item.Description.length > 50
                        ? `${item.Description.substring(0, 50)}...`
                        : item.Description}
                    </h3>
                  </td>

                  <td>
                    <h3 className="h3 text-sm text-tableText">{item.Brand}</h3>
                  </td>

                  <td>
                    <h3 className="h3 text-sm text-tableText">
                      {item["Cost Price"]}
                    </h3>
                  </td>

                  <td>
                    <h3 className="h3 text-sm text-tableText">
                      {item.Quantity}
                    </h3>
                  </td>

                  <td>
                    <h3 className="h3 text-sm text-tableText">{item.size}</h3>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
