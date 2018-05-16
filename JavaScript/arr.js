$("#table").bootstrapTable({
    dataType: "json",
    method: 'get',
    contentType: "application/x-www-form-urlencoded",
    cache: false,
    url: "../data/mergeData.json",
    columns: [

        [{
            "title": "洗衣机统计表",
            "halign": "center",
            "align": "center",
            "colspan": 5
        }],
        [{
                field: 'name',
                title: "功能分组",
                valign: "middle",
                align: "center",
                colspan: 1,
                rowspan: 2
            },
            {
                title: "美的",
                valign: "middle",
                align: "center",
                colspan: 2,
                rowspan: 1
            },
            {
                title: "松下",
                valign: "middle",
                align: "center",
                colspan: 2,
                rowspan: 1
            }
        ],
        [{
                field: 'mideaNum',
                title: '数量',
                valign: "middle",
                align: "center"
            },
            {
                field: 'mideaPercent',
                title: '占比',
                valign: "middle",
                align: "center"
            },
            {
                field: 'panasonicNum',
                title: '数量',
                valign: "middle",
                align: "center"
            },
            {
                field: 'panasonicPercent',
                title: '占比',
                valign: "middle",
                align: "center"
            }
        ]
    ]
})