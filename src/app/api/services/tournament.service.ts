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
import { CreateTournamentDto } from '../models/create-tournament-dto';
import { TournamentPaginatedReturnMessageDto } from '../models/tournament-paginated-return-message-dto';
import { TournamentReturnMessageDto } from '../models/tournament-return-message-dto';
import { UpdateTournamentDto } from '../models/update-tournament-dto';

@Injectable({
  providedIn: 'root',
})
export class TournamentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation tournamentControllerFindAll
   */
  static readonly TournamentControllerFindAllPath = '/api/tournament';

  /**
   * Find all Tournament.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tournamentControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  tournamentControllerFindAll$Response(params?: {

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
     * 名称
     */
    name?: string;

    /**
     * 描述
     */
    description?: string;

    /**
     * 规则
     */
    rule?: 'SingleElimination' | 'Swiss';

    /**
     * 瑞士轮局数。
     */
    rounds?: number;

    /**
     * 瑞士轮胜利分。
     */
    winScore?: number;

    /**
     * 瑞士轮平局分。
     */
    drawScore?: number;

    /**
     * 瑞士轮轮空分。
     */
    byeScore?: number;

    /**
     * 淘汰赛中是否是季军塞
     */
    hasThirdPlaceMatch?: boolean;

    /**
     * 可见性
     */
    visibility?: 'Public' | 'Internal' | 'Private';

    /**
     * 状态
     */
    status?: 'Ready' | 'Running' | 'Finished';

    /**
     * 创建者 MC ID
     */
    creator?: number;

    /**
     * 协作者 MC ID
     */
    collaborators?: Array<number>;

    /**
     * 创建时间
     */
    createdAt?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TournamentPaginatedReturnMessageDto>> {

    const rb = new RequestBuilder(this.rootUrl, TournamentService.TournamentControllerFindAllPath, 'get');
    if (params) {
      rb.header('Authorization', params.Authorization, {});
      rb.query('pageCount', params.pageCount, {});
      rb.query('recordsPerPage', params.recordsPerPage, {});
      rb.query('id', params.id, {});
      rb.query('name', params.name, {});
      rb.query('description', params.description, {});
      rb.query('rule', params.rule, {});
      rb.query('rounds', params.rounds, {});
      rb.query('winScore', params.winScore, {});
      rb.query('drawScore', params.drawScore, {});
      rb.query('byeScore', params.byeScore, {});
      rb.query('hasThirdPlaceMatch', params.hasThirdPlaceMatch, {});
      rb.query('visibility', params.visibility, {});
      rb.query('status', params.status, {});
      rb.query('creator', params.creator, {});
      rb.query('collaborators', params.collaborators, {});
      rb.query('createdAt', params.createdAt, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TournamentPaginatedReturnMessageDto>;
      })
    );
  }

  /**
   * Find all Tournament.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tournamentControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tournamentControllerFindAll(params?: {

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
     * 名称
     */
    name?: string;

    /**
     * 描述
     */
    description?: string;

    /**
     * 规则
     */
    rule?: 'SingleElimination' | 'Swiss';

    /**
     * 瑞士轮局数。
     */
    rounds?: number;

    /**
     * 瑞士轮胜利分。
     */
    winScore?: number;

    /**
     * 瑞士轮平局分。
     */
    drawScore?: number;

    /**
     * 瑞士轮轮空分。
     */
    byeScore?: number;

    /**
     * 淘汰赛中是否是季军塞
     */
    hasThirdPlaceMatch?: boolean;

    /**
     * 可见性
     */
    visibility?: 'Public' | 'Internal' | 'Private';

    /**
     * 状态
     */
    status?: 'Ready' | 'Running' | 'Finished';

    /**
     * 创建者 MC ID
     */
    creator?: number;

    /**
     * 协作者 MC ID
     */
    collaborators?: Array<number>;

    /**
     * 创建时间
     */
    createdAt?: string;
    context?: HttpContext
  }
): Observable<TournamentPaginatedReturnMessageDto> {

    return this.tournamentControllerFindAll$Response(params).pipe(
      map((r: StrictHttpResponse<TournamentPaginatedReturnMessageDto>) => r.body as TournamentPaginatedReturnMessageDto)
    );
  }

  /**
   * Path part for operation tournamentControllerCreate
   */
  static readonly TournamentControllerCreatePath = '/api/tournament';

  /**
   * Create a new Tournament.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tournamentControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tournamentControllerCreate$Response(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    context?: HttpContext
    body: CreateTournamentDto
  }
): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, TournamentService.TournamentControllerCreatePath, 'post');
    if (params) {
      rb.header('Authorization', params.Authorization, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        }>;
      })
    );
  }

  /**
   * Create a new Tournament.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tournamentControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tournamentControllerCreate(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    context?: HttpContext
    body: CreateTournamentDto
  }
): Observable<{
}> {

    return this.tournamentControllerCreate$Response(params).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

  /**
   * Path part for operation tournamentControllerFindOne
   */
  static readonly TournamentControllerFindOnePath = '/api/tournament/{id}';

  /**
   * Find a Tournament by id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tournamentControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  tournamentControllerFindOne$Response(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TournamentReturnMessageDto>> {

    const rb = new RequestBuilder(this.rootUrl, TournamentService.TournamentControllerFindOnePath, 'get');
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
        return r as StrictHttpResponse<TournamentReturnMessageDto>;
      })
    );
  }

  /**
   * Find a Tournament by id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tournamentControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tournamentControllerFindOne(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    id: number;
    context?: HttpContext
  }
): Observable<TournamentReturnMessageDto> {

    return this.tournamentControllerFindOne$Response(params).pipe(
      map((r: StrictHttpResponse<TournamentReturnMessageDto>) => r.body as TournamentReturnMessageDto)
    );
  }

  /**
   * Path part for operation tournamentControllerDelete
   */
  static readonly TournamentControllerDeletePath = '/api/tournament/{id}';

  /**
   * Delete a Tournament by id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tournamentControllerDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  tournamentControllerDelete$Response(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TournamentService.TournamentControllerDeletePath, 'delete');
    if (params) {
      rb.header('Authorization', params.Authorization, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Delete a Tournament by id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tournamentControllerDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tournamentControllerDelete(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.tournamentControllerDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tournamentControllerUpdate
   */
  static readonly TournamentControllerUpdatePath = '/api/tournament/{id}';

  /**
   * Update a Tournament by id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tournamentControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tournamentControllerUpdate$Response(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    id: number;
    context?: HttpContext
    body: UpdateTournamentDto
  }
): Observable<StrictHttpResponse<BlankReturnMessageDto>> {

    const rb = new RequestBuilder(this.rootUrl, TournamentService.TournamentControllerUpdatePath, 'patch');
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
   * Update a Tournament by id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tournamentControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tournamentControllerUpdate(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    id: number;
    context?: HttpContext
    body: UpdateTournamentDto
  }
): Observable<BlankReturnMessageDto> {

    return this.tournamentControllerUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<BlankReturnMessageDto>) => r.body as BlankReturnMessageDto)
    );
  }

  /**
   * Path part for operation tournamentControllerStart
   */
  static readonly TournamentControllerStartPath = '/api/tournament/{id}/start';

  /**
   * Start a tournament.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tournamentControllerStart()` instead.
   *
   * This method doesn't expect any request body.
   */
  tournamentControllerStart$Response(params: {

    /**
     * MC Token
     */
    Authorization?: string;

    /**
     * Tournament ID
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BlankReturnMessageDto>> {

    const rb = new RequestBuilder(this.rootUrl, TournamentService.TournamentControllerStartPath, 'post');
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
        return r as StrictHttpResponse<BlankReturnMessageDto>;
      })
    );
  }

  /**
   * Start a tournament.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tournamentControllerStart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tournamentControllerStart(params: {

    /**
     * MC Token
     */
    Authorization?: string;

    /**
     * Tournament ID
     */
    id: number;
    context?: HttpContext
  }
): Observable<BlankReturnMessageDto> {

    return this.tournamentControllerStart$Response(params).pipe(
      map((r: StrictHttpResponse<BlankReturnMessageDto>) => r.body as BlankReturnMessageDto)
    );
  }

  /**
   * Path part for operation tournamentControllerReset
   */
  static readonly TournamentControllerResetPath = '/api/tournament/{id}/reset';

  /**
   * Reset a tournament.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tournamentControllerReset()` instead.
   *
   * This method doesn't expect any request body.
   */
  tournamentControllerReset$Response(params: {

    /**
     * MC Token
     */
    Authorization?: string;

    /**
     * Tournament ID
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BlankReturnMessageDto>> {

    const rb = new RequestBuilder(this.rootUrl, TournamentService.TournamentControllerResetPath, 'post');
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
        return r as StrictHttpResponse<BlankReturnMessageDto>;
      })
    );
  }

  /**
   * Reset a tournament.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tournamentControllerReset$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tournamentControllerReset(params: {

    /**
     * MC Token
     */
    Authorization?: string;

    /**
     * Tournament ID
     */
    id: number;
    context?: HttpContext
  }
): Observable<BlankReturnMessageDto> {

    return this.tournamentControllerReset$Response(params).pipe(
      map((r: StrictHttpResponse<BlankReturnMessageDto>) => r.body as BlankReturnMessageDto)
    );
  }

  /**
   * Path part for operation tournamentControllerFinish
   */
  static readonly TournamentControllerFinishPath = '/api/tournament/{id}/finish';

  /**
   * Finish a tournament.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tournamentControllerFinish()` instead.
   *
   * This method doesn't expect any request body.
   */
  tournamentControllerFinish$Response(params: {

    /**
     * MC Token
     */
    Authorization?: string;

    /**
     * Tournament ID
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BlankReturnMessageDto>> {

    const rb = new RequestBuilder(this.rootUrl, TournamentService.TournamentControllerFinishPath, 'post');
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
        return r as StrictHttpResponse<BlankReturnMessageDto>;
      })
    );
  }

  /**
   * Finish a tournament.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tournamentControllerFinish$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tournamentControllerFinish(params: {

    /**
     * MC Token
     */
    Authorization?: string;

    /**
     * Tournament ID
     */
    id: number;
    context?: HttpContext
  }
): Observable<BlankReturnMessageDto> {

    return this.tournamentControllerFinish$Response(params).pipe(
      map((r: StrictHttpResponse<BlankReturnMessageDto>) => r.body as BlankReturnMessageDto)
    );
  }

}
