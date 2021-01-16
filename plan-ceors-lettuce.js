let startword = 'letters';
let endword = 'lettuce';
let plan = [
  {a:"p",h:0,ss:0,sp:0,ds:0,dp:0},
  {a:"p",h:0,ss:0,sp:1,ds:0,dp:1},
  {a:"p",h:0,ss:0,sp:2,ds:0,dp:2},
  {a:"p",h:0,ss:0,sp:3,ds:0,dp:3},
  {a:"p",h:0,ss:0,sp:4,ds:0,dp:4},
  {a:"p",h:0,ss:0,sp:5,ds:0,dp:5},
  {a:"p",h:0,ss:0,sp:6,ds:0,dp:7},
  {a:"p",h:0,ss:0,sp:7,ds:0,dp:6},
  {a:"p",h:0,ss:0,sp:8,ds:0,dp:8},
  {a:"p",h:0,ss:0,sp:9,ds:0,dp:9},
  {a:"p",h:0,ss:0,sp:10,ds:0,dp:10},
  {a:"p",h:0,ss:0,sp:11,ds:0,dp:12},
  {a:"p",h:0,ss:0,sp:12,ds:0,dp:11},
  {a:"p",h:0,ss:0,sp:13,ds:0,dp:13},
  {a:"p",h:0,ss:0,sp:14,ds:0,dp:14},
  {a:"p",h:0,ss:1,sp:0,ds:1,dp:0},
  {a:"p",h:0,ss:1,sp:1,ds:1,dp:1},
  {a:"p",h:0,ss:1,sp:2,ds:1,dp:2},
  {a:"p",h:0,ss:1,sp:3,ds:1,dp:3},
  {a:"p",h:0,ss:1,sp:4,ds:1,dp:4},
  {a:"p",h:0,ss:1,sp:5,ds:1,dp:5},
  {a:"p",h:0,ss:1,sp:6,ds:1,dp:6},
  {a:"p",h:0,ss:1,sp:7,ds:1,dp:7},
  {a:"p",h:0,ss:1,sp:8,ds:1,dp:8},
  {a:"p",h:0,ss:1,sp:9,ds:1,dp:9},
  {a:"p",h:0,ss:1,sp:10,ds:1,dp:10},
  {a:"p",h:0,ss:1,sp:11,ds:1,dp:11},
  {a:"p",h:0,ss:1,sp:12,ds:1,dp:12},
  {a:"p",h:0,ss:1,sp:13,ds:1,dp:13},
  {a:"p",h:0,ss:1,sp:14,ds:1,dp:14},
  {a:"p",h:0,ss:1,sp:15,ds:1,dp:15},
  {a:"p",h:0,ss:1,sp:16,ds:1,dp:16},
  {a:"p",h:0,ss:1,sp:17,ds:1,dp:17},
  {a:"p",h:0,ss:1,sp:18,ds:1,dp:18},
  {a:"p",h:0,ss:1,sp:19,ds:1,dp:19},
  {a:"p",h:0,ss:2,sp:0,ds:2,dp:0},
  {a:"p",h:0,ss:2,sp:1,ds:2,dp:1},
  {a:"p",h:0,ss:2,sp:2,ds:2,dp:2},
  {a:"p",h:0,ss:2,sp:3,ds:2,dp:3},
  {a:"p",h:0,ss:2,sp:4,ds:2,dp:4},
  {a:"p",h:0,ss:2,sp:5,ds:2,dp:5},
  {a:"p",h:0,ss:2,sp:6,ds:2,dp:7},
  {a:"p",h:0,ss:2,sp:7,ds:2,dp:6},
  {a:"p",h:0,ss:2,sp:8,ds:2,dp:8},
  {a:"p",h:0,ss:2,sp:9,ds:2,dp:9},
  {a:"p",h:0,ss:2,sp:10,ds:2,dp:10},
  {a:"p",h:0,ss:2,sp:11,ds:2,dp:11},
  {a:"p",h:0,ss:2,sp:12,ds:2,dp:12},
  {a:"p",h:0,ss:2,sp:13,ds:2,dp:13},
  {a:"p",h:0,ss:2,sp:14,ds:2,dp:14},
  {a:"p",h:0,ss:2,sp:15,ds:2,dp:15},
  {a:"p",h:0,ss:2,sp:16,ds:2,dp:16},
  {a:"p",h:0,ss:3,sp:0,ds:3,dp:0},
  {a:"p",h:0,ss:3,sp:1,ds:3,dp:1},
  {a:"p",h:0,ss:3,sp:2,ds:3,dp:2},
  {a:"p",h:0,ss:3,sp:3,ds:3,dp:3},
  {a:"p",h:0,ss:3,sp:4,ds:3,dp:4},
  {a:"p",h:0,ss:3,sp:5,ds:3,dp:5},
  {a:"p",h:0,ss:3,sp:6,ds:3,dp:7},
  {a:"p",h:0,ss:3,sp:7,ds:3,dp:6},
  {a:"p",h:0,ss:3,sp:8,ds:3,dp:8},
  {a:"p",h:0,ss:3,sp:9,ds:3,dp:9},
  {a:"p",h:0,ss:3,sp:10,ds:3,dp:10},
  {a:"p",h:0,ss:3,sp:11,ds:3,dp:11},
  {a:"p",h:0,ss:3,sp:12,ds:3,dp:12},
  {a:"p",h:0,ss:3,sp:13,ds:3,dp:13},
  {a:"p",h:0,ss:3,sp:14,ds:3,dp:14},
  {a:"p",h:0,ss:3,sp:15,ds:3,dp:15},
  {a:"p",h:0,ss:3,sp:16,ds:3,dp:16},
  {a:"p",h:0,ss:4,sp:0,ds:4,dp:0},
  {a:"p",h:0,ss:4,sp:1,ds:4,dp:1},
  {a:"p",h:0,ss:4,sp:2,ds:4,dp:2},
  {a:"p",h:0,ss:4,sp:3,ds:4,dp:3},
  {a:"p",h:0,ss:4,sp:4,ds:4,dp:4},
  {a:"p",h:0,ss:4,sp:5,ds:4,dp:5},
  {a:"p",h:0,ss:4,sp:6,ds:4,dp:6},
  {a:"p",h:0,ss:4,sp:7,ds:4,dp:7},
  {a:"p",h:0,ss:4,sp:8,ds:4,dp:8},
  {a:"p",h:0,ss:4,sp:9,ds:4,dp:9},
  {a:"p",h:0,ss:4,sp:10,ds:4,dp:10},
  {a:"p",h:0,ss:4,sp:11,ds:4,dp:11},
  {a:"p",h:0,ss:4,sp:12,ds:4,dp:12},
  {a:"p",h:0,ss:4,sp:13,ds:4,dp:13},
  {a:"p",h:0,ss:4,sp:14,ds:4,dp:14},
  {a:"p",h:0,ss:4,sp:15,ds:4,dp:15},
  {a:"p",h:0,ss:4,sp:16,ds:4,dp:16},
  {a:"p",h:0,ss:4,sp:17,ds:4,dp:17},
  {a:"p",h:0,ss:4,sp:18,ds:4,dp:18},
  {a:"p",h:0,ss:4,sp:19,ds:4,dp:19},
  {a:"p",h:0,ss:5,sp:0,ds:5,dp:0},
  {a:"p",h:0,ss:5,sp:1,ds:5,dp:1},
  {a:"p",h:0,ss:5,sp:2,ds:5,dp:2},
  {a:"p",h:0,ss:5,sp:3,ds:5,dp:3},
  {a:"p",h:0,ss:5,sp:4,ds:5,dp:4},
  {a:"p",h:0,ss:5,sp:5,ds:5,dp:5},
  {a:"p",h:0,ss:5,sp:6,ds:5,dp:6},
  {a:"p",h:0,ss:5,sp:7,ds:5,dp:7},
  {a:"p",h:0,ss:5,sp:8,ds:5,dp:8},
  {a:"p",h:0,ss:5,sp:9,ds:5,dp:9},
  {a:"p",h:0,ss:5,sp:10,ds:5,dp:10},
  {a:"p",h:0,ss:5,sp:11,ds:5,dp:11},
  {a:"p",h:0,ss:5,sp:12,ds:5,dp:12},
  {a:"p",h:0,ss:5,sp:13,ds:5,dp:13},
  {a:"p",h:0,ss:5,sp:14,ds:4,dp:20},
  {a:"p",h:0,ss:6,sp:0,ds:6,dp:0},
  {a:"p",h:0,ss:6,sp:1,ds:6,dp:1},
  {a:"p",h:0,ss:6,sp:2,ds:6,dp:2},
  {a:"p",h:0,ss:6,sp:3,ds:6,dp:3},
  {a:"p",h:0,ss:6,sp:4,ds:6,dp:4},
  {a:"p",h:0,ss:6,sp:5,ds:6,dp:5},
  {a:"p",h:0,ss:6,sp:6,ds:6,dp:6},
  {a:"p",h:0,ss:6,sp:7,ds:6,dp:7},
  {a:"p",h:0,ss:6,sp:8,ds:6,dp:8},
  {a:"p",h:0,ss:6,sp:9,ds:6,dp:9},
  {a:"p",h:0,ss:6,sp:10,ds:6,dp:10},
  {a:"p",h:0,ss:6,sp:11,ds:6,dp:11},
  {a:"p",h:0,ss:6,sp:12,ds:6,dp:12},
  {a:"p",h:0,ss:6,sp:13,ds:6,dp:13},
  {a:"p",h:0,ss:6,sp:14,ds:6,dp:14},
  {a:"p",h:0,ss:6,sp:15,ds:6,dp:15},
  {a:"p",h:0,ss:6,sp:16,ds:6,dp:16},
  {a:"p",h:0,ss:6,sp:17,ds:6,dp:17},
  {a:"p",h:0,ss:6,sp:18,ds:6,dp:18},
  {a:"p",h:0,ss:6,sp:19,ds:6,dp:19},
];
