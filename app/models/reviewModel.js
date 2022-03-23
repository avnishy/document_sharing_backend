module.exports = (sequelize, DataTypes) => {

    const Review = sequelize.define("reviews", {
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        }
    })

    return Review

}