// ************************************************************
// Answer
// ************************************************************
//
'use strict';

function add(x, y) { 

    // test cases
    // x = 1 and y = 2 should return 3
    
    return x + y; 
}

exports.handler = function(event, context, cb) {
    
    var x = Number(event["pathParameters"]["x"]), y = Number(event["pathParameters"]["y"]);
    
    var result = add(x,y)
   
    cb(null, { 
        statusCode: 200, 
        body: JSON.stringify({'result' : result }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
};

// ************************************************************
// Before
// ************************************************************
//
// 'use strict';

// function add(x, y) { 

//     // test cases
//     // x = 1 and y = 2 should return 3

//     // implement here
//     // ...
//     // return ...
    
//     throw new Error('Not Implemented');
// }

// exports.handler = function(event, context, cb) {
    
//     var x = event["x"], y = event["y"];
    
//     var result = add(x,y);
   
//     cb(null, { 
//         statusCode: 200, 
//         body: JSON.stringify({'result' : result }),
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*'
//         }
//     })
// };
