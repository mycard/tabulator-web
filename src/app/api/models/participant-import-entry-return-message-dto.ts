/* tslint:disable */
/* eslint-disable */
import { ParticipantImportEntry } from './participant-import-entry';
export interface ParticipantImportEntryReturnMessageDto {

  /**
   * Return data.
   */
  data?: ParticipantImportEntry;

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
