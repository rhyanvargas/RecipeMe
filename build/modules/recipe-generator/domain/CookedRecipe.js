"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookedRecipe = void 0;
class CookedRecipe {
    constructor(props) {
        this.props = props;
    }
    isFinished() {
        return this.props.endTime !== undefined;
    }
    calculateCookingTime() {
        const totalTime = this.props.startAndPauseTimes.reduce((acc, curr) => {
            let currPauseTime = new Date(curr.pauseTime);
            let currStartTime = new Date(curr.startTime);
            const interval = currPauseTime.valueOf() - currStartTime.valueOf();
            acc += interval;
            return acc;
        }, 0);
        return totalTime;
    }
    static create(props) {
        const cookedRecipe = new CookedRecipe(props);
        return cookedRecipe;
    }
}
exports.CookedRecipe = CookedRecipe;
//# sourceMappingURL=CookedRecipe.js.map