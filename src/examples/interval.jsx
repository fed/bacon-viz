import Bacon from 'baconjs';

export default {
    name: 'interval',
    category: 'creating',
    getInputsAndOutputs: () => {
        const output = Bacon.interval(2000, 1);

        return {
            inputs: [],
            output: {
                code: 'Bacon.interval(2000, 1);',
                observable: output
            }
        }
    }
};
