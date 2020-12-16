INSERT INTO folders(folder_name)
  VALUES('Thrasymachus'),
  ('Learn to Read Greek');


INSERT INTO vocab_sets(set_name, folder_id)
  VALUES('Chapter 1-2', 1),
  ('Chapter 3-4', 1),
  ('Chapter 5-6', 1),
  ('Chapter 6-7', 1),
  ('Chapter 1', 2),
  ('Chapter 2', 2),
  ('Chapter 3', 2);

INSERT INTO vocab(word, def_en, def_zh, set_id)
VALUES('ἀστραπή, ἀστραπής, ἠ', 'lightning', '閃電', 2),
('βροντή, βροντής, ἠ', 'thunder', '雷', 2),
('δεῦρο', 'hither, to this place', '到這裡', 2),
('διότι', 'because', '因為', 2),
('ἀγορά, ἀγορᾶς, ἠ','agora, marketplace', '集會、市場', 6),
('οἰκία, οἰκιάς, ἠ','house', '房子', 6),
('συμφορά, συμφορᾶς, ἠ','circumstance, misfortune, disaster', '情況、災難', 6);
