import uuid from 'uuid/v4';
import {loremIpsum} from 'lorem-ipsum';

const DUMMY_TODOS = [
    {
        id: uuid(),
        title: 'Foo todo',
        body: loremIpsum({count: 3})
    },
    {
        id: uuid(),
        title: 'Bar todo',
        body: loremIpsum({count: 3})
    },
    {
        id: uuid(),
        title: 'Baz todo',
        body: loremIpsum({count: 3})
    },
]

export default DUMMY_TODOS
