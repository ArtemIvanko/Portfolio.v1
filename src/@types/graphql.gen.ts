// THIS FILE IS GENERATED DO NOT EDIT!
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type GetProjectQuery = {
  __typename?: 'GetProjectQuery';
  description: Scalars['String']['output'];
  href: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imgSrc: Scalars['String']['output'];
  title: Scalars['String']['output'];
  topic: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addProject: GetProjectQuery;
  deleteProject: Scalars['Boolean']['output'];
};


export type MutationAddProjectArgs = {
  description: Scalars['String']['input'];
  href: Scalars['String']['input'];
  imgSrc: Scalars['String']['input'];
  title: Scalars['String']['input'];
  topic: Scalars['String']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  getProject?: Maybe<GetProjectQuery>;
  getProjects: Array<GetProjectQuery>;
};


export type QueryGetProjectArgs = {
  id: Scalars['ID']['input'];
};
