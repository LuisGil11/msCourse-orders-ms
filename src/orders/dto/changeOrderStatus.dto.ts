import { OrderStatus } from '@prisma/client';
import { IsEnum, IsUUID } from 'class-validator';
import { orderStatusList } from '../enum/order.enum';

export class ChangeOrderStatusDto {
  @IsUUID(4)
  id: string;

  @IsEnum(orderStatusList, {
    message: `Possible status values are ${orderStatusList}`,
  })
  status: OrderStatus;
}
