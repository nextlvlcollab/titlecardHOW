(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"TitlecardHOW_atlas_1", frames: [[544,270,40,31],[0,0,784,230],[0,232,542,51],[544,232,55,36]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap12 = function() {
	this.initialize(ss["TitlecardHOW_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.initialize(ss["TitlecardHOW_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.initialize(ss["TitlecardHOW_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.imgsnail = function() {
	this.initialize(ss["TitlecardHOW_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006666").s().p("EhSCAauMAAAg1bMCkGAAAMAAAA1bg");
	this.shape.setTransform(513.15,139);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-32,1050.3,342.1);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,40,31), null);


(lib.SNAILSYMBOL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.imgsnail();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SNAILSYMBOL, new cjs.Rectangle(0,0,55,36), null);


(lib.SNAIL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_14 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Layer_1
	this.SBAIL = new lib.SNAILSYMBOL();
	this.SBAIL.name = "SBAIL";
	this.SBAIL.setTransform(3.5,-37,1,1,0,0,0,27.5,18);

	this.timeline.addTween(cjs.Tween.get(this.SBAIL).wait(1).to({x:35.35,y:-37.05},0).wait(1).to({x:67.2,y:-37.1},0).wait(1).to({x:99.05,y:-37.2},0).wait(1).to({x:130.9,y:-37.25},0).wait(1).to({x:162.75,y:-37.35},0).wait(1).to({x:194.6,y:-37.4},0).wait(1).to({x:226.5,y:-37.5},0).wait(1).to({x:258.35,y:-37.55},0).wait(1).to({x:290.2,y:-37.6},0).wait(1).to({x:322.05,y:-37.7},0).wait(1).to({x:353.9,y:-37.75},0).wait(1).to({x:385.75,y:-37.85},0).wait(1).to({x:417.6,y:-37.9},0).wait(1).to({x:449.5,y:-38},0).wait(1).to({x:419.75},0).wait(1).to({x:390},0).wait(1).to({x:360.25},0).wait(1).to({x:330.5},0).wait(1).to({x:300.8},0).wait(1).to({x:271.05},0).wait(1).to({x:241.3},0).wait(1).to({x:211.55},0).wait(1).to({x:181.8},0).wait(1).to({x:152.1},0).wait(1).to({x:122.35},0).wait(1).to({x:92.6},0).wait(1).to({x:62.85},0).wait(1).to({x:33.1},0).wait(1).to({x:3.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-56,501.1,37);


(lib.Dude = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(20,15.5,1,1,0,0,0,20,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:10.65},0).wait(1).to({y:5.75},0).wait(1).to({y:0.85},0).wait(1).to({y:-4.05},0).wait(1).to({y:-8.9},0).wait(1).to({y:-13.8},0).wait(1).to({y:-18.7},0).wait(1).to({y:-23.6},0).wait(1).to({y:-28.5},0).wait(1).to({y:-24.1},0).wait(1).to({y:-19.7},0).wait(1).to({y:-15.3},0).wait(1).to({y:-10.9},0).wait(1).to({y:-6.5},0).wait(1).to({y:-2.1},0).wait(1).to({y:2.3},0).wait(1).to({y:6.7},0).wait(1).to({y:11.1},0).wait(1).to({y:15.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-44,40,75);


// stage content:
(lib.HOWCANTHISBEUSED = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.BUtton.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.movieClip_3.play();
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.BUtton.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.movieClip_2.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Button
	this.BUtton = new lib.Symbol2();
	this.BUtton.name = "BUtton";
	this.BUtton.setTransform(489.1,188.1,1,1,0,0,0,525.1,171.1);
	new cjs.ButtonHelper(this.BUtton, 0, 1, 2, false, new lib.Symbol2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.BUtton).wait(1));

	// Layer_5
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(151,29);

	this.instance_1 = new lib.Bitmap8();
	this.instance_1.setTransform(109,58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Dude
	this.movieClip_3 = new lib.Dude();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.setTransform(769,64.5,1,1,0,0,0,20,15.5);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_3).wait(1));

	// img_snail
	this.movieClip_2 = new lib.SNAIL();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(294.5,117,1,1,0,0,0,27.5,18);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(452,135,550.3,192.10000000000002);
// library properties:
lib.properties = {
	id: '3039827130234FE28CC16DDD4E18AAD9',
	width: 1000,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/TitlecardHOW_atlas_1.png", id:"TitlecardHOW_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3039827130234FE28CC16DDD4E18AAD9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;