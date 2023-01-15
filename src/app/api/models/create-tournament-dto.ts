/* tslint:disable */
/* eslint-disable */
import { RuleSettingsPartial } from './rule-settings-partial';
export interface CreateTournamentDto {

  /**
   * 协作者 MC ID
   */
  collaborators?: Array<number>;

  /**
   * 描述
   */
  description: string;

  /**
   * 名称
   */
  name: string;

  /**
   * 规则
   */
  rule: 'SingleElimination' | 'Swiss';
  ruleSettings?: RuleSettingsPartial;

  /**
   * 可见性
   */
  visibility: 'Public' | 'Internal' | 'Private';
}
