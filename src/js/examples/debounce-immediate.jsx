import Bacon from 'baconjs';

export default {
    name: 'debounceImmediate',
    category: 'timing',
    getInputsAndOutputs: () => {
        const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6, 7, 8, 9]).filter(x => x !== 3 && x !== 8);
        const debounced = numbers.debounceImmediate(3000);

        return {
            inputs: [
                {
                    code: 'const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6, 7, 8, 9]).filter(x => x !== 3 && x !== 8);',
                    observable: numbers
                }
            ],
            output: {
                code: 'numbers.debounceImmediate(3000);',
                observable: debounced
            }
        }
    }
};
