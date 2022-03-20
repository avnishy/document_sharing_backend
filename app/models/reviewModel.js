module.exports = (sequelize, DataTypes) => {

    const Review = sequelize.define("review", {
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        }
    })

    return Review

}