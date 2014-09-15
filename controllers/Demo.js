/**
 * Created by zmx on 14-9-14.
 */
module.exports = Demo;

function Demo (){
  this.name = 'demo';
}
/*Demo.prototype.__proto__ = function(){
  console.log( 'hello world');
};*/
//添加demo
Demo.prototype.index = function() {
    console.log(this.name);
    console.log('我是demo的index');
};

Demo.prototype.add = function() {

};

//编辑demo
Demo.prototype.edit = function( ) {

};

//删除demo
Demo.prototype.del = function( ) {

};

//评论demo
Demo.prototype.comment = function () {

};