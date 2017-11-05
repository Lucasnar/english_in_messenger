/* I perform this delete first to simplify not inserting duplicate values in development */
DELETE FROM twitter_accounts WHERE screen_name = 'bbcworld' OR screen_name = 'reuters' OR screen_name = 'wsj' OR screen_name = 'guardian' OR screen_name = 'theeconomist' OR screen_name = 'npr';

INSERT INTO twitter_accounts (name, screen_name) VALUES ('BBC World', 'bbcworld'), ('Reuters', 'reuters'), ('Wall Street Journal', 'wsj'), ('The Guardian', 'guardian'), ('The Economist', 'theeconomist'), ('NPR', 'npr');
