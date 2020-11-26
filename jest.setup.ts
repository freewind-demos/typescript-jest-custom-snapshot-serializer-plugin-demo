import {rawJsonSerializerPlugin} from './src/customSerializerPlugin';

expect.addSnapshotSerializer(rawJsonSerializerPlugin);


