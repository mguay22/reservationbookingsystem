import { Prop } from '@nestjs/mongoose';

export class CreateReservationDto {
  startDate: Date;

  endDate: Date;

  placeId: string;

  invoiceId: string;
}
