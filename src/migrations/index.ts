import * as migration_20261027_162040_enable_branching from './20261027_162040_enable_branching'

export const migrations = [
  {
    up: migration_20261027_162040_enable_branching.up,
    down: migration_20261027_162040_enable_branching.down,
    name: '20261027_162040_enable_branching',
  },
]
