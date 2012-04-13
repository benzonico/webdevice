var simulator = {};
simulator.orientation = 'portrait';
simulator.device = 'phone';
simulator.toggleOrientation = function(){
	if(simulator.orientation==='portrait'){
		simulator.orientation='landscape';
	}else{
		simulator.orientation='portrait';
	}
	simulator.setClassesNames();
}

simulator.changeDevice = function(){
	simulator.device = document.getElementById('deviceSelector').value;
	simulator.setClassesNames();
}
simulator.setClassesNames = function(){
	var simu = document.getElementById('simulator');
	var iframe = document.getElementById('iframe');
	var className =   simulator.device+' '+simulator.orientation;
	simu.className =  'device '+className;
	iframe.className = 'iframe '+className;
}