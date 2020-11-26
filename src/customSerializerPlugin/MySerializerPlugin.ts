import {Config, NewPlugin, Refs} from 'pretty-format';
import {Printer} from 'pretty-format/build/types';
import {KEY, RawJsonWrapper} from './common';

function isRawJsonWrapper(data: any): data is RawJsonWrapper {
  return data.hasOwnProperty(KEY);
}

function unwrap(data: any): any {
  return isRawJsonWrapper(data) ? data[KEY] : undefined;
}

export const rawJsonSerializerPlugin: NewPlugin = {
  serialize(val: any, config: Config, indentation: string, depth: number, refs: Refs, printer: Printer): string {
    return JSON.stringify(unwrap(val), null, 2);
  },
  test(val: any): boolean {
    return isRawJsonWrapper(val);
  }
}
