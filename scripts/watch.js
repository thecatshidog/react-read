const watchReact = require('../packages/react/scripts/rollup/watch');

watchReact.buildEverything();

watchReact.emitterSub.on('complete', () => {

});