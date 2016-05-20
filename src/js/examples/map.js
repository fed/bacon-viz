import Bacon from 'baconjs';

export default {
    name: 'map',
    category: 'array-like',
    getInputsAndOutputs: () => {
        const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]);
        const squares = numbers.map(x => x * x);

        return {
            inputs: [
                {
                    code: 'const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]);',
                    observable: numbers
                }
            ],
            output: {
                code: 'numbers.map(x => x * x);',
                observable: squares
            }
        }
    }
};
