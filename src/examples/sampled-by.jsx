import Bacon from 'baconjs';

export default {
    name: 'sampledBy',
    category: 'property',
    getInputsAndOutputs: () => {
        const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]).toProperty(0);
        const ticks = Bacon.interval(3000, 1);
        const output = numbers.sampledBy(ticks);

        return {
            inputs: [
                {
                    code: 'const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]).toProperty(0);',
                    observable: numbers
                },
                {
                    code: 'const ticks = Bacon.interval(3000, 1);',
                    observable: ticks
                }
            ],
            output: {
                code: 'numbers.sampledBy(ticks);',
                observable: output
            }
        }
    }
};
