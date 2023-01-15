/* tslint:disable */
/* eslint-disable */
import { Participant } from './participant';
export interface ParticipantReturnMessageDto {

  /**
   * Return data.
   */
  data?: Participant;

  /**
   * Return message
   */
  message: string;

  /**
   * Return code
   */
  statusCode: number;

  /**
   * Whether success.
   */
  success: boolean;
}
