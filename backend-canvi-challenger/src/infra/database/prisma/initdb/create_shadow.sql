CREATE DATABASE IF NOT EXISTS pix_db_shadow;

GRANT ALL PRIVILEGES ON pix_db_shadow.* TO 'pix_user' @'%';

FLUSH PRIVILEGES;