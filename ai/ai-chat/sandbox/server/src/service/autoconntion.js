import autocannon from 'autocannon';

export const runBenchmark = () => {
    console.log("Starting autocannon benchmark for 30 seconds...");
    const instance = autocannon({
        url: 'http://localhost:3000',
        connections: 10, // number of concurrent connections
        pipelining: 1, 
        duration: 30 // duration in seconds
    }, (err, result) => {
        if (err) {
            console.error("Benchmark failed: ", err);
        } else {
            console.log("Benchmark complete!");
            console.log(`Total Requests: ${result.requests.total}`);
            console.log(`Throughput: ${result.throughput.total} bytes`);
        }
    });

    autocannon.track(instance, { renderProgressBar: true });
};
