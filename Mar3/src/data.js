const data = {
    '254153': {
        id: 254153,
        name: 'Alice',
        color: 'Red',
        x: 24.78,
        y: 100.52
    },
    '254155': {
        id: 254155,
        name: 'James',
        color: 'Green',
        x: 2.78,
        y: 10.52
    },
    '254158': {
        id: 254158,
        name: 'Jonas',
        color: 'Pink',
        x: 205.78,
        y: 102.52
    },
}

const filterData = {
    id: "root",
    type: "group",
    conjunction: "AND",
    children: [
        {
            id: "c1",
            type: "condition",
            field: "Region",
            operator: "equals",
            value: "Asia"
        },
        {
            id: "g1",
            type: "group",
            conjunction: "OR",
            children: [
                {
                    id: "c2",
                    type: "condition",
                    field: "Role",
                    operator: "equals",
                    value: "Software Engineer"
                },
                {
                    id: "c3",
                    type: "condition",
                    field: "Salary",
                    operator: ">",
                    value: 100000
                }
            ]
        }
    ]
}

const employees = [
    {
        id: 101,
        Name: "Alice Johnson",
        Region: "North America",
        Role: "Software Engineer",
        Salary: 95000,
        JoiningDate: "2021-05-15"
    },
    {
        id: 102,
        Name: "Bob Smith",
        Region: "Europe",
        Role: "Product Manager",
        Salary: 120000,
        JoiningDate: "2019-09-01"
    },
    {
        id: 103,
        Name: "Yash Patel",
        Region: "Asia",
        Role: "UX Designer",
        Salary: 85000,
        JoiningDate: "2020-11-23"
    },
    {
        id: 104,
        Name: "Maria Garcia",
        Region: "South America",
        Role: "Data Scientist",
        Salary: 110000,
        JoiningDate: "2022-02-10"
    },
    {
        id: 105,
        Name: "Liam Wong",
        Region: "Europe",
        Role: "Software Engineer",
        Salary: 98000,
        JoiningDate: "2021-07-30"
    },
    {
        id: 106,
        Name: "Emma Davis",
        Region: "North America",
        Role: "HR Manager",
        Salary: 105000,
        JoiningDate: "2018-03-12"
    },
    {
        id: 107,
        Name: "Noah Kim",
        Region: "Asia",
        Role: "Software Engineer",
        Salary: 90000,
        JoiningDate: "2020-06-18"
    }
]

const fieldMeta = {
    Name: {
        type: "text",
        operators: ["equals", "contains"]
    },
    Region: {
        type: "select",
        options: ["North America", "Europe", "Asia", "South America"],
        operators: ["equals", "not equals"]
    },
    Role: {
        type: "select",
        options: ["Software Engineer", "Product Manager", "UX Designer", "Data Scientist", "HR Manager"],
        operators: ["equals", "not equals"]
    },
    Salary: {
        type: "number",
        operators: ["=", ">", "<", ">=", "<=", "between"]
    },
    JoiningDate: {
        type: "date",
        operators: ["before", "after", "between"]
    }
}

export const initialWidgetData = {
    "1": {
        id: "1",
        label: "Mahine ka kharcha",
        widgetType: "chart",//Chart, Table, Stats Card
        x: 420,
        y: 120.25,
        w: 100,
        h: 120
    },
    "2": {
        id: "2",
        label: "Users ki list",
        widgetType: "Table",//Chart, Table, Stats Card
        x: 20,
        y: 14.25,
        w: 120,
        h: 150
    },
    "3": {
        id: "3",
        label: "overall salary",
        widgetType: "card",//Chart, Table, Stats Card
        x: 120,
        y: 170.25,
        w: 180,
        h: 120
    },
}

export const initialImages = [
    {
        id: 1,
        url: "https://picsum.photos/id/1015/1200/800",
        thumbnail: "https://picsum.photos/id/1015/400/300",
        title: "Mountain Lake",
    },
    {
        id: 2,
        url: "https://picsum.photos/id/1016/1200/800",
        thumbnail: "https://picsum.photos/id/1016/400/300",
        title: "Forest Road",
    },
    {
        id: 3,
        url: "https://picsum.photos/id/1018/1200/800",
        thumbnail: "https://picsum.photos/id/1018/400/300",
        title: "Snowy Peaks",
    },
    {
        id: 4,
        url: "https://picsum.photos/id/1020/1200/800",
        thumbnail: "https://picsum.photos/id/1020/400/300",
        title: "Desert Sand",
    },
    {
        id: 5,
        url: "https://picsum.photos/id/1024/1200/800",
        thumbnail: "https://picsum.photos/id/1024/400/300",
        title: "Cute Dog",
    },
    {
        id: 6,
        url: "https://picsum.photos/id/1027/1200/800",
        thumbnail: "https://picsum.photos/id/1027/400/300",
        title: "Ocean Cliff",
    },
    {
        id: 7,
        url: "https://picsum.photos/id/1035/1200/800",
        thumbnail: "https://picsum.photos/id/1035/400/300",
        title: "River Bridge",
    },
    {
        id: 8,
        url: "https://picsum.photos/id/1039/1200/800",
        thumbnail: "https://picsum.photos/id/1039/400/300",
        title: "Waterfall",
    },
    {
        id: 9,
        url: "https://picsum.photos/id/1043/1200/800",
        thumbnail: "https://picsum.photos/id/1043/400/300",
        title: "Foggy Forest",
    },
    {
        id: 10,
        url: "https://picsum.photos/id/1050/1200/800",
        thumbnail: "https://picsum.photos/id/1050/400/300",
        title: "Sunset Beach",
    },
];