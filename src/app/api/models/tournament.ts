/* tslint:disable */
/* eslint-disable */
import { Match } from './match';
import { Participant } from './participant';
import { RuleSettingsPartial } from './rule-settings-partial';
export interface Tournament {

  /**
   * 协作者 MC ID
   */
  collaborators?: Array<number>;
  createTime: string;

  /**
   * 创建时间
   */
  createdAt: string;

  /**
   * 创建者 MC ID
   */
  creator: number;
  deleteTime: string;

  /**
   * 描述
   */
  description: string;
  id: number;

  /**
   * 对阵图树
   */
  matchTree: Match;
  matches: Array<Match>;

  /**
   * 名称
   */
  name: string;

  /**
   * The nth page, starting with 1.
   */
  pageCount?: number;
  participants: Array<Participant>;

  /**
   * Records per page.
   */
  recordsPerPage?: number;

  /**
   * 规则
   */
  rule: 'SingleElimination' | 'Swiss';
  ruleSettings?: RuleSettingsPartial;

  /**
   * 状态
   */
  status: 'Ready' | 'Running' | 'Finished';
  updateTime: string;

  /**
   * 可见性
   */
  visibility: 'Public' | 'Internal' | 'Private';
}
