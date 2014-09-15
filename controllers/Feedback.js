/**
 * Created by zmx on 14-9-15.
 */
module.exports = Feedback;

function Feedback (){
    this.name = 'feedback';
}

Feedback.prototype.index = function(){
   console.log(this.name);
};