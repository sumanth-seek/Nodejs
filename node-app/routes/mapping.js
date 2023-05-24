var data = [
			'name',
			'age',
			'roles',
			'roles.name',
			'roles.claims',
			'roles.claims.permission',
			'rights',
			'rights.0',
			'rights.1',
			'rights.2',
			'arrayObj',
			'arrayObj.0',
			'arrayObj.1',
			'arrayObj.1.name',
			'arrayObj.1.claims',
			'arrayObj.1.claims.permission'
		]
		
var parsePathArray = function(paths) {
    var parsed = {};
    for(var i = 0; i < paths.length; i++) {
        var position = parsed;
        var split = paths[i].split('.');
        for(var j = 0; j < split.length; j++) {
            if(split[j] !== "") {
                if(typeof position[split[j]] === 'undefined')
                    position[split[j]] = {};
                position = position[split[j]];
            }
        }
    }
    return parsed;
}

console.log(JSON.stringify(parsePathArray(data)))