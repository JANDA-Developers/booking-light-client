import { getRefetch } from "@janda-com/front";
import { NOTIFICATION_HISTORY, NOTIFICATION_MANAGER_FIND_BY_ID, NOTIFICATION_SENDER_ADD, NOTIFICATION_TEMPLATE_LIST, SMS_SEND_SINGLE, SMS_SEND_WITH_TEMPLATE, SMS_TEMPLATE_CREATE, SMS_TEMPLATE_DELETE, SMS_TEMPLATE_UPDATE } from "../apollo/gql/notification";
import { MY_NOTIFICATION_MANAGER } from "../apollo/gql/user";
import {  notificationHistory, notificationHistoryVariables, notificationHistory_NotificationHistory_items, notificationmanagerFindById, notificationmanagerFindByIdVariables, notificationmanagerFindById_NotificationManagerFindById, notificationSenderAdd, notificationSenderAddVariables, notificationTemplateList, notificationTemplateList_NotificationTemplateList, notificationTemplateList_NotificationTemplateList_items, servicePlanDesubscribe, servicePlanDesubscribeVariables, servicePlanTemplateCreate, servicePlanTemplateCreateVariables, servicePlanTemplateDelete, servicePlanTemplateDeleteVariables, servicePlanTemplateList, servicePlanTemplateListVariables, servicePlanTemplateList_ServicePlanTemplateList, servicePlanTemplateUpdate, servicePlanTemplateUpdateVariables, smsSendSingle, smsSendSingleVariables, smsSendWithTemplate, smsSendWithTemplateVariables, smsTemplateCreate, smsTemplateCreateVariables, smsTemplateDelete, smsTemplateDeleteVariables, smsTemplateUpdate, smsTemplateUpdateVariables, _IItemFilter, _IItemSort, _InvoiceFilter, _InvoiceSort, _ITemplateFilter, _NotificationHistoryItemFilter, _NotificationHistoryItemSort} from "../type/api";
import {  generateFindQuery, generateListQueryHook, generateMutationHook, generateQueryHook } from "../utils/query";

export const useNotificationHistory = generateListQueryHook<_NotificationHistoryItemFilter, _NotificationHistoryItemSort, notificationHistory, notificationHistoryVariables,notificationHistory_NotificationHistory_items>(NOTIFICATION_HISTORY);
export const useNotificationSenderAdd = generateMutationHook<notificationSenderAdd,notificationSenderAddVariables>(NOTIFICATION_SENDER_ADD,{...getRefetch(MY_NOTIFICATION_MANAGER)});
export const useNotificationManagerFindById = generateFindQuery<notificationmanagerFindById,notificationmanagerFindByIdVariables,notificationmanagerFindById_NotificationManagerFindById>("notificationManagerId",NOTIFICATION_MANAGER_FIND_BY_ID);

export const useSmsSendSingle = generateMutationHook<smsSendSingle,smsSendSingleVariables>(SMS_SEND_SINGLE);
export const useSendWithTempalte = generateMutationHook<smsSendWithTemplate,smsSendWithTemplateVariables>(SMS_SEND_WITH_TEMPLATE);

export const useNotificationTemplateList = generateListQueryHook<_ITemplateFilter,_IItemSort,notificationTemplateList,notificationHistoryVariables,notificationTemplateList_NotificationTemplateList_items>(NOTIFICATION_TEMPLATE_LIST);
export const useTemplateCreate = generateMutationHook<smsTemplateCreate,smsTemplateCreateVariables>(SMS_TEMPLATE_CREATE,{...getRefetch(NOTIFICATION_TEMPLATE_LIST)});
export const useTemplateUpdate = generateMutationHook<smsTemplateUpdate,smsTemplateUpdateVariables>(SMS_TEMPLATE_UPDATE,{...getRefetch(NOTIFICATION_TEMPLATE_LIST)});
export const useTemplateDelete = generateMutationHook<smsTemplateDelete,smsTemplateDeleteVariables>(SMS_TEMPLATE_DELETE,{...getRefetch(NOTIFICATION_TEMPLATE_LIST)});
