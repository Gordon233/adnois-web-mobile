// @ts-nocheck
/* eslint-disable */
// --------------------------------------------------
// This file is auto-generated by Tuyau. Do not edit manually !
// --------------------------------------------------

import type { MakeTuyauRequest, MakeTuyauResponse } from '@tuyau/utils/types'
import type { InferInput } from '@vinejs/vine/types'

type UsersGetHead = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/validators/user_validator.ts')['getUsersValidator']>>
  response: MakeTuyauResponse<import('../app/controllers/users_controller.ts').default['index'], true>
}
type UsersPost = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/validators/user_validator.ts')['createUserValidator']>>
  response: MakeTuyauResponse<import('../app/controllers/users_controller.ts').default['store'], true>
}
export interface ApiDefinition {
  'users': {
    '$url': {
    };
    '$get': UsersGetHead;
    '$head': UsersGetHead;
    '$post': UsersPost;
  };
}
const routes = [
  {
    params: [],
    name: 'users.index',
    path: '/users',
    method: ["GET","HEAD"],
    types: {} as UsersGetHead,
  },
  {
    params: [],
    name: 'users.create',
    path: '/users/create',
    method: ["GET","HEAD"],
    types: {} as unknown,
  },
  {
    params: [],
    name: 'users.store',
    path: '/users',
    method: ["POST"],
    types: {} as UsersPost,
  },
  {
    params: ["id"],
    name: 'users.show',
    path: '/users/:id',
    method: ["GET","HEAD"],
    types: {} as unknown,
  },
  {
    params: ["id"],
    name: 'users.edit',
    path: '/users/:id/edit',
    method: ["GET","HEAD"],
    types: {} as unknown,
  },
  {
    params: ["id"],
    name: 'users.update',
    path: '/users/:id',
    method: ["PUT","PATCH"],
    types: {} as unknown,
  },
  {
    params: ["id"],
    name: 'users.destroy',
    path: '/users/:id',
    method: ["DELETE"],
    types: {} as unknown,
  },
] as const;
export const api = {
  routes,
  definition: {} as ApiDefinition
}
