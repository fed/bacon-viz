import Bacon from 'baconjs';

export default {
    name: 'merge',
    category: 'combining',
    getInputsAndOutputs: () => {
        const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        const letters = Bacon.sequentially(3000, ['a', 'b', 'c', 'd', 'e']);
        const output = numbers.merge(letters);

        return {
            inputs: [
                {
                    code: 'const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6, 7, 8, 9]);',
                    observable: numbers
                },
                {
                    code: 'const letters = Bacon.sequentially(3000, [\'a\', \'b\', \'c\', \'d\', \'e\']);',
                    observable: letters
                }
            ],
            output: {
                code: 'numbers.merge(letters);',
                observable: output
            }
        }
    }
};
