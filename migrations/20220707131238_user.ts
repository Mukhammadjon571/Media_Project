import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(
    `
    create type user_status as enum("none","vip");
    `,
  );

  await knex.raw(
    `
    create type user_role as enum("admin","user");
    `,
  );

  await knex.raw(
    `
    id uuid primary key default uuid_generate_v4(),
    created_at timestamp not null default current_timestamp,
    username varchar(32) not null,
    email varchar(32) not null,
    password varchar(32) not null,
    status user_status not null default "none",
    link varchar(255) not null,
    uuid uuid not null,
    balance int not null default 0,
    deadline_tarif int not null default 0,
    photo varchar[] not null,
    role user_role not null default "user"
    `,
  );
}

export async function down(knex: Knex): Promise<void> {}
