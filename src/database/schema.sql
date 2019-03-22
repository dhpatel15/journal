DROP DATABASE IF EXISTS journals;

CREATE DATABASE journals;

USE journals;

CREATE TABLE user (
id INT(11) AUTO_INCREMENT NOT NULL,
user_name VARCHAR(50) UNIQUE,
PRIMARY KEY(`id`)
);

CREATE TABLE entries (
id INT(11) AUTO_INCREMENT NOT NULL,
journal_entry VARCHAR(8000),
user_id VARCHAR(20),
anger INT(11),
fear INT(11),
joy INT(11),
sadness INT(11),
analytical INT(11),
confident INT(11),
tentative INT(11),
date DATE,
PRIMARY KEY(`date`),
FOREIGN KEY (user_id) REFERENCES user(user_name)
);


INSERT INTO user (id, user_name) VALUES (1, "dhpatel15");

INSERT INTO entries (id, journal_entry, user_id, anger, fear, joy, sadness, analytical, confident, tentative, date) VALUES (1, "At night, there was the feeling that we had come home, feeling no longer alone, waking in the night to find the other one there, and not gone away; all other things were unreal. We slept when we were tired and if we woke the other one woke too so one was not alone. Often a man wishes to be alone and a woman wishes to be alone too and if they love each other they are jealous of that in each other, but I can truly say we never felt that. We could feel alone when we were together, alone against the others. We were never lonely and never afraid when we were together", 'dhpatel15', .23, .11, .9, 0, .11, .23, .33, '2019-3-20');
INSERT INTO entries (id, journal_entry, user_id, anger, fear, joy, sadness, analytical, confident, tentative, date) VALUES (2, "Sometimes when I look at the ocean or an especially large mountain range, I feel overwhelmed and small, but in a good way. It’s comforting to know there’s something out there bigger than I am. Something large and enduring that has lasted through the ages. Through harsh weather, storms and droughts, through changes in history and climate, the ocean keeps on rolling and the mountains keep on standing tall. When I think of you and our love and how I feel about you, I feel the same way. My love for you doesn’t make me feel small though, it makes me feel powerful and new. I look at you and I know that I will love you forever, through storms and droughts, through all the changes that will undoubtedly come our way. I will love you forever. There’s no changing that", 'dhpatel15', .11, .90, .90, .33, .21, .23122, .34433, '2019-3-19');
INSERT INTO entries (id, journal_entry, user_id, anger, fear, joy, sadness, analytical, confident, tentative, date) VALUES (3, "Watching you walk across a room is the greatest gift. The way you move is so graceful and easy. The way you smile makes me feel at peace. Knowing you’re walking towards me is a feeling so hard to describe. It’s like coming home, a comfort, only the home is coming to me. I will never know such love, such peace, as you. You’re my home.", 'dhpatel15', .11, .90, .90, .33, .21, .23122, .34433, '2019-3-18');
INSERT INTO entries (id, journal_entry, user_id, anger, fear, joy, sadness, analytical, confident, tentative, date) VALUES (4, "Do I love you? My God, if your love were a grain of sand, mine would be a universe of beaches…I have stayed these years in my hovel because of you. I have taught myself languages because of you. I have made my body strong because I thought you might be pleased by a strong body. I have lived my life with only the prayer that some sudden dawn you might glance in my direction. I have not known a moment in years when the sight of you did not send my heart careening against my rib cage. I have not known a night when your visage did not accompany me to sleep. There has not been a morning when you did not flutter behind my waking eyelids", 'dhpatel15', .11, .90, .90, .33, .21, .23122, .34433, '2019-3-17');
INSERT INTO entries (id, journal_entry, user_id, anger, fear, joy, sadness, analytical, confident, tentative, date) VALUES (5, "Watching you walk across a room is the greatest gift. The way you move is so graceful and easy. The way you smile makes me feel at peace. Knowing you’re walking towards me is a feeling so hard to describe. It’s like coming home, a comfort, only the home is coming to me. I will never know such love, such peace, as you. You’re my home.", 'dhpatel15', .11, .90, .90, .33, .21, .23122, .34433, '2019-3-16');
INSERT INTO entries (id, journal_entry, user_id, anger, fear, joy, sadness, analytical, confident, tentative, date) VALUES (6, "At night, there was the feeling that we had come home, feeling no longer alone, waking in the night to find the other one there, and not gone away; all other things were unreal. We slept when we were tired and if we woke the other one woke too so one was not alone. Often a man wishes to be alone and a woman wishes to be alone too and if they love each other they are jealous of that in each other, but I can truly say we never felt that. We could feel alone when we were together, alone against the others. We were never lonely and never afraid when we were together", 'dhpatel15', .23, .11, .9, 0, .11, .23, .33, '2019-3-15');