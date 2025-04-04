import * as log from 'N/log';

export class SampleParentTransactionService {
  log(message: string) {
    log.debug('SampleParentTransactionService', `PARENT Generic : ${message}`);
  }
}