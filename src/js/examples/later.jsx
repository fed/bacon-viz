import Bacon from 'baconjs';

export default {
    name: 'later',
    category: 'creating',
    getInputsAndOutputs: () => {
        const output = Bacon.later(2000, 42);

        return {
            inputs: [],
            output: {
                code: 'Bacon.later(2000, 42);',
                observable: output
            }
        }
    }
};
