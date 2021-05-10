import { IUseDayPicker, JDcard, JDdayPicker } from "@janda-com/front";
import { IJDcardProps } from "@janda-com/front/dist/components/cards/Card";
import React, { useContext, useState } from "react";
import { LargeSearcher } from "../../../../component/largeSearcher/LargeSearcher";
import { TUseDateTimePicker } from "../../../../hook/useDateTimePicker";
import { BuypageContext } from "../buypageList/helper/context";

interface IProp extends IJDcardProps {
    dayPickerHook?: IUseDayPicker;
    dateTimePicker?: TUseDateTimePicker;
    onSearch: (val: string) => void;
    useSearchFilter?: boolean;
    useRangeFilter?: boolean;
}

export const BuyPageSearchBar: React.FC<IProp> = ({
    dayPickerHook,
    useRangeFilter,
    useSearchFilter,
    onSearch,
    dateTimePicker,
    ...props
}) => {
    const [search, setSearch] = useState("");

    const handleSearch = () => {};

    if (!useSearchFilter || !dateTimePicker) return null;

    return (
        <JDcard {...props}>
            <div>
                {useSearchFilter && (
                    <LargeSearcher
                        onSearch={onSearch}
                        search={search}
                        setSearch={setSearch}
                    />
                )}
                {dateTimePicker && (
                    <JDdayPicker
                        format="YYYY년 MM월 DD일"
                        mb
                        label="날짜선택"
                        isRange={useRangeFilter}
                        {...(dayPickerHook || dateTimePicker.startDateHook)}
                        mode="input"
                    />
                )}
                {/* 사용기간 필터 */}
                {/* {useTimeFilter && <DateWithTimePicker  {...dateTimePicker} />} */}
            </div>
        </JDcard>
    );
};
