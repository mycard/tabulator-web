/* tslint:disable */
/* eslint-disable */
import { Tournament } from './tournament';
export interface TournamentReturnMessageDto {

  /**
   * Return data.
   */
  data?: Tournament;

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
