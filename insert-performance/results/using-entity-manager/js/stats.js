var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4920",
        "ok": "4136",
        "ko": "784"
    },
    "minResponseTime": {
        "total": "352",
        "ok": "352",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "15734",
        "ok": "15734",
        "ko": "10035"
    },
    "meanResponseTime": {
        "total": "5832",
        "ok": "5042",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "4626",
        "ok": "4641",
        "ko": "2"
    },
    "percentiles1": {
        "total": "6669",
        "ok": "3366",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "10001",
        "ok": "9306",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "12856",
        "ok": "13169",
        "ko": "10004"
    },
    "percentiles4": {
        "total": "14291",
        "ok": "14371",
        "ko": "10010"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1542,
        "percentage": 31
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 128,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2466,
        "percentage": 50
    },
    "group4": {
        "name": "failed",
        "count": 784,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "19.447",
        "ok": "16.348",
        "ko": "3.099"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "4920",
        "ok": "4136",
        "ko": "784"
    },
    "minResponseTime": {
        "total": "352",
        "ok": "352",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "15734",
        "ok": "15734",
        "ko": "10035"
    },
    "meanResponseTime": {
        "total": "5832",
        "ok": "5042",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "4626",
        "ok": "4641",
        "ko": "2"
    },
    "percentiles1": {
        "total": "6669",
        "ok": "3366",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "10001",
        "ok": "9306",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "12856",
        "ok": "13169",
        "ko": "10004"
    },
    "percentiles4": {
        "total": "14291",
        "ok": "14371",
        "ko": "10010"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1542,
        "percentage": 31
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 128,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2466,
        "percentage": 50
    },
    "group4": {
        "name": "failed",
        "count": 784,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "19.447",
        "ok": "16.348",
        "ko": "3.099"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
