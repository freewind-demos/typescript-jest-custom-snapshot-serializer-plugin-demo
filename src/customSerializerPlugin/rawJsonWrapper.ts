import {KEY, RawJsonWrapper} from './common';

export function rawJson(data: any): RawJsonWrapper {
  return {
    [KEY]: data
  }
}
