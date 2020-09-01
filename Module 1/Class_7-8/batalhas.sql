CREATE TABLE batalhas(
   id                 INTEGER  NOT NULL PRIMARY KEY 
  ,name               VARCHAR(52) NOT NULL
  ,year               INTEGER  NOT NULL
  ,battle_number      INTEGER  NOT NULL
  ,attacker_king      VARCHAR(24)
  ,defender_king      VARCHAR(24)
  ,attacker_commander VARCHAR(95)
  ,defender_commander VARCHAR(109)
  ,attacker_outcome   VARCHAR(4)
  ,battle_type        VARCHAR(14)
  ,major_death        BOOLEAN  NOT NULL
  ,major_capture      BOOLEAN  NOT NULL
  ,attacker_size      INTEGER  NOT NULL
  ,defender_size      INTEGER  NOT NULL
  ,summer             VARCHAR(5) NOT NULL
  ,location           VARCHAR(36)
  ,region             VARCHAR(15) NOT NULL
  ,note               VARCHAR(257)
);
INSERT INTO batalhas(id,name,year,battle_number,attacker_king,defender_king,attacker_commander,defender_commander,attacker_outcome,battle_type,major_death,major_capture,attacker_size,defender_size,summer,location,region,note) VALUES
 (1,'Battle of the Golden Tooth',298,1,'Joffrey/Tommen Baratheon','Robb Stark','Jaime Lannister','Clement Piper, Vance','win','pitched battle',true,true,15000,4000,'true','Golden Tooth','The Westerlands',NULL)
,(2,'Battle at the Mummer''s Ford',298,2,'Joffrey/Tommen Baratheon','Robb Stark','Gregor Clegane','Beric Dondarrion','win','ambush',true,true,0,120,'true','Mummer''s Ford','The Riverlands',NULL)
,(3,'Battle of Riverrun',298,3,'Joffrey/Tommen Baratheon','Robb Stark','Jaime Lannister, Andros Brax','Edmure Tully, Tytos Blackwood','win','pitched battle',true,true,15000,10000,'true','Riverrun','The Riverlands',NULL)
,(4,'Battle of the Green Fork',298,4,'Robb Stark','Joffrey/Tommen Baratheon','Roose Bolton, Wylis Manderly, Medger Cerwyn, Harrion Karstark, Halys Hornwood','Tywin Lannister, Gregor Clegane, Kevan Lannister, Addam Marbrand','loss','pitched battle',true,true,18000,20000,'true','Green Fork','The Riverlands',NULL)
,(5,'Battle of the Whispering Wood',298,5,'Robb Stark','Joffrey/Tommen Baratheon','Robb Stark, Brynden Tully','Jaime Lannister','win','ambush',true,true,1875,6000,'true','Whispering Wood','The Riverlands',NULL)
,(6,'Battle of the Camps',298,6,'Robb Stark','Joffrey/Tommen Baratheon','Robb Stark, Tytos Blackwood, Brynden Tully','Lord Andros Brax, Forley Prester','win','ambush',true,true,6000,12625,'true','Riverrun','The Riverlands',NULL)
,(7,'Sack of Darry',298,7,'Joffrey/Tommen Baratheon','Robb Stark','Gregor Clegane','Lyman Darry','win','pitched battle',true,true,0,0,'true','Darry','The Riverlands',NULL)
,(8,'Battle of Moat Cailin',299,8,'Balon/Euron Greyjoy','Robb Stark','Victarion Greyjoy',NULL,'win','pitched battle',true,true,0,0,'true','Moat Cailin','The North',NULL)
,(9,'Battle of Deepwood Motte',299,9,'Balon/Euron Greyjoy','Robb Stark','Asha Greyjoy',NULL,'win','siege',true,true,1000,0,'true','Deepwood Motte','The North',NULL)
,(10,'Battle of the Stony Shore',299,10,'Balon/Euron Greyjoy','Robb Stark','Theon Greyjoy',NULL,'win','ambush',true,true,264,0,'true','Stony Shore','The North','Greyjoy''s troop number based on the Battle of Deepwood Motte, in which Asha had 1000 soldier on 30 longships. That comes out to ~33 per longship. In the Battle of the Stony Shore, Theon has 8 longships, and just we can estimate that he has 8*33 =265 troops.')
,(11,'Battle of Torrhen''s Square',299,11,'Robb Stark','Balon/Euron Greyjoy','Rodrik Cassel, Cley Cerwyn','Dagmer Cleftjaw','win','pitched battle',true,true,244,900,'true','Torrhen''s Square','The North','Greyjoy''s troop number comes from the 264 estimate to have arrived on the stony shore minus the 20 Theon takes to attack Winterfell. Thus 264-20=244')
,(12,'Battle of Winterfell',299,12,'Balon/Euron Greyjoy','Robb Stark','Theon Greyjoy','Bran Stark','win','ambush',true,true,20,0,'true','Winterfell','The North','It isn''t mentioned how many Stark men are left in Winterfell, other than "very few".')
,(13,'Sack of Torrhen''s Square',299,13,'Balon/Euron Greyjoy','Balon/Euron Greyjoy','Dagmer Cleftjaw',NULL,'win','siege',true,true,0,0,'true','Torrhen''s Square','The North',NULL)
,(14,'Sack of Winterfell',299,14,'Joffrey/Tommen Baratheon','Robb Stark','Ramsay Snow, Theon Greyjoy','Rodrik Cassel, Cley Cerwyn, Leobald Tallhart','win','ambush',true,true,618,2000,'true','Winterfell','The North','Since House Bolton betrays the Starks for House Lannister, we code this battle as between these two houses. Greyjoy men, numbering only 20, don''t play a major part in the fighting and end up dying anyway.')
,(15,'Battle of Oxcross',299,15,'Robb Stark','Joffrey/Tommen Baratheon','Robb Stark, Brynden Tully','Stafford Lannister, Roland Crakehall, Antario Jast','win','ambush',true,true,6000,10000,'true','Oxcross','The Westerlands',NULL)
,(16,'Siege of Storm''s End',299,16,'Stannis Baratheon','Renly Baratheon','Stannis Baratheon, Davos Seaworth','Renly Baratheon, Cortnay Penrose, Loras Tyrell, Randyll Tarly, Mathis Rowan','win','siege',true,true,5000,20000,'true','Storm''s End','The Stormlands',NULL)
,(17,'Battle of the Fords',299,17,'Joffrey/Tommen Baratheon','Robb Stark','Tywin Lannister, Flement Brax, Gregor Clegane, Addam Marbrand, Lyle Crakehall, Leo Lefford','Edmure Tully, Jason Mallister, Karyl Vance','loss','pitched battle',true,true,20000,10000,'true','Red Fork','The Riverlands',NULL)
,(18,'Sack of Harrenhal',299,18,'Robb Stark','Joffrey/Tommen Baratheon','Roose Bolton, Vargo Hoat, Robett Glover','Amory Lorch','win','ambush',true,true,100,100,'true','Harrenhal','The Riverlands',NULL)
,(19,'Battle of the Crag',299,19,'Robb Stark','Joffrey/Tommen Baratheon','Robb Stark, Smalljon Umber, Black Walder Frey','Rolph Spicer','win','ambush',true,true,6000,0,'true','Crag','The Westerlands',NULL)
,(20,'Battle of the Blackwater',299,20,'Stannis Baratheon','Joffrey/Tommen Baratheon','Stannis Baratheon, Imry Florent, Guyard Morrigen, Rolland Storm, Salladhor Saan, Davos Seaworth','Tyrion Lannister, Jacelyn Bywater, Sandor Clegane, Tywin Lannister, Garlan Tyrell, Mace Tyrell, Randyll Tarly','loss','pitched battle',true,true,21000,7250,'true','King''s Landing','The Crownlands',NULL)
,(21,'Siege of Darry',299,21,'Robb Stark','Joffrey/Tommen Baratheon','Helman Tallhart',NULL,'win','siege',true,true,0,0,'true','Darry','The Riverlands',NULL)
,(22,'Battle of Duskendale',299,22,'Robb Stark','Joffrey/Tommen Baratheon','Robertt Glover, Helman Tallhart','Randyll Tarly, Gregor Clegane','loss','pitched battle',true,true,3000,0,'true','Duskendale','The Crownlands',NULL)
,(23,'Battle of the Burning Septry',299,23,NULL,NULL,NULL,NULL,'win','pitched battle',true,true,0,0,'true',NULL,'The Riverlands',NULL)
,(24,'Battle of the Ruby Ford',299,24,'Joffrey/Tommen Baratheon','Robb Stark','Gregor Clegane','Roose Bolton, Wylis Manderly','win','pitched battle',true,true,0,6000,'false','Ruby Ford','The Riverlands',NULL)
,(25,'Retaking of Harrenhal',299,25,'Joffrey/Tommen Baratheon',NULL,'Gregor Clegane','Vargo Hoat','win','pitched battle',true,true,0,0,'true','Harrenhal','The Riverlands',NULL)
,(26,'The Red Wedding',299,26,'Joffrey/Tommen Baratheon','Robb Stark','Walder Frey, Roose Bolton, Walder Rivers','Robb Stark','win','ambush',true,true,3500,3500,'true','The Twins','The Riverlands','This observation refers to the battle against the Stark men, not the attack on the wedding')
,(27,'Siege of Seagard',299,27,'Robb Stark','Joffrey/Tommen Baratheon','Walder Frey','Jason Mallister','win','siege',true,true,0,0,'true','Seagard','The Riverlands',NULL)
,(28,'Battle of Castle Black',300,28,'Stannis Baratheon','Mance Rayder','Mance Rayder, Tormund Giantsbane, Harma Dogshead, Magnar Styr, Varamyr','Stannis Baratheon, Jon Snow, Donal Noye, Cotter Pyke','loss','siege',true,true,100000,1240,'true','Castle Black','Beyond the Wall',NULL)
,(29,'Fall of Moat Cailin',300,29,'Joffrey/Tommen Baratheon','Balon/Euron Greyjoy','Ramsey Bolton',NULL,'win','siege',true,true,0,0,'true','Moat Cailin','The North',NULL)
,(30,'Sack of Saltpans',300,30,NULL,NULL,'Rorge',NULL,'win','razing',true,true,0,0,'true','Saltpans','The Riverlands',NULL)
,(31,'Retaking of Deepwood Motte',300,31,'Stannis Baratheon','Balon/Euron Greyjoy','Stannis Baratheon, Alysane Mormot','Asha Greyjoy','win','pitched battle',true,true,4500,200,'true','Deepwood Motte','The North',NULL)
,(32,'Battle of the Shield Islands',300,32,'Balon/Euron Greyjoy','Joffrey/Tommen Baratheon','Euron Greyjoy, Victarion Greyjoy',NULL,'win','pitched battle',true,true,0,0,'true','Shield Islands','The Reach',NULL)
,(33,'Invasion of Ryamsport, Vinetown, and Starfish Harbor',300,33,'Balon/Euron Greyjoy','Joffrey/Tommen Baratheon','Euron Greyjoy, Victarion Greyjoy',NULL,'win','razing',true,true,0,0,'true','Ryamsport, Vinetown, Starfish Harbor','The Reach',NULL)
,(34,'Second Seige of Storm''s End',300,34,'Joffrey/Tommen Baratheon','Stannis Baratheon','Mace Tyrell, Mathis Rowan','Gilbert Farring','win','siege',true,true,0,200,'true','Storm''s End','The Stormlands',NULL)
,(35,'Siege of Dragonstone',300,35,'Joffrey/Tommen Baratheon','Stannis Baratheon','Loras Tyrell, Raxter Redwyne','Rolland Storm','win','siege',true,true,2000,0,'true','Dragonstone','The Stormlands',NULL)
,(36,'Siege of Riverrun',300,36,'Joffrey/Tommen Baratheon','Robb Stark','Daven Lannister, Ryman Fey, Jaime Lannister','Brynden Tully','win','siege',true,true,3000,0,'true','Riverrun','The Riverlands',NULL)
,(37,'Siege of Raventree',300,37,'Joffrey/Tommen Baratheon','Robb Stark','Jonos Bracken, Jaime Lannister','Tytos Blackwood','win','siege',true,true,1500,0,'true','Raventree','The Riverlands',NULL)
,(38,'Siege of Winterfell',300,38,'Stannis Baratheon','Joffrey/Tommen Baratheon','Stannis Baratheon','Roose Bolton',NULL,NULL,false,false,5000,8000,'true','Winterfell','The North',NULL);
