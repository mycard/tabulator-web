/* tslint:disable */
/* eslint-disable */
export interface UpdateTournamentDto {

  /**
   * 协作者 MC ID
   */
  collaborators?: Array<number>;

  /**
   * 描述
   */
  description?: string;

  /**
   * 名称
   */
  name?: string;

  /**
   * 可见性
   */
  visibility?: 'Public' | 'Internal' | 'Private';
}
