const data = {
    sections: [
        {
            type: "education",
            items: [
                {
                    id: "edu1",
                    fields: [
                        { label: "Institution", value: "UNIVERSITY OF ILLINOIS - URBANA CHAMPAIGN (UIUC)", row: "1" },
                        { label: "City", value: "Urbana-Champaign, IL", row: "2" },
                        { label: "Degree", value: "M.S., Mechanical Engineering", row: "2" },
                        { label: "Duration", value: "Dec 2015 - Dec 2016", row: "3" },
                        { label: "GPA", value: "3.74/4", row: "3" }
                    ]
                },
                {
                    id: "edu2",
                    fields: [
                        { label: "Institution", value: "INDIAN INSTITUTE OF TECHNOLOGY DELHI (IITD)", row: "1" },
                        { label: "City", value: "New Delhi, India", row: "2" },
                        { label: "Degree", value: "B.S., Mechanical Engineering", row: "2" },
                        { label: "Duration", value: "May 2014 - May 2015", row: "3" },
                        { label: "GPA", value: "8.98/10", row: "3" }
                    ]
                }
            ]
        },
        {
            type: "experience",
            items: [
                {
                    id: "exp1",
                    fields: [
                        { label: "Role", value: "Software Engineer" },
                        { label: "Company", value: "TechCorp" },
                        { label: "Location", value: "New York, NY" },
                        { label: "Duration", value: "2018 - Present" },
                        { label: "Description", value: "Developed scalable applications..." }
                    ]
                }
            ]
        }
    ]
};

const style={
    education: {
        heading: { 
            fontSize: "24px", 
            fontWeight: "bold" 
        },
        eachContainer1: { 
            padding: "10px", 
            borderBottom: "1px solid #ccc" 
        },
        mainRow1: { 
            display: "flex", 
            gap: "10px" 
        },
        mainRow2: { 
            width: "500px",
            display: "flex", 
            gap: "10px",
            justifyContent: "space-between"
        },
        mainRow3:{
            width: "800px",
            display: "flex",
            gap: "5px"
        },
        institution: { 
            fontWeight: "bold", 
            fontSize: "18px" 
        },
        city: { 
            color: "#777" 
        },
        degree: { 
            fontStyle: "italic" 
        },
        gpa: { 
            color: "#999" 
        },
    },
}

export default function Education() {
    return (
        <div className="container">
            {data.sections.map((section) => (
                <div key={section.type} className={`section ${section.type}`}>
                    <h2
                        className="section-heading"
                        style={style?.[section.type]?.heading}
                    >
                        {section.type.charAt(0).toUpperCase() + section.type.slice(1)}
                    </h2>

                    {section.items.map((item, itemIndex) => {
                        const containerStyleKey = `eachContainer${itemIndex + 1}`;
                        const groupedFields = item.fields.reduce((acc, field, index) => {
                            const rowKey = field.row || `__norow__${index}`;
                            if (!acc[rowKey]) acc[rowKey] = [];
                            acc[rowKey].push(field);
                            return acc;
                        }, {});

                        return (
                            <div
                                key={item.id || itemIndex}
                                className={`each-container eachContainer${itemIndex + 1}`}
                                style={style?.[section.type]?.[containerStyleKey]}
                            >
                                {Object.entries(groupedFields).map(([rowKey, fieldsInRow]) => {
                                    const rowStyleKey = `mainRow${rowKey}`;
                                    return (
                                        <div
                                            key={rowKey}
                                            className={`main-row mainRow${rowKey}`}
                                            style={style?.[section.type]?.[rowStyleKey]}
                                        >
                                            {fieldsInRow.map((field, index) => {
                                                const fieldKey = field.label
                                                    .toLowerCase()
                                                    .replace(/\s+/g, '');

                                                return (
                                                    <div
                                                        key={index}
                                                        className={`${fieldKey}`}
                                                        style={style?.[section.type]?.[fieldKey]}
                                                    >
                                                        {field.value}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
