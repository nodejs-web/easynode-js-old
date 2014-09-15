/**
 * Created by zmx on 14-9-15.
 */
module.exports = Index;

function Index(){
    this.name = 'Index';
}

Index.prototype.index = function(){
    //获取首页数据

    return { name : this.name };
};