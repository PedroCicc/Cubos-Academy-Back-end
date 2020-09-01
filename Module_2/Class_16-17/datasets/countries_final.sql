CREATE TABLE countries(
   id                      INTEGER  NOT NULL PRIMARY KEY 
  ,pais                    VARCHAR(32) NOT NULL
  ,regiao                  VARCHAR(20) NOT NULL
  ,populacao               INTEGER  NOT NULL
  ,area                    INTEGER  NOT NULL
  ,densidade_populacional  NUMERIC(7,1) NOT NULL
  ,area_costeira_por_area  NUMERIC(6,2) NOT NULL
  ,taxa_migratoria         NUMERIC(6,2) NOT NULL
  ,mortalidade_infantil    NUMERIC(6,2) NOT NULL
  ,pib                     INTEGER  NOT NULL
  ,alfabetizacao           NUMERIC(4,1) NOT NULL
  ,telefonia_movel         NUMERIC(6,1) NOT NULL
  ,taxa_natalidade         NUMERIC(5,2) NOT NULL
  ,taxa_mortalidade        NUMERIC(5,2) NOT NULL
  ,agricultura_porcentagem NUMERIC(5,3) NOT NULL
  ,industria_porcentagem   NUMERIC(5,3) NOT NULL
  ,servicos_porcentagem    NUMERIC(5,3) NOT NULL
);
INSERT INTO countries(id,pais,regiao,populacao,area,densidade_populacional,area_costeira_por_area,taxa_migratoria,mortalidade_infantil,pib,alfabetizacao,telefonia_movel,taxa_natalidade,taxa_mortalidade,agricultura_porcentagem,industria_porcentagem,servicos_porcentagem) VALUES
 (1,'Afghanistan','ASIA (EX. NEAR EAST)',31056997,647500,48,0,23.06,163.07,700,36,3.2,46.6,20.34,0.38,0.24,0.38)
,(2,'Albania','EASTERN EUROPE',3581655,28748,124.6,1.26,-4.93,21.52,4500,86.5,71.2,15.11,5.22,0.232,0.188,0.579)
,(3,'Algeria','NORTHERN AFRICA',32930091,2381740,13.8,0.04,-0.39,31,6000,70,78.1,17.14,4.61,0.101,0.6,0.298)
,(4,'American Samoa','OCEANIA',57794,199,290.4,58.29,-20.71,9.27,8000,97,259.5,22.46,3.27,0,0,0)
,(5,'Andorra','WESTERN EUROPE',71201,468,152.1,0,6.6,4.05,19000,100,497.2,8.71,6.25,0,0,0)
,(6,'Angola','SUB-SAHARAN AFRICA',12127071,1246700,9.7,0.13,0,191.19,1900,42,7.8,45.11,24.2,0.096,0.658,0.246)
,(7,'Anguilla','LATIN AMER. & CARIB',13477,102,132.1,59.8,10.76,21.03,8600,95,460,14.17,5.34,0.04,0.18,0.78)
,(8,'Antigua & Barbuda','LATIN AMER. & CARIB',69108,443,156,34.54,-6.15,19.46,11000,89,549.9,16.93,5.37,0.038,0.22,0.743)
,(9,'Argentina','LATIN AMER. & CARIB',39921833,2766890,14.4,0.18,0.61,15.18,11200,97.1,220.4,16.73,7.55,0.095,0.358,0.547)
,(10,'Armenia','C.W. OF IND. STATES',2976372,29800,99.9,0,-6.47,23.28,3500,98.6,195.7,12.07,8.23,0.239,0.343,0.418)
,(11,'Aruba','LATIN AMER. & CARIB',71891,193,372.5,35.49,0,5.89,28000,97,516.1,11.03,6.68,0.004,0.333,0.663)
,(12,'Australia','OCEANIA',20264082,7686850,2.6,0.34,3.98,4.69,29000,100,565.5,12.14,7.51,0.038,0.262,0.7)
,(13,'Austria','WESTERN EUROPE',8192880,83870,97.7,0,2,4.66,30000,98,452.2,8.74,9.76,0.018,0.304,0.678)
,(14,'Azerbaijan','C.W. OF IND. STATES',7961619,86600,91.9,0,-4.9,81.74,3400,97,137.1,20.74,9.75,0.141,0.457,0.402)
,(15,'Bahamas, The','LATIN AMER. & CARIB',303770,13940,21.8,25.41,-2.2,25.21,16700,95.6,460.6,17.57,9.05,0.03,0.07,0.9)
,(16,'Bahrain','NEAR EAST',698585,665,1050.5,24.21,1.05,17.27,16900,89.1,281.3,17.8,4.14,0.005,0.387,0.608)
,(17,'Bangladesh','ASIA (EX. NEAR EAST)',147365352,144000,1023.4,0.4,-0.71,62.6,1900,43.1,7.3,29.8,8.27,0.199,0.198,0.603)
,(18,'Barbados','LATIN AMER. & CARIB',279912,431,649.5,22.51,-0.31,12.5,15700,97.4,481.9,12.71,8.67,0.06,0.16,0.78)
,(19,'Belarus','C.W. OF IND. STATES',10293011,207600,49.6,0,2.54,13.37,6100,99.6,319.1,11.16,14.02,0.093,0.316,0.591)
,(20,'Belgium','WESTERN EUROPE',10379067,30528,340,0.22,1.23,4.68,29100,98,462.6,10.38,10.27,0.01,0.24,0.749)
,(21,'Belize','LATIN AMER. & CARIB',287730,22966,12.5,1.68,0,25.69,4900,94.1,115.7,28.84,5.72,0.142,0.152,0.612)
,(22,'Benin','SUB-SAHARAN AFRICA',7862944,112620,69.8,0.11,0,85,1100,40.9,9.7,38.85,12.22,0.316,0.138,0.546)
,(23,'Bermuda','NORTHERN AMERICA',65773,53,1241,194.34,2.49,8.53,36000,98,851.4,11.4,7.74,0.01,0.1,0.89)
,(24,'Bhutan','ASIA (EX. NEAR EAST)',2279723,47000,48.5,0,0,100.44,1300,42.2,14.3,33.65,12.7,0.258,0.379,0.363)
,(25,'Bolivia','LATIN AMER. & CARIB',8989046,1098580,8.2,0,-1.32,53.11,2400,87.2,71.9,23.3,7.53,0.128,0.352,0.52)
,(26,'Bosnia & Herzegovina','EASTERN EUROPE',4498976,51129,88,0.04,0.31,21.05,6100,0,215.4,8.77,8.27,0.142,0.308,0.55)
,(27,'Botswana','SUB-SAHARAN AFRICA',1639833,600370,2.7,0,0,54.58,9000,79.8,80.5,23.08,29.5,0.024,0.469,0.507)
,(28,'Brazil','LATIN AMER. & CARIB',188078227,8511965,22.1,0.09,-0.03,29.61,7600,86.4,225.3,16.56,6.17,0.084,0.4,0.516)
,(29,'British Virgin Is.','LATIN AMER. & CARIB',23098,153,151,52.29,10.01,18.05,16000,97.8,506.5,14.89,4.42,0.018,0.062,0.92)
,(30,'Brunei','ASIA (EX. NEAR EAST)',379444,5770,65.8,2.79,3.59,12.61,18600,93.9,237.2,18.79,3.45,0.036,0.561,0.403)
,(31,'Bulgaria','EASTERN EUROPE',7385367,110910,66.6,0.32,-4.58,20.55,7600,98.6,336.3,9.65,14.27,0.093,0.304,0.603)
,(32,'Burkina Faso','SUB-SAHARAN AFRICA',13902972,274200,50.7,0,0,97.57,1100,26.6,7,45.62,15.6,0.322,0.196,0.482)
,(33,'Burma','ASIA (EX. NEAR EAST)',47382633,678500,69.8,0.28,-1.8,67.24,1800,85.3,10.1,17.91,9.83,0.564,0.082,0.353)
,(34,'Burundi','SUB-SAHARAN AFRICA',8090068,27830,290.7,0,-0.06,69.29,600,51.6,3.4,42.22,13.46,0.463,0.203,0.334)
,(35,'Cambodia','ASIA (EX. NEAR EAST)',13881427,181040,76.7,0.24,0,71.48,1900,69.4,2.6,26.9,9.06,0.35,0.3,0.35)
,(36,'Cameroon','SUB-SAHARAN AFRICA',17340702,475440,36.5,0.08,0,68.26,1800,79,5.7,33.89,13.47,0.448,0.17,0.382)
,(37,'Canada','NORTHERN AMERICA',33098932,9984670,3.3,2.02,5.96,4.75,29800,97,552.2,10.78,7.8,0.022,0.294,0.684)
,(38,'Cape Verde','SUB-SAHARAN AFRICA',420979,4033,104.4,23.93,-12.07,47.77,1400,76.6,169.6,24.87,6.55,0.121,0.219,0.66)
,(39,'Cayman Islands','LATIN AMER. & CARIB',45436,262,173.4,61.07,18.75,8.19,35000,98,836.3,12.74,4.89,0.014,0.032,0.954)
,(40,'Central African Rep.','SUB-SAHARAN AFRICA',4303356,622984,6.9,0,0,91,1100,51,2.3,33.91,18.65,0.55,0.2,0.25)
,(41,'Chad','SUB-SAHARAN AFRICA',9944201,1284000,7.7,0,-0.11,93.82,1200,47.5,1.3,45.73,16.38,0.335,0.259,0.406)
,(42,'Chile','LATIN AMER. & CARIB',16134219,756950,21.3,0.85,0,8.8,9900,96.2,213,15.23,5.81,0.06,0.493,0.447)
,(43,'China','ASIA (EX. NEAR EAST)',1313973713,9596960,136.9,0.15,-0.4,24.18,5000,90.9,266.7,13.25,6.97,0.125,0.473,0.403)
,(44,'Colombia','LATIN AMER. & CARIB',43593035,1138910,38.3,0.28,-0.31,20.97,6300,92.5,176.2,20.48,5.58,0.125,0.342,0.533)
,(45,'Comoros','SUB-SAHARAN AFRICA',690948,2170,318.4,15.67,0,74.93,700,56.5,24.5,36.93,8.2,0.4,0.04,0.56)
,(46,'Congo, Dem. Rep.','SUB-SAHARAN AFRICA',62660551,2345410,26.7,0,0,94.69,700,65.5,0.2,43.69,13.27,0.55,0.11,0.34)
,(47,'Congo, Repub. of the','SUB-SAHARAN AFRICA',3702314,342000,10.8,0.05,-0.17,93.86,700,83.8,3.7,42.57,12.93,0.062,0.57,0.369)
,(48,'Cook Islands','OCEANIA',21388,240,89.1,50,0,0,5000,95,289.9,21,0,0.151,0.096,0.753)
,(49,'Costa Rica','LATIN AMER. & CARIB',4075261,51100,79.8,2.52,0.51,9.95,9100,96,340.7,18.32,4.36,0.088,0.299,0.614)
,(50,'Cote d''Ivoire','SUB-SAHARAN AFRICA',17654843,322460,54.8,0.16,-0.07,90.83,1400,50.9,14.6,35.11,14.84,0.279,0.171,0.55)
,(51,'Croatia','EASTERN EUROPE',4494749,56542,79.5,10.32,1.58,6.84,10600,98.5,420.4,9.61,11.48,0.07,0.308,0.622)
,(52,'Cuba','LATIN AMER. & CARIB',11382820,110860,102.7,3.37,-1.58,6.33,2900,97,74.7,11.89,7.22,0.055,0.261,0.684)
,(53,'Cyprus','NEAR EAST',784301,9250,84.8,7.01,0.43,7.18,19200,97.6,0,12.56,7.68,0.037,0.198,0.765)
,(54,'Czech Republic','EASTERN EUROPE',10235455,78866,129.8,0,0.97,3.93,15700,99.9,314.3,9.02,10.59,0.034,0.393,0.573)
,(55,'Denmark','WESTERN EUROPE',5450661,43094,126.5,16.97,2.48,4.56,31100,100,614.6,11.13,10.36,0.018,0.246,0.735)
,(56,'Djibouti','SUB-SAHARAN AFRICA',486530,23000,21.2,1.37,0,104.13,1300,67.9,22.8,39.53,19.31,0.179,0.225,0.596)
,(57,'Dominica','LATIN AMER. & CARIB',68910,754,91.4,19.63,-13.87,14.15,5400,94,304.8,15.27,6.73,0.177,0.328,0.495)
,(58,'Dominican Republic','LATIN AMER. & CARIB',9183984,48730,188.5,2.64,-3.22,32.38,6000,84.7,97.4,23.22,5.73,0.112,0.306,0.582)
,(59,'East Timor','ASIA (EX. NEAR EAST)',1062777,15007,70.8,4.7,0,47.41,500,58.6,0,26.99,6.24,0.085,0.231,0.684)
,(60,'Ecuador','LATIN AMER. & CARIB',13547510,283560,47.8,0.79,-8.58,23.66,3300,92.5,125.6,22.29,4.23,0.07,0.312,0.618)
,(61,'Egypt','NORTHERN AFRICA',78887007,1001450,78.8,0.24,-0.22,32.59,4000,57.7,131.8,22.94,5.23,0.149,0.357,0.493)
,(62,'El Salvador','LATIN AMER. & CARIB',6822378,21040,324.3,1.46,-3.74,25.1,4800,80.2,142.4,26.61,5.78,0.099,0.302,0.599)
,(63,'Equatorial Guinea','SUB-SAHARAN AFRICA',540109,28051,19.3,1.06,0,85.13,2700,85.7,18.5,35.59,15.06,0.03,0.906,0.062)
,(64,'Eritrea','SUB-SAHARAN AFRICA',4786994,121320,39.5,1.84,0,74.87,700,58.6,7.9,34.33,9.6,0.102,0.254,0.643)
,(65,'Estonia','BALTICS',1324333,45226,29.3,8.39,-3.16,7.87,12300,99.8,333.8,10.04,13.25,0.04,0.294,0.666)
,(66,'Ethiopia','SUB-SAHARAN AFRICA',74777981,1127127,66.3,0,0,95.32,700,42.7,8.2,37.98,14.86,0.475,0.099,0.426)
,(67,'Faroe Islands','WESTERN EUROPE',47246,1399,33.8,79.84,1.41,6.24,22000,0,503.8,14.05,8.7,0.27,0.11,0.62)
,(68,'Fiji','OCEANIA',905949,18270,49.6,6.18,-3.14,12.62,5800,93.7,112.6,22.55,5.65,0.089,0.135,0.776)
,(69,'Finland','WESTERN EUROPE',5231372,338145,15.5,0.37,0.95,3.57,27400,100,405.3,10.45,9.86,0.028,0.295,0.676)
,(70,'France','WESTERN EUROPE',60876136,547030,111.3,0.63,0.66,4.26,27600,99,586.4,11.99,9.14,0.022,0.214,0.764)
,(71,'French Guiana','LATIN AMER. & CARIB',199509,91000,2.2,0.42,6.27,12.07,8300,83,255.6,20.46,4.88,0.066,0.156,0.778)
,(72,'French Polynesia','OCEANIA',274578,4167,65.9,60.6,2.94,8.44,17500,98,194.5,16.68,4.69,0.031,0.19,0.769)
,(73,'Gabon','SUB-SAHARAN AFRICA',1424906,267667,5.3,0.33,0,53.64,5500,63.2,27.4,36.16,12.25,0.061,0.592,0.348)
,(74,'Gambia, The','SUB-SAHARAN AFRICA',1641564,11300,145.3,0.71,1.57,72.02,1700,40.1,26.8,39.37,12.25,0.308,0.142,0.549)
,(75,'Gaza Strip','NEAR EAST',1428757,360,3968.8,11.11,1.6,22.93,600,0,244.3,39.45,3.8,0.03,0.283,0.687)
,(76,'Georgia','C.W. OF IND. STATES',4661473,69700,66.9,0.44,-4.7,18.59,2500,99,146.6,10.41,9.23,0.172,0.275,0.553)
,(77,'Germany','WESTERN EUROPE',82422299,357021,230.9,0.67,2.18,4.16,27600,99,667.9,8.25,10.62,0.009,0.296,0.695)
,(78,'Ghana','SUB-SAHARAN AFRICA',22409572,239460,93.6,0.23,-0.64,51.43,2200,74.8,14.4,30.52,9.72,0.366,0.246,0.387)
,(79,'Gibraltar','WESTERN EUROPE',27928,7,3989.7,171.43,0,5.13,17500,0,877.7,10.74,9.31,0,0,0)
,(80,'Greece','WESTERN EUROPE',10688058,131940,81,10.37,2.35,5.53,20000,97.5,589.7,9.68,10.24,0.054,0.213,0.733)
,(81,'Greenland','NORTHERN AMERICA',56361,2166086,0,2.04,-8.37,15.82,20000,0,448.9,15.93,7.84,0,0,0)
,(82,'Grenada','LATIN AMER. & CARIB',89703,344,260.8,35.17,-13.92,14.62,5000,98,364.5,22.08,6.88,0.054,0.18,0.766)
,(83,'Guadeloupe','LATIN AMER. & CARIB',452776,1780,254.4,17.19,-0.15,8.6,8000,90,463.8,15.05,6.09,0.15,0.17,0.68)
,(84,'Guam','OCEANIA',171019,541,316.1,23.2,0,6.94,21000,99,492,18.79,4.48,0,0,0)
,(85,'Guatemala','LATIN AMER. & CARIB',12293545,108890,112.9,0.37,-1.67,35.93,4100,70.6,92.1,29.88,5.2,0.227,0.188,0.585)
,(86,'Guernsey','WESTERN EUROPE',65409,78,838.6,64.1,3.84,4.71,20000,0,842.4,8.81,10.01,0.03,0.1,0.87)
,(87,'Guinea','SUB-SAHARAN AFRICA',9690222,245857,39.4,0.13,-3.06,90.37,2100,35.9,2.7,41.76,15.48,0.237,0.362,0.401)
,(88,'Guinea-Bissau','SUB-SAHARAN AFRICA',1442029,36120,39.9,0.97,-1.57,107.17,800,42.4,7.4,37.22,16.53,0.62,0.12,0.26)
,(89,'Guyana','LATIN AMER. & CARIB',767245,214970,3.6,0.21,-2.07,33.26,4000,98.8,143.5,18.28,8.28,0.37,0.203,0.427)
,(90,'Haiti','LATIN AMER. & CARIB',8308504,27750,299.4,6.38,-3.4,73.45,1600,52.9,16.9,36.44,12.17,0.28,0.2,0.52)
,(91,'Honduras','LATIN AMER. & CARIB',7326496,112090,65.4,0.73,-1.99,29.32,2600,76.2,67.5,28.24,5.28,0.139,0.312,0.549)
,(92,'Hong Kong','ASIA (EX. NEAR EAST)',6940432,1092,6355.7,67.12,5.24,2.97,28800,93.5,546.7,7.29,6.29,0.001,0.092,0.906)
,(93,'Hungary','EASTERN EUROPE',9981334,93030,107.3,0,0.86,8.57,13900,99.4,336.2,9.72,13.11,0.037,0.312,0.651)
,(94,'Iceland','WESTERN EUROPE',299388,103000,2.9,4.83,2.38,3.31,30900,99.9,647.7,13.64,6.72,0.086,0.15,0.765)
,(95,'India','ASIA (EX. NEAR EAST)',1095351995,3287590,333.2,0.21,-0.07,56.29,2900,59.5,45.4,22.01,8.18,0.186,0.276,0.538)
,(96,'Indonesia','ASIA (EX. NEAR EAST)',245452739,1919440,127.9,2.85,0,35.6,3200,87.9,52,20.34,6.25,0.134,0.458,0.408)
,(97,'Iran','ASIA (EX. NEAR EAST)',68688433,1648000,41.7,0.15,-0.84,41.58,7000,79.4,276.4,17,5.55,0.116,0.424,0.46)
,(98,'Iraq','NEAR EAST',26783383,437072,61.3,0.01,0,50.25,1500,40.4,38.6,31.98,5.37,0.073,0.666,0.261)
,(99,'Ireland','WESTERN EUROPE',4062235,70280,57.8,2.06,4.99,5.39,29600,98,500.5,14.45,7.82,0.05,0.46,0.49)
,(100,'Isle of Man','WESTERN EUROPE',75441,572,131.9,27.97,5.36,5.93,21000,0,676,11.05,11.19,0.01,0.13,0.86)
,(101,'Israel','NEAR EAST',6352117,20770,305.8,1.31,0.68,7.03,19800,95.4,462.3,17.97,6.18,0.026,0.317,0.657)
,(102,'Italy','WESTERN EUROPE',58133509,301230,193,2.52,2.07,5.94,26700,98.6,430.9,8.72,10.4,0.021,0.291,0.688)
,(103,'Jamaica','LATIN AMER. & CARIB',2758124,10991,250.9,9.3,-4.92,12.36,3900,87.9,124,20.82,6.52,0.049,0.337,0.615)
,(104,'Japan','ASIA (EX. NEAR EAST)',127463611,377835,337.4,7.87,0,3.26,28200,99,461.2,9.37,9.16,0.017,0.258,0.725)
,(105,'Jersey','WESTERN EUROPE',91084,116,785.2,60.34,2.76,5.24,24800,0,811.3,9.3,9.28,0.05,0.02,0.93)
,(106,'Jordan','NEAR EAST',5906760,92300,64,0.03,6.59,17.35,4300,91.3,104.5,21.25,2.65,0.033,0.287,0.68)
,(107,'Kazakhstan','C.W. OF IND. STATES',15233244,2717300,5.6,0,-3.35,29.21,6300,98.4,164.1,16,9.42,0.067,0.386,0.547)
,(108,'Kenya','SUB-SAHARAN AFRICA',34707817,582650,59.6,0.09,-0.1,61.47,1000,85.1,8.1,39.72,14.02,0.163,0.188,0.651)
,(109,'Kiribati','OCEANIA',105432,811,130,140.94,0,48.52,800,0,42.7,30.65,8.26,0.089,0.242,0.668)
,(110,'Korea, North','ASIA (EX. NEAR EAST)',23113019,120540,191.8,2.07,0,24.04,1300,99,42.4,15.54,7.13,0.3,0.34,0.36)
,(111,'Korea, South','ASIA (EX. NEAR EAST)',48846823,98480,496,2.45,0,7.05,17800,97.9,486.1,10,5.85,0.033,0.403,0.563)
,(112,'Kuwait','NEAR EAST',2418393,17820,135.7,2.8,14.18,9.95,19000,83.5,211,21.94,2.41,0.004,0.479,0.516)
,(113,'Kyrgyzstan','C.W. OF IND. STATES',5213898,198500,26.3,0,-2.45,35.64,1600,97,84,22.8,7.08,0.353,0.208,0.439)
,(114,'Laos','ASIA (EX. NEAR EAST)',6368481,236800,26.9,0,0,85.22,1700,66.4,14.1,35.49,11.55,0.455,0.287,0.258)
,(115,'Latvia','BALTICS',2274735,64589,35.2,0.82,-2.23,9.55,10200,99.8,321.4,9.24,13.66,0.04,0.261,0.699)
,(116,'Lebanon','NEAR EAST',3874050,10400,372.5,2.16,0,24.52,4800,87.4,255.6,18.52,6.21,0.12,0.21,0.67)
,(117,'Lesotho','SUB-SAHARAN AFRICA',2022331,30355,66.6,0,-0.74,84.23,3000,84.8,23.7,24.75,28.71,0.163,0.443,0.394)
,(118,'Liberia','SUB-SAHARAN AFRICA',3042004,111370,27.3,0.52,0,128.87,1000,57.5,2.3,44.77,23.1,0.769,0.054,0.177)
,(119,'Libya','NORTHERN AFRICA',5900754,1759540,3.4,0.1,0,24.6,6400,82.6,127.1,26.49,3.48,0.076,0.499,0.425)
,(120,'Liechtenstein','WESTERN EUROPE',33987,160,212.4,0,4.85,4.7,25000,100,585.5,10.21,7.18,0.06,0.39,0.55)
,(121,'Lithuania','BALTICS',3585906,65200,55,0.14,-0.71,6.89,11400,99.6,223.4,8.75,10.98,0.055,0.325,0.62)
,(122,'Luxembourg','WESTERN EUROPE',474413,2586,183.5,0,8.97,4.81,55100,100,515.4,11.94,8.41,0.01,0.13,0.86)
,(123,'Macau','ASIA (EX. NEAR EAST)',453125,28,16183,146.43,4.86,4.39,19400,94.5,384.9,8.48,4.47,0.001,0.072,0.927)
,(124,'Macedonia','EASTERN EUROPE',2050554,25333,80.9,0,-1.45,10.09,6700,0,260,12.02,8.77,0.118,0.319,0.563)
,(125,'Madagascar','SUB-SAHARAN AFRICA',18595469,587040,31.7,0.82,0,76.83,800,68.9,3.6,41.41,11.11,0.276,0.165,0.559)
,(126,'Malawi','SUB-SAHARAN AFRICA',13013926,118480,109.8,0,0,103.32,600,62.7,7.9,43.13,19.33,0.342,0.158,0.499)
,(127,'Malaysia','ASIA (EX. NEAR EAST)',24385858,329750,74,1.42,0,17.7,9000,88.7,179,22.86,5.05,0.084,0.48,0.436)
,(128,'Maldives','ASIA (EX. NEAR EAST)',359008,300,1196.7,214.67,0,56.52,3900,97.2,90,34.81,7.06,0.2,0.18,0.62)
,(129,'Mali','SUB-SAHARAN AFRICA',11716829,1240000,9.5,0,-0.33,116.79,900,46.4,6.4,49.82,16.89,0.45,0.17,0.38)
,(130,'Malta','WESTERN EUROPE',400214,316,1266.5,62.28,2.07,3.89,17700,92.8,505,10.22,8.1,0.03,0.23,0.74)
,(131,'Marshall Islands','OCEANIA',60422,11854,5.1,3.12,-6.04,29.45,1600,93.7,91.2,33.05,4.78,0.317,0.149,0.534)
,(132,'Martinique','LATIN AMER. & CARIB',436131,1100,396.5,31.82,-0.05,7.09,14400,97.7,394.4,13.74,6.48,0.06,0.11,0.83)
,(133,'Mauritania','SUB-SAHARAN AFRICA',3177388,1030700,3.1,0.07,0,70.89,1800,41.7,12.9,40.99,12.16,0.25,0.29,0.46)
,(134,'Mauritius','SUB-SAHARAN AFRICA',1240827,2040,608.3,8.68,-0.9,15.03,11400,85.6,289.3,15.43,6.86,0.059,0.298,0.643)
,(135,'Mayotte','SUB-SAHARAN AFRICA',201234,374,538.1,49.52,6.78,62.4,2600,0,49.7,40.95,7.7,0,0,0)
,(136,'Mexico','LATIN AMER. & CARIB',107449525,1972550,54.5,0.47,-4.87,20.91,9000,92.2,181.6,20.69,4.74,0.038,0.259,0.702)
,(137,'Micronesia, Fed. St.','OCEANIA',108004,702,153.9,870.66,-20.99,30.21,2000,89,114.8,24.68,4.75,0.289,0.152,0.559)
,(138,'Moldova','C.W. OF IND. STATES',4466706,33843,132,0,-0.26,40.42,1800,99.1,208.1,15.7,12.64,0.213,0.233,0.555)
,(139,'Monaco','WESTERN EUROPE',32543,2,16271.5,205,7.75,5.43,27000,99,1035.6,9.19,12.91,0.17,0,0)
,(140,'Mongolia','ASIA (EX. NEAR EAST)',2832224,1564116,1.8,0,0,53.79,1800,97.8,55.1,21.59,6.95,0.206,0.214,0.58)
,(141,'Montserrat','LATIN AMER. & CARIB',9439,102,92.5,39.22,0,7.35,3400,97,0,17.59,7.1,0,0,0)
,(142,'Morocco','NORTHERN AFRICA',33241259,446550,74.4,0.41,-0.98,41.62,4000,51.7,40.4,21.98,5.58,0.217,0.357,0.426)
,(143,'Mozambique','SUB-SAHARAN AFRICA',19686505,801590,24.6,0.31,0,130.79,1200,47.8,3.5,35.18,21.35,0.262,0.348,0.39)
,(144,'Namibia','SUB-SAHARAN AFRICA',2044147,825418,2.5,0.19,0,48.98,7200,84,62.6,24.32,18.86,0.097,0.315,0.588)
,(145,'Nauru','OCEANIA',13287,21,632.7,142.86,0,9.95,5000,0,143,24.76,6.7,0,0,0)
,(146,'Nepal','ASIA (EX. NEAR EAST)',28287147,147181,192.2,0,0,66.98,1400,45.2,15.9,30.98,9.31,0.38,0.21,0.41)
,(147,'Netherlands','WESTERN EUROPE',16491461,41526,397.1,1.09,2.91,5.04,28600,99,460.8,10.9,8.68,0.021,0.244,0.736)
,(148,'Netherlands Antilles','LATIN AMER. & CARIB',221736,960,231,37.92,-0.41,10.03,11400,96.7,365.3,14.78,6.45,0.01,0.15,0.84)
,(149,'New Caledonia','OCEANIA',219246,19060,11.5,11.83,0,7.72,15000,91,252.2,18.11,5.69,0.15,0.088,0.762)
,(150,'New Zealand','OCEANIA',4076140,268680,15.2,5.63,4.05,5.85,21600,99,441.7,13.76,7.53,0.043,0.273,0.684)
,(151,'Nicaragua','LATIN AMER. & CARIB',5570129,129494,43,0.7,-1.22,29.11,2300,67.5,39.7,24.51,4.45,0.165,0.275,0.56)
,(152,'Niger','SUB-SAHARAN AFRICA',12525094,1267000,9.9,0,-0.67,121.69,800,17.6,1.9,50.73,20.91,0.39,0.17,0.44)
,(153,'Nigeria','SUB-SAHARAN AFRICA',131859731,923768,142.7,0.09,0.26,98.8,900,68,9.3,40.43,16.94,0.269,0.487,0.244)
,(154,'N. Mariana Islands','OCEANIA',82459,477,172.9,310.69,9.61,7.11,12500,97,254.7,19.43,2.29,0,0,0)
,(155,'Norway','WESTERN EUROPE',4610820,323802,14.2,7.77,1.74,3.7,37800,100,461.7,11.46,9.4,0.021,0.415,0.564)
,(156,'Oman','NEAR EAST',3102229,212460,14.6,0.98,0.28,19.51,13100,75.8,85.5,36.24,3.81,0.027,0.39,0.583)
,(157,'Pakistan','ASIA (EX. NEAR EAST)',165803560,803940,206.2,0.13,-2.77,72.44,2100,45.7,31.8,29.74,8.23,0.216,0.251,0.533)
,(158,'Palau','OCEANIA',20579,458,44.9,331.66,2.85,14.84,9000,92,325.6,18.03,6.8,0.062,0.12,0.818)
,(159,'Panama','LATIN AMER. & CARIB',3191319,78200,40.8,3.18,-0.91,20.47,6300,92.6,137.9,21.74,5.36,0.068,0.156,0.776)
,(160,'Papua New Guinea','OCEANIA',5670544,462840,12.3,1.11,0,51.45,2200,64.6,10.9,29.36,7.25,0.353,0.381,0.266)
,(161,'Paraguay','LATIN AMER. & CARIB',6506464,406750,16,0,-0.08,25.63,4700,94,49.2,29.1,4.49,0.224,0.207,0.569)
,(162,'Peru','LATIN AMER. & CARIB',28302603,1285220,22,0.19,-1.05,31.94,5100,90.9,79.5,20.48,6.23,0.08,0.27,0.65)
,(163,'Philippines','ASIA (EX. NEAR EAST)',89468677,300000,298.2,12.1,-1.5,23.51,4600,92.6,38.4,24.89,5.41,0.144,0.326,0.53)
,(164,'Poland','EASTERN EUROPE',38536869,312685,123.3,0.16,-0.49,8.51,11100,99.8,306.3,9.85,9.89,0.05,0.311,0.64)
,(165,'Portugal','WESTERN EUROPE',10605870,92391,114.8,1.94,3.57,5.05,18000,93.3,399.2,10.72,10.5,0.053,0.274,0.673)
,(166,'Puerto Rico','LATIN AMER. & CARIB',3927188,13790,284.8,3.63,-1.46,8.24,16800,94.1,283.1,12.77,7.65,0.01,0.45,0.54)
,(167,'Qatar','NEAR EAST',885359,11437,77.4,4.92,16.29,18.61,21500,82.5,232,15.56,4.72,0.002,0.801,0.197)
,(168,'Reunion','SUB-SAHARAN AFRICA',787584,2517,312.9,8.22,0,7.78,5800,88.9,380.9,18.9,5.49,0.08,0.19,0.73)
,(169,'Romania','EASTERN EUROPE',22303552,237500,93.9,0.09,-0.13,26.43,7000,98.4,196.9,10.7,11.77,0.101,0.35,0.549)
,(170,'Russia','C.W. OF IND. STATES',142893540,17075200,8.4,0.22,1.02,15.39,8900,99.6,280.6,9.95,14.65,0.054,0.371,0.575)
,(171,'Rwanda','SUB-SAHARAN AFRICA',8648248,26338,328.4,0,0,91.23,1300,70.4,2.7,40.37,16.09,0.401,0.229,0.37)
,(172,'Saint Helena','SUB-SAHARAN AFRICA',7502,413,18.2,14.53,0,19,2500,97,293.3,12.13,6.53,0,0,0)
,(173,'Saint Kitts & Nevis','LATIN AMER. & CARIB',39129,261,149.9,51.72,-7.11,14.49,8800,97,638.9,18.02,8.33,0.035,0.258,0.707)
,(174,'Saint Lucia','LATIN AMER. & CARIB',168458,616,273.5,25.65,-2.67,13.53,5400,67,303.3,19.68,5.08,0.07,0.2,0.73)
,(175,'St Pierre & Miquelon','NORTHERN AMERICA',7026,242,29,49.59,-4.86,7.54,6900,99,683.2,13.52,6.83,0,0,0)
,(176,'Saint Vincent and the Grenadines','LATIN AMER. & CARIB',117848,389,303,21.59,-7.64,14.78,2900,96,190.9,16.18,5.98,0.1,0.26,0.64)
,(177,'Samoa','OCEANIA',176908,2944,60.1,13.69,-11.7,27.71,5600,99.7,75.2,16.43,6.62,0.114,0.584,0.302)
,(178,'San Marino','WESTERN EUROPE',29251,61,479.5,0,10.98,5.73,34600,96,704.3,10.02,8.17,0,0,0)
,(179,'Sao Tome & Principe','SUB-SAHARAN AFRICA',193413,1001,193.2,20.88,-2.72,43.11,1200,79.3,36.2,40.25,6.47,0.167,0.148,0.684)
,(180,'Saudi Arabia','NEAR EAST',27019731,1960582,13.8,0.13,-2.71,13.24,11800,78.8,140.6,29.34,2.58,0.033,0.613,0.354)
,(181,'Senegal','SUB-SAHARAN AFRICA',11987121,196190,61.1,0.27,0.2,55.51,1600,40.2,22.2,32.78,9.42,0.172,0.209,0.619)
,(182,'Serbia','EASTERN EUROPE',9396411,88361,106.3,0,-1.33,12.89,2200,93,285.8,0,0,0.166,0.255,0.579)
,(183,'Seychelles','SUB-SAHARAN AFRICA',81541,455,179.2,107.91,-5.69,15.53,7800,58,262.4,16.03,6.29,0.032,0.304,0.665)
,(184,'Sierra Leone','SUB-SAHARAN AFRICA',6005250,71740,83.7,0.56,0,143.64,500,31.4,4,45.76,23.03,0.49,0.31,0.21)
,(185,'Singapore','ASIA (EX. NEAR EAST)',4492150,693,6482.2,27.85,11.53,2.29,23700,92.5,411.4,9.34,4.28,0,0.339,0.661)
,(186,'Slovakia','EASTERN EUROPE',5439448,48845,111.4,0,0.3,7.41,13300,0,220.1,10.65,9.45,0.035,0.294,0.672)
,(187,'Slovenia','EASTERN EUROPE',2010347,20273,99.2,0.23,1.12,4.45,19000,99.7,406.1,8.98,10.31,0.028,0.369,0.603)
,(188,'Solomon Islands','OCEANIA',552438,28450,19.4,18.67,0,21.29,1700,0,13.4,30.01,3.92,0.42,0.11,0.47)
,(189,'Somalia','SUB-SAHARAN AFRICA',8863338,637657,13.9,0.47,5.37,116.7,500,37.8,11.3,45.13,16.63,0.65,0.1,0.25)
,(190,'South Africa','SUB-SAHARAN AFRICA',44187637,1219912,36.2,0.23,-0.29,61.81,10700,86.4,107,18.2,22,0.025,0.303,0.671)
,(191,'Spain','WESTERN EUROPE',40397842,504782,80,0.98,0.99,4.42,22000,97.9,453.5,10.06,9.72,0.04,0.295,0.665)
,(192,'Sri Lanka','ASIA (EX. NEAR EAST)',20222240,65610,308.2,2.04,-1.31,14.35,3700,92.3,61.5,15.51,6.52,0.178,0.276,0.545)
,(193,'Sudan','SUB-SAHARAN AFRICA',41236378,2505810,16.5,0.03,-0.02,62.5,1900,61.1,16.3,34.53,8.97,0.387,0.203,0.41)
,(194,'Suriname','LATIN AMER. & CARIB',439117,163270,2.7,0.24,-8.81,23.57,4000,93,184.7,18.02,7.27,0.13,0.22,0.65)
,(195,'Swaziland','SUB-SAHARAN AFRICA',1136334,17363,65.5,0,0,69.27,4900,81.6,30.8,27.41,29.74,0.119,0.515,0.366)
,(196,'Sweden','WESTERN EUROPE',9016596,449964,20,0.72,1.67,2.77,26800,99,715,10.27,10.31,0.011,0.282,0.707)
,(197,'Switzerland','WESTERN EUROPE',7523934,41290,182.2,0,4.05,4.39,32700,99,680.9,9.71,8.49,0.015,0.34,0.645)
,(198,'Syria','NEAR EAST',18881361,185180,102,0.1,0,29.53,3300,76.9,153.8,27.76,4.81,0.249,0.23,0.519)
,(199,'Taiwan','ASIA (EX. NEAR EAST)',23036087,35980,640.3,4.35,0,6.4,23400,96.1,591,12.56,6.48,0.018,0.259,0.723)
,(200,'Tajikistan','C.W. OF IND. STATES',7320815,143100,51.2,0,-2.86,110.76,1000,99.4,33.5,32.65,8.25,0.234,0.286,0.48)
,(201,'Tanzania','SUB-SAHARAN AFRICA',37445392,945087,39.6,0.15,-2.06,98.54,600,78.2,4,37.71,16.39,0.432,0.172,0.396)
,(202,'Thailand','ASIA (EX. NEAR EAST)',64631595,514000,125.7,0.63,0,20.48,7400,92.6,108.9,13.87,7.04,0.099,0.441,0.46)
,(203,'Togo','SUB-SAHARAN AFRICA',5548702,56785,97.7,0.1,0,66.61,1500,60.9,10.6,37.01,9.83,0.395,0.204,0.401)
,(204,'Tonga','OCEANIA',114689,748,153.3,56.02,0,12.62,2200,98.5,97.7,25.37,5.28,0.23,0.27,0.5)
,(205,'Trinidad & Tobago','LATIN AMER. & CARIB',1065842,5128,207.9,7.06,-10.83,24.31,9500,98.6,303.5,12.9,10.57,0.007,0.57,0.423)
,(206,'Tunisia','NORTHERN AFRICA',10175014,163610,62.2,0.7,-0.57,24.77,6900,74.2,123.6,15.52,5.13,0.132,0.318,0.55)
,(207,'Turkey','NEAR EAST',70413958,780580,90.2,0.92,0,41.04,6700,86.5,269.5,16.62,5.97,0.117,0.298,0.585)
,(208,'Turkmenistan','C.W. OF IND. STATES',5042920,488100,10.3,0,-0.86,73.08,5800,98,74.6,27.61,8.6,0.209,0.38,0.411)
,(209,'Turks & Caicos Is','LATIN AMER. & CARIB',21152,430,49.2,90.47,11.68,15.67,9600,98,269.5,21.84,4.21,0,0,0)
,(210,'Tuvalu','OCEANIA',11810,26,454.2,92.31,0,20.03,1100,0,59.3,22.18,7.11,0.166,0.272,0.562)
,(211,'Uganda','SUB-SAHARAN AFRICA',28195754,236040,119.5,0,0,67.83,1400,69.9,3.6,47.35,12.24,0.311,0.222,0.469)
,(212,'Ukraine','C.W. OF IND. STATES',46710816,603700,77.4,0.46,-0.39,20.34,5400,99.7,259.9,8.82,14.39,0.187,0.452,0.361)
,(213,'United Arab Emirates','NEAR EAST',2602713,82880,31.4,1.59,1.03,14.51,23200,77.9,475.3,18.96,4.4,0.04,0.585,0.375)
,(214,'United Kingdom','WESTERN EUROPE',60609153,244820,247.6,5.08,2.19,5.16,27700,99,543.5,10.71,10.13,0.005,0.237,0.758)
,(215,'United States','NORTHERN AMERICA',298444215,9631420,31,0.21,3.41,6.5,37800,97,898,14.14,8.26,0.01,0.204,0.787)
,(216,'Uruguay','LATIN AMER. & CARIB',3431932,176220,19.5,0.37,-0.32,11.95,12800,98,291.4,13.91,9.05,0.093,0.311,0.596)
,(217,'Uzbekistan','C.W. OF IND. STATES',27307134,447400,61,0,-1.72,71.1,1700,99.3,62.9,26.36,7.84,0.342,0.229,0.43)
,(218,'Vanuatu','OCEANIA',208869,12200,17.1,20.72,0,55.16,2900,53,32.6,22.72,7.82,0.26,0.12,0.62)
,(219,'Venezuela','LATIN AMER. & CARIB',25730435,912050,28.2,0.31,-0.04,22.2,4800,93.4,140.1,18.71,4.92,0.04,0.419,0.541)
,(220,'Vietnam','ASIA (EX. NEAR EAST)',84402966,329560,256.1,1.05,-0.45,25.95,2500,90.3,187.7,16.86,6.22,0.209,0.41,0.381)
,(221,'Virgin Islands','LATIN AMER. & CARIB',108605,1910,56.9,9.84,-8.94,8.03,17200,0,652.8,13.96,6.43,0.01,0.19,0.8)
,(222,'Wallis and Futuna','OCEANIA',16025,274,58.5,47.08,0,0,3700,50,118.6,0,0,0,0,0)
,(223,'West Bank','NEAR EAST',2460492,5860,419.9,0,2.98,19.62,800,0,145.2,31.67,3.92,0.09,0.28,0.63)
,(224,'Western Sahara','NORTHERN AFRICA',273008,266000,1,0.42,0,0,0,0,0,0,0,0,0,0.4)
,(225,'Yemen','NEAR EAST',21456188,527970,40.6,0.36,0,61.5,800,50.2,37.2,42.89,8.3,0.135,0.472,0.393)
,(226,'Zambia','SUB-SAHARAN AFRICA',11502010,752614,15.3,0,0,88.29,800,80.6,8.2,41,19.93,0.22,0.29,0.489)
,(227,'Zimbabwe','SUB-SAHARAN AFRICA',12236805,390580,31.3,0,0,67.69,1900,90.7,26.8,28.01,21.84,0.179,0.243,0.579);