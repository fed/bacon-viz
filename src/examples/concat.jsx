import Bacon from 'baconjs';

export default {
    name: 'concat',
    category: 'combining',
    getInputsAndOutputs: () => {
        const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5]);
        const letters = Bacon.sequentially(3000, ['a', 'b', 'c', 'd', 'e']);
        const output = numbers.concat(letters);

        return {
            inputs: [
                {
                    code: 'const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5]);',
                    observable: numbers
                },
                {
                    code: 'const letters = Bacon.sequentially(3000, [\'a\', \'b\', \'c\', \'d\', \'e\']);',
                    observable: letters
                }
            ],
            output: {
                code: 'numbers.concat(letters);',
                observable: output
            }
        }
    }
};
