export const initialTreeData = {
    id: 1,
    name: "src",
    type: "folder",
    children: [
        {
            id: 2,
            name: "components",
            type: "folder",
            children: [
                {
                    id: 3,
                    name: "common",
                    type: "folder",
                    children: [
                        { id: 4, name: "Button.js", type: "file" },
                        { id: 5, name: "Input.js", type: "file" },
                        { id: 6, name: "Modal.js", type: "file" },
                        { id: 7, name: "Loader.js", type: "file" }
                    ]
                },
                {
                    id: 8,
                    name: "layout",
                    type: "folder",
                    children: [
                        { id: 9, name: "Header.js", type: "file" },
                        { id: 10, name: "Footer.js", type: "file" },
                        { id: 11, name: "Sidebar.js", type: "file" }
                    ]
                },
                {
                    id: 12,
                    name: "dashboard",
                    type: "folder",
                    children: [
                        { id: 13, name: "DashboardCard.js", type: "file" },
                        { id: 14, name: "StatsWidget.js", type: "file" },
                        { id: 15, name: "ActivityFeed.js", type: "file" }
                    ]
                }
            ]
        },
        {
            id: 16,
            name: "pages",
            type: "folder",
            children: [
                { id: 17, name: "Home.js", type: "file" },
                { id: 18, name: "About.js", type: "file" },
                { id: 19, name: "Contact.js", type: "file" },
                {
                    id: 20,
                    name: "auth",
                    type: "folder",
                    children: [
                        { id: 21, name: "Login.js", type: "file" },
                        { id: 22, name: "Register.js", type: "file" },
                        { id: 23, name: "ForgotPassword.js", type: "file" }
                    ]
                }
            ]
        },
        {
            id: 24,
            name: "hooks",
            type: "folder",
            children: [
                { id: 25, name: "useAuth.js", type: "file" },
                { id: 26, name: "useFetch.js", type: "file" },
                { id: 27, name: "useLocalStorage.js", type: "file" }
            ]
        },
        {
            id: 28,
            name: "context",
            type: "folder",
            children: [
                { id: 29, name: "AuthContext.js", type: "file" },
                { id: 30, name: "ThemeContext.js", type: "file" }
            ]
        },
        {
            id: 31,
            name: "services",
            type: "folder",
            children: [
                { id: 32, name: "api.js", type: "file" },
                { id: 33, name: "authService.js", type: "file" },
                { id: 34, name: "userService.js", type: "file" }
            ]
        },
        {
            id: 35,
            name: "utils",
            type: "folder",
            children: [
                { id: 36, name: "formatDate.js", type: "file" },
                { id: 37, name: "validators.js", type: "file" },
                { id: 38, name: "constants.js", type: "file" }
            ]
        },
        {
            id: 39,
            name: "styles",
            type: "folder",
            children: [
                { id: 40, name: "global.css", type: "file" },
                { id: 41, name: "theme.css", type: "file" }
            ]
        },
        { id: 42, name: "App.js", type: "file" },
        { id: 43, name: "index.js", type: "file" },
        { id: 44, name: "routes.js", type: "file" }
    ]
};