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
import { CreateParticipantDto } from '../models/create-participant-dto';
import { CreateParticipantDtoImportData } from '../models/create-participant-dto-import-data';
import { ParticipantPaginatedReturnMessageDto } from '../models/participant-paginated-return-message-dto';
import { ParticipantReturnMessageDto } from '../models/participant-return-message-dto';
import { UpdateParticipantDto } from '../models/update-participant-dto';

@Injectable({
  providedIn: 'root',
})
export class ParticipantService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation participantControllerFindAll
   */
  static readonly ParticipantControllerFindAllPath = '/api/participant';

  /**
   * Find all Participant.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantControllerFindAll$Response(params?: {

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
     * 是否已经退赛
     */
    quit?: boolean;

    /**
     * 比赛 ID。
     */
    tournamentId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ParticipantPaginatedReturnMessageDto>> {

    const rb = new RequestBuilder(this.rootUrl, ParticipantService.ParticipantControllerFindAllPath, 'get');
    if (params) {
      rb.header('Authorization', params.Authorization, {});
      rb.query('pageCount', params.pageCount, {});
      rb.query('recordsPerPage', params.recordsPerPage, {});
      rb.query('id', params.id, {});
      rb.query('name', params.name, {});
      rb.query('quit', params.quit, {});
      rb.query('tournamentId', params.tournamentId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ParticipantPaginatedReturnMessageDto>;
      })
    );
  }

  /**
   * Find all Participant.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `participantControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantControllerFindAll(params?: {

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
     * 是否已经退赛
     */
    quit?: boolean;

    /**
     * 比赛 ID。
     */
    tournamentId?: number;
    context?: HttpContext
  }
): Observable<ParticipantPaginatedReturnMessageDto> {

    return this.participantControllerFindAll$Response(params).pipe(
      map((r: StrictHttpResponse<ParticipantPaginatedReturnMessageDto>) => r.body as ParticipantPaginatedReturnMessageDto)
    );
  }

  /**
   * Path part for operation participantControllerCreate
   */
  static readonly ParticipantControllerCreatePath = '/api/participant';

  /**
   * Create a new Participant.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantControllerCreate$Response(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    context?: HttpContext
    body: CreateParticipantDto
  }
): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, ParticipantService.ParticipantControllerCreatePath, 'post');
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
   * Create a new Participant.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `participantControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantControllerCreate(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    context?: HttpContext
    body: CreateParticipantDto
  }
): Observable<{
}> {

    return this.participantControllerCreate$Response(params).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

  /**
   * Path part for operation participantControllerFindOne
   */
  static readonly ParticipantControllerFindOnePath = '/api/participant/{id}';

  /**
   * Find a Participant by id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantControllerFindOne$Response(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ParticipantReturnMessageDto>> {

    const rb = new RequestBuilder(this.rootUrl, ParticipantService.ParticipantControllerFindOnePath, 'get');
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
        return r as StrictHttpResponse<ParticipantReturnMessageDto>;
      })
    );
  }

  /**
   * Find a Participant by id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `participantControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantControllerFindOne(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    id: number;
    context?: HttpContext
  }
): Observable<ParticipantReturnMessageDto> {

    return this.participantControllerFindOne$Response(params).pipe(
      map((r: StrictHttpResponse<ParticipantReturnMessageDto>) => r.body as ParticipantReturnMessageDto)
    );
  }

  /**
   * Path part for operation participantControllerDelete
   */
  static readonly ParticipantControllerDeletePath = '/api/participant/{id}';

  /**
   * Delete a Participant by id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantControllerDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantControllerDelete$Response(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ParticipantService.ParticipantControllerDeletePath, 'delete');
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
   * Delete a Participant by id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `participantControllerDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantControllerDelete(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.participantControllerDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation participantControllerUpdate
   */
  static readonly ParticipantControllerUpdatePath = '/api/participant/{id}';

  /**
   * Update a Participant by id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantControllerUpdate$Response(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    id: number;
    context?: HttpContext
    body: UpdateParticipantDto
  }
): Observable<StrictHttpResponse<BlankReturnMessageDto>> {

    const rb = new RequestBuilder(this.rootUrl, ParticipantService.ParticipantControllerUpdatePath, 'patch');
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
   * Update a Participant by id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `participantControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantControllerUpdate(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    id: number;
    context?: HttpContext
    body: UpdateParticipantDto
  }
): Observable<BlankReturnMessageDto> {

    return this.participantControllerUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<BlankReturnMessageDto>) => r.body as BlankReturnMessageDto)
    );
  }

  /**
   * Path part for operation participantControllerImport
   */
  static readonly ParticipantControllerImportPath = '/api/participant/import';

  /**
   * Import Participant.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantControllerImport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantControllerImport$Response(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    context?: HttpContext
    body: CreateParticipantDtoImportData
  }
): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, ParticipantService.ParticipantControllerImportPath, 'post');
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
   * Import Participant.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `participantControllerImport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantControllerImport(params: {

    /**
     * MC Token
     */
    Authorization?: string;
    context?: HttpContext
    body: CreateParticipantDtoImportData
  }
): Observable<{
}> {

    return this.participantControllerImport$Response(params).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

}
