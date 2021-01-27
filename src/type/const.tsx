import { IselectedOption } from "@janda-com/front/dist/components/select/SelectBox";
import { FoffsetPagingInfo, OffsetPagingInput, VerificationEvent, VerificationTarget } from "./api";
import { ICreateSubmitInput } from "../component/itemModal/ItemCreateModal";
import dayjs from "dayjs";

const { version } = require("../../package.json");
export const JDVERSION = version

export const BANK_LIST = {
    "001": "한국은행",
    "002": "산업은행",
    "003": "기업은행",
    "004": "국민은행",
    "005": "외환은행",
    "006": "국민은행",
    "007": "수협중앙회",
    "008": "수출입은행",
    "009": "수협중앙회",
    "010": "농협은행",
    "011": "농협중앙회",
    "020": "우리은행",
    "023": "제일은행",
    "027": "씨티은행",
    "031": "대구은행",
    "032": "부산은행",
    "034": "광주은행",
    "035": "제주은행",
    "037": "전북은행",
    "039": "경남은행",
    "045": "새마을금고중앙회",
    "048": "신협중앙회",
    "050": "상호저축은행",
    "052": "모간스탠리은행",
    "054": "HSBC은행",
    "055": "도이치은행",
    "056": "알비에스피엘씨은행",
    "057": "제이피모간체이스은행",
    "058": "미즈호은행",
    "059": "미쓰비시도쿄UFJ은행",
    "060": "BOA은행",
    "061": "비엔피파리은행",
    "062": "중국공상은행",
    "063": "중국은행",
    "064": "산림조합중앙회",
    "065": "대화은행",
    "071": "우체국",
    "076": "신용보증기금",
    "077": "기술보증기금",
    "081": "하나은행",
    "088": "신한은행",
    "092": "한국정책금융공사",
    "093": "한국주택금융공사",
    "094": "서울보증보험",
    "095": "경찰청",
    "096": "한국전자금융(주)",
    "099": "금융결제원"
}

export const DEFAULT_PAGE_SEARCH: OffsetPagingInput = {
    pageItemCount: 20,
    pageIndex: 0
}

export const DEFAULT_PAGE_INFO: FoffsetPagingInfo = {
    __typename: "OffsetPagingInfo",
    currentItemCount: 0,
    pageIndex: 0,
    pageItemCount: 0,
    totalPageCount: 0
}

export const DEFAULT_VEIFI_METHOD = {
    target: VerificationTarget.PHONE,
    event: VerificationEvent.UserVerifyPhone,
}


export const DEFAULT_ADDRESS = {
    address: "default",
    addressDetail: "default",
    lat: 0,
    lng: 0
}

export const BANK_SELECT_OP: IselectedOption[] = Object.entries(BANK_LIST).map(([key, value]) => {
    return {
        label: value,
        value: key
    }
})

export const GET_EVERY = {
    pagingInput: {
        pageIndex: 0,
        pageItemCount: 99
    }
}

export const DEFAULT_ITEM_CREATE: ICreateSubmitInput = process.env.NODE_ENV === "development" ? {
    amount: 1000,
    count: 1,
    email: "colton950901@mgmail.com",
    fromTm: dayjs(new Date()).valueOf(),
    toTm: dayjs(new Date()).add(1, "d").valueOf(),
    message: "테스트",
    name: "김민재",
    phoneNumber: "01052374492",
    productId: "",
} : {
        amount: 0,
        count: 0,
        email: "",
        fromTm: "",
        message: "",
        name: "",
        phoneNumber: "",
        productId: "",
        toTm: ""
    }

export default ""
