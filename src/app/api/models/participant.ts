/* tslint:disable */
/* eslint-disable */
import { Match } from './match';
import { ParticipantScore } from './participant-score';
import { Tournament } from './tournament';
export interface Participant {
  createTime: string;
  deleteTime: string;
  id: number;

  /**
   * 参与的比赛。
   */
  matches: Array<Match>;
  matches1: Array<Match>;
  matches2: Array<Match>;

  /**
   * 名称
   */
  name: string;

  /**
   * The nth page, starting with 1.
   */
  pageCount?: number;

  /**
   * 是否已经退赛
   */
  quit: boolean;

  /**
   * Records per page.
   */
  recordsPerPage?: number;
  score: ParticipantScore;
  tournament: Tournament;

  /**
   * 比赛 ID。
   */
  tournamentId: number;
  updateTime: string;
  wonMatches: Array<Match>;
}
