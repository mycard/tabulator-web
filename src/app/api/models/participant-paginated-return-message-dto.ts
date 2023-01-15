/* tslint:disable */
/* eslint-disable */
import { Participant } from './participant';
export interface ParticipantPaginatedReturnMessageDto {

  /**
   * Return data.
   */
  data?: Array<Participant>;

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
