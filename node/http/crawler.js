// 小爬虫
var http = require('http')
// var url = 'http://www.imooc.com/learn/861'
var url = 'http://www.imooc.com/learn/348'
// npm install cheerio
// 导入html标签解析模块
var cheerio = require('cheerio')

/**
 * 筛选网页源码
 * 
 * @param {*} html 
 */
function filterChapters(html) {
    // 加载html对象赋值给￥
    var $ = cheerio.load(html)
    // 获取所有章节dom对象
    var chapters = $('.chapter')
    // 期望的数据格式
    // [{
    //     chapterTitle: '',
    //     videos:[{
    //         id: '',
    //         title: ''
    //     }]   
    // }]
    // 课程信息
    var courseData = []
    // 遍历所有章节
    chapters.each(function(index, chapter) { // each 是jquery  forEach 是数组
        // 每一章的数据
        var chapterData = {
            // 获取章节标题
            chapterTitle: $(chapter).find('strong').text().split('      ')[8].trim(),
            videos: []
        }
        // 获取当前章节所有视频信息
        var videos = $(chapter).find('.video').children('li')
        // 遍历当前章节所有视频
        videos.each(function(index, video) {
            // 为当前章节构建每一个视频
            chapterData.videos.push({
                // 获取当前视频id
                id: $(video).attr('data-media-id'), 
                // 获取当前视频名称 // 去除空格 除去‘开始学习’ 除去换行
                title:  $(video).text().replace(/ /g, '').replace('开始学习', '').trim().replace('\n', '')
            })
        })
        // 将当前这一章的信息放到课程信息中去
        courseData.push(chapterData)
    })
    // 返回课程信息
    return courseData
}

/**
 * 打印课程信息
 * 
 * @param {*} courseData 
 */
function printCourseInfo(courseData) {
    // 遍历并打印章节
    courseData.forEach(function(course) {
        console.log(course.chapterTitle+ '\n')
        // 遍历并打印每章视频
        course.videos.forEach(function(video) {
            console.log('\t[' + video.id + '] ' + video.title + '\n')
        })
    })
}

// 发起http请求
http.get(url, function(res) {
    var html = ''
    
    res.on('data', function(data) {
        html += data
    })

    res.on('end', function() {
        var courseData = filterChapters(html)
        printCourseInfo(courseData)
    })
}).on('error', function() {
    console.log('获取课程数据出错')
})
