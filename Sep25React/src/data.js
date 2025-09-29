const toasts = [
    {
        id: 101,
        content: "Form submitted successfully",
        priority: "low",//low, medium,high
        position: "bottom-right",
        startTime: 123456//calculate from Date.now()
    },
    {
        id: 102,
        content: "Error",
        priority: "medium",//low, medium,high
        position: "bottom-right",
        startTime: 123456//calculate from Date.now()
    }
];

export default toasts;