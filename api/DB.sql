-- Step 1: Create the database if not exists
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'wcs_challenge_entry_app') THEN 
        CREATE DATABASE wcs_challenge_entry_app; 
    END IF; 
END $$;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Step 2: Create the "Roles" table with UUID primary key

DROP TABLE IF EXISTS "role" CASCADE;
CREATE TABLE "role" (
    "id" INTEGER PRIMARY KEY NOT NULL,
    "role_name" VARCHAR(100) NOT NULL
);

-- Step 3: Create the "User" table with UUID primary key and a foreign key to Roles

DROP TABLE IF EXISTS "user" CASCADE;
CREATE TABLE "user" (
    "id" UUID DEFAULT uuid_generate_v4() NOT NULL,
    "firstname" VARCHAR(100) NOT NULL,
    "surname" VARCHAR(100) NOT NULL,
    "age" INTEGER NOT NULL,
    "role_id" INTEGER REFERENCES "role"("id") NOT NULL
);

-- Step 4: Predefine 3 roles: "admin", "subscribed", "unsubscribed"
INSERT INTO "role" (id, role_name) VALUES
    (1, 'admin'),
    (2, 'subscribed'),
    (3, 'unsubscribed');

-- Step 5: Predefine 3 users: "Tom, Smith, 26 years old", "Sarah, Johnson, 41 years old", "Sam, Potter, 12 years old"
INSERT INTO "user" (firstname, surname, age, role_id) VALUES
    ('Athena', 'Pallas', 2456, 1),  -- Tom is an admin
    ('Apollo', 'Apollon', 3584, 2),  -- Sarah is subscribed
    ('Zeus', 'Jupiter', 4244, 3);  -- Sam is unsubscribed;
