import { Flex, autoComma, JDtypho } from "@janda-com/front";
import React, { useContext } from "react";
import { IUseBookingsInput } from "../../../../hook/useBookingInput";
import { usePurchase } from "../../../../hook/usePay";
import {
    itemFindById_ItemFindById_ItemBooking_attrs,
    storeFindByCode_StoreFindByCode_buypage_delivery,
} from "../../../../type/api";
import { IBuypagePurchaseCommon } from "../buypageDetail/BuyPageDetailBase";
import { BuypageContext } from "../buypageList/helper/context";
import { TimeBlock } from "../components/TimeBlock";
import { BuyPagePurchaseBase } from "./BuyPagePurchaseBase";

interface IProp extends IBuypagePurchaseCommon {
    handleBackStep: () => void;
}

export const deliveryPriceGet = (
    deliveryInfo: storeFindByCode_StoreFindByCode_buypage_delivery | null,
    priceSum: number
) => {
    const { fee, overFreePrice } = deliveryInfo || {};
    if (!fee) return 0;
    if (overFreePrice) {
        const isOver = priceSum >= overFreePrice;
        if (isOver) return 0;
    }
    return fee;
};

export const BuyPageTimePurchase: React.FC<IProp> = ({
    buypageDetailHook,
    handleBackStep,
}) => {
    const { bookingsInputHook, itemAttrs, options } = buypageDetailHook;
    const purchaseProducts = bookingsInputHook?.bookingInputs || [];
    const totalPrice = bookingsInputHook?.priceSum || 0;

    const usePurchaseHook = usePurchase({
        buypageDetailHook,
    });

    const { totalOptionPrice } = usePurchaseHook;

    return (
        <BuyPagePurchaseBase
            handleBackStep={handleBackStep}
            PriceViewer={
                <Flex typho={{ size: "large" }}>
                    <JDtypho mr>최종금액</JDtypho>
                    <JDtypho color="error">
                        {autoComma(totalOptionPrice)} 원
                    </JDtypho>
                </Flex>
            }
            SelectViewer={
                <Flex>
                    {bookingsInputHook?.bookingInputs.map((bi, index) => (
                        <TimeBlock
                            mr={"tiny"}
                            mb
                            priceShow
                            key={bi.productId + "selectedTimeBlock"}
                            index={index}
                            item={bi.productOrigin as any}
                        />
                    ))}
                </Flex>
            }
            {...usePurchaseHook}
        />
    );
};

export default BuyPageTimePurchase;
