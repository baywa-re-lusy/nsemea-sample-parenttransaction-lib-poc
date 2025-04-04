import * as log from 'N/log';

export class SampleParentTransactionServiceLUSY {
  logLusy(message: string) {
    log.debug('LUSY > SampleParentTransactionService', `PARENT LUSY Generic : ${message}`);
  }
}