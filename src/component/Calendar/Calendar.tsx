import React, { useState, useEffect, useContext } from "react";
import {
    dateFnsLocalizer,
    Calendar as RCBcalendar,
    CalendarProps,
    Views,
    View,
} from "react-big-calendar";
import {
    JDradioButton,
    JDbutton,
    useRadioButton,
    JDalign,
    JDtypho,
    useDayPicker,
} from "@janda-com/front";
import dayjs from "dayjs";
import { IDateRange } from "../../type/interface";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { productList_ProductList_items_ProductBooking } from "../../type/api";
import AppContext from "../../context";
let allViews = ["month", "week", "day", "agenda"];
const locales = {
    ko: require("date-fns/locale/ko"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

interface IProps extends Omit<CalendarProps, "localizer"> {
    date: Date;
    dateTimeRange: IDateRange;
    data: productList_ProductList_items_ProductBooking[];
    startHour: number;
    endHour: number;
    displayTools?: boolean;
}

type TEvent = {
    title: string;
    start: Date;
    end: Date;
    allDay?: boolean;
    resource?: any;
};

const Calendar: React.FC<IProps> = ({
    data,
    date,
    startHour,
    endHour,
    dateTimeRange,
    onNavigate,
    defaultView = "month",
    views,
    displayTools = true,
    ...props
}) => {
    const { isDateRangeMall } = useContext(AppContext);

    //라디오 옵션중 선택배제
    const radioButtonHook = useRadioButton(
        [defaultView || "day"],
        [
            {
                label: "월",
                value: "month",
            },
            {
                label: "주",
                value: "week",
            },
            {
                label: "일",
                value: "day",
            },
            {
                label: "요약",
                value: "agenda",
            },
        ].filter((op) =>
            views instanceof Array ? views.includes(op.value as any) : true
        )
    );

    const events = data?.map(
        (i): TEvent => {
            return {
                end: dayjs(i.dateRangeForUse?.to).toDate(),
                start: dayjs(i.dateRangeForUse?.from).toDate(),
                title: i.usageDetails
                    .map(
                        (usage) =>
                            `(${usage.usage} / ${usage.capacityCount}) ${
                                usage.label || i.itemName
                            }`
                    )
                    .join(","),
                resource: i,
            };
        }
    );

    const view: any = radioButtonHook.selectedValues[0];

    let nextView: "week" | "day" | "month" = view;
    if (nextView === ("agenda" as any)) nextView = "month";

    const range = useDayPicker(
        dayjs(date).startOf(nextView).toDate(),
        dayjs(date).endOf(view).toDate()
    );

    const getViews = (): View[] => {
        // if (isDateRangeMall) return ["month", "agenda"];
        return ["agenda", "day", "month", "week"];
    };

    const getDefaultView = (): View => {
        return "month";
    };

    useEffect(() => {
        range.setFrom(dayjs(date).startOf(nextView).toDate());
        range.setTo(dayjs(date).endOf(nextView).toDate());
    }, [view, date]);

    return (
        <div className="JDCalendar">
            {displayTools && (
                <JDalign
                    flex={{
                        between: true,
                    }}
                >
                    <JDalign mb flex>
                        <JDbutton
                            mr="no"
                            mode="border"
                            onClick={() => {
                                onNavigate!(new Date(), view, "DATE");
                            }}
                        >
                            오늘
                        </JDbutton>
                        <JDbutton
                            mr="no"
                            mode="border"
                            onClick={() => {
                                onNavigate!(
                                    dayjs(date).add(-1, nextView).toDate(),
                                    view,
                                    "PREV"
                                );
                            }}
                        >
                            이전
                        </JDbutton>
                        <JDbutton
                            mode="border"
                            onClick={() => {
                                onNavigate!(
                                    dayjs(date).add(1, nextView).toDate(),
                                    view,
                                    "NEXT"
                                );
                            }}
                        >
                            다음
                        </JDbutton>
                    </JDalign>
                    <JDtypho weight={600}>
                        {dayjs(range.from || undefined).format("M월 DD일")}
                        {view !== "day"
                            ? " - " +
                              dayjs(range.to || undefined).format("M월 DD일")
                            : undefined}
                    </JDtypho>
                    <JDradioButton
                        btnProps={{
                            br: "round",
                            mode: "border",
                        }}
                        mode="gather"
                        only
                        {...radioButtonHook}
                    />
                </JDalign>
            )}
            <RCBcalendar
                toolbar={false}
                views={getViews()}
                events={events}
                startAccessor="start"
                endAccessor="end"
                scrollToTime={new Date()}
                step={30}
                length={30}
                // min={dayjs().set("h", startHour).set("m", 0).toDate()}
                // max={dayjs().set("h", endHour).set("m", 0).toDate()}
                date={
                    view === "agenda"
                        ? dayjs(date).startOf("month").toDate()
                        : dayjs(date).toDate()
                }
                view={radioButtonHook.selectedValues[0] as any}
                culture={"ko"}
                localizer={localizer}
                {...props}
                showMultiDayTimes
                style={{ height: 1500 }}
            />
        </div>
    );
};

export default Calendar;

// toolbar={false}
// eventPropGetter={(event: any) => {
//     const classnames = classNames("", "", {
//         "rbc-event--cancel": event.resource.status === ItemStatus.CANCELED,
//         "rbc-event--permitted": event.resource.status === ItemStatus.PERMITTED,
//         "rbc-event--pending": event.resource.status === ItemStatus.PENDING,
//     })

//     return { className: classnames }
// }}
// step={30}
// length={30}
// // toolbar={true}
// culture={"ko"}
// events={events}
// {...props}
