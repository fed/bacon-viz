import Bacon from 'baconjs';

export default {
    name: 'fromArray',
    category: 'creating',
    getInputsAndOutputs: () => {
        const output = Bacon.fromArray([1, 2, 3]);

        return {
            inputs: [],
            output: {
                code: 'Bacon.fromArray([1, 2, 3]);',
                observable: output
            }
        }
    }
};
