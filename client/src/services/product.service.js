import httpService from './http.service'
const productEndpoint = "products/";

const productService = {
  fetchAll: async (sort, order, currentPage, pageSize) => {
    const data = await httpService.get(`products?${sort}${order}_start=${(currentPage - 1) * pageSize}&_limit=${pageSize}`)
    return data
  },
  fetchByCategoryId: async (id, sort, order, currentPage, pageSize) => {
    const  data = await httpService.get(
      `products?categoryId=${id}&${sort}${order}_start=${(currentPage - 1) * pageSize}&_limit=${pageSize}`
    )
    return  data
  },
  fetchByType: async (type, sort, order, currentPage, pageSize) => {
    const  data = await httpService.get(
      `products?type=${type}&${sort}${order}_start=${(currentPage - 1) * pageSize}&_limit=${pageSize}`
    )
    return  data
  },
  // fetchByType: async (type, sort, order, currentPage, pageSize) => {
  //   const { data, headers } = await httpService.get(
  //     `products?categoryId=${id}&${sort}${order}_start=${(currentPage - 1) * pageSize}&_limit=${pageSize}`
  //   )
  //   return { data, headers }
  // },

 

  // -----------------
  getMin: async (sortBy) => {
    const { data } = await httpService.get(productEndpoint, {
      params: {
        _sort: sortBy,
        _start: 0,
        _limit: 1,
      },
    });
    return data[0][sortBy];
  },
  getMax: async (sortBy) => {
    const { data } = await httpService.get(productEndpoint, {
      params: {
        _sort: sortBy,
        _order: "desc",
        _start: 0,
        _limit: 1,
      },
    });
    return data[0][sortBy];
  }
  // -----------------

  // minPrice: async () => {},
  // maxPrice: async () => {},
  // minPieces: async () => {},
  // maxPieces: async () => {},
  // minMinifigs: async () => {},
  // maxMinifigs: async () => {},
  // minYear: async () => {},
  // maxYear: async () => {},
}

export default productService
