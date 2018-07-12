
$.extend({
    DefaultHightHelperOptions: function(){
        this.data = [];
        this.categories= [];
        this.text= "text";
        this.value= "value";
        this.chartTitle= "报表";
        this.xTitle= "项目";
        this.yTitle= "项目进度";
        this.clickEvent= function (e) { console.log(e); };
        this.url= "";
        this.type= "post";
        this.max =1;
        this.min=0;
    }

});

$.fn.extend({
    hightChartHelper: function (options) {
        var defultOptions =new $.DefaultHightHelperOptions();
        let option = $.extend(defultOptions,options);
        console.log(this);
        let that = this;
        if(option.url && option.url != ""){
            $.ajax({
                url:option.url,
                type:option.type,
                success:function(rst){
                    if(rst.status="success"){
                        var data = rst.data;
                        GeneraterValue(option,data);
                        GeneraterChart(option);
                    }
                    else{
                        alert("HightChart读取数据错误");
                    }
                }
            });
        }
        else
        {
            GeneraterChart(option);
        }
        function GeneraterValue(op,d){
            if(d instanceof Array){
                for(let i=0;i<d.length;i++){
                    let item =d[i];
                    op.categories.push(item[op.text]);
                    op.data.push(item[op.value]);
                }
            }
        }
        function GeneraterChart(o){
            that.highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: o.chartTitle
                },
                xAxis: {
                    categories: o.categories,
                    title: {
                        text: o.xTitle //"项目"
                    }
                },
                yAxis: {
                    min: o.min,
                    max: o.max,
                    title: {
                        text:  o.yTitle,
                        align: 'middle',
                        margin: 20
                    },
                    labels: {
                        overflow: 'justify',
                        formatter: function () {
                            return this.value * 100 + "%";
                        },
                        events:{
                            click:function(e){
                                console.log(e);
                            }
                        }
                    }
                },
                tooltip: {
                    formatter: function () {
                        return this.x + "当前进度为" + this.y * 100 + "%";
                    }
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true,  //显示数量提示
                            color: '#000000',
                            formatter: function () {
                                return (this.y * 100).toFixed(2) + "%";
                            }
                        }
                    },
                    series: {
                        events: {
                            click: o.clickEvent,
                            checkboxClick:function(){},
                            mouseOver:function(){
                                console.log("mouseOver");
                            }
                        }
                    }
                },
                legend: {
                    enabled: false
                },
                lang: {
                    downloadCSV:"Download CSV",
                    downloadJPEG:"保存为JPEG",
                    downloadPDF:"保存为PDF",
                    downloadPNG:"保存为PNG",
                    downloadSVG:"保存为SVG",
                    downloadXLS:"保存为Excel文件",
                    printChart:"打印图例"
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: "apple",
                    data: o.data //[0.9, 0.8, 0.3, 0.9, 1, 0.56, 0.35]
                }]
            });
        }

 
    }
});