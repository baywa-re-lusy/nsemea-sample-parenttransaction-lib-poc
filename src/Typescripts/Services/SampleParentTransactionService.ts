import * as log from 'N/log';
import {SampleParentTransaction} from "../Entities/SampleParentTransaction";

export class SampleParentTransactionService {
  log(message: string) {
    log.debug('SampleParentTransactionService', `PARENT Generic : ${message}`);
  }
  presetFields(SampleTransaction: SampleParentTransaction) {
    SampleTransaction.custbody_deliveryapptrequired = true;
    log.debug('SampleParentTransactionService', 'PARENT Generic preset fields');
  }
}