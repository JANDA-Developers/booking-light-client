import dayjs from "dayjs";
import { DateRangeInput } from "../type/api";

export const yyyymmdd = (date?:Date | null) => date ? dayjs(date).format("YYYY.MM.DD") : "";
export const yyyymmddHHmm = (date?:Date | null) => date ? dayjs(date).format("YYYY.MM.DD HH:mm") : "";
export const yyyymmddHHmmLabel = (date?:Date | null) => date ? dayjs(date).format("YY년MM월DD일 HH시mm분") : "";
export const yyyymmddHHmmRange = (from?:Date | null, to?:Date | null) => from ? dayjs(from).format("YYYY.MM.DD HH:mm") : "" + "~" + (to ? dayjs(to).format("YYYY.MM.DD HH:mm") : "");
export const yyyymmddHHmmRangeLabel = (from?:Date | null, to?:Date | null) => from ? dayjs(from).format("YYYY.MM월DD일 HH:mm") : "" + "~" + (to ? dayjs(to).format("YYYY.MM.DD HH:mm") : "");
export const hhmmRange = (from?:Date | null, to?:Date | null) => dayjs(from || new Date()).format("hh:mm") + "~" + dayjs(to || new Date()).format("hh:mm")
export const MMDDhhmm = (date?:Date | null) => dayjs(date || new Date()).format("MM.DD hh:mm");
export const MMDDhhmmRange = (from?:Date | null | DateRangeInput, to?:Date | null) => {
    // @ts-ignore
    if(from.to) {
        const _from = from as DateRangeInput;
        MMDDhhmmRange(_from.from,_from.to)
    } else 
    dayjs((from as Date) || new Date()).format("MM.DD hh:mm") + "~" + dayjs(to || new Date()).format("MM.DD hh:mm");
}