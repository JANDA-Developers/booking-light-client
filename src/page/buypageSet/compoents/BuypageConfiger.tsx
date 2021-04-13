import { Bold, Flex, InputText, JDbutton, JDcard, JDhorizen, JDselect, JDswitch, JDtabs, opFind, Tab, TabList, TabPanel, toNumber } from '@janda-com/front';
import { ISet } from '@janda-com/front/dist/types/interface';
import { isEmpty } from 'lodash';
import React, { useContext } from 'react';
import { ObjectInputRender } from '../../../component/objectInput/ObjectInputRender';
import AppContext from '../../../context';
import { useStoreUpdate } from '../../../hook/useStore';
import { BUYPAGE_TYPE_OPS, DEFAULT_DELIVERY, PAY_METHOD_OPS } from '../../../type/const';
import { BuyPageType } from '../../../type/enum';
import { completeMsg } from '../../../utils/onCompletedMessage';
import { Validater } from '../../../utils/Validater';
import { IbuypageConfig } from '../config/config';
import { buypageNormalTexts } from '../config/configDefault';
import { ShoppingConfiger } from './ShoppingConfiger';
import { ReservationNormalConfiger } from './ReservationNormalConfiger';
import { me_Me_stores_buypage, me_Me_stores_buypage_delivery } from '../../../type/api';
import { useCopy } from '../../../hook/useCopy';
import { omits } from '../../../utils/omits';
import { ScrollBox } from '../../../component/scrollBox/ScrollBox';

interface IProp {
    config: IbuypageConfig;
    setConfig: ISet<IbuypageConfig>
}

export const BuypageConfiger: React.FC<IProp> = ({ config, setConfig }) => {
    const { selectedStoreId, selectedStore } = useContext(AppContext);
    const { type, payMethods, RESERVATION_NORMAL: { texts } } = config;
    const isShopping = type === BuyPageType.SHOPPING_MALL;

    const [delivery, setDelivery] = useCopy<me_Me_stores_buypage_delivery>(
        selectedStore?.buypage?.delivery || DEFAULT_DELIVERY
    )

    const [storeUpdate] = useStoreUpdate({
        onCompleted: ({ StoreUpdate }) => {
            completeMsg(StoreUpdate, "변경 저장완료")
        }
    })

    const seletedPayMethods = PAY_METHOD_OPS.filter(op => payMethods?.includes(op.value));

    const { validate } = new Validater([{
        value: !isEmpty(payMethods),
        id: "BuyPageConfigerPayMethod",
        failMsg: "하나이상의 결제수단을 등록 시켜주세요."
    }])

    const handleSaveConfig = () => {
        const next = {
            buypage: {
                configure: config,
                delivery
            }
        }
        if (validate())
            storeUpdate({
                variables: {
                    storeId: selectedStoreId,
                    input: omits(next)
                }
            })
    }

    return <JDcard foot={
        <JDbutton onClick={handleSaveConfig} thema="primary">저장하기</JDbutton>
    } head="페이지 설정하기">
        <JDtabs>
            <TabList >
                <ScrollBox scrollSize="small" direction="horizen" >
                    <Flex  >
                        <Tab>일반설정</Tab>
                        {isShopping && <Tab>배송비설정</Tab>}
                        <Tab>텍스트설정</Tab>
                    </Flex>
                </ScrollBox>
            </TabList>
            <TabPanel>
                <Bold size="small">기본</Bold>
                <JDhorizen margin={1} />
                <JDselect
                    options={BUYPAGE_TYPE_OPS}
                    selectedOption={opFind(type, BUYPAGE_TYPE_OPS)}
                    onChange={(op) => {
                        const val = op.value
                        config.type = val;
                        setConfig({ ...config })
                    }}
                    mb
                    label="페이지 타입"
                />
                <JDselect
                    id={"BuyPageConfigerPayMethod"}
                    mb
                    onChanges={(ops) => {
                        config.payMethods = (ops || BUYPAGE_TYPE_OPS).map(op => op.value);
                        setConfig({ ...config })
                    }}
                    selectedOptions={seletedPayMethods}
                    isMulti
                    label="지원 결제수단"
                    options={PAY_METHOD_OPS}
                >
                </JDselect>
                <InputText onChange={(val: any) => {
                    config.RESERVATION_NORMAL.maxSelectableCount = toNumber(val) || 0
                    setConfig({ ...config });
                }} mb label="한번에 선택 가능한 수량" value={config.RESERVATION_NORMAL.maxSelectableCount} />
                <ReservationNormalConfiger setConfig={setConfig} config={config} />
                <ShoppingConfiger setConfig={setConfig} config={config} />
            </TabPanel>
            {isShopping && <TabPanel>
                <div>
                    <InputText
                        label="배송비"
                        mb
                        onChange={(val: any) => {
                            delivery.fee = val;
                            setDelivery({ ...delivery });
                        }}
                        value={delivery.fee || 0}
                        comma
                    />
                    <InputText
                        label="배송비 무료금액"
                        mb
                        onChange={(val: any) => {
                            delivery.overFreePrice = val;
                            setDelivery({ ...delivery });
                        }}
                        value={delivery.overFreePrice || 0}
                        comma
                    />
                    <InputText
                        label="배달 최소금액"
                        mb
                        onChange={(val: any) => {
                            delivery.lowerPrice = val;
                            setDelivery({ ...delivery });
                        }}
                        value={delivery.lowerPrice || 0}
                        comma
                    />
                </div>
            </TabPanel>
            }
            <TabPanel>
                <ObjectInputRender onChange={(object) => {
                    config.RESERVATION_NORMAL.texts = object
                    setConfig({
                        ...config
                    })
                }} value={texts || buypageNormalTexts} />
            </TabPanel>
        </JDtabs>
        {/* <JDselect onChange={ } /> */}
        {/* //기타 옵션들 들어갈 자리  */}
    </JDcard>;
};
