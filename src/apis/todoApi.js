import randomTitle from 'random-title';
import { v4 } from 'uuid';

export const fetchTodos = async () => {
    const todos = [{
        id: v4(),
        title: randomTitle({min: 5, max: 8}),
        done: false,
    }, {
        id: v4(),
        title: randomTitle({min: 5, max: 8}),
        done: false,
    },{
        id: v4(),
        title: randomTitle({min: 5, max: 8}),
        done: true,
    },{
        id: v4(),
        title: randomTitle({min: 5, max: 8}),
        done: false,
    }]

    return new Promise(resolve => {
        setTimeout(resolve(todos), 1000);
    })
};
