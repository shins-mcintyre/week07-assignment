-- Schema visualiser screenshot
-- This is in FIGJAM (linked in README)

-- SQL queries from your editor on Supabase
-- this is just for reference

-- ASSIGNMENT WEEK 7

-- made this but realised I don't need this!
CREATE TABLE IF NOT EXISTS users(
  id INT PRIMARY KEY GENERATED ALWAYS AS identity,
  username VARCHAR(255) NOT NULL
)

-- create cats table
CREATE TABLE IF NOT EXISTS cat_posts(
  id INT PRIMARY KEY GENERATED ALWAYS AS identity,
  username VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  location VARCHAR(255) NOT NULL,
  approach_score INT NOT NULL,
  comments TEXT,
  src TEXT NOT NULL
)

-- populate cat_posts table

-- created this SQL with Table Editor and adding rows, then exporting the SQL (something I learned through the codebar session) - had to remove ids for it to work
INSERT INTO cat_posts ("username", "date", "location", "approach_score", "comments", "src") VALUES 
('shins-mc', '2025-01-13', 'Norwich', '4', 'He popped out while I was reading!', 'https://americanlibrariesmagazine.org/wp-content/uploads/2016/10/03catniss.jpg'), 
('big-maz', '2025-02-11', 'Hong Kong', '5', 'He followed me around for my walk', 'https://static01.nyt.com/images/2024/10/30/multimedia/00xp-cats-06-mcph/00xp-cats-06-mcph-articleLarge.jpg?quality=75&auto=webp&disable=upscale'), 
('kats-cat', '2025-03-01', 'Norwich', '2', 'A curious boy in my garden but he kept his distance', 'https://bestfriends.org/sites/default/files/resource_article_images/Stray_ClubMedForCatsColony_bySaraMally0111.jpg'), 
('shins-mc', '2025-04-26', 'Sligo', '3', 'This little guy knew what he was doing, luckily no birds arrived', 'https://wildlifecenter.org/sites/default/files/styles/maximum/public/image/l3-help-issues-cats-page-header.jpg.webp?itok=WE-zi39D'), 
('kats-cat', '2025-05-05', 'Norwich', '2', 'Another in my garden - snoozing in the bushes', 'https://cdn.book-family.com/petbook/data/uploads/2025/11/katzen-neuseelandgettyimages-992627698.jpg?impolicy=smart-crop&width=992&height=558'), 
('shins-mc', '2025-06-08', 'Norwich', '3', 'Ladies brunching together on a sunny day', 'https://static01.nyt.com/images/2024/10/30/multimedia/00xp-cats-promo/00xp-cats-grid-02-kgzf-videoSixteenByNineJumbo1600.jpg'), 
('big-maz', '2025-07-26', 'Hong Kong', '5', 'This guy was so sweet - he didn''t look too well so we made sure he had some food and water!', 'https://www.humaneworld.org/sites/default/files/styles/sa_social_media_facebook/public/2022-09/stray-cat-579765.jpg?h=e22bf01e&itok=-cnJSBZs'), 
('shins-mc', '2025-08-27', 'Istanbul', '4', 'These Istanbul cats are so unbothered - living the life', 'https://www.thetimes.com/imageserver/image/%2Fefa75064-b36d-4701-acc2-91255ace70b7.jpg?crop=7008%2C3942%2C0%2C365'), 
('kats-cat', '2025-09-05', 'Norwich', '1', 'oh hello cutie! he stayed far away from me, but what amazing eyes', 'https://www.companionlife.co.uk/wp-content/uploads/2021/03/cat-garden.jpg'), 
('shins-mc', '2025-10-02', 'Norwich', '2', 'I think he was waiting for my cat to come out and play', 'https://bestfriends.org/sites/default/files/styles/hero_feature_50_large/public/2025-09/ClubMedForCatsColony_bySaraMally0203_feature.jpg?h=01116396&itok=nOp-hsVQ');

