function Foo() {
	this.sum = 0
	this.add = function() {
		this.sum +=1
	}
	this.show = function() {
		console.log(this.sum)
	}
}

export default new Foo()