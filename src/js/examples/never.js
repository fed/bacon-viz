import Bacon from 'baconjs';

export default {
    name: 'never',
    category: 'creating',
    getInputsAndOutputs: () => {
        const output = Bacon.never();

        return {
            inputs: [],
            output: {
                code: 'Bacon.never();',
                observable: output
            }
        }
    }
};
