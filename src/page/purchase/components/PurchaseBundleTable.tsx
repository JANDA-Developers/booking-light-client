import React, { useState } from 'react';
import JDtable, { IJDTableProps, JDcolumn } from '../../../component/table/Table';
import { purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items, purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items, purchaseListForBusinessUser_PurchaseListForBusinessUser_items } from '../../../type/api';
import { yyyymmddHHmm } from '../../../utils/dateFormat';
import { JDicon } from '../../../component/icons/Icons';
import { Taccent } from '../../../atom/format/DateFormat';
import { payMethodKr } from '../../../utils/enumConverter';
import { autoHypen } from '@janda-com/front';
import { Clip } from '../../../atom/clip/Clip';

export type TBundleRow = Partial<purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items | purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items>;

interface IProp extends Partial<IJDTableProps> {
    handleDelete?: (product: TBundleRow) => void;
    handleView?: (product: TBundleRow) => void;
    purchaseBundles: TBundleRow[]
}
export const PurchaseBundleTable: React.FC<IProp> = ({ purchaseBundles, handleDelete, handleView, ...props }) => {

    const [accent, setAccent] = useState<Taccent>("time")

    const handleChangeTimeView = () => {
        setAccent(accent === "time" ? "date" : "time")
    }

    const columns: JDcolumn<TBundleRow>[] = [
        {
            Header: () => <div>생성일</div>,
            accessor: 'createdAt',
            Cell: ({ original: { createdAt } }) => {
                return <div>{yyyymmddHHmm(createdAt)}</div>;
            },
        },
        {
            Header: () => <div>구매코드</div>,
            accessor: 'code',
            Cell: ({ original: { code } }) => {
                return <Clip>{code}</Clip>;
            },
        },
        {
            Header: () => <div>결제수단</div>,
            accessor: 'paymethod',
            Cell: ({ original: { paymethod } }) => {
                return payMethodKr(paymethod)
            },
        },
        {
            Header: () => <div>구매자명</div>,
            accessor: 'purchaserName',
            Cell: ({ original: { purchaserName, _id } }) => {
                return <div>{purchaserName}</div>
            },
        },
        {
            Header: () => <div>연락처</div>,
            accessor: 'purchaserContact',
            Cell: ({ original: { purchaserContact } }) => {
                return <div>{autoHypen(purchaserContact)}</div>
            },
        },
        {
            Header: () => <div>상세</div>,
            width: 80,
            accessor: '_id',
            Cell: ({ original }) => {
                return <span>
                    <div>
                        {handleView && <JDicon mb hover icon="pen" onClick={() => { handleView(original) }} />}
                    </div>
                    <div>
                        {handleDelete && <JDicon mb hover color="error" icon="close" onClick={() => { handleDelete(original) }} />}
                    </div>
                </span>
            },
        },
    ];


    return <JDtable columns={columns} data={purchaseBundles} {...props} />;
};

