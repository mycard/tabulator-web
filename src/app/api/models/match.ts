/* tslint:disable */
/* eslint-disable */
import { Participant } from './participant';
import { Tournament } from './tournament';
export interface Match {
  childMatch: Match;

  /**
   * 晋级通往的比赛 ID
   */
  childMatchId?: number;
  createTime: string;
  deleteTime: string;
  id: number;

  /**
   * 是否为季军赛。
   */
  isThirdPlaceMatch: boolean;

  /**
   * The nth page, starting with 1.
   */
  pageCount?: number;
  parentMatches: Array<Match>;
  player1: Participant;

  /**
   * 玩家 1 ID
   */
  player1Id: number;

  /**
   * 玩家 1 分数
   */
  player1Score?: number;
  player2: Participant;

  /**
   * 玩家 2 ID
   */
  player2Id: number;

  /**
   * 玩家 2 分数
   */
  player2Score?: number;

  /**
   * Records per page.
   */
  recordsPerPage?: number;

  /**
   * 比赛轮次。
   */
  round: number;

  /**
   * 比赛状态
   */
  status: 'Pending' | 'Running' | 'Finished' | 'Abandoned';
  tournament: Tournament;

  /**
   * 比赛 ID。
   */
  tournamentId: number;
  updateTime: string;
  winner: Participant;

  /**
   * 胜者 ID
   */
  winnerId: number;
}
