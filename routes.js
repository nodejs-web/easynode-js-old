/**
 * Created by zmx on 14-9-15.
 */

var Controller = require('./controllers');

module.exports = function(app) {

    //网站首页
    app.get('/', function(req, res) {
        //实例化控制器
        var Index = new Controller.Index();
        var index = Index.index();
        //视图选择
        res.render('index/index', { title: 'Express', data: index });
    });

    //网站首页
    app.get('/index', function(req, res) {
        //实例化控制器
        var Index = new Controller.Index();
        var index = Index.index();
        //视图选择
        res.render('index/index', { title: 'Express', data: index });
    });


    //意见反馈
    app.get('/feedback', function(req, res) {
        var Feedback = Controller.Feedback();
        res.render('other/feedback', { title: 'express'});
    });

    //提交反馈
    app.post('/feedback', function(req, res) {
        console.log(req.body);
        res.render('index/index');
    });

//登录
    app.get('/signin', function(req, res) {
        res.render('public/signin', { title: 'express'});
    });

//注册
    app.get('/signup', function(req, res) {
        res.render('public/signup', { title: 'express'});
    });

//教程
    app.get('/tutorials', function(req, res) {
        res.render('tutorials/index', { title: 'express'});
    });

//个人中心
    app.get('/profile', function(req, res) {
        res.render('profile/index', { title: 'express'});
    });

//常见问题
    app.get('/questions', function(req, res) {
        res.render('questions/index', { title: 'express'});
    });

//下载
    app.get('/download', function(req, res) {
        res.render('download/index', { title: 'express'});
    });

//模块讲解
    app.get('/modules', function(req, res) {
        res.render('modules/index', { title : 'express'});
    });

//示例程序
    app.get('/demos', function(req, res) {
        res.render('demos/index', { title : 'express'});
    });

//退出登录
    app.get('/signout', function(req, res) {
        res.redirect('/');
    });

//团队介绍
    app.get('/group', function(req, res) {
        res.render('other/group', { title: 'group' });
    });

//关于我们
    app.get('/about', function(req, res) {
        res.render('other/about', { title: 'express'});
    });

//联系我们
    app.get('/contact', function(req, res) {
        res.render('other/contact', { title: 'express' });
    });

//使用协议
    app.get('/protocol', function(req, res) {
        res.render('other/protocol', { title: 'express'});
    });


};

