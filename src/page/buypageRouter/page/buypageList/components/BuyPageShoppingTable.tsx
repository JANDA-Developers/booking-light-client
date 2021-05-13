import React from "react";
import { autoComma, Flex, JDtypho, Small } from "@janda-com/front";
import JDSelectable from "../../../../../component/table/SelectableTable";
import { IBasketItem } from "../../../../../utils/Basket";
import { IJDTableProps, JDcolumn } from "../../../../../component/table/Table";
import { CapacityInput } from "../../../../../type/api";
import PhotoFrame, {
    Photo,
} from "../../../../../component/photoFrame/PhotoFram";
import { Ratio } from "../../../../../type/const";
import { useItemList } from "../../../../../hook/useItem";
import uniq from "lodash/uniq";
import { JDicon } from "../../../../../component/icons/Icons";
import { cutStr } from "../../../../../utils/cutStr";
import { useResizeDetector } from "react-resize-detector";
import {
    getPordByCapcityKey,
    getUniqCpacities,
} from "../../../../../utils/productBookingUtils";

export type TproductRowData = Partial<IBasketItem>;

interface IProp extends Partial<IJDTableProps> {
    handleDelete?: (usageInput: CapacityInput, pord: IBasketItem) => void;
    handleEdit?: (product: TproductRowData) => void;
    products: TproductRowData[];
}

export const BuyPageShoppingTable: React.FC<IProp> = ({
    products,
    handleDelete,
    handleEdit,
    ...props
}) => {
    const uniqItemsId = uniq(
        products.map((prod) => prod.itemId).filter((v) => v)
    );
    const { items } = useItemList({
        initialFilter: {
            _id__in: [...uniqItemsId],
        },
    });

    const { ref, width } = useResizeDetector();

    const usageCpacities = getUniqCpacities(
        products.flatMap((prod) => prod.countDetails || [])
    );

    let columns: JDcolumn<CapacityInput>[] = [
        {
            Header: () => <div>상품정보</div>,
            accessor: "key",
            minWidth: 300,
            Cell: ({ original }) => {
                const prod = getPordByCapcityKey(products, original.key);
                const item = items.find((item) => item._id === prod?.itemId);
                return (
                    <Flex oneone style={{ width: "100%" }} vCenter>
                        <Photo
                            isBgImg
                            mr
                            style={{ width: "8.125rem" }}
                            file={item?.thumbNail}
                            ratio={Ratio["16:9"]}
                        />
                        <div>
                            <JDtypho mb="small">
                                {item?.name}
                                <Small>{cutStr(item?.description, 40)}</Small>
                            </JDtypho>
                            <JDtypho>{original.label}</JDtypho>
                        </div>
                    </Flex>
                );
            },
        },
        {
            Header: () => <div>수량</div>,
            accessor: "key",
            Cell: ({ original: { count } }) => {
                return (
                    <div>
                        {count}
                        {/* <JDselectCounter onChange={()=>{}} /> */}
                    </div>
                );
            },
        },
        {
            Header: () => <div>가격</div>,
            width: 200,
            accessor: "price",
            Cell: ({ original: { price } }) => {
                return <div>{autoComma(price)}</div>;
            },
        },
        {
            Header: () => <div></div>,
            width: 80,
            accessor: "key",
            Cell: ({ original }) => {
                const prod = getPordByCapcityKey(products, original.key);
                return (
                    <div>
                        <JDicon
                            icon="close"
                            hover
                            color="error"
                            onClick={() => {
                                handleDelete?.(original, prod!);
                            }}
                        />
                    </div>
                );
            },
        },
    ];

    if ((width || 0) < 500) {
        // 모바일뷰
    }

    return (
        <div ref={ref} className="JDselectTable--mini">
            <JDSelectable
                noDataText={""}
                minRows={1}
                defaultPageSize={20}
                columns={columns}
                data={usageCpacities.map((input) => ({
                    ...input,
                    _id: input?.key,
                }))}
                {...props}
            />
        </div>
    );
};
