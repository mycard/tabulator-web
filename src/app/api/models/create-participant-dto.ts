/* tslint:disable */
/* eslint-disable */
export interface CreateParticipantDto {

  /**
   * 名称
   */
  name: string;

  /**
   * 是否已经退赛
   */
  quit: boolean;

  /**
   * 比赛 ID。
   */
  tournamentId: number;
}
