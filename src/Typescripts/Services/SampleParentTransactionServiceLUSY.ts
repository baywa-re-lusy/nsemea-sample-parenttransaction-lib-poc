import * as log from 'N/log';
import {SampleParentTransaction} from "../Entities/SampleParentTransaction";

export const SampleParentTransactionServiceLUSY = {
  logLusy1(message: string) {
    log.debug('LUSY 1 > SampleParentTransactionService', `PARENT LUSY 1 Generic : ${message}`);
  },
  logLusy2(message: string) {
    log.debug('LUSY 2 > SampleParentTransactionService', `PARENT LUSY 2 Generic : ${message}`);
  },
  presetFieldsLUSY(SampleTransaction: SampleParentTransaction) {
    SampleTransaction.custbody_namecontactonsite = 'Please specifiy a name!';
  }
}