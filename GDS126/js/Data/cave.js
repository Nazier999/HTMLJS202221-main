var x=false;
var caveData ={
	info:{
		layout:[
			[0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
			[2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6],
			[2,x,x,7,x,x,7,x,x,x,x,x,x,7,7,x,7,7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6],
			[2,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6],
			[2,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6],
			[3,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,3],
			[3,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,3],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
			
			
		],
		src:`images/CaveSprites.png`,
	},
	states:
	[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:64, height:64, startX:128, startY:0}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY:0}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			],
			src:`images/CaveSprites.png`,
		},
		states:caveData.states
		}

		var caveHitData={
			info:{
				layout:[
					[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
					[2,8,1,8,1,1,8,1,1,1,1,1,1,8,8,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
					[2,x,x,8,x,x,8,x,x,x,x,x,x,8,8,x,1,1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
					
					
				],
				src:`images/CaveSprites.png`,
			},
			states:caveData.states
			
			}