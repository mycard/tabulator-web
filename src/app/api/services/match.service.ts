/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { BlankReturnMessageDto } from '../models/blank-return-message-dto';
import { MatchPaginatedReturnMessageDto } from '../models/match-paginated-return-message-dto';
import { MatchReturnMessageDto } from '../models/match-return-message-dto';
import { UpdateMatchDto } from '../models/update-match-dto';

@Injectable({
  providedIn: 'root',
})
export class MatchService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation matchControllerFindOne
   */
  static readonly MatchControllerFindOnePath = '/api/match/{id}';

  /**
   * Find a Match by id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `matchControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  matchControllerFindOne$Response(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<MatchReturnMessageDto>> {

    const rb = new RequestBuilder(this.rootUrl, MatchService.MatchControllerFindOnePath, 'get');
    if (params) {
      rb.header('Authorization', params.Authorization, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MatchReturnMessageDto>;
      })
    );
  }

  /**
   * Find a Match by id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `matchControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  matchControllerFindOne(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    id: number;
    context?: HttpContext
  }
): Observable<MatchReturnMessageDto> {

    return this.matchControllerFindOne$Response(params).pipe(
      map((r: StrictHttpResponse<MatchReturnMessageDto>) => r.body as MatchReturnMessageDto)
    );
  }

  /**
   * Path part for operation matchControllerUpdate
   */
  static readonly MatchControllerUpdatePath = '/api/match/{id}';

  /**
   * Update a Match by id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `matchControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  matchControllerUpdate$Response(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    id: number;
    context?: HttpContext
    body: UpdateMatchDto
  }
): Observable<StrictHttpResponse<BlankReturnMessageDto>> {

    const rb = new RequestBuilder(this.rootUrl, MatchService.MatchControllerUpdatePath, 'patch');
    if (params) {
      rb.header('Authorization', params.Authorization, {});
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BlankReturnMessageDto>;
      })
    );
  }

  /**
   * Update a Match by id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `matchControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  matchControllerUpdate(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    id: number;
    context?: HttpContext
    body: UpdateMatchDto
  }
): Observable<BlankReturnMessageDto> {

    return this.matchControllerUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<BlankReturnMessageDto>) => r.body as BlankReturnMessageDto)
    );
  }

  /**
   * Path part for operation matchControllerFindAll
   */
  static readonly MatchControllerFindAllPath = '/api/match';

  /**
   * Find all Match.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `matchControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  matchControllerFindAll$Response(params?: {

    /**
     * MC Token
     */
    Authorization?: string;

    /**
     * The nth page, starting with 1.
     */
    pageCount?: number;

    /**
     * Records per page.
     */
    recordsPerPage?: number;
    id?: number;

    /**
     * 比赛 ID。
     */
    tournamentId?: number;

    /**
     * 比赛轮次。
     */
    round?: number;

    /**
     * 是否为季军赛。
     */
    isThirdPlaceMatch?: boolean;

    /**
     * 比赛状态
     */
    status?: 'Pending' | 'Running' | 'Finished' | 'Abandoned';

    /**
     * 玩家 1 ID
     */
    player1Id?: number;

    /**
     * 玩家 1 分数
     */
    player1Score?: number;

    /**
     * 玩家 2 ID
     */
    player2Id?: number;

    /**
     * 玩家 2 分数
     */
    player2Score?: number;

    /**
     * 胜者 ID
     */
    winnerId?: number;

    /**
     * 晋级通往的比赛 ID
     */
    childMatchId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<MatchPaginatedReturnMessageDto>> {

    const rb = new RequestBuilder(this.rootUrl, MatchService.MatchControllerFindAllPath, 'get');
    if (params) {
      rb.header('Authorization', params.Authorization, {});
      rb.query('pageCount', params.pageCount, {});
      rb.query('recordsPerPage', params.recordsPerPage, {});
      rb.query('id', params.id, {});
      rb.query('tournamentId', params.tournamentId, {});
      rb.query('round', params.round, {});
      rb.query('isThirdPlaceMatch', params.isThirdPlaceMatch, {});
      rb.query('status', params.status, {});
      rb.query('player1Id', params.player1Id, {});
      rb.query('player1Score', params.player1Score, {});
      rb.query('player2Id', params.player2Id, {});
      rb.query('player2Score', params.player2Score, {});
      rb.query('winnerId', params.winnerId, {});
      rb.query('childMatchId', params.childMatchId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MatchPaginatedReturnMessageDto>;
      })
    );
  }

  /**
   * Find all Match.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `matchControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  matchControllerFindAll(params?: {

    /**
     * MC Token
     */
    Authorization?: string;

    /**
     * The nth page, starting with 1.
     */
    pageCount?: number;

    /**
     * Records per page.
     */
    recordsPerPage?: number;
    id?: number;

    /**
     * 比赛 ID。
     */
    tournamentId?: number;

    /**
     * 比赛轮次。
     */
    round?: number;

    /**
     * 是否为季军赛。
     */
    isThirdPlaceMatch?: boolean;

    /**
     * 比赛状态
     */
    status?: 'Pending' | 'Running' | 'Finished' | 'Abandoned';

    /**
     * 玩家 1 ID
     */
    player1Id?: number;

    /**
     * 玩家 1 分数
     */
    player1Score?: number;

    /**
     * 玩家 2 ID
     */
    player2Id?: number;

    /**
     * 玩家 2 分数
     */
    player2Score?: number;

    /**
     * 胜者 ID
     */
    winnerId?: number;

    /**
     * 晋级通往的比赛 ID
     */
    childMatchId?: number;
    context?: HttpContext
  }
): Observable<MatchPaginatedReturnMessageDto> {

    return this.matchControllerFindAll$Response(params).pipe(
      map((r: StrictHttpResponse<MatchPaginatedReturnMessageDto>) => r.body as MatchPaginatedReturnMessageDto)
    );
  }

}
