-- ALTER TABLE houses
-- ADD img_url varchar(50);
-- ADD mortgage integer;
-- ADD rent integer;


UPDATE houses
SET img_url = $2, mortgage = $3, rent = $4
WHERE id = $1