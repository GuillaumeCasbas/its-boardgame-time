export type Boardgame = {
  id: string
  title: string
  minPlayers: number
  maxPlayers: number
};

export type BoardgameInput = Pick<Boardgame, 'title' | 'minPlayers' | 'maxPlayers'>;

export enum ApiStatus {
  LOADING = 'loading',
  LOADED = 'loaded',
  FAILED = 'failed',
}
