var data = [{
        "first": "A",
        "second": "1",
        "third": "apple",
    },
    {
        "first": "A",
        "second": "2",
        "third": "orange",

    },
    {
        "first": "B",
        "second": "3",
        "third": "apple",
    },
    {
        "first": "B",
        "second": "2",
        "third": "orange",
    },
    {
        "first": "C",
        "second": "1",
        "third": "apple",
    }
];

$(function() {
    $('#table').bootstrapTable({
        filterControl: true,
        data: data,
        columns: [{
                field: "first",
                title: "First",
                filterControl: 'input',
                filterControlPlaceholder: "Placeholder",
                filterStrictSearch: false
            }, {
                field: "second",
                title: "Second",
                filterControl: 'select',
                filterStrictSearch: true
            },
            {
                field: "third",
                title: 'Third',
                filterControl: 'select',
                filterStrictSearch: false
            }
        ]

    });
});