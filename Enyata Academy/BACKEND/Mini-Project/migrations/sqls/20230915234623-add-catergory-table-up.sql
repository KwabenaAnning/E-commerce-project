/* Replace with your SQL commands */

CREATE TABLE category(
    category_id SERIAL PRIMARY KEY,
    name VARCHAR not NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
)
