import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-mongodb'

import { migrateBranching } from '@payloadcms/db-mongodb/migration-utils'

export async function up({ payload, session }: MigrateUpArgs): Promise<void> {
  await migrateBranching({
    payload,
    session,
  })
}

export async function down(_args: MigrateDownArgs): Promise<void> {
  // Keep branch identity and indexes intact; disabling branching does not require removing them.
}
