\echo 'Delete and recreate paper-route db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE paper_route;
CREATE DATABASE paper_route;
\connect paper_route

\i paper-route-schema.sql
\i paper-route-seed.sql

\echo 'Delete and recreate paper-route_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE paper_route_test;
CREATE DATABASE paper_route_test;
\connect paper_route_test

\i paper-route-schema.sql