import {TransactionBase} from "@nsemea_lib/Core/DataAccess/TransactionBase";
import {FieldTypeDecorator} from "@nsemea_lib/Core/DataAccess/NSTypedRecord";

export class SampleParentTransaction extends TransactionBase {
  @FieldTypeDecorator()
  accessor custbody_namecontactonsite: string;

  @FieldTypeDecorator()
  accessor custbody_deliveryapptrequired: boolean;
}