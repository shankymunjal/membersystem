memberSystem.service('User', ['$http', '$q', function($http, $q) {

	this.all = function(){
		var def = $q.defer();
		$http.get("/users.json").
			then(function(result, status){
				def.resolve(result.data);
			},function(result, status){
				def.reject(result)
			})
		return def.promise
	}

	this.delete = function(user_id){
		var def = $q.defer();
		$http.delete("/users/"+user_id+".json").
			then(function(result, status){
				def.resolve(result);
			},function(result, status){
				def.reject(result)
			})
		return def.promise
	}

	this.find = function(user_id){
		var def = $q.defer();
		$http.get("/users/"+user_id+".json").
			then(function(result, status){
				def.resolve(result);
			},function(result, status){
				def.reject(result)
			})
		return def.promise
	}

	this.update = function(user, addresses){
		user.addresses_attributes = addresses
		var def = $q.defer();
		$http.put("/users/"+user.id+".json", {"user": user}).
			then(function(result, status){
				def.resolve(result);
			},function(result, status){
				def.reject(result)
			})
		return def.promise
	}

	this.save = function(user, addresses){
		user.addresses_attributes = addresses
		var def = $q.defer();
		$http.post("/users.json", {"user":user}).
			then(function(result, status){
				def.resolve(result);
			},function(result, status){
				def.reject(result)
			})
		return def.promise
	}

	this.change_password = function(user){
		var def = $q.defer();
		$http.post("/users/change_password.json", user).
			then(function(result, status){
				def.resolve(result);
			},function(result, status){
				def.reject(result)
			})
		return def.promise
	}

}]);