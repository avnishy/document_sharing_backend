module.exports = (sequelize, DataTypes) => {

    const Document = sequelize.define("documents", {
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
        },
        linkurl: {
            type: DataTypes.TEXT
        }
    })
    return Document
}