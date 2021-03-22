import { gql } from "@apollo/client";
import {  F_FILE, F_ITEM, F_PAGEINFO, F_STORE, F_USER, F_USERERROR } from "./fragment/fragments";
import { F_PURCHASE_BUNDLE } from "./fragment/purchase";

export const STORE_USER_PROFILE = gql`
  query storeCustomerProfile {
    StoreCustomerProfile {
        ...Fuser
    }
  }
  ${F_USER}
`

export const STORE_UPDATE = gql`
    mutation storeUpdate(
        $input: StoreUpdateInput!
        $storeId: ObjectId!
    ) {
    StoreUpdate(
        storeId:$storeId
        input:$input
    ) {
        ok
        error {
            ...FuserError
        }
    }
    }
${F_USERERROR}
`

export const STORE_CREATE = gql`
    mutation storeCreate(
        $input: StoreCreateInput!
    ) {
        StoreCreate(
            input:$input
        ) {
            ok
            error {
            ...FuserError
            }
        }
    }
${F_USERERROR}
`

export const STORE_DELETE = gql`
    mutation storeDelete(
        $storeId: ObjectId!
    ) {
    StoreDelete(
        storeId: $storeId
    ) {
        ok
        error {
            ...FuserError
        }
    }
}
${F_USERERROR}
`

export const STORE_LIST = gql`
    query storeList(
        $sort: [_StoreSort!]
        $filter: _StoreFilter
        $pagingInput: OffsetPagingInput!
    ) {
    StoreList(
        sort: $sort
        pagingInput: $pagingInput
        filter: $filter
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...Fstore
            image {
                ...Ffile
            }
        }
    }
}
${F_FILE}
${F_STORE}
${F_PAGEINFO}
`

export const STORE_FIND_BY_CODE = gql`
    query storeFindByCode(
        $code: String!
    ) {
    StoreFindByCode(
        code: $code 
    ) {
        ...Fstore
        items {
            ...Fitem
        }
    }
}
${F_ITEM}
${F_STORE}
`


export const STORE_FIND_BY_ID = gql`
    query storeFindById(
        $storeId: ObjectId!
    ) {
    StoreFindById(
        storeId: $storeId
    ) {
        ...Fstore
    }
}
${F_STORE}
`

export const PURCHASE_BUNDLE_REFUND = gql`
    mutation purchaseBundleRefund (
        $amount: Float!
        $purchaseBundleId: ObjectId!
    ) {
    PurchaseBundleRefund(
        amount: $amount
        purchaseBundleId: $purchaseBundleId
    ) {
        ok
        error {
            ...FuserError
        }
        data {
            ...Fpurchasebundle
        }
    }
}
${F_PURCHASE_BUNDLE}
${F_USERERROR}
${F_STORE}
`