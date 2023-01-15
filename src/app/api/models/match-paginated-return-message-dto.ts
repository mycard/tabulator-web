/* tslint:disable */
/* eslint-disable */
import { Match } from './match';
export interface MatchPaginatedReturnMessageDto {

  /**
   * Return data.
   */
  data?: Array<Match>;

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
