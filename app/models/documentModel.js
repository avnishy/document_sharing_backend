module.exports = (sequelize, DataTypes) => {

    const Document = sequelize.define("document", {
        document: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.BOOLEAN
        }
    
    })
    return Document
}