exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', (tbl) => {
        tbl.increments();
        tbl.string('name').unique().notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes');
};
