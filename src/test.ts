import { ConfigurationParameters, Configuration } from "../generated/runtime";
import { Class031SanPhamGiayApi } from "../generated/apis/Class031SanPhamGiayApi";

export const createSanPhamGiayApi = (config?: ConfigurationParameters) => {
  return new Class031SanPhamGiayApi(new Configuration(config));
};

createSanPhamGiayApi()
  .chiTietSanPhamResDto({
    id: 1,
  })
  .then((data) => {
    console.log("San pham data: ", data);
  });
