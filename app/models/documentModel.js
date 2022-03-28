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
        },
        linkurl: {
            type: DataTypes.TEXT
        },
        userID:{
            type:DataTypes.INTEGER
        },
        userName:{
            type:DataTypes.TEXT
        }
    })
    return Document
}