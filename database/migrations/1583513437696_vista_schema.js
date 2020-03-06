'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VistaSchema extends Schema {
  up () {
    this.create('vistas', (table) => {
      table.increments()
      table.timestamps()
      table.string('hora1',50).notNullable();
      table.string('concepto1',100).notNullable();
      table.string('detalles1',500).notNullable();
      table.string('estatus1',50).notNullable();
      table.string('email',50).notNullable().unique();
      table.integer('idproceso',50).notNullable().unique();
      table.string('hora2',50).notNullable();
      table.string('concepto2',100).notNullable();
      table.string('detalles2',500).notNullable();
      table.string('estatus2',50).notNullable();
      table.string('hora3',50).notNullable();
      table.string('concepto3',100).notNullable();
      table.string('detalles3',500).notNullable();
      table.string('estatus3',50).notNullable();
      table.string('hora4',50).notNullable();
      table.string('concepto4',100).notNullable();
      table.string('detalles4',500).notNullable();
      table.string('estatus4',50).notNullable();
    })
  }

  down () {
    this.drop('vistas')
  }
}

module.exports = VistaSchema
