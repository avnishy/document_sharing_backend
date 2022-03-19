module.exports = (sequelize, DataTypes) => {

    const Review = sequelize.define("review", {
        Name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        }
    })

    return Review

}