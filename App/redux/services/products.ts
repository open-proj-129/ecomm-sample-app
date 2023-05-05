/**
 * api slice for products module.
 */

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ApiRoutes, BASE_URL} from '../apiRoutes';
import {ProductItemTypes} from '../types/prodctsServiceTypes';

export const productSlice = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    /** get complete products list */
    getProductsList: builder.query<Array<ProductItemTypes>, void>({
      query: () => ApiRoutes.PRODUCTS,
    }),

    /** get single product detail */
    getProductDetail: builder.query<ProductItemTypes, number>({
      query: productId => `${ApiRoutes.PRODUCTS}/${productId}`,
    }),
  }),
});

export const {useGetProductsListQuery, useGetProductDetailQuery} = productSlice;
