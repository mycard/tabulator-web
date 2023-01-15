/* tslint:disable */
/* eslint-disable */
import { Tournament } from './tournament';
export interface TournamentPaginatedReturnMessageDto {

  /**
   * Return data.
   */
  data?: Array<Tournament>;

  /**
   * Return message
   */
  message: string;

  /**
   * Current page.
   */
  pageCount: number;

  /**
   * Records per page.
   */
  recordsPerPage: number;

  /**
   * Return code
   */
  statusCode: number;

  /**
   * Whether success.
   */
  success: boolean;

  /**
   * Total record count.
   */
  total: number;

  /**
   * Total page count.
   */
  totalPages: number;
}
