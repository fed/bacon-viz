import Bacon from 'baconjs';

export default {
    name: 'delay',
    category: 'timing',
    getInputsAndOutputs: () => {
        const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]);
        const delayed = numbers.delay(3000);

        return {
            inputs: [
                {
                    code: 'const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]);',
                    observable: numbers
                }
            ],
            output: {
                code: 'numbers.delay(3000);',
                observable: delayed
            }
        }
    }
};
