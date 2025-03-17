-- migrations/sqls/20250317192809-seed-sports-events-up.sql
CREATE TABLE IF NOT EXISTS sports_events (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    odds DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL,
    deleted_at TIMESTAMP NULL
);

INSERT INTO sports_events (name, description, odds) VALUES
('Event 1', 'Description 1', 1.5),
('Event 2', 'Description 2', 2.0),
('Event 3', 'Description 3', 2.5),
('Event 4', 'Description 4', 3.0),
('Event 5', 'Description 5', 3.5);