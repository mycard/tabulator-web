/* tslint:disable */
/* eslint-disable */
import { Match } from './match';
export interface MatchReturnMessageDto {

  /**
   * Return data.
   */
  data?: Match;

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
