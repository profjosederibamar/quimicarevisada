// performance-tracker.js

/**
 * This module tracks student performance and progress across trials.
 * It includes functionality to record scores, track progress over time,
 * and calculate average performance.
 */

class PerformanceTracker {
    constructor() {
        this.trials = [];
    }

    recordTrial(score) {
        this.trials.push(score);
    }

    getAveragePerformance() {
        if(this.trials.length === 0) return 0;
        const total = this.trials.reduce((acc, score) => acc + score, 0);
        return total / this.trials.length;
    }

    getProgress() {
        return this.trials.map((score, index) => ({
            trial: index + 1,
            score: score
        }));
    }
}

// Example usage:
const tracker = new PerformanceTracker();
tracker.recordTrial(85);
tracker.recordTrial(90);
tracker.recordTrial(78);

console.log(`Average Performance: ${tracker.getAveragePerformance()}`);
console.log(`Progress: ${JSON.stringify(tracker.getProgress())}`);