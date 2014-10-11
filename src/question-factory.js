app.factory('QuestionFactory', [function QuestionFactory() {
	return {
		getAllQuestions: function getAllQuestions() {
			/* NOTE: do not include 'answer\' among 'choices\\' */
			return [				
				{		
					id: 1,		
					title: 'What was the name of Jesus\' mother?',		
					answer: 'Mary',		
					reference: '(Matt 1:18)',
					choices: [
						'Sarah',
						'Ester',
						'Martha',
					]
				}, {		
					id: 2,		
					title: 'What was the name of the garden where Adam and Eve lived?',		
					answer: 'Garden of Eden',		
					reference: '(Gen 2:8)',
					choices: [
						'Garden of Gareth',
						'Garden of the Gods',
						'Garden of Life',
					]
				}, {		
					id: 3,		
					title: 'With what food did Jesus feed 5,000 people?',		
					answer: 'Loaves of bread and fishes',		
					reference: '(Matt 14:19)',
					choices: [
						'Rocks into bread',
						'Fish from the sea',
						'Water into wine',
					]
				}, {		
					id: 4,		
					title: 'What method did the Romans use to kill Jesus?',		
					answer: 'Crucifixion',		
					reference: '(Mark 15:25)',
					choices: [
						'Fire',
						'Sword',
						'Drowning',
					]
				}, {		
					id: 5,		
					title: 'From which part of Adam\'s body did God create Eve?',		
					answer: 'Rib',		
					reference: '(Gen 2:21)',
					choices: [
						'Dust',
						'Toe',
						'Skin',
					]
				}, {		
					id: 6,		
					title: 'Who, when accused of being with Jesus, lied and said that he did not know him, three times?',		
					answer: '(Simon) Peter',		
					reference: '(Matt 26:69-74)',
					choices: [
						'Matthew',
						'John',
						'Mark',
					]
				}, {		
					id: 7,		
					title: 'Which creature tricked Eve into eating of the forbidden fruit?',		
					answer: 'Serpent',		
					reference: '(Gen 3:1-6)',
					choices: [
						'Sheep',
						'Scorpion',
						'Pig',
					]
				}, {		
					id: 8,		
					title: 'At Christ\'s crucifixion what did the soldiers place on his head?',		
					answer: 'Crown of Thorns',		
					reference: '(Matt 27:29)',
					choices: [
						'Shall',
						'Cloth',
						'Crown of jewels',
					]
				}, {		
					id: 9,		
					title: 'What is the first line of the Lord\'s Prayer?',		
					answer: 'Our Father which art in heaven',		
					reference: '(Matt 6:9)',
					choices: [
						'Holy is Thy Name',
						'Give us this day our daily bread',
						'Thy Kingdom come',
					]
				}, {		
					id: 10,		
					title: 'What relationship was Ruth to Naomi?',		
					answer: 'Daughter-in-law',		
					reference: '(Ruth 1:4)',
					choices: [
						'Mother-in-law',
						'Mother',
						'Daughter',
					]
				}, {		
					id: 11,		
					title: 'Who lied to God when he was asked where his brother was?',		
					answer: 'Cain',		
					reference: '(Gen 4:9)',
					choices: [
						'Abel',
						'Reuben',
						'Daniel',
					]
				}, {		
					id: 12,		
					title: 'Which Old Testament character showed his faith by being willing to offer his son on an altar to God?',		
					answer: 'Abraham',		
					reference: '(Jam 2:21-22)',
					choices: [
						'Isaiah',
						'Issac',
						'Moses',
					]
				}, {		
					id: 13,		
					title: 'What significant event is recorded in Genesis chapters 1 and 2?',		
					answer: 'Creation',		
					reference: '(Gen 1 - 2)',
					choices: [
						'Serpent tricking Eve',
						'Adam\'s sin',
						'Noah\'s Flood',
					]
				}, {		
					id: 14,		
					title: 'What was inscribed above Jesus\' cross?',		
					answer: 'This is Jesus, King of the Jews',		
					reference: '(Mark 15:26; Matt 27:27)',
					choices: [
						'Christ crucified',
						'Blasphemer',
						'King of Kings',
					]
				}, {		
					id: 15,		
					title: 'Whose mother placed him in an ark of bulrushes?',		
					answer: 'Moses',		
					reference: '(Exo 2:3)',
					choices: [
						'Joseph',
						'Noah',
						'Aaron',
					]
				}, {		
					id: 16,		
					title: 'For how many days and nights did it rain in the story of the flood?',		
					answer: 'Forty',		
					reference: '(Gen 7:12)',
					choices: [
						'Seventy',
						'One hundred and Thirty',
						'Ten',
					]
				}, {		
					id: 17,		
					title: 'What was particularly unique about Jesus\' mother?',		
					answer: 'She was a virgin',		
					reference: '(Matt 1:23)',
					choices: [
						'She sought after God',
						'She never married',
						'She was raised as an orphan',
					]
				}, {		
					id: 18,		
					title: 'Who gave gifts to Jesus when he was a young child?',		
					answer: 'Wise men / magi',		
					reference: '(Matt 2:7-10)',
					choices: [
						'Mary and Joseph',
						'Shepherds',
						'Harrod',
					]
				}, {		
					id: 19,		
					title: 'What happened to Jonah after he was thrown overboard?',		
					answer: 'He was swallowed by a great fish',		
					reference: '(John 1:17)',
					choices: [
						'He drowned',
						'He swam away',
						'He walked on water',
					]
				}, {		
					id: 20,		
					title: 'In whose image was man created?',		
					answer: 'God\'s',		
					reference: '(Gen 1:27)',
					choices: [
						'Monkey',
						'Angels',
						'Woman\'s',
					]
				}, {		
					id: 21,		
					title: 'How many apostles did Jesus choose?',		
					answer: 'Twelve',		
					reference: '(Luke 6:13)',
					choices: [
						'Thirteen',
						'Three',
						'Forty',
					]
				}, {		
					id: 22,		
					title: 'What are the wages of sin?',		
					answer: 'Death',		
					reference: '(Rom 6:23)',
					choices: [
						'Sin',
						'Eternal life',
						'Eternal torture',
					]
				}, {		
					id: 23,		
					title: 'Who is the first mother mentioned in the Bible?',		
					answer: 'Eve',		
					reference: '(Gen 4:1)',
					choices: [
						'Ruth',
						'Mary',
						'Ester',
					]
				}, {		
					id: 24,		
					title: 'Who else, other than the wise men, came to visit Jesus when he was a small child?',		
					answer: 'Shepherds',		
					reference: '(Luke 2:16)',
					choices: [
						'Abraham',
						'Harrod',
						'Daniel',
					]
				}, {		
					id: 25,		
					title: 'Who lied when he was asked to reveal the source of his great strength?',		
					answer: 'Samson',		
					reference: '(Jdg 16:15)',
					choices: [
						'David',
						'Daniel',
						'Moses',
					]
				}, {		
					id: 26,		
					title: 'What was the name of the man Jesus\' mother was engaged to at the time she became pregnant?',		
					answer: 'Joseph',		
					reference: '(Matt 1:19)',
					choices: [
						'Jacob',
						'John',
						'Abraham',
					]
				}, {		
					id: 27,		
					title: 'Which book of the Bible records many of the hymns David wrote?',		
					answer: 'Psalms',		
					reference: '(Bible)',
					choices: [
						'Proverbs',
						'Song of Solomon',
						'Genesis',
					]
				}, {		
					id: 28,		
					title: 'From what disaster did the Ark save Noah?',		
					answer: 'Flood',		
					reference: '(Gen 7:7)',
					choices: [
						'Fire and Brimstone',
						'Plague',
						'Famine',
					]
				}, {		
					id: 29,		
					title: 'What happened to Jesus forty days after his resurrection?',		
					answer: 'He ascended into heaven',		
					reference: '(Acts 1:3-11)',
					choices: [
						'He healed the sick',
						'He was crucified',
						'He walked on water',
					]
				}, {		
					id: 30,		
					title: 'What animals did Jesus cause to run into the sea and drown?',		
					answer: 'Pigs',		
					reference: '(Matt 8:32)',
					choices: [
						'Lemings',
						'Cattle',
						'Sheep',
					]
				}, {		
					id: 31,		
					title: 'On what were the Ten Commandments written?',		
					answer: 'Two tablets of stone',		
					reference: '(Deut 5:22)',
					choices: [
						'Book of Life',
						'Parchment',
						'Scrolls',
					]
				}, {		
					id: 32,		
					title: 'What did Jesus sleep in after he was born?',		
					answer: 'Manger',		
					reference: '(Luke 2:7)',
					choices: [
						'Tomb',
						'Crib',
						'Bed',
					]
				}, {		
					id: 33,		
					title: 'What was man created from?',		
					answer: 'Dust of the ground',		
					reference: '(Gen 2:7)',
					choices: [
						'Monkey',
						'Rib',
						'Fish',
					]
				}, {		
					id: 34,		
					title: 'What did Jesus do to each of the disciples during the Last Supper?',		
					answer: 'Washed their feet',		
					reference: '(John 13:1-5)',
					choices: [
						'Prayed over them',
						'Ruled over them',
						'Cried over them',
					]
				}, {		
					id: 35,		
					title: 'To which city did God ask Jonah to take his message?',		
					answer: 'Nineveh',		
					reference: '(John 1:2)',
					choices: [
						'Judah',
						'Jerusalem',
						'Bethlaham',
					]
				}, {		
					id: 36,		
					title: 'Who was David\'s father?',		
					answer: 'Jesse',		
					reference: '(Ruth 4:22)',
					choices: [
						'Isaiah',
						'Abraham',
						'Daniel',
					]
				}, {		
					id: 37,		
					title: 'Which of the gospels appears last in the Bible?',		
					answer: 'John',		
					reference: '(Bible)',
					choices: [
						'Mark',
						'Revelation',
						'Luke',
					]
				}, {		
					id: 38,		
					title: 'What is the only sin that cannot be forgiven?',		
					answer: 'Blasphemy against the Holy Spirit',		
					reference: '(Mark 3:29)',
					choices: [
						'Idol worship',
						'Murder',
						'Stealing from God',
					]
				}, {		
					id: 39,		
					title: 'How did David defeat Goliath?',		
					answer: 'He hit him with a stone from his sling',		
					reference: '(1 Sam 17:49-50)',
					choices: [
						'Pushed him off a cliff',
						'Stabbed him with a spear',
						'Shot him with an arrow',
					]
				}, {		
					id: 40,		
					title: 'What did Joseph\'s brothers do to get rid of him?',		
					answer: 'Sold him to foreigners',		
					reference: '(Gen 37:24-27)',
					choices: [
						'Left him alone in the woods',
						'Killed him',
						'Sent him off to war',
					]
				}, {		
					id: 41,		
					title: 'Who wrote the letter to Philemon?',		
					answer: 'Paul',		
					reference: '(Phm 1:1)',
					choices: [
						'Jesus',
						'Timothy',
						'Matthew',
					]
				}, {		
					id: 42,		
					title: 'In what was Jesus wrapped before he was buried?',		
					answer: 'Linen clothes',		
					reference: '(John 19:40)',
					choices: [
						'Paper',
						'Spices',
						'Bacon',
					]
				}, {		
					id: 43,		
					title: 'What was the name of Moses\' brother?',		
					answer: 'Aaron',		
					reference: '(Exo 7:1)',
					choices: [
						'Isaac',
						'Jacob',
						'Abraham',
					]
				}, {		
					id: 44,		
					title: 'What sin is Cain remembered for?',		
					answer: 'Murder',		
					reference: '(Gen 4:8)',
					choices: [
						'Running from God',
						'Adultery',
						'Stealing',
					]
				}, {		
					id: 45,		
					title: 'The Lord is my Shepherd, is the opening line to which Psalm?',		
					answer: 'Psalm 23',		
					reference: '(Psalms)',
					choices: [
						'Psalm 19',
						'Psalm 119',
						'Psalm 1',
					]
				}, {		
					id: 46,		
					title: 'What is the last book of the New Testament?',		
					answer: 'Revelation',		
					reference: '(Bible)',
					choices: [
						'John',
						'Genesis',
						'Malachi',
					]
				}, {		
					id: 47,		
					title: 'Who wrote the majority of the New Testament letters?',		
					answer: 'Paul',		
					reference: '(Rom 1:1 - Jude 1:25)',
					choices: [
						'Matthew',
						'John',
						'Mark',
					]
				}, {		
					id: 48,		
					title: 'What was David\'s occupation before he became king?',		
					answer: 'Shepherd',		
					reference: '(1 Sam 17:15)',
					choices: [
						'Carpenter',
						'Ruler',
						'Magi',
					]
				}, {		
					id: 49,		
					title: 'Who hid two spies but claimed not to know of their whereabouts when asked?',		
					answer: 'Rahab',		
					reference: '(Josh 2:1-5)',
					choices: [
						'Ester',
						'Naomi',
						'Ruth',
					]
				}, {		
					id: 50,		
					title: 'Whose prayer resulted in his being thrown into a den of lions?',		
					answer: 'Daniel',		
					reference: '(Dan 6:7)',
					choices: [
						'Moses',
						'Abraham',
						'Noah',
					]
				}, {		
					id: 51,		
					title: 'What was the apparent source of Samson\'s strength?',		
					answer: 'Long hair',		
					reference: '(Jdg 16:17)',
					choices: [
						'Working out',
						'Women',
						'Diet',
					]
				}, {		
					id: 52,		
					title: 'From which country did Moses help the Israelites escape from their lives of slavery?',		
					answer: 'Egypt',		
					reference: '(Exo 13:3)',
					choices: [
						'Israel',
						'Iran',
						'Judah',
					]
				}, {		
					id: 53,		
					title: 'Who was the fourth person in the fiery furnace along with Daniel\'s friends?',		
					answer: 'An angel',		
					reference: '(Dan 3:28)',
					choices: [
						'Daniel',
						'Abraham',
						'Satan',
					]
				}, {		
					id: 54,		
					title: 'What did Joseph\'s brothers do to deceive their father to cover up that they had sold Joseph into slavery?',		
					answer: 'Dipped his coat in the blood of a goat',		
					reference: '(Gen 37:31)',
					choices: [
						'Covered their arms with goat skins',
						'Told him he fell in a pit',
						'Tell him he got lost in the woods',
					]
				}, {		
					id: 55,		
					title: 'What kind of leaves did Adam and Eve sew together to make clothes for themselves?',		
					answer: 'Fig',		
					reference: '(Gen 3:7)',
					choices: [
						'Oak',
						'Weeping willow',
						'Elm',
					]
				}, {		
					id: 56,		
					title: 'Who did Jesus say was the "father of lies"?',		
					answer: 'The devil',		
					reference: '(John 8:44)',
					choices: [
						'Abraham',
						'Jacob',
						'Isaac',
					]
				}, {		
					id: 57,		
					title: 'What was the name of the tower that the people were building when God confused their language?',		
					answer: 'Tower of Babel',		
					reference: '(Gen 11:4,9)',
					choices: [
						'Tower of Osiris',
						'Tower of Terror',
						'Tower of God',
					]
				}, {		
					id: 58,		
					title: 'What is the common name of the prayer that Jesus taught to his disciples?',		
					answer: 'The Lord\'s Prayer',		
					reference: '(Matt 6:9)',
					choices: [
						'The Common Prayer',
						'The Church Prayer',
						'The School Prayer',
					]
				}, {		
					id: 59,		
					title: 'Whose name means "father of a great multitude"?',		
					answer: 'Abraham',		
					reference: '(Gen 17:5)',
					choices: [
						'Isaac',
						'Noah',
						'Jacob',
					]
				}, {		
					id: 60,		
					title: 'Of what did Potiphar\'s wife falsely accuse Joseph resulting in him being thrown into prison?',		
					answer: 'Rape',		
					reference: '(Gen 39:12-20)',
					choices: [
						'Stealing',
						'Murder',
						'Laziness',
					]
				}, {		
					id: 61,		
					title: 'Which sea did the Israelites cross through to escape the Egyptians?',		
					answer: 'Red Sea',		
					reference: '(Exo 13:18)',
					choices: [
						'Dead Sea',
						'Caspian Sea',
						'Mediterranean Sea',
					]
				}, {		
					id: 62,		
					title: 'What is "more difficult than a camel going through the eye of a needle"?',		
					answer: 'A rich man entering the Kingdom of God',		
					reference: '(Matt 19:24)',
					choices: [
						'Teaching an old dog new tricks',
						'Traveling to Jerusalem on a donkey',
						'Herding cats',
					]
				}, {		
					id: 63,		
					title: 'For how many years did the Israelites wander in the wilderness?',		
					answer: 'Forty',		
					reference: '(Josh 5:6)',
					choices: [
						'Three',
						'One hundred and Thirty',
						'Twelve',
					]
				}, {		
					id: 64,		
					title: 'What does a "good tree" bring forth?',		
					answer: 'Good fruit',		
					reference: '(Matt 7:17)',
					choices: [
						'Apples',
						'Figs',
						'Pears',
					]
				}, {		
					id: 65,		
					title: 'Which small body part can "boast of great things"?',		
					answer: 'Tongue',		
					reference: '(Jam 3:5)',
					choices: [
						'Pinky finger',
						'Arm',
						'Head',
					]
				}, {		
					id: 66,		
					title: 'What was the name of Abraham\'s first wife?',		
					answer: 'Sarah',		
					reference: '(Gen 17:15)',
					choices: [
						'Eve',
						'Ruth',
						'Ester',
					]
				}, {		
					id: 67,		
					title: 'What did God do on the seventh day, after he had finished creating everything?',		
					answer: 'Rested',		
					reference: '(Gen 2:1-3)',
					choices: [
						'Create Adam',
						'Create the birds',
						'Create the animals',
					]
				}, {		
					id: 68,		
					title: 'On what day did the apostles receive the Holy Spirit?',		
					answer: 'Day of Pentecost',		
					reference: '(Acts 2:1-4)',
					choices: [
						'Thursday',
						'Christmas day',
						'Sabbath',
					]
				}, {		
					id: 69,		
					title: 'At the Last Supper, what items of food and drink did Jesus give thanks for?',		
					answer: 'Bread and wine',		
					reference: '(Matt 26:26-27)',
					choices: [
						'Fish and Water',
						'Milk and Honey',
						'Five loaves and two fish',
					]
				}, {		
					id: 70,		
					title: 'When Jesus was in the wilderness, what was he tempted to turn into loaves of bread?',		
					answer: 'Stones',		
					reference: '(Matt 4:3)',
					choices: [
						'Dust of the earth',
						'Wheat of the field',
						'Pharisees',
					]
				}, {		
					id: 71,		
					title: 'What were the religious leaders called who continually tried to trap Jesus with their questions?',		
					answer: 'Pharisees and Sadducees',		
					reference: '(Mark 10:2)',
					choices: [
						'Magi',
						'Priests',
						'Viziers',
					]
				}, {		
					id: 72,		
					title: 'What miracle did Jesus do for Lazarus?',		
					answer: 'Raised him from the dead',		
					reference: '(John 11:43-44)',
					choices: [
						'Give him sight',
						'Heal him from leprosy',
						'Healed his legs',
					]
				}, {		
					id: 73,		
					title: 'On which mountain were the Israelites given the Ten Commandments?',		
					answer: 'Mt. Sinai',		
					reference: '(Exo 34:32)',
					choices: [
						'Mt. Herman',
						'Mt. of Olives',
						'Mt. Ararat',
					]
				}, {		
					id: 74,		
					title: 'Who was Solomon\'s father?',		
					answer: 'David',		
					reference: '(1 Ki 2:12)',
					choices: [
						'Abraham',
						'Jacob',
						'Isaac',
					]
				}, {		
					id: 75,		
					title: 'What job did Jesus\' earthly father, Joseph, do?',		
					answer: 'Carpenter',		
					reference: '(Matt 13:55)',
					choices: [
						'Warrior',
						'Musician',
						'Shepherd',
					]
				}, {		
					id: 76,		
					title: 'How did Judas betray Christ?',		
					answer: 'With a kiss',		
					reference: '(Luke 22:48)',
					choices: [
						'With a slap to the face',
						'With a nod',
						'With a sword',
					]
				}, {		
					id: 77,		
					title: 'Solomon judged wisely over the rightful mother of a child, but how did he determine who the child belonged to?',		
					answer: 'Threatened to divide the child (with a sword)',		
					reference: '(1 Ki 3:25)',
					choices: [
						'Examined the childs looks to the mothers',
						'Ask the neighbor',
						'Cast lots',
					]
				}, {		
					id: 78,		
					title: 'Whose father was prepared to sacrifice him on an altar?',		
					answer: 'Isaac',		
					reference: '(Gen 22:9)',
					choices: [
						'Abraham',
						'Moses',
						'Jacob',
					]
				}, {		
					id: 79,		
					title: 'At the age of twelve, Jesus was left behind in Jerusalem. Where did his parents find him?',		
					answer: 'In the temple',		
					reference: '(Luke 2:42-46)',
					choices: [
						'In the market',
						'In the park',
						'In a well',
					]
				}, {		
					id: 80,		
					title: 'When the disciples saw Jesus walking on water, what did they think he was?',		
					answer: 'A ghost',		
					reference: '(Matt 14:26)',
					choices: [
						'A shark',
						'A monster',
						'A great fish',
					]
				}, {		
					id: 81,		
					title: 'What gift did Salome, daughter of Herodias, ask for after she danced for Herod?',		
					answer: 'John the Baptist\'s head',		
					reference: '(Matt 14:6-8)',
					choices: [
						'A pony',
						'A crown of jewels',
						'Half of the kingdom',
					]
				}, {		
					id: 82,		
					title: 'How did Samson kill all the people in the temple?',		
					answer: 'Pushed the pillars over and the temple collapsed',		
					reference: '(Jdg 16:30)',
					choices: [
						'With a golden sword',
						'With an army of angels',
						'With a silver bow',
					]
				}, {		
					id: 83,		
					title: 'Which musical instrument did David play for Saul?',		
					answer: 'Harp / Lyre',		
					reference: '(1 Sam 16:23)',
					choices: [
						'Flute',
						'Trumpet',
						'Drum',
					]
				}, {		
					id: 84,		
					title: 'What was Esau doing while Jacob stole his blessing?',		
					answer: 'Hunting',		
					reference: '(Gen 27:1-3,23)',
					choices: [
						'Fighting',
						'Sleeping',
						'Gathering',
					]
				}, {		
					id: 85,		
					title: 'Why did Jacob initially send Joseph\'s brothers into Egypt?',		
					answer: 'To buy corn',		
					reference: '(Gen 42:2-3)',
					choices: [
						'To escape persecution',
						'To find water',
						'To look for Isaac',
					]
				}, {		
					id: 86,		
					title: 'Who was David\'s great friend?',		
					answer: 'Jonathan',		
					reference: '(1 Sam 18:1)',
					choices: [
						'Jesse',
						'Saul',
						'Solomon',
					]
				}, {		
					id: 87,		
					title: 'Who said "thy God shall be my God"?',		
					answer: 'Ruth',		
					reference: '(Ruth 1:16)',
					choices: [
						'Ester',
						'Seth',
						'Jacob',
					]
				}, {		
					id: 88,		
					title: 'Which of Christ\'s belongings did the soldiers cast lots for after they had crucified him?',		
					answer: 'His (seamless) coat',		
					reference: '(Matt 27:35)',
					choices: [
						'His crown of thorns',
						'His nine inch nails',
						'His garments',
					]
				}, {		
					id: 89,		
					title: 'What does the name Emmanuel mean?',		
					answer: 'God with us',		
					reference: '(Matt 1:23)',
					choices: [
						'Savior',
						'Peace be with you',
						'Love and righteousness',
					]
				}, {		
					id: 90,		
					title: 'What does James say we should do if we lack wisdom?',		
					answer: 'Ask God for wisdom, in faith',		
					reference: '(Jam 1:5)',
					choices: [
						'Read a book',
						'Sleep on it',
						'Ask an elder',
					]
				}, {		
					id: 91,		
					title: 'Where did Jesus meet the woman of Samaria?',		
					answer: 'By a well',		
					reference: '(John 4:7)',
					choices: [
						'Along the roadside',
						'In the temple',
						'In her house',
					]
				}, {		
					id: 92,		
					title: 'Which disciple tried to walk on water, as Jesus did?',		
					answer: '(Simon) Peter',		
					reference: '(Matt 14:29)',
					choices: [
						'Matthew',
						'John',
						'Mark',
					]
				}, {		
					id: 93,		
					title: 'Why did Elimelech go to live in Moab with his family?',		
					answer: 'Famine in his home town',		
					reference: '(Ruth 1:1-2)',
					choices: [
						'He got in debt',
						'To find a wife',
						'He missed them',
					]
				}, {		
					id: 94,		
					title: 'Who lied about the price they received for a piece of land and died as a result?',		
					answer: 'Ananias & Sapphira',		
					reference: '(Acts 5:1-11)',
					choices: [
						'Harrod',
						'Saul',
						'Solomon',
					]
				}, {		
					id: 95,		
					title: 'With whom did David commit adultery?',		
					answer: 'Bathsheba',		
					reference: '(2 Sam 11:4)',
					choices: [
						'Mary Magdalene',
						'Jezebel',
						'Sarah',
					]
				}, {		
					id: 96,		
					title: 'When the Prodigal Son returned, his father gave him a robe, shoes and what other item?',		
					answer: 'Ring',		
					reference: '(Luke 15:22)',
					choices: [
						'Coat of many colors',
						'Belt',
						'Rod of Iron',
					]
				}, {		
					id: 97,		
					title: 'How many books are there in the Bible?',		
					answer: 'Sixty-six',		
					reference: '(Gen 1:1 - Rev 22:21)',
					choices: [
						'Seventy',
						'One hundred and Thirty',
						'Forty',
					]
				}, {		
					id: 98,		
					title: 'What are the names of Lazarus\' sisters?',		
					answer: 'Mary and Martha',		
					reference: '(John 11:1-3)',
					choices: [
						'Ruth and Naomi',
						'Ester and Eve',
						'Ananias and Sapphira',
					]
				}, {		
					id: 99,		
					title: 'Where did Jonah go after being thrown overboard and reaching dry land?',		
					answer: 'Nineveh',		
					reference: '(Jonah 3:3)',
					choices: [
						'Home',
						'Sodom and Gomorrah',
						'To the temple',
					]
				}, {		
					id: 100,		
					title: 'For what did Esau sell his birthright to Jacob?',		
					answer: 'A meal',		
					reference: '(Gen 25:30-34)',
					choices: [
						'A girl',
						'A promise',
						'A weapon',
					]
				}, {		
					id: 101,		
					title: 'What happened to Elimelech in Moab?',		
					answer: 'He died',		
					reference: '(Ruth 1:3)',
					choices: [
						'He built a family',
						'He sacrificed to God',
						'He lost his sword',
					]
				}, {		
					id: 102,		
					title: 'What does the shepherd in the parable of the lost sheep do once he realizes one is missing?',		
					answer: 'Goes and looks for it',		
					reference: '(Matt 18:12)',
					choices: [
						'Sends a servant to find it',
						'Prays that it will come back',
						'Lets the sheep go',
					]
				}, {		
					id: 103,		
					title: 'What is the name of the disciple who betrayed Jesus?',		
					answer: 'Judas Iscariot',		
					reference: '(Mark 14:10)',
					choices: [
						'Matthew',
						'John',
						'Mark',
					]
				}, {		
					id: 104,		
					title: 'What golden animal did the Israelites make as an idol?',		
					answer: 'Calf',		
					reference: '(Exo 32:4)',
					choices: [
						'Snake',
						'Donkey',
						'Goat',
					]
				}, {		
					id: 105,		
					title: 'Who did Jesus appear to first after his resurrection?',		
					answer: 'Mary Magdalene',		
					reference: '(Mark 16:9)',
					choices: [
						'Simon Peter',
						'Mark',
						'John the Baptist',
					]
				}, {		
					id: 106,		
					title: 'What job did Peter and Andrew do?',		
					answer: 'Fishermen',		
					reference: '(Matt 4:18)',
					choices: [
						'Tax collectors',
						'Pharisees',
						'Roman soldiers',
					]
				}, {		
					id: 107,		
					title: 'Which prophet tried to flee from God when asked to preach God\'s message in Nineveh?',		
					answer: 'Jonah',		
					reference: '(Bible)',
					choices: [
						'Isaiah',
						'Daniel',
						'Enoch',
					]
				}, {		
					id: 108,		
					title: 'What is the collective name of the stories Jesus told to convey his message?',		
					answer: 'Parables',		
					reference: '(Matt 13:10-13)',
					choices: [
						'Book of Life',
						'Laws of God',
						'Bedtime stories',
					]
				}, {		
					id: 109,		
					title: 'What was noticeable about Jacob\'s twin brother, Esau, at birth?',		
					answer: 'He was red and hairy',		
					reference: '(Gen 25:25)',
					choices: [
						'He was small and sicily',
						'He was white and glowing',
						'He was strong',
					]
				}, {		
					id: 110,		
					title: 'Who wanted to kill Jesus when he was a baby?',		
					answer: 'Herod (the Great)',		
					reference: '(Matt 2:13)',
					choices: [
						'Saul',
						'Pharisees',
						'Pontius pilate',
					]
				}, {		
					id: 111,		
					title: 'What did the earth look like in the beginning?',		
					answer: 'Without form and empty',		
					reference: '(Gen 1:2)',
					choices: [
						'Rocky with oceans',
						'Covered in dinosaurs',
						'Round and soft',
					]
				}, {		
					id: 112,		
					title: 'How did the father first respond upon seeing the Prodigal Son returning home?',		
					answer: 'He ran out and embraced him',		
					reference: '(Luke 15:20)',
					choices: [
						'He waited for him to come in',
						'He scorned him for disobeying him',
						'He hid from him',
					]
				}, {		
					id: 113,		
					title: 'Which well known Psalm of David contains the line, "he maketh me to lie down in green pastures"?',		
					answer: 'Psalm 23',		
					reference: '(Psalms)',
					choices: [
						'Psalm 150',
						'Psalm 119',
						'Psalm 1',
					]
				}, {		
					id: 114,		
					title: 'Abraham\'s wife, Sarah, bore a special son. What was his name?',		
					answer: 'Isaac',		
					reference: '(Gen 17:19)',
					choices: [
						'Isaiah',
						'Joseph',
						'Jacob',
					]
				}, {		
					id: 115,		
					title: 'Which son did Jacob love more than all the others?',		
					answer: 'Joseph',		
					reference: '(Gen 37:3)',
					choices: [
						'Benjamin',
						'Naphtali',
						'Reuben',
					]
				}, {		
					id: 116,		
					title: 'Who was Jacob\'s grandfather?',		
					answer: 'Abraham',		
					reference: '(Matt 1:2)',
					choices: [
						'Noah',
						'Joseph',
						'Isaac',
					]
				}, {		
					id: 117,		
					title: 'To which city will all nations one day go to worship God?',		
					answer: 'Jerusalem',		
					reference: '(Zec 14:16)',
					choices: [
						'Cairo',
						'Vatican',
						'New york',
					]
				}, {		
					id: 118,		
					title: 'Who said, "I am the true vine"?',		
					answer: 'Jesus',		
					reference: '(John 15:1)',
					choices: [
						'Moses',
						'Adam',
						'Noah',
					]
				}, {		
					id: 119,		
					title: 'When there was no water to drink in the wilderness, how did Moses provide it?',		
					answer: 'God told him to strike a rock',		
					reference: '(Exo 17:6)',
					choices: [
						'Dug a well',
						'Parted the sea',
						'Found a river',
					]
				}, {		
					id: 120,		
					title: 'To which tribe did Jesus belong?',		
					answer: 'Judah',		
					reference: '(Heb 7:14)',
					choices: [
						'Levi',
						'Joseph',
						'Benjamin',
					]
				}, {		
					id: 121,		
					title: 'What tragedy did Jacob think had happened to Joseph?',		
					answer: 'An evil beast had devoured him',		
					reference: '(Gen 37:33)',
					choices: [
						'He drowned',
						'He fell off a cliff',
						'He got lost',
					]
				}, {		
					id: 122,		
					title: 'What affliction did Hannah suffer from, that allowed Peninnah to provoke her?',		
					answer: 'She was barren',		
					reference: '(1 Sam 1:6)',
					choices: [
						'Leprosy',
						'Lameness',
						'Blindness',
					]
				}, {		
					id: 123,		
					title: 'Which is the gate that "leads to life"?',		
					answer: 'The narrow gate',		
					reference: '(Matt 7:14)',
					choices: [
						'The golden gate',
						'The wide gate',
						'The pearly gate',
					]
				}, {		
					id: 124,		
					title: 'What happened to the man who built his house upon the sand?',		
					answer: 'His house fell flat',		
					reference: '(Matt 7:27)',
					choices: [
						'He sold his beachfront property',
						'His house was made of glass',
						'He enjoyed his beach house',
					]
				}, {		
					id: 125,		
					title: 'What was the relationship of Mary (mother of Jesus) to Elisabeth?',		
					answer: 'Cousin',		
					reference: '(Luke 1:36)',
					choices: [
						'Sisters',
						'Mother daughter',
						'Neighbors',
					]
				}, {		
					id: 126,		
					title: 'How should we treat those who are our enemies, according to Jesus?',		
					answer: 'Love them',		
					reference: '(Matt 5:44)',
					choices: [
						'Hate them',
						'Flee from them',
						'Avoid them',
					]
				}, {		
					id: 127,		
					title: 'Who said, "Thou art my beloved Son, in thee I am well pleased"?',		
					answer: 'God',		
					reference: '(Mark 1:11)',
					choices: [
						'Joseph',
						'Abraham',
						'Mary',
					]
				}, {		
					id: 128,		
					title: 'Which son did Jacob not send to Egypt for grain during the famine?',		
					answer: 'Benjamin',		
					reference: '(Gen 42:4)',
					choices: [
						'Judah',
						'Reuben',
						'Joseph',
					]
				}, {		
					id: 129,		
					title: 'What does the word "gospel" mean?',		
					answer: 'Good news',		
					reference: '(Mark 1:1 / Strongs G2098)',
					choices: [
						'Instruction',
						'Godly scrolls',
						'Teaching',
					]
				}, {		
					id: 130,		
					title: 'Who suggested that Jonah be thrown overboard?',		
					answer: 'Jonah himself',		
					reference: '(John 1:12)',
					choices: [
						'The captain of the ship',
						'The skipper',
						'The ships crew',
					]
				}, {		
					id: 131,		
					title: 'What did Ruth do to Boaz while he was sleeping?',		
					answer: 'Uncovered his feet and lay down next to him',		
					reference: '(Ruth 3:7)',
					choices: [
						'Woke him with a kiss',
						'Embraced him',
						'Wispered in his ear',
					]
				}, {		
					id: 132,		
					title: 'As Esau grew, he was described as a what...?',		
					answer: 'Cunning hunter',		
					reference: '(Gen 25:27)',
					choices: [
						'Great warrior',
						'Incredible chef',
						'Wise councelor',
					]
				}, {		
					id: 133,		
					title: 'When Jesus went to dinner at Simon the Pharisee\'s house, what did a woman do for him?',		
					answer: 'Washed and anointed his feet with precious ointment',		
					reference: '(Luke 7:36-46)',
					choices: [
						'Cooked Him a meal',
						'Danced for Him',
						'Praised and worshiped Him',
					]
				}, {		
					id: 134,		
					title: 'What was Bathsheba doing when David first saw her?',		
					answer: 'Washing herself',		
					reference: '(2 Sam 11:2)',
					choices: [
						'Dancing in the street',
						'Sleeping in her bed',
						'Working in the market',
					]
				}, {		
					id: 135,		
					title: 'When the law was given to the children of Israel, what were they told not to worship?',		
					answer: 'Other gods',		
					reference: '(Exo 34:14; Deut 8:19)',
					choices: [
						'God Himself',
						'Holy Spirit',
						'Jesus Christ',
					]
				}, {		
					id: 136,		
					title: 'Who ran from Mount Carmel to Samaria faster than Ahab could drive his chariot?',		
					answer: 'Elijah',		
					reference: '(1 Ki 18:44-46)',
					choices: [
						'Isaiah',
						'Elisha',
						'Noah',
					]
				}, {		
					id: 137,		
					title: 'How many sons did Jacob (Israel) have?',		
					answer: 'Twelve',		
					reference: '(Gen 35:22)',
					choices: [
						'Six',
						'Eight',
						'Ten',
					]
				}, {		
					id: 138,		
					title: 'Which disciple wanted to see the imprint of the nails before he would believe?',		
					answer: 'Thomas',		
					reference: '(John 20:24-25)',
					choices: [
						'John',
						'Matthew',
						'Mark',
					]
				}, {		
					id: 139,		
					title: 'Which king dreamed about a large statue of a man made from different metals?',		
					answer: 'Nebuchadnezzar',		
					reference: '(Dan 2)',
					choices: [
						'Solomon',
						'Pharoh',
						'David',
					]
				}, {		
					id: 140,		
					title: 'What form did the Holy Spirit take at the baptism of Jesus?',		
					answer: 'Dove',		
					reference: '(Luke 3:22)',
					choices: [
						'Mist',
						'Fish',
						'Ghost',
					]
				}, {		
					id: 141,		
					title: 'Complete the saying of Jesus: "for the tree is known by his ____"',		
					answer: 'Fruit',		
					reference: '(Matt 12:33)',
					choices: [
						'Smell',
						'Bark',
						'Looks',
					]
				}, {		
					id: 142,		
					title: 'What miracle did Jesus perform at the marriage in Cana?',		
					answer: 'Water into wine',		
					reference: '(John 2:1-11)',
					choices: [
						'Fed 5000 with fish and loaves',
						'Heal him from leprosy',
						'Healed the blind',
					]
				}, {		
					id: 143,		
					title: 'What was the first thing Noah built when he came out of the ark?',		
					answer: 'Altar',		
					reference: '(Gen 8:20)',
					choices: [
						'House',
						'Campsite',
						'Boat',
					]
				}, {		
					id: 144,		
					title: 'Who claimed that the golden calf simply came out of the fire?',		
					answer: 'Aaron',		
					reference: '(Exo 32:24)',
					choices: [
						'Moses',
						'Caleb',
						'The children of Israel',
					]
				}, {		
					id: 145,		
					title: 'Towards which city was Saul travelling when he encountered a light from heaven?',		
					answer: 'Damascus',		
					reference: '(Acts 9:3)',
					choices: [
						'Israel',
						'Corinth',
						'Rome',
					]
				}, {		
					id: 146,		
					title: 'What did the sailors of the ship Jonah was on do to increase their chances of survival?',		
					answer: 'Threw the cargo overboard',		
					reference: '(Jonah 1:5)',
					choices: [
						'They prayed to God',
						'Tied themselves to the mass',
						'Batten down the hatches',
					]
				}, {		
					id: 147,		
					title: 'Who was Jacob\'s mother?',		
					answer: 'Rebekah',		
					reference: '(Gen 27:11)',
					choices: [
						'Sarah',
						'Ester',
						'Ruth',
					]
				}, {		
					id: 148,		
					title: 'How long will the Kingdom of God last?',		
					answer: 'Forever',		
					reference: '(2 Pe 1:11)',
					choices: [
						'1000 years',
						'40 days and 40 nights',
						'Until Adam sinned',
					]
				}, {		
					id: 149,		
					title: 'Which is the longest Psalm?',		
					answer: 'Psalm 119',		
					reference: '(Psalms)',
					choices: [
						'Psalm 150',
						'Psalm 23',
						'Psalm 1',
					]
				}, {		
					id: 150,		
					title: 'In which town was Jesus born?',		
					answer: 'Bethlehem',		
					reference: '(Matt 2:1)',
					choices: [
						'Jerusalem',
						'Beersheba',
						'Nazareth',
					]
				}
				/* , {		
					id: 151,		
					title: 'How were sins forgiven in the Old Testament?',		
					answer: 'Animal sacrifice',		
					reference: '(Lev 4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 152,		
					title: 'How were the Thessalonians told to pray?',		
					answer: 'Without ceasing',		
					reference: '(1 Th 5:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 153,		
					title: 'What happened to the city of Jericho after the priests blew their trumpets?',		
					answer: 'Walls fell down',		
					reference: '(Josh 6:20)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 154,		
					title: 'Which garden did Jesus go to, to pray in before his arrest?',		
					answer: 'Gethsemane',		
					reference: '(Matt 26:36)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 155,		
					title: 'Who was instructed by God to leave his home and family to travel to a country he did not know?',		
					answer: 'Abraham (Abram)',		
					reference: '(Gen 12:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 156,		
					title: 'What was Jesus teaching about when he said, "What therefore God hath joined together, let not man put asunder"?',		
					answer: 'Marriage (and divorce)',		
					reference: '(Matt 19:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 157,		
					title: 'In the Lord\'s Prayer, what follows the line, "Hallowed be thy name"?',		
					answer: 'Thy kingdom come',		
					reference: '(Matt 6:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 158,		
					title: 'What was Jonah found doing on the ship while the storm was raging?',		
					answer: 'Sleeping',		
					reference: '(John 1:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 159,		
					title: 'Five of the Ten Virgins did not take enough of what?',		
					answer: 'Oil',		
					reference: '(Matt 25:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 160,		
					title: 'What was the name of Joseph\'s master in Egypt?',		
					answer: 'Potiphar',		
					reference: '(Gen 37:36)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 161,		
					title: 'Aaron turned his rod into a serpent before Pharaoh, and Pharaoh\'s magicians did likewise, but what happened to their serpents?',		
					answer: 'Aaron\'s rod swallowed them',		
					reference: '(Exo 7:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 162,		
					title: 'To which country did Mary and Joseph escape when Herod killed all the babies in Bethlehem?',		
					answer: 'Egypt',		
					reference: '(Matt 2:13-14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 163,		
					title: 'What is the name of the angel who appeared to Mary?',		
					answer: 'Gabriel',		
					reference: '(Luke 1:26)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 164,		
					title: 'Which land did the Lord promise to Abram?',		
					answer: 'Canaan',		
					reference: '(Gen 17:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 165,		
					title: 'What should we "seek first"?',		
					answer: 'The Kingdom of God and his righteousness',		
					reference: '(Matt 6:33)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 166,		
					title: 'Which Psalm contains the line, "He leads me beside the still waters"?',		
					answer: 'Psalm 23',		
					reference: '(Psalms)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 167,		
					title: 'In the parable of the ten virgins, what were they waiting for?',		
					answer: 'Bridegroom',		
					reference: '(Matt 25:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 168,		
					title: 'What event occurred to help release Paul and Silas from prison?',		
					answer: 'Earthquake',		
					reference: '(Acts 16:26)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 169,		
					title: 'Which prisoner did the crowd call for to be released when Pilate asked them?',		
					answer: 'Barabbas',		
					reference: '(Matt 27:21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 170,		
					title: 'How does James say we should "treat the rich and the poor"?',		
					answer: 'Do not judge them, but treat them impartially',		
					reference: '(Jam 2:1-4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 171,		
					title: 'How many plagues did God send on Egypt?',		
					answer: 'Ten',		
					reference: '(Exo 7:14-12:30)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 172,		
					title: 'When Jesus asked "whom say ye that I am?" what did Peter reply?',		
					answer: 'Thou art the Christ, the Son of the Living God',		
					reference: '(Matt 16:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 173,		
					title: 'What did King Solomon ask for when God appeared to him in a dream?',		
					answer: 'Wisdom (to judge between good and evil)',		
					reference: '(1 Ki 3:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 174,		
					title: 'Who said, "Whosoever shall not receive the kingdom of God as a little child shall not enter therein"?',		
					answer: 'Jesus',		
					reference: '(Luke 18:16-17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 175,		
					title: 'How did the angel of the Lord appear to Moses, when he was a shepherd?',		
					answer: 'From within a burning bush',		
					reference: '(Exo 3:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 176,		
					title: 'Which of David\'s descendants will reign forever?',		
					answer: 'Jesus',		
					reference: '(Luke 1:32-33)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 177,		
					title: 'On what mountain did Moses receive the law from God?',		
					answer: 'Mount Sinai',		
					reference: '(Lev 26:46)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 178,		
					title: 'Which of his wives did Jacob love the most?',		
					answer: 'Rachel',		
					reference: '(Gen 29:30)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 179,		
					title: 'What was the name of the ark where the commandments given to Moses were to be kept?',		
					answer: 'Ark of the Covenant',		
					reference: '(Deut 10:2,8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 180,		
					title: 'What did Jesus say to those who accused the adulteress?',		
					answer: 'He that is without sin, let him first cast a stone',		
					reference: '(John 8:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 181,		
					title: 'Where is the "best place to pray"?',		
					answer: 'In your closet with the door shut',		
					reference: '(Matt 6:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 182,		
					title: 'What does James say happens if we "draw nigh to God"?',		
					answer: 'He will draw nigh to us',		
					reference: '(Jam 4:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 183,		
					title: 'Where was Jesus baptized?',		
					answer: 'River Jordan',		
					reference: '(Mark 1:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 184,		
					title: 'Which plant is "the least of all seeds, but when it is grown, it is the greatest among herbs"?',		
					answer: 'Mustard',		
					reference: '(Matt 13:31-32)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 185,		
					title: 'Which city "came down from heaven prepared as a bride"?',		
					answer: 'New Jerusalem',		
					reference: '(Rev 21:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 186,		
					title: 'At Capernaum, how did the man sick of the palsy gain access to the house in which Jesus was?',		
					answer: 'Through the roof',		
					reference: '(Mark 2:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 187,		
					title: 'What did God breathe into Adam\'s nostrils?',		
					answer: 'The breath of life',		
					reference: '(Gen 2:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 188,		
					title: 'What did Pharaoh\'s dream of good and bad ears of wheat represent?',		
					answer: 'Seven years of plenty followed by seven years of famine',		
					reference: '(Gen 41:29)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 189,		
					title: 'To whom was the Revelation of Jesus Christ given?',		
					answer: 'John',		
					reference: '(Rev 1:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 190,		
					title: 'How long was Jonah stuck inside the great fish for?',		
					answer: 'Three days',		
					reference: '(John 1:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 191,		
					title: 'When Jesus walked on water, which sea was it?',		
					answer: 'Sea of Galilee',		
					reference: '(John 6:1-19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 192,		
					title: 'Who told Joseph that Jesus would save his people from their sins?',		
					answer: 'Angel of the Lord',		
					reference: '(Matt 1:21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 193,		
					title: 'Where did the man who received one talent from his master hide it?',		
					answer: 'In the ground',		
					reference: '(Matt 25:25)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 194,		
					title: 'To whom did Jesus say, "Why are ye fearful, O ye of little faith"?',		
					answer: 'The disciples',		
					reference: '(Matt 8:26)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 195,		
					title: 'What was the name of Hagar\'s son?',		
					answer: 'Ishmael',		
					reference: '(Gen 16:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 196,		
					title: 'Who was Jacob\'s first wife?',		
					answer: 'Leah',		
					reference: '(Gen 29)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 197,		
					title: 'What was Jesus wrapped in when he was born?',		
					answer: 'Swaddling clothes',		
					reference: '(Luke 2:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 198,		
					title: 'What did the Israelites do whilst Moses was receiving the Ten Commandments from God?',		
					answer: 'Made a golden calf',		
					reference: '(Deut 9:15-16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 199,		
					title: 'What guided the Israelites through the wilderness?',		
					answer: 'A pillar of cloud and of fire',		
					reference: '(Exo 13:21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 200,		
					title: 'At what age did Jesus start his ministry?',		
					answer: 'Thirty',		
					reference: '(Luke 3:23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 201,		
					title: 'What animal spoke to Balaam?',		
					answer: 'Donkey',		
					reference: '(Num 22:28)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 202,		
					title: 'What is the last book of the Old Testament?',		
					answer: 'Malachi',		
					reference: '(Mal 4:6 - Matt 1:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 203,		
					title: 'What happened to Daniel after he gave thanks to God by his open window?',		
					answer: 'He was thrown into the lions\' den',		
					reference: '(Dan 6:10,16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 204,		
					title: 'What was Jonah\'s reaction to the way the people of the city of Nineveh responded to God\'s message?',		
					answer: 'He was angry',		
					reference: '(John 4:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 205,		
					title: 'Zacharias and Elizabeth were told by an angel that they would have a son. What was he to be called?',		
					answer: 'John',		
					reference: '(Luke 1:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 206,		
					title: 'How did Jesus say we should receive the Kingdom of God?',		
					answer: 'As a little child',		
					reference: '(Luke 18:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 207,		
					title: 'What happened to anyone who was not found written in the book of life?',		
					answer: 'They were cast in the lake of fire',		
					reference: '(Rev 20:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 208,		
					title: 'In his Sermon on the Mount, what does Jesus say about tomorrow?',		
					answer: 'Take no thought for it',		
					reference: '(Matt 6:34)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 209,		
					title: 'What did Joseph instruct to be put in Benjamin\'s sack?',		
					answer: 'His grain money and a silver cup',		
					reference: '(Gen 44:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 210,		
					title: 'What did Paul do to the soothsayer which made her masters unhappy?',		
					answer: 'Commanded the spirit of divination to leave her',		
					reference: '(Acts 16:18-19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 211,		
					title: 'What was the name of the place where Jesus Christ was crucified?',		
					answer: 'Golgotha / Calvary',		
					reference: '(John 19:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 212,		
					title: 'What object featured in Jacob\'s dream at Bethel?',		
					answer: 'Ladder',		
					reference: '(Gen 28:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 213,		
					title: 'What are the names of Joseph\'s parents?',		
					answer: 'Jacob and Rachel',		
					reference: '(Gen 46:19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 214,		
					title: 'What animal did Samson kill on his way to Timnah?',		
					answer: 'Lion',		
					reference: '(Jdg 14:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 215,		
					title: 'What was the name of Ruth\'s second husband?',		
					answer: 'Boaz',		
					reference: '(Ruth 4:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 216,		
					title: 'Complete this common phrase of thanksgiving found in the Bible: "O give thanks unto the Lord; for he is good: for his _____ endureth for ever."',		
					answer: 'Mercy',		
					reference: '(Ps 106:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 217,		
					title: 'Who wrote the majority of the Psalms?',		
					answer: 'David',		
					reference: '(Ps 1 - 150)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 218,		
					title: 'Which prophet anointed David as king?',		
					answer: 'Samuel',		
					reference: '(1 Sam 16:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 219,		
					title: 'A "soft answer turneth away..." what?',		
					answer: 'Wrath',		
					reference: '(Pro 15:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 220,		
					title: 'What job did the Prodigal Son end up taking after he had spent his inheritance?',		
					answer: 'Pig feeder',		
					reference: '(Luke 15:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 221,		
					title: 'Why shouldn't we give anyone the title of "Father"?',		
					answer: 'We have one father, who is in heaven',		
					reference: '(Matt 23:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 222,		
					title: 'What kind of water does Jesus discuss with the Samaritan woman at the well?',		
					answer: 'Living water',		
					reference: '(John 4:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 223,		
					title: 'How did Jesus heal the blind man?',		
					answer: 'He covered his eyes with clay and told him to wash',		
					reference: '(John 9:6-7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 224,		
					title: 'Where did Jesus find Zacchaeus, the tax collector?',		
					answer: 'Up a tree',		
					reference: '(Luke 19:4-5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 225,		
					title: 'What is the name of Jesus\' cousin, born six months before him?',		
					answer: 'John',		
					reference: '(Luke 1:36)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 226,		
					title: 'Who was the first child born?',		
					answer: 'Cain',		
					reference: '(Gen 4:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 227,		
					title: 'Which apostle, who was described as "full of grace and power, and doing great wonders and signs among the people", was stoned to death?',		
					answer: 'Stephen',		
					reference: '(Acts 7:59)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 228,		
					title: 'Who deceived Jacob by giving Leah as a wife instead of Rachel?',		
					answer: 'Laban',		
					reference: '(Gen 29:25)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 229,		
					title: 'What did Jesus send disciples to fetch on his triumphal entry into Jerusalem?',		
					answer: 'Donkey and colt',		
					reference: '(Matt 21:1-2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 230,		
					title: 'In the parable of the lost sheep, how many sheep did the shepherd count safely into the fold?',		
					answer: 'Ninety-nine',		
					reference: '(Matt 18:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 231,		
					title: 'What does James say we should say when we make our future plans?',		
					answer: 'If the Lord will, I will do this or that',		
					reference: '(Jam 4:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 232,		
					title: 'What type of coin did Judas accept as payment for betraying Jesus?',		
					answer: 'Silver',		
					reference: '(Matt 26:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 233,		
					title: 'What was the writer of the letter asking of Philemon?',		
					answer: 'To receive his slave back as a brother in Christ',		
					reference: '(Phm 1:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 234,		
					title: 'What was the covenant between God and Noah?',		
					answer: 'Never to flood the earth again',		
					reference: '(Gen 9:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 235,		
					title: 'Which prophet said, "Behold, a virgin shall be with child, and shall bring forth a son"?',		
					answer: 'Isaiah',		
					reference: '(Isa 7:14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 236,		
					title: 'To what object does James compare the tongue?',		
					answer: 'The rudder on a ship',		
					reference: '(Jam 3:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 237,		
					title: 'Which of David\'s sons rebelled against him?',		
					answer: 'Absalom',		
					reference: '(2 Sam 15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 238,		
					title: 'What does Paul say about women\'s long hair?',		
					answer: 'It is a glory to her (given as a covering)',		
					reference: '(1 Cor 11:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 239,		
					title: 'What did Naomi tell the people in Bethlehem to call her?',		
					answer: 'Mara',		
					reference: '(Ruth 1:20)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 240,		
					title: 'When Jesus told his disciples to beware of the "leaven of the Pharisees and Sadducees", to what was he referring?',		
					answer: 'The doctrines of the Pharisees and Sadducees',		
					reference: '(Matt 16:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 241,		
					title: 'How was Daniel protected from the lions in the den?',		
					answer: 'An angel shut their mouths',		
					reference: '(Dan 6:22)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 242,		
					title: 'Everyone that is proud in heart is what to the Lord?',		
					answer: 'An abomination',		
					reference: '(Pro 16:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 243,		
					title: 'What did John the Baptist say when he saw Jesus?',		
					answer: 'Behold the Lamb of God!',		
					reference: '(John 1:29)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 244,		
					title: 'How did the city that Jonah was sent to react to God\'s message of destruction?',		
					answer: 'They repented',		
					reference: '(John 3:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 245,		
					title: 'Who asked Jesus to remember him when he came into his kingdom?',		
					answer: 'The criminal on the cross',		
					reference: '(Luke 23:42)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 246,		
					title: 'Of what, specifically, was man not allowed to eat in the Garden of Eden?',		
					answer: 'Tree of knowledge of good and evil',		
					reference: '(Gen 2:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 247,		
					title: 'What was Solomon famous for building?',		
					answer: 'Temple',		
					reference: '(1 Ki 7:51)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 248,		
					title: 'Jesus asked: "Can the blind lead the....?"',		
					answer: 'Blind',		
					reference: '(Luke 6:39)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 249,		
					title: 'Who told Peter to "watch and pray that he entered not into temptation"?',		
					answer: 'Jesus',		
					reference: '(Matt 26:40-41)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 250,		
					title: 'What is Paul\'s command to husbands in his letter to the Colossians?',		
					answer: 'Love your wives, and do not be bitter towards them',		
					reference: '(Col 3:19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 251,		
					title: 'Which river was Naaman told to wash in to rid himself of leprosy?',		
					answer: 'Jordan',		
					reference: '(2 Ki 5:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 252,		
					title: 'What miracle had Jesus performed when he said, "It is I; be not afraid"?',		
					answer: 'Walking on water',		
					reference: '(John 6:19-20)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 253,		
					title: 'Why did Solomon turn away from God when he was old?',		
					answer: 'His foreign wives turned his heart after other gods',		
					reference: '(1 Ki 11:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 254,		
					title: 'What is the "chorus" in Psalm 136 which is repeated in every verse?',		
					answer: 'For his mercy endureth forever',		
					reference: '(Ps 136)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 255,		
					title: 'In what city was Jesus brought up as a child?',		
					answer: 'Nazareth',		
					reference: '(Matt 2:23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 256,		
					title: 'Which female judge described herself as "a mother in Israel"?',		
					answer: 'Deborah',		
					reference: '(Jdg 5:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 257,		
					title: 'After the angels had announced the birth of Christ and left the shepherds, what did the shepherds do?',		
					answer: 'Went quickly to Bethlehem',		
					reference: '(Luke 2:15-16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 258,		
					title: 'According to Peter, what "covers a multitude of sins"?',		
					answer: 'Love',		
					reference: '(1 Pe 4:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 259,		
					title: 'In prison, for whom did Joseph interpret dreams?',		
					answer: 'The butler and the baker',		
					reference: '(Gen 40:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 260,		
					title: 'To what preservative does the Lord compare his disciples?',		
					answer: 'Salt',		
					reference: '(Matt 5:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 261,		
					title: 'What was Jesus\' first miracle?',		
					answer: 'Changing water into wine',		
					reference: '(John 2:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 262,		
					title: 'Who spotted Moses in the Nile placed in an ark of bulrushes?',		
					answer: 'Pharaoh\'s daughter',		
					reference: '(Exo 2:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 263,		
					title: 'Who was Bathsheba\'s first husband?',		
					answer: 'Uriah',		
					reference: '(2 Sam 11:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 264,		
					title: 'Why were Daniel\'s three friends thrown into the fiery furnace?',		
					answer: 'They wouldn't bow down to Nebuchadnezzar\'s golden image',		
					reference: '(Dan 3:11-12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 265,		
					title: 'Out of the ten lepers who Jesus healed, how many came back to say thank you?',		
					answer: 'One',		
					reference: '(Luke 17:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 266,		
					title: 'What did Jesus say the sellers had turned his house of prayer into?',		
					answer: 'A den of thieves',		
					reference: '(Luke 19:46)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 267,		
					title: 'In the New Jerusalem where are the names of the twelve tribes written?',		
					answer: 'On the twelve gates',		
					reference: '(Rev 21:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 268,		
					title: 'How often was the year of the Lord\'s release?',		
					answer: 'Every seven years',		
					reference: '(Deut 15:1-2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 269,		
					title: 'Which tribe of Israel looked after the religious aspects of life?',		
					answer: 'Levi',		
					reference: '(Num 18:20-24)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 270,		
					title: 'Where was Paul when he wrote the letter to Philemon?',		
					answer: 'In prison',		
					reference: '(Phm 1:23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 271,		
					title: 'Who preached, "Repent ye: for the kingdom of heaven is at hand"?',		
					answer: 'John the Baptist',		
					reference: '(Matt 3:1-2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 272,		
					title: 'What was the name of James\' and John\'s father?',		
					answer: 'Zebedee',		
					reference: '(Mark 10:35)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 273,		
					title: 'What bird did God provide to the Israelites for meat in the wilderness?',		
					answer: 'Quail',		
					reference: '(Exo 16:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 274,		
					title: 'Who closed the door of Noah\'s ark?',		
					answer: 'God',		
					reference: '(Gen 7:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 275,		
					title: 'Hate stirs up strife, but what does love cover?',		
					answer: 'All sins',		
					reference: '(Pro 10:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 276,		
					title: 'Who wrote the line: "The Lord is my Shepherd, I shall not want"?',		
					answer: 'David',		
					reference: '(Ps 23:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 277,		
					title: 'Which prisoners experienced an earthquake after their prayer?',		
					answer: 'Paul and Silas',		
					reference: '(Acts 16:26)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 278,		
					title: 'What was the name of Joseph\'s youngest brother?',		
					answer: 'Benjamin',		
					reference: '(Gen 44:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 279,		
					title: 'Who did Jesus pray for that his faith failed not?',		
					answer: '(Simon) Peter',		
					reference: '(Luke 22:32)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 280,		
					title: 'What was the new name given to Daniel while in captivity?',		
					answer: 'Belteshazzar',		
					reference: '(Dan 1:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 281,		
					title: 'Which wise man wrote the majority of Proverbs?',		
					answer: 'Solomon',		
					reference: '(Pro 1:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 282,		
					title: 'Which king asked for the foreskins of 100 Philistines?',		
					answer: 'Saul',		
					reference: '(1 Sam 18:25)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 283,		
					title: 'Who rolled away the tomb stone?',		
					answer: 'An Angel',		
					reference: '(Matt 28:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 284,		
					title: 'What did Samson find in the carcass of the animal he had killed at a later time?',		
					answer: 'Bees and honey',		
					reference: '(Jdg 14:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 285,		
					title: 'What is "friendship with the world", according to James?',		
					answer: 'Enmity with God',		
					reference: '(Jam 4:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 286,		
					title: 'Who said "glory to God in the highest, and on earth peace, goodwill to men"?',		
					answer: 'Angels',		
					reference: '(Luke 2:13-14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 287,		
					title: 'In which book of the Bible does the story of Noah\'s ark appear?',		
					answer: 'Genesis',		
					reference: '(Gen 6 - 8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 288,		
					title: 'When Samuel was called by the Lord as a child, who did he think was calling?',		
					answer: 'Eli, the priest',		
					reference: '(1 Sam 3:2-6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 289,		
					title: 'To whom did Jesus say "Truly, truly, I say to you, unless one is born again he cannot see the kingdom of God"?',		
					answer: 'Nicodemus',		
					reference: '(John 3:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 290,		
					title: 'Who does Paul say is head of the woman?',		
					answer: 'Man',		
					reference: '(1 Cor 11:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 291,		
					title: 'Who sang a song celebrating the downfall of Sisera?',		
					answer: 'Deborah & Barak',		
					reference: '(Jdg 5:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 292,		
					title: 'What happens to "treasure laid up on earth"?',		
					answer: 'Becomes corrupted and thieves steal it',		
					reference: '(Matt 6:19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 293,		
					title: 'Whose mother was instructed to drink no wine or strong drink during her pregnancy?',		
					answer: 'Samson\'s',		
					reference: '(Jdg 13:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 294,		
					title: 'Who was the successor to Moses?',		
					answer: 'Joshua',		
					reference: '(Josh 1:1-6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 295,		
					title: 'What should you not "throw before swine"?',		
					answer: 'Pearls',		
					reference: '(Matt 7:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 296,		
					title: 'What was the name of the woman who hid the spies at Jericho?',		
					answer: 'Rahab',		
					reference: '(Josh 2:3-4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 297,		
					title: 'In the letter to the Corinthians, who does Paul say is a "new creature"?',		
					answer: 'Any man in Christ',		
					reference: '(2 Cor 5:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 298,		
					title: 'Which prophet is recorded as having an earnest prayer for no rain answered?',		
					answer: 'Elijah',		
					reference: '(Jam 5:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 299,		
					title: 'According to Thessalonians, what will happen to the believers alive at the return of Christ?',		
					answer: 'They will be caught up together in the clouds',		
					reference: '(1 Th 4:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 300,		
					title: 'How did the Philistines discover the answer to Samson\'s riddle?',		
					answer: 'They threatened Samson\'s bride, who told them',		
					reference: '(Jdg 14:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 301,		
					title: 'When he was approached by Jesus, who said, "What have you to do with me, Jesus, Son of the Most High God? I adjure you by God, do not torment me."?',		
					answer: 'Legion',		
					reference: '(Mark 5:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 302,		
					title: 'What was the reason that Jacob and his family began a new life in Egypt?',		
					answer: 'Famine in Canaan',		
					reference: '(Gen 47:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 303,		
					title: 'How was Isaac\'s wife chosen?',		
					answer: 'His father sent a servant back to Mesopotamia to choose a wife from his own family',		
					reference: '(Gen 24)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 304,		
					title: 'Whose father was so pleased to see him that he gave him the best robe and killed the fatted calf?',		
					answer: 'Prodigal son',		
					reference: '(Luke 15:23-24)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 305,		
					title: 'What was the name of Solomon\'s son who succeeded him as king?',		
					answer: 'Rehoboam',		
					reference: '(1 Ki 11:43)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 306,		
					title: 'How did the people listening to the Sermon on the Mount view Jesus\' teachings?',		
					answer: 'He taught as one with authority',		
					reference: '(Matt 7:29)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 307,		
					title: 'What does faith require to make it a living faith?',		
					answer: 'Works',		
					reference: '(Jam 2:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 308,		
					title: 'What did Jesus say you should do if someone asks you to go with them for a mile?',		
					answer: 'Go with them for two miles',		
					reference: '(Matt 5:41)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 309,		
					title: 'In the parable of the grain of mustard seed, when it becomes a tree birds come and do what?',		
					answer: 'Build nests',		
					reference: '(Matt 13:32)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 310,		
					title: 'The field that Judas Iscariot purchased with his betrayal money was called Aceldama, but as what was it also known?',		
					answer: 'Field of Blood',		
					reference: '(Acts 1:19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 311,		
					title: 'Who did Jesus raise from the dead by a prayer of thanks to God?',		
					answer: 'Lazarus',		
					reference: '(John 11:41)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 312,		
					title: 'The king\'s wrath is as "the roaring" of what?',		
					answer: 'A lion',		
					reference: '(Pro 19:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 313,		
					title: 'What was the name of Ruth\'s son?',		
					answer: 'Obed',		
					reference: '(Ruth 4:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 314,		
					title: 'According to James, what happens if you break one commandment of the law?',		
					answer: 'You are guilty of breaking the whole law',		
					reference: '(Jam 2:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 315,		
					title: 'Go to the ____, thou sluggard; consider her ways, and be wise. What animal should we take lessons from?',		
					answer: 'Ant',		
					reference: '(Pro 6:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 316,		
					title: 'How did the wise men know that the King of the Jews had been born?',		
					answer: 'They saw a star in the East',		
					reference: '(Matt 2:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 317,		
					title: 'What test did Elijah set the prophets of Baal, which failed, proving their god to be false?',		
					answer: 'Lighting a fire under the sacrifice on the altar',		
					reference: '(1 Ki 18:24)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 318,		
					title: 'Who was the tax collector that climbed up a tree so he could see Jesus?',		
					answer: 'Zacchaeus',		
					reference: '(Luke 19:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 319,		
					title: 'What is Jesus\' final commission to his disciples?',		
					answer: 'Teach all nations, baptizing them',		
					reference: '(Matt 28:19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 320,		
					title: 'The Lord said that Jacob and Esau were two what in the womb?',		
					answer: 'Nations',		
					reference: '(Gen 25:23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 321,		
					title: 'When a man said to Jesus, "who is my neighbor?" what parable did Jesus reply with?',		
					answer: 'The good Samaritan',		
					reference: '(Luke 10:29)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 322,		
					title: 'What happens to the man who "puts his hand to the plough and looks back"?',		
					answer: 'He is not fit for the Kingdom of God',		
					reference: '(Luke 9:62)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 323,		
					title: 'What did Samson do to the Philistines\' crops after discovering his bride had been given to someone else?',		
					answer: 'Burned them',		
					reference: '(Jdg 15:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 324,		
					title: 'Who was Jesus talking to when he taught the Lord\'s Prayer?',		
					answer: 'Disciples',		
					reference: '(Matt 5:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 325,		
					title: 'Ananias and Sapphira sold some property and secretly kept part of the proceeds for themselves. What happened to them?',		
					answer: 'They died',		
					reference: '(Acts 5:1-11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 326,		
					title: 'To the beauty of which plant did Jesus compare to King Solomon?',		
					answer: 'Lilies (of the field)',		
					reference: '(Luke 12:27)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 327,		
					title: 'What was on top of the Ark of the Covenant?',		
					answer: 'The mercy seat and two cherubim',		
					reference: '(Exo 25:22)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 328,		
					title: 'Who came to see Jesus by night?',		
					answer: 'Nicodemus',		
					reference: '(John 19:39)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 329,		
					title: 'For how long was the dragon bound in the bottomless pit?',		
					answer: '1,000 years',		
					reference: '(Rev 20:1-3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 330,		
					title: 'Complete the Beatitude: "Blessed are the pure in heart..."',		
					answer: 'Éfor they shall see God.',		
					reference: '(Matt 5:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 331,		
					title: 'For how many pieces of silver did Judas betray Christ?',		
					answer: 'Thirty',		
					reference: '(Matt 26:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 332,		
					title: 'Who did Abram marry?',		
					answer: 'Sarai',		
					reference: '(Gen 11:29)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 333,		
					title: 'What did Jesus say he would leave with the disciples?',		
					answer: 'Peace',		
					reference: '(John 14:27)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 334,		
					title: 'What did Paul ask Philemon to have ready for him?',		
					answer: 'A room',		
					reference: '(Phm 1:22)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 335,		
					title: 'In Egypt, what did Joseph accuse his brothers of at their first meeting?',		
					answer: 'Being spies',		
					reference: '(Gen 42:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 336,		
					title: 'Where did Jesus first see Nathanael?',		
					answer: 'Under the fig tree',		
					reference: '(John 1:48)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 337,		
					title: 'Which disciple was a tax collector?',		
					answer: 'Matthew (Levi)',		
					reference: '(Luke 5:27)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 338,		
					title: 'Which city was the letter to Philemon written from?',		
					answer: 'Rome (while under house arrest)',		
					reference: '(Phm 1:23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 339,		
					title: 'What horrific act did the women do to their children during the Babylonian siege of Jerusalem?',		
					answer: 'Boiled and ate them',		
					reference: '(Lam 4:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 340,		
					title: 'What does the name Abraham mean?',		
					answer: 'Father of a multitude',		
					reference: '(Gen 17:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 341,		
					title: 'When the Pharisees asked Jesus whether it was lawful to pay taxes to Caesar, what object did he use to answer their question?',		
					answer: 'A penny (denarius)',		
					reference: '(Matt 22:19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 342,		
					title: 'When Philip and the Ethiopian eunuch arrive at some water, what does the eunuch say?',		
					answer: 'What is there to stop me getting baptized?',		
					reference: '(Acts 8:36)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 343,		
					title: 'Who said to Mary, "Blessed are you among women, and blessed is the fruit of your womb!"?',		
					answer: 'Elisabeth',		
					reference: '(Luke 1:41-42)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 344,		
					title: 'Seven fat and seven thin of what type of animal appeared to Pharaoh in a dream?',		
					answer: 'Cattle (or Cows)',		
					reference: '(Gen 41:1-4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 345,		
					title: 'How old was Sarah when her son Isaac was born?',		
					answer: 'Ninety',		
					reference: '(Gen 17:17; 21:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 346,		
					title: 'About what age was Jesus when he was baptized?',		
					answer: 'Thirty',		
					reference: '(Luke 3:23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 347,		
					title: 'Which book comes after the book of Job?',		
					answer: 'Psalms',		
					reference: '(Job 42:17 - Ps 1:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 348,		
					title: 'How many horsemen are there in Revelation chapter 6?',		
					answer: 'Four',		
					reference: '(Rev 6:2-8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 349,		
					title: 'What was the first temptation of Christ?',		
					answer: 'To turn a stone into bread',		
					reference: '(Matt 4:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 350,		
					title: 'After the first king of Israel failed God, what was the name of the second man who was anointed king?',		
					answer: 'David',		
					reference: '(1 Sam 16:1,13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 351,		
					title: 'What type of tree did Zacchaeus climb to see Jesus?',		
					answer: 'Sycamore',		
					reference: '(Luke 19:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 352,		
					title: 'When Jesus forgave the sins of the sick man let down through the roof to him, to what did the Pharisees object?',		
					answer: 'They thought only God could forgive sins',		
					reference: '(Mark 2:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 353,		
					title: 'What was the name of Abraham\'s nephew?',		
					answer: 'Lot',		
					reference: '(Gen 12:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 354,		
					title: 'Israel split into two kingdoms after the reign of King Solomon, with Israel in the north, but what was the name of the southern kingdom?',		
					answer: 'Judah',		
					reference: '(1 Ki 11:31-36; 12:20-21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 355,		
					title: 'What did James\' and John\'s mother ask of Jesus?',		
					answer: 'For her sons to sit on Jesus\' right and left hands in the kingdom',		
					reference: '(Matt 20:21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 356,		
					title: 'What did the dove bring back to Noah?',		
					answer: 'Olive leaf',		
					reference: '(Gen 8:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 357,		
					title: 'How many books are there in the New Testament?',		
					answer: 'Twenty-seven',		
					reference: '(Matt 1:1 - Rev 22:21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 358,		
					title: 'Who was appointed to replace Judas Iscariot as a disciple?',		
					answer: 'Matthias',		
					reference: '(Acts 1:26)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 359,		
					title: 'What did Abraham\'s son carry for his sacrifice?',		
					answer: 'The wood',		
					reference: '(Gen 22:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 360,		
					title: 'In which book of the Bible would we find Haman, the son of Hammedatha?',		
					answer: 'Esther',		
					reference: '(Est 3:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 361,		
					title: 'What did Elisha do for the Shunammite\'s son?',		
					answer: 'Raised him back to life',		
					reference: '(2 Ki 4:32-37)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 362,		
					title: 'Which book of the Bible precedes Philemon?',		
					answer: 'Titus',		
					reference: '(Tit 3:15 - Phm 1:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 363,		
					title: 'What were the names of Elimelech\'s two sons?',		
					answer: 'Mahlon & Chilion',		
					reference: '(Ruth 1:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 364,		
					title: 'Until when did Jesus remain in Egypt with his parents, when he was a baby?',		
					answer: 'Until the death of Herod the Great',		
					reference: '(Matt 2:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 365,		
					title: 'In the parable of the sower, what does the seed represent?',		
					answer: 'Word of God',		
					reference: '(Luke 8:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 366,		
					title: 'What was the first plague the Lord sent upon Egypt?',		
					answer: 'Water turned into blood',		
					reference: '(Exo 7:21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 367,		
					title: 'What did the disciples do when people brought their young children to Jesus?',		
					answer: 'They rebuked them',		
					reference: '(Matt 19:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 368,		
					title: 'Who does Jesus say are the two most important people to love?',		
					answer: 'God and your neighbor',		
					reference: '(Luke 10:27)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 369,		
					title: 'What happened to Jesus on the 8th day of his life?',		
					answer: 'He was circumcised',		
					reference: '(Luke 2:21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 370,		
					title: 'Who looked after the coats of the men who stoned Stephen?',		
					answer: 'Saul',		
					reference: '(Acts 7:58)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 371,		
					title: 'What profession did Zebedee, father of James and John, have?',		
					answer: 'Fisherman',		
					reference: '(Matt 4:21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 372,		
					title: 'Which two sisters married Jacob?',		
					answer: 'Rachel and Leah',		
					reference: '(Gen 29:28)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 373,		
					title: 'Into which land did God send Abraham to sacrifice his special son, Isaac?',		
					answer: 'Moriah',		
					reference: '(Gen 22:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 374,		
					title: 'In Revelation, what was the wife of the Lamb arrayed in?',		
					answer: 'Fine white linen',		
					reference: '(Rev 19:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 375,		
					title: 'Which Israelite woman had two Moabite daughters-in-law?',		
					answer: 'Naomi',		
					reference: '(Ruth 1:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 376,		
					title: 'When Peter was asked if Jesus paid temple taxes, what animal concealed a coin with which to pay the taxes?',		
					answer: 'Fish',		
					reference: '(Matt 17:27)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 377,		
					title: 'In Nebuchadnezzar\'s dream what did the different metals of the statue represent?',		
					answer: 'Kingdoms of the world',		
					reference: '(Dan 2:37-44)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 378,		
					title: 'What did God initially give man to eat?',		
					answer: 'Plants and Fruit',		
					reference: '(Gen 2:9,16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 379,		
					title: 'Which city did David pray for the peace of?',		
					answer: 'Jerusalem',		
					reference: '(Ps 122:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 380,		
					title: 'What did the crew of the ship Jonah was on do once the storm had ceased?',		
					answer: 'They made sacrifices to God',		
					reference: '(John 1:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 381,		
					title: 'How many people were saved in the ark?',		
					answer: 'Eight',		
					reference: '(1 Pe 3:20)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 382,		
					title: 'What disease did the Lord send upon Miriam?',		
					answer: 'Leprosy',		
					reference: '(Num 12:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 383,		
					title: 'The name of the Lord is like what place of safety?',		
					answer: 'A strong tower',		
					reference: '(Pro 18:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 384,		
					title: 'With what was Jesus\' side pierced?',		
					answer: 'Spear',		
					reference: '(John 19:34)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 385,		
					title: 'Who wrote the book of Acts?',		
					answer: 'Luke',		
					reference: '(Acts 1:1 (cf Luke 1:3))',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 386,		
					title: 'What did Jesus say when the Pharisees asked why he ate with publicans and sinners?',		
					answer: 'They that be whole need not a physician, but they that are sick.',		
					reference: '(Matt 9:11-12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 387,		
					title: 'How did Moses command the Red Sea to divide so the Israelites could cross over?',		
					answer: 'He lifted up his rod and stretched his hand over the sea',		
					reference: '(Exo 14:16,21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 388,		
					title: 'Where was Jonah when he prayed to God with the voice of thanksgiving?',		
					answer: 'In the fish\'s belly',		
					reference: '(John 2:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 389,		
					title: 'What was Noah\'s ark made out of?',		
					answer: 'Gopher (cypress) wood',		
					reference: '(Gen 6:14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 390,		
					title: 'Who brought Elijah bread and meat to eat during the drought?',		
					answer: 'Ravens',		
					reference: '(1 Ki 17:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 391,		
					title: 'Whose mother-in-law did Jesus heal?',		
					answer: '(Simon) Peter\'s',		
					reference: '(Matt 8:14-15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 392,		
					title: 'Which bird does Jesus say we have more value than?',		
					answer: 'Sparrow',		
					reference: '(Matt 10:31)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 393,		
					title: 'In which city was David\'s throne over Israel?',		
					answer: 'Jerusalem',		
					reference: '(2 Sam 5:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 394,		
					title: 'How old was Moses when he died?',		
					answer: '120',		
					reference: '(Deut 34:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 395,		
					title: 'What event did Peter, James and John witness in a mountain with Jesus?',		
					answer: 'Transfiguration',		
					reference: '(Matt 17:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 396,		
					title: 'Which apostle was a Pharisee?',		
					answer: 'Paul',		
					reference: '(Acts 23:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 397,		
					title: 'The desolation of which city is described in Revelation chapter 18?',		
					answer: 'Babylon',		
					reference: '(Rev 18:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 398,		
					title: 'Which king in the Old Testament built the first temple in Jerusalem?',		
					answer: 'Solomon',		
					reference: '(2 Chr 3:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 399,		
					title: 'Why did Jesus say we should not "judge people"?',		
					answer: 'So that we are not judged',		
					reference: '(Matt 7:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 400,		
					title: 'What happened to the prison keeper and his family after finding Paul and Silas released from their chains?',		
					answer: 'They believed and were baptized',		
					reference: '(Acts 16:33)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 401,		
					title: 'How is man "tempted"?',		
					answer: 'He is enticed by his own lust',		
					reference: '(Jam 1:14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 402,		
					title: 'What natural disaster happened when Abram and Sarai arrived in the land of Canaan?',		
					answer: 'A famine',		
					reference: '(Gen 12:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 403,		
					title: 'Which disciple did Paul commend for having "the same faith his mother had"?',		
					answer: 'Timothy',		
					reference: '(2 Tim 1:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 404,		
					title: 'What did the shepherds do after they had visited Jesus?',		
					answer: 'Spread the news about Jesus\' birth',		
					reference: '(Luke 2:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 405,		
					title: 'Who went back to Jerusalem after the captivity to encourage the people to build the walls of the city again?',		
					answer: 'Nehemiah',		
					reference: '(Neh 2:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 406,		
					title: 'Who was the first of the apostles to perform a miracle in the name of Jesus?',		
					answer: 'Peter',		
					reference: '(Acts 3:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 407,		
					title: 'How did Korah and his family die after seeking priesthood duties beyond those they already had?',		
					answer: 'They were swallowed up by the earth',		
					reference: '(Num 16:1-35)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 408,		
					title: 'What was the name of Isaac\'s wife?',		
					answer: 'Rebekah',		
					reference: '(Gen 24:67)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 409,		
					title: 'How does the Bible describe the location of the Garden of Eden?',		
					answer: 'In the east',		
					reference: '(Gen 2:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 410,		
					title: 'In the vision of Jesus in Revelation, what came out of Jesus\' mouth?',		
					answer: 'A sharp sword',		
					reference: '(Rev 19:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 411,		
					title: 'What was Paul\'s home town?',		
					answer: 'Tarsus',		
					reference: '(Acts 21:39)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 412,		
					title: 'Which judge was betrayed to the Philistines by a woman?',		
					answer: 'Samson',		
					reference: '(Jdg 16:5-6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 413,		
					title: 'What happened to forty-two of the children who made fun of Elisha\'s baldness?',		
					answer: 'Two bears came out of the woods and killed them',		
					reference: '(2 Ki 2:24)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 414,		
					title: 'What came out of the fire Paul made on Malta and attacked him?',		
					answer: 'Viper',		
					reference: '(Acts 28:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 415,		
					title: 'Who refused to worship Nebuchadnezzar\'s golden image?',		
					answer: 'Shadrach, Meshach and Abednego',		
					reference: '(Dan 3:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 416,		
					title: 'In the Sermon on the Mount, what did Jesus say would happen to the meek?',		
					answer: 'They will inherit the earth',		
					reference: '(Matt 5:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 417,		
					title: 'Where did Moses first meet his future wife?',		
					answer: 'By a well in the land of Midian',		
					reference: '(Exo 2:16-21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 418,		
					title: 'Out of the ten lepers Jesus healed, what nationality was the one who returned to thank him?',		
					answer: 'Samaritan',		
					reference: '(Luke 17:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 419,		
					title: 'Who did the men of Athens ignorantly worship?',		
					answer: 'The Unknown God',		
					reference: '(Acts 17:22-23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 420,		
					title: 'What did Saul see on the road approaching Damascus?',		
					answer: 'A shining light from heaven',		
					reference: '(Acts 9:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 421,		
					title: 'How long did Jonah say it would be before Nineveh was to be overthrown?',		
					answer: 'Forty days',		
					reference: '(John 3:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 422,		
					title: 'What was the name of Samson\'s father?',		
					answer: 'Manoah',		
					reference: '(Jdg 13:24)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 423,		
					title: 'Who did Amnon love, and then hate even more than he had loved her?',		
					answer: 'Tamar',		
					reference: '(2 Sam 13:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 424,		
					title: 'Where were the Jews taken captive to when Jerusalem was destroyed?',		
					answer: 'Babylon',		
					reference: '(Jer 29:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 425,		
					title: 'When was the festival of Passover established?',		
					answer: 'When the plague of the death of the firstborn was brought upon the land of Egypt',		
					reference: '(Exo 12:27)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 426,		
					title: 'What sin did Noah commit after he began to be a "man of the soil"?',		
					answer: 'Drunkenness',		
					reference: '(Gen 9:20-21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 427,		
					title: 'Why were the Israelites afraid to enter the Promised Land?',		
					answer: 'The inhabitants were great and tall',		
					reference: '(Num 13:33-14:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 428,		
					title: 'What did the silversmith do with Micah\'s silver?',		
					answer: 'Made it into an idol',		
					reference: '(Jdg 17:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 429,		
					title: 'What was Paul\'s profession?',		
					answer: 'Tentmaker',		
					reference: '(Acts 18:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 430,		
					title: 'What was the name of Ahasuerus\' new queen?',		
					answer: 'Esther',		
					reference: '(Est 2:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 431,		
					title: 'According to the words of Jesus in the Sermon on the Mount, "a city that is on a hill cannot be..." what?',		
					answer: 'Hidden',		
					reference: '(Matt 5:14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 432,		
					title: 'What was the fate of Shechem, the prince who fell in love with Dinah, daughter of Jacob?',		
					answer: 'He, his father, and the men of his city were slain by Dinah\'s brothers',		
					reference: '(Gen 34)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 433,		
					title: 'What book of the Bible follows Philemon?',		
					answer: 'Hebrews',		
					reference: '(Phm 1:25 - Heb 1:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 434,		
					title: 'During Jacob\'s struggle with the angel, the hollow of which part of Jacob\'s body was touched and put out of joint?',		
					answer: 'Hollow of thigh / Hip',		
					reference: '(Gen 32:25)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 435,		
					title: 'Which Christian doctrine did the Sadducees reject?',		
					answer: 'Resurrection',		
					reference: '(Matt 22:23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 436,		
					title: 'For how many years had the woman with the issue of blood suffered before she was healed by Jesus?',		
					answer: 'Twelve years',		
					reference: '(Matt 9:20)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 437,		
					title: 'What was the affliction of Bartimaeus?',		
					answer: 'Blind',		
					reference: '(Mark 10:46)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 438,		
					title: 'What was the color of the robe placed on Jesus by the soldiers?',		
					answer: 'Scarlet / Purple',		
					reference: '(Matt 27:28; John 19:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 439,		
					title: 'How did Paul say we should let our requests be made known to God?',		
					answer: 'By prayer and supplication with thanksgiving',		
					reference: '(Php 4:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 440,		
					title: 'In the Sermon on the Mount, what does Jesus tell us the earth is?',		
					answer: 'God\'s footstool',		
					reference: '(Matt 5:35)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 441,		
					title: 'In which book of the Bible do we find "Nebuchadnezzar\'s image"?',		
					answer: 'Daniel',		
					reference: '(Dan 2:31-36)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 442,		
					title: 'Where was Abraham born?',		
					answer: 'Ur',		
					reference: '(Gen 11:31)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 443,		
					title: 'Who was given a son following her prayer to God in the temple, during which the priest accused her of being drunk?',		
					answer: 'Hannah',		
					reference: '(1 Sam 1:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 444,		
					title: 'Who asked for an understanding heart to judge God\'s people?',		
					answer: 'Solomon',		
					reference: '(1 Ki 3:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 445,		
					title: 'What is "sin"?',		
					answer: 'The transgression of the law',		
					reference: '(1 Jn 3:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 446,		
					title: 'For how long did David reign?',		
					answer: 'Forty years',		
					reference: '(2 Sam 5:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 447,		
					title: 'How many Psalms are there in the Bible?',		
					answer: '150',		
					reference: '(Ps 1:1-150:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 448,		
					title: 'Jesus used a little child to show the futility of an argument among the disciples. What were they arguing about?',		
					answer: 'Who is the greatest in heaven',		
					reference: '(Matt 18:1-4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 449,		
					title: 'Whose twelve year old daughter did Jesus raise from the dead?',		
					answer: 'Jairus\'',		
					reference: '(Luke 8:41)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 450,		
					title: 'What was the name of Ruth\'s great-grandson?',		
					answer: 'David',		
					reference: '(Ruth 4:22)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 451,		
					title: 'On what island was John when he was given the vision of Revelation?',		
					answer: 'Patmos',		
					reference: '(Rev 1:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 452,		
					title: 'What happened to King Nebuchadnezzar before being restored as king?',		
					answer: 'He went mad and lived as a beast',		
					reference: '(Dan 4:33-36)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 453,		
					title: 'Where did Jonah try to run to instead of going to Nineveh as God had commanded?',		
					answer: 'Tarshish',		
					reference: '(John 1:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 454,		
					title: 'Who did Paul send to Rome, requesting that she was given a welcome worthy of the saints?',		
					answer: 'Phoebe',		
					reference: '(Rom 16:1-2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 455,		
					title: 'Whose mother took him a little coat once a year?',		
					answer: 'Samuel',		
					reference: '(1 Sam 2:19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 456,		
					title: 'Which judge killed Eglon, King of Moab?',		
					answer: 'Ehud',		
					reference: '(Jdg 3:15-25)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 457,		
					title: 'In a parable told by Jesus, what did the rich man do with the surplus of crops that he grew?',		
					answer: 'Built larger barns to store them',		
					reference: '(Luke 12:18)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 458,		
					title: 'In the parable of the leaven, what is leaven more commonly known as?',		
					answer: 'Yeast',		
					reference: '(Matt 13:33)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 459,		
					title: 'What bird could poor people use for sacrifices if they could not afford lambs?',		
					answer: 'Turtledoves or Pigeons',		
					reference: '(Lev 5:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 460,		
					title: 'Which book of prophecy was the Ethiopian eunuch reading from?',		
					answer: 'Isaiah',		
					reference: '(Acts 8:30)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 461,		
					title: 'Who said, "When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things"?',		
					answer: 'Paul',		
					reference: '(1 Cor 13:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 462,		
					title: 'What is the first line of Psalm 1?',		
					answer: 'Blessed is the man who walks not in the counsel of the ungodly',		
					reference: '(Ps 1:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 463,		
					title: 'What was Peter\'s motherin- law sick with?',		
					answer: 'A fever',		
					reference: '(Matt 8:14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 464,		
					title: 'Who instructed her daughter to ask for the head of John the Baptist?',		
					answer: 'Herodias',		
					reference: '(Matt 14:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 465,		
					title: 'Who decreed that a census of the entire Roman world should be taken at the time of Jesus\' birth?',		
					answer: 'Augustus Caesar',		
					reference: '(Luke 2:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 466,		
					title: 'Which woman, who was "full of good works and acts of charity", was raised from the dead by Peter at Lydda?',		
					answer: 'Tabitha (Dorcas)',		
					reference: '(Acts 9:40)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 467,		
					title: 'What did Daniel do for Nebuchadnezzar that no-one else was able to do?',		
					answer: 'Interpret his dreams',		
					reference: '(Dan 2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 468,		
					title: 'What was on the head of the woman "clothed with the sun"?',		
					answer: 'A crown of twelve stars',		
					reference: '(Rev 12:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 469,		
					title: 'How did Uriah, Bathsheba\'s husband, die?',		
					answer: 'Cut down after David instructed his men to abandon Uriah in battle',		
					reference: '(2 Sam 11:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 470,		
					title: 'When Paul was shipwrecked on Malta how many people on the ship drowned?',		
					answer: 'None',		
					reference: '(Acts 27:22,44)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 471,		
					title: 'How did Jesus say true worshippers should worship God when he was talking to the woman at the well?',		
					answer: 'In spirit and truth',		
					reference: '(John 4:23-24)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 472,		
					title: 'Which profession does Jesus compare himself to spiritually?',		
					answer: 'Shepherd',		
					reference: '(John 10:14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 473,		
					title: 'Under the Mosaic Law, what was the punishment for someone who hit their father?',		
					answer: 'Death',		
					reference: '(Exo 21:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 474,		
					title: 'What presents did Pharaoh give to Joseph when he was given charge of Egypt?',		
					answer: 'His ring, fine linen and a gold chain',		
					reference: '(Gen 41:42)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 475,		
					title: 'What was taken off and handed over to signify the agreement between Boaz and the kinsman?',		
					answer: 'Sandal',		
					reference: '(Ruth 4:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 476,		
					title: 'Peacocks were imported by which king of Israel?',		
					answer: 'Solomon',		
					reference: '(1 Ki 10:22)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 477,		
					title: 'Why did Boaz allow Ruth to glean in his field?',		
					answer: 'She had looked after Naomi',		
					reference: '(Ruth 2:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 478,		
					title: 'What punishment was Zacharias given for not believing the angel?',		
					answer: 'He was made dumb',		
					reference: '(Luke 1:20)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 479,		
					title: 'Which direction did the scorching wind upon Jonah come from?',		
					answer: 'East',		
					reference: '(John 4:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 480,		
					title: 'Why did the kinsman not want to marry Ruth?',		
					answer: 'Didn't want to spoil his inheritance',		
					reference: '(Ruth 4:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 481,		
					title: 'How many times did Samson lie about his source of strength to Delilah?',		
					answer: 'Three',		
					reference: '(Jdg 16:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 482,		
					title: 'Which book of the Bible begins with "The book of the generation of Jesus Christ, the son of David, the son of Abraham."?',		
					answer: 'Matthew',		
					reference: '(Matt 1:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 483,		
					title: 'Jephthah made a vow to God, with what effect on his daughter?',		
					answer: 'Her life was sacrificed to God',		
					reference: '(Jdg 11:30-40)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 484,		
					title: 'Who did Mary suppose Jesus to be at first after the resurrection?',		
					answer: 'Gardener',		
					reference: '(John 20:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 485,		
					title: 'How did Jesus reveal the one who would betray him?',		
					answer: 'Dipped a piece of bread and passed it to him',		
					reference: '(John 13:26)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 486,		
					title: 'Which two Old Testament characters appeared with Jesus at the transfiguration?',		
					answer: 'Elijah and Moses',		
					reference: '(Matt 17:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 487,		
					title: 'Who prayed for the fiery serpents to be taken away from Israel?',		
					answer: 'Moses',		
					reference: '(Num 21:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 488,		
					title: 'Which married couple did Paul become friends with at Corinth?',		
					answer: 'Aquila and Priscilla',		
					reference: '(Acts 18:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 489,		
					title: 'Who persuaded Delilah to betray Samson?',		
					answer: 'Lords of the Philistines',		
					reference: '(Jdg 16:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 490,		
					title: 'When Jesus died, for how long was there darkness over the land?',		
					answer: 'Three hours',		
					reference: '(Luke 23:44)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 491,		
					title: 'What service did Nehemiah perform for King Artaxerxes?',		
					answer: 'Cupbearer',		
					reference: '(Neh 1:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 492,		
					title: 'What is the next line of the Lord\'s Prayer after "Give us this day our daily bread..."?',		
					answer: 'And forgive us our debts/ sins',		
					reference: '(Matt 6:11-12; Luke 11:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 493,		
					title: 'What did Abigail prevent David from doing to Nabal?',		
					answer: 'Murdering him',		
					reference: '(1 Sam 25:34-35)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 494,		
					title: 'Who became nurse to Ruth\'s son?',		
					answer: 'Naomi',		
					reference: '(Ruth 4:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 495,		
					title: 'According to the law, why could the Israelites not eat blood?',		
					answer: 'God said, "the blood is the life."',		
					reference: '(Deut 12:23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 496,		
					title: 'What relation was Jacob to Abraham?',		
					answer: 'Grandson',		
					reference: '(Matt 1:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 497,		
					title: 'What killed the plant that God had provided Jonah for shade?',		
					answer: 'A worm',		
					reference: '(John 4:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 498,		
					title: 'What did the prophet Micah say about Jesus\' birth?',		
					answer: 'He would be born in Bethlehem',		
					reference: '(Mic 5:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 499,		
					title: 'What did John do with the little book he took from the angel?',		
					answer: 'He ate it',		
					reference: '(Rev 10:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 500,		
					title: 'Who went up yearly to worship God in Shiloh, and one year prayed to God for a baby?',		
					answer: 'Hannah',		
					reference: '(1 Sam 1:3-11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 501,		
					title: 'In which tribe was the city of Bethlehem?',		
					answer: 'Judah',		
					reference: '(Mic 5:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 502,		
					title: 'What was Peter doing when he denied Jesus for the second time?',		
					answer: 'Warming himself by a fire',		
					reference: '(John 18:25)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 503,		
					title: 'What did Jonah do while he waited to see Nineveh\'s fate?',		
					answer: 'He sat down on the East of the city and made a shelter',		
					reference: '(John 4:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 504,		
					title: 'Who carried the cross for Christ?',		
					answer: 'Simon of Cyrene',		
					reference: '(Matt 27:32)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 505,		
					title: 'On which mountain range did Noah\'s ark come to rest?',		
					answer: 'Ararat',		
					reference: '(Gen 8:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 506,		
					title: 'Which two tribes of Israel were not named after sons of Jacob?',		
					answer: 'Ephraim and Manasseh',		
					reference: '(Josh 14:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 507,		
					title: 'What did the Queen of Sheba give to Solomon?',		
					answer: '(120 talents of) gold, spices, and precious stones',		
					reference: '(1 Ki 10:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 508,		
					title: 'What should Philemon do if his slave owed him anything?',		
					answer: 'Charge it to Paul',		
					reference: '(Phm 1:18)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 509,		
					title: 'How many books are there in the Old Testament?',		
					answer: 'Thirty-nine',		
					reference: '(Gen 1:1 - Mal 4:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 510,		
					title: 'According to Old Testament law, what should you not cook a young goat in?',		
					answer: 'Its mother\'s milk',		
					reference: '(Ex 23:19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 511,		
					title: 'What did Joseph want to do when he discovered Mary was pregnant?',		
					answer: '(Quietly) divorce her',		
					reference: '(Matt 1:19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 512,		
					title: 'What did Boaz say Naomi was selling?',		
					answer: 'A parcel of land',		
					reference: '(Ruth 4:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 513,		
					title: 'Abram was rich in gold, silver and what else?',		
					answer: 'Cattle',		
					reference: '(Gen 13:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 514,		
					title: 'How much of Elijah\'s spirit did Elisha receive?',		
					answer: 'Double (portion)',		
					reference: '(2 Ki 2:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 515,		
					title: 'What was unusual about the 700 Benjamite soldiers who could sling a stone and hit their target every time?',		
					answer: 'They were all left-handed',		
					reference: '(Jdg 20:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 516,		
					title: 'What relation was Annas to Caiaphas?',		
					answer: 'Father-in-law',		
					reference: '(John 18:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 517,		
					title: 'According to James, what is "pure and undefiled religion"?',		
					answer: 'To visit the fatherless and widows, and to keep yourself unspotted from the world',		
					reference: '(Jam 1:27)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 518,		
					title: 'When in prison at what time did Paul and Silas pray and sing to God?',		
					answer: 'Midnight',		
					reference: '(Acts 16:25)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 519,		
					title: 'What did Daniel and his three friends eat instead of the king\'s meat and drink?',		
					answer: 'Pulses and water',		
					reference: '(Dan 1:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 520,		
					title: 'What did Jesus say is the "greatest commandment in the law"?',		
					answer: 'To love God with all your heart, soul and mind',		
					reference: '(Mark 12:29-30)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 521,		
					title: 'Who was afflicted with leprosy for speaking out against Moses?',		
					answer: 'Miriam',		
					reference: '(Num 12:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 522,		
					title: 'After the Babylonian exile, the Jews sought wealth and possessions for themselves. What should they have been doing?',		
					answer: 'Rebuilding the temple',		
					reference: '(Hag 1:2-6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 523,		
					title: 'What did God count Abram\'s faith to him as?',		
					answer: 'Righteousness',		
					reference: '(Gen 15:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 524,		
					title: 'What sin stopped Moses from leading the children of Israel into the Promised Land?',		
					answer: 'Hitting a rock twice (instead of speaking to it)',		
					reference: '(Num 20:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 525,		
					title: 'Whose hair when cut annually weighed two hundred shekels by the king\'s weight?',		
					answer: 'Absalom',		
					reference: '(2 Sam 14:26)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 526,		
					title: 'During what traumatic event did the apostle Paul take bread and give thanks?',		
					answer: 'Sea voyage',		
					reference: '(Acts 27:35)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 527,		
					title: 'Which man killed a lion with his bare hands?',		
					answer: 'Samson',		
					reference: '(Jdg 14:5-6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 528,		
					title: 'What was the sign that the angels gave to the shepherds, so that they would recognize Jesus?',		
					answer: 'Wrapped in swaddling clothes, lying in a manger',		
					reference: '(Luke 2:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 529,		
					title: 'Who was to be named Zacharias, after the name of his father, until his mother intervened?',		
					answer: 'John',		
					reference: '(Luke 1:60)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 530,		
					title: 'In what town did Jesus turn water into wine?',		
					answer: 'Cana',		
					reference: '(John 2:1-11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 531,		
					title: 'How long had the infirm man lain at the pool of Bethesda?',		
					answer: 'Thirty-eight years',		
					reference: '(John 5:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 532,		
					title: 'What "doeth good like a medicine"?',		
					answer: 'A merry heart',		
					reference: '(Pro 17:22)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 533,		
					title: 'What was God to give Abraham as an everlasting possession?',		
					answer: 'The land of Canaan',		
					reference: '(Gen 17:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 534,		
					title: 'What lie was told about Naboth that led to him being stoned and Ahab taking possession of his vineyard?',		
					answer: 'He had blasphemed against God and the king',		
					reference: '(1 Ki 21:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 535,		
					title: 'Which supernatural being or beings does the Bible say the Sadducees did not believe in?',		
					answer: 'Angels',		
					reference: '(Acts 23:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 536,		
					title: 'Who won the hand of Caleb\'s daughter, Achsah?',		
					answer: 'Othniel',		
					reference: '(Josh 15:16-17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 537,		
					title: 'What is the "light of the body"?',		
					answer: 'The eye',		
					reference: '(Matt 6:22)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 538,		
					title: 'The southern kingdom of divided Israel eventually fell, but to which great power?',		
					answer: 'Babylon',		
					reference: '(2 Ki 25)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 539,		
					title: 'You will be healed if you "pray for one another" and what else?',		
					answer: 'Confess your faults',		
					reference: '(Jam 5:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 540,		
					title: 'What is in the hypocrite\'s eye?',		
					answer: 'A beam',		
					reference: '(Matt 7:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 541,		
					title: 'Which book of the Bible follows Jonah?',		
					answer: 'Micah',		
					reference: '(John 4:11 - Mic 1:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 542,		
					title: 'What inscription was on the altar in Athens?',		
					answer: 'To the Unknown God',		
					reference: '(Acts 17:23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 543,		
					title: 'In which book of prophecy do we read about the valley of dry bones?',		
					answer: 'Ezekiel',		
					reference: '(Eze 37:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 544,		
					title: 'Which baby was named after his mother\'s laughter?',		
					answer: 'Isaac',		
					reference: '(Gen 21:6 / Strong\'s H3327)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 545,		
					title: 'Demetrius, of Ephesus was a...?',		
					answer: 'Silversmith',		
					reference: '(Acts 19:24)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 546,		
					title: 'On which day of the year could the High Priest enter the Holiest Place, the inner most part of the temple where the covenant box was kept?',		
					answer: 'Day of Atonement',		
					reference: '(Lev 16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 547,		
					title: 'What was the name of the temple gate at which the lame man was laid daily?',		
					answer: 'Beautiful Gate',		
					reference: '(Acts 3:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 548,		
					title: 'To which Jewish sect did Nicodemus belong?',		
					answer: 'Pharisees',		
					reference: '(John 3:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 549,		
					title: 'What is the first recorded dream of Joseph, son of Jacob?',		
					answer: 'Sheaves of wheat bowing down to other sheaves',		
					reference: '(Gen 37:5-7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 550,		
					title: 'To which tribe did the apostle Paul belong?',		
					answer: 'Benjamin',		
					reference: '(Rom 11:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 551,		
					title: 'How does James say we should "wait for the coming of the Lord"?',		
					answer: 'Patiently',		
					reference: '(Jam 5:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 552,		
					title: 'The blessed man will be like a tree planted byÉ. what?',		
					answer: 'Rivers of water',		
					reference: '(Ps 1:1-3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 553,		
					title: 'How old was Abraham when his son Isaac was born?',		
					answer: '100',		
					reference: '(Gen 21:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 554,		
					title: 'In the parable of the Pharisee and the Publican, what did the Pharisee thank God for?',		
					answer: 'That he was not sinful like other men',		
					reference: '(Luke 18:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 555,		
					title: 'How many times did Jesus say you should forgive your brother when he sins against you?',		
					answer: 'Seventy times seven',		
					reference: '(Matt 18:22)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 556,		
					title: 'What question concerning marriage did the Pharisees use to tempt Jesus?',		
					answer: 'Is it lawful for a man to put away his wife? (Divorce)',		
					reference: '(Matt 19:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 557,		
					title: 'How does Paul tell us to "work out our own salvation"?',		
					answer: 'With fear and trembling',		
					reference: '(Php 2:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 558,		
					title: 'In the parable of the cloth and wine, why does no man put new wine into old bottles?',		
					answer: 'It will burst the bottles',		
					reference: '(Luke 5:37)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 559,		
					title: 'In which city did King Herod live at the time of Jesus\' birth?',		
					answer: 'Jerusalem',		
					reference: '(Matt 2:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 560,		
					title: 'What is the "root of all evil"?',		
					answer: 'Love of money',		
					reference: '(1 Tim 6:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 561,		
					title: 'What does the law say to do when you see a bird in its nest?',		
					answer: 'Let the mother bird go free',		
					reference: '(Deut 22:6-7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 562,		
					title: 'Which tribe of Israel received no inheritance of land?',		
					answer: 'Levi',		
					reference: '(Deut 10:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 563,		
					title: 'In Nebuchadnezzar\'s dream what happened to destroy the statue made from different metals?',		
					answer: 'A stone hit the feet and broke them into pieces',		
					reference: '(Dan 2:34)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 564,		
					title: 'Which King took possession of Naboth\'s vineyard?',		
					answer: 'Ahab',		
					reference: '(1 Ki 21:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 565,		
					title: 'For how many days did Jesus appear to his disciples after his resurrection?',		
					answer: 'Forty',		
					reference: '(Acts 1:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 566,		
					title: 'Who did Paul write a letter to concerning his slave Onesimus?',		
					answer: 'Philemon',		
					reference: '(Phm 1:1-25)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 567,		
					title: 'How many churches of Asia Minor were listed in Revelation?',		
					answer: 'Seven',		
					reference: '(Rev 1:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 568,		
					title: 'What object did Gideon place on the ground to receive a sign from God?',		
					answer: 'Fleece',		
					reference: '(Jdg 6:37)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 569,		
					title: 'Why did Moses\' hand become leprous?',		
					answer: 'As a sign',		
					reference: '(Exo 4:6-8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 570,		
					title: 'In which city in Judah did Cyrus tell the Israelites to build the temple?',		
					answer: 'Jerusalem',		
					reference: '(Ezr 6:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 571,		
					title: 'Which missionary was described as having "known the holy scriptures from an early age"?',		
					answer: 'Timothy',		
					reference: '(2 Tim 3:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 572,		
					title: 'What affliction did Paul strike Elymas the sorcerer down with?',		
					answer: 'Blindness',		
					reference: '(Acts 13:8,11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 573,		
					title: 'Who was Boaz a kinsman of?',		
					answer: 'Elimelech',		
					reference: '(Ruth 2:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 574,		
					title: 'What animals were carved on Solomon\'s throne?',		
					answer: 'Lions',		
					reference: '(1 Ki 10:19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 575,		
					title: 'What did Jesus and the disciples have for breakfast when Jesus appeared to them after the resurrection by the Sea of Tiberias?',		
					answer: 'Bread and fish',		
					reference: '(John 21:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 576,		
					title: 'Which woman was a seller of purple goods?',		
					answer: 'Lydia',		
					reference: '(Acts 16:14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 577,		
					title: 'What were the restrictions on marriage for the daughters of Zelophehad?',		
					answer: 'They must marry within their tribe',		
					reference: '(Num 36:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 578,		
					title: 'Who said, "A light to lighten the Gentiles, and the glory of thy people Israel," when he saw Jesus?',		
					answer: 'Simeon',		
					reference: '(Luke 2:25,32)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 579,		
					title: 'How did Moses assure victory against the Amalekites?',		
					answer: 'Kept his hands held up',		
					reference: '(Exo 17:11-12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 580,		
					title: 'What was the occupation of Hosea\'s wife?',		
					answer: 'Harlot',		
					reference: '(Hos 1:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 581,		
					title: 'In the Sermon on the Mount, what does Jesus say you should do when you fast?',		
					answer: 'Anoint your head, and wash your face',		
					reference: '(Matt 6:18)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 582,		
					title: 'Which church did Jesus accuse of being lukewarm?',		
					answer: 'Laodicea',		
					reference: '(Rev 3:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 583,		
					title: 'Why are the Thessalonians told not to worry about those Christians who have died?',		
					answer: 'They will be raised to life again',		
					reference: '(1 Th 4:13-15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 584,		
					title: 'In the parable of the sower, what happened to the seed that fell on the path?',		
					answer: 'Eaten by birds',		
					reference: '(Matt 13:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 585,		
					title: 'What was the name of the man who requested Jesus\' body for burial?',		
					answer: 'Joseph (of Arimathaea)',		
					reference: '(Matt 27:57-58)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 586,		
					title: 'How many Philistines did Samson say he had killed with the jawbone of a donkey?',		
					answer: '1000',		
					reference: '(Jdg 15:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 587,		
					title: 'Which book of the Bible precedes Jonah?',		
					answer: 'Obadiah',		
					reference: '(Oba 1:21 - John 1:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 588,		
					title: 'Who did Samuel anoint as the first King of Israel?',		
					answer: 'Saul',		
					reference: '(1 Sam 10:1,19-24)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 589,		
					title: 'What was mankind\'s first sin in the Bible?',		
					answer: 'Eating some fruit',		
					reference: '(Gen 3:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 590,		
					title: 'What was the first bird released from the ark?',		
					answer: 'Raven',		
					reference: '(Gen 8:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 591,		
					title: 'What nationality was Timothy\'s father?',		
					answer: 'Greek',		
					reference: '(Acts 16:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 592,		
					title: 'In Revelation, what is the "number of a man"?',		
					answer: '666',		
					reference: '(Rev 13:18)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 593,		
					title: 'How many elders sat around the throne of God?',		
					answer: 'Twenty-four',		
					reference: '(Rev 4:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 594,		
					title: 'What order did Joshua give to God while fighting the Amorites?',		
					answer: 'Make the sun and moon stand still',		
					reference: '(Josh 10:12-14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 595,		
					title: 'How many years did the Lord add to Hezekiah\'s life after being healed of his sickness?',		
					answer: 'Fifteen',		
					reference: '(2 Ki 20:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 596,		
					title: 'What was the second plague upon Egypt?',		
					answer: 'Frogs',		
					reference: '(Exo 8:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 597,		
					title: 'Which disciple looked after Mary, after the death of Jesus?',		
					answer: 'John',		
					reference: '(John 19:26-27)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 598,		
					title: 'Jesus was a high priest after the order of which ancient king, mentioned in Psalm 110?',		
					answer: 'Melchizedek',		
					reference: '(Ps 110:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 599,		
					title: 'Which two provinces looked up to Thessalonica as an example?',		
					answer: 'Macedonia & Achaia',		
					reference: '(1 Th 1:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 600,		
					title: 'Who was Noah\'s father?',		
					answer: 'Lamech',		
					reference: '(Gen 5:28-29)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 601,		
					title: 'Who did Pilate send Jesus to after he had interrogated him?',		
					answer: 'Herod',		
					reference: '(Luke 23:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 602,		
					title: 'Daniel had a dream about four things. What sort of things?',		
					answer: 'Beasts',		
					reference: '(Dan 7:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 603,		
					title: 'In the parable of the sower, what did the seed that fell among thorns represent?',		
					answer: 'Those people who hear God\'s word but then it\'s choked out by worldly cares',		
					reference: '(Matt 13:22)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 604,		
					title: 'Who was the father of Jonah?',		
					answer: 'Amittai',		
					reference: '(John 1:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 605,		
					title: 'What relation to Abram was Lot?',		
					answer: 'His nephew',		
					reference: '(Gen 14:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 606,		
					title: 'Who will the "least person in the Kingdom of God" be greater than?',		
					answer: 'John the Baptist',		
					reference: '(Luke 7:28)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 607,		
					title: 'In what month of Elisabeth\'s pregnancy did the angel appear to Mary?',		
					answer: 'Sixth',		
					reference: '(Luke 1:26)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 608,		
					title: 'What was the content of the cupbearer\'s dream interpreted by Joseph?',		
					answer: 'A vine bringing forth grapes which are pressed into a cup',		
					reference: '(Gen 40:9-12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 609,		
					title: 'Hope deferred maketh what sick?',		
					answer: 'The heart',		
					reference: '(Pro 13:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 610,		
					title: 'Who laid their hands on Saul of Tarsus, curing him of the blindness he received on the road to Damascus?',		
					answer: 'Ananias',		
					reference: '(Acts 9:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 611,		
					title: 'Who was Paul with when he wrote the letter to Philemon?',		
					answer: 'Timothy',		
					reference: '(Phm 1:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 612,		
					title: 'What did Joseph send to his father from Egypt?',		
					answer: 'Ten male donkeys and ten female donkeys laden with goods from Egypt',		
					reference: '(Gen 45:23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 613,		
					title: 'In which town did Martha and Mary live?',		
					answer: 'Bethany',		
					reference: '(John 11:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 614,		
					title: 'Who stole her father\'s household gods?',		
					answer: 'Rachel',		
					reference: '(Gen 31:32)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 615,		
					title: 'What was the fate of the man who had no wedding robe at the parable of the marriage feast?',		
					answer: 'Cast into darkness',		
					reference: '(Matt 22:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 616,		
					title: 'How long did Solomon reign over Israel?',		
					answer: 'Forty years',		
					reference: '(1 Ki 11:42)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 617,		
					title: 'In Psalm 52, the psalmist describes himself as what kind of tree in the house of God?',		
					answer: 'Olive',		
					reference: '(Ps 52:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 618,		
					title: 'Who was compared unfavorably to the lilies of the field?',		
					answer: 'King Solomon',		
					reference: '(Matt 6:28-29)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 619,		
					title: 'Of what did Peter and John heal the man at the temple gate called Beautiful?',		
					answer: 'Lameness',		
					reference: '(Acts 3:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 620,		
					title: 'Which region was specially noted for its balm?',		
					answer: 'Gilead',		
					reference: '(Jer 46:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 621,		
					title: 'What should the Thessalonians do with brethren who are "not obeying the epistle\'s word"?',		
					answer: 'Have no company with them so that they are ashamed',		
					reference: '(2 Th 3:14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 622,		
					title: 'Why should a father not "provoke a child to anger"?',		
					answer: 'In case they become discouraged',		
					reference: '(Col 3:21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 623,		
					title: 'What did God rain down on the Amorite army as they passed through Beth-Horon, killing more of them than the Israelite army did?',		
					answer: 'Hailstones',		
					reference: '(Josh 10:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 624,		
					title: 'While John was baptizing, what did he call the Pharisees and Sadducees?',		
					answer: 'Generation of vipers',		
					reference: '(Matt 3:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 625,		
					title: 'Whose son did Elijah raise from the dead?',		
					answer: 'The widow of Zarephath',		
					reference: '(1 Ki 17:22)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 626,		
					title: 'Which group of people stood and watched Jesus as he ascended into heaven?',		
					answer: 'Men of Galilee (Disciples)',		
					reference: '(Acts 1:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 627,		
					title: 'What object did Elisha cause to float?',		
					answer: 'Axe head',		
					reference: '(2 Ki 6:5-6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 628,		
					title: 'By what name was the disciple Tabitha also known?',		
					answer: 'Dorcas',		
					reference: '(Acts 9:36)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 629,		
					title: 'From which land did Isaac tell Jacob not to take a wife?',		
					answer: 'Canaan',		
					reference: '(Gen 28:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 630,		
					title: 'How does Paul describe marriage in Hebrews?',		
					answer: 'Honorable',		
					reference: '(Heb 13:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 631,		
					title: 'To whom was Jesus referring when he said, "Go tell that fox, behold I cast out devils?"',		
					answer: 'Herod',		
					reference: '(Luke 13:31-32)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 632,		
					title: 'How old was Joseph when he began serving Pharaoh?',		
					answer: 'Thirty',		
					reference: '(Gen 41:46)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 633,		
					title: 'What did Naboth refuse to sell?',		
					answer: 'Vineyard',		
					reference: '(1 Ki 21:2-3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 634,		
					title: 'Which living creatures in the water were deemed unclean?',		
					answer: 'Those without fins and scales',		
					reference: '(Deut 14:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 635,		
					title: 'What must a Christian do to "earn their own bread to eat"?',		
					answer: 'Work quietly',		
					reference: '(2 Th 3:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 636,		
					title: 'What was the name of the father of Caleb the spy?',		
					answer: 'Jephunneh',		
					reference: '(Num 13:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 637,		
					title: 'Which apostle baptized the Ethiopian eunuch?',		
					answer: 'Philip',		
					reference: '(Acts 8:38)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 638,		
					title: 'Who promised the "gift of power to tread on serpents and scorpions"?',		
					answer: 'Jesus',		
					reference: '(Luke 10:19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 639,		
					title: 'Which king was saved from death by Abraham\'s prayer?',		
					answer: 'Abimelech',		
					reference: '(Gen 20:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 640,		
					title: 'What did Abram do when he heard that Lot was made a prisoner of war?',		
					answer: 'Fought to rescue him',		
					reference: '(Gen 14:14-16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 641,		
					title: 'Who sang, "My soul doth magnify the Lord"?',		
					answer: 'Mary',		
					reference: '(Luke 1:46)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 642,		
					title: 'At what place did the Israelites arrive only to find the water was too bitter to drink, whereupon God caused it to become sweet?',		
					answer: 'Marah',		
					reference: '(Exo 15:23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 643,		
					title: 'Which Psalm describes how well the Lord knows man, starting with the line, "O Lord, thou hast searched me, and known me"?',		
					answer: 'Psalm 139',		
					reference: '(Psalms)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 644,		
					title: 'When Moses blessed the tribes before his death, to what animal did he compare Gad?',		
					answer: 'Lion',		
					reference: '(Deut 33:20)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 645,		
					title: 'When Saul defeated the Amalekites he disobeyed God and took possessions from the land. What was the name of the king he also spared?',		
					answer: 'Agag',		
					reference: '(1 Sam 15:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 646,		
					title: 'What was Paul\'s "distinguishing mark" in the letters he wrote?',		
					answer: 'He wrote the greetings in his own handwriting',		
					reference: '(2 Th 3:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 647,		
					title: 'Which king had a feast using the gold and silver vessels taken from the temple in Jerusalem?',		
					answer: 'Belshazzar',		
					reference: '(Dan 5:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 648,		
					title: 'The fear of the Lord is the beginning of knowledge, but fools despise... what?',		
					answer: 'Wisdom and instruction',		
					reference: '(Pro 1:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 649,		
					title: 'How should a "merry person" behave, according to James?',		
					answer: 'Sing psalms',		
					reference: '(Jam 5:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 650,		
					title: 'What sacrifice did Mary and Joseph offer when the days of purification were complete after Jesus\' birth?',		
					answer: 'Two turtledoves or pigeons',		
					reference: '(Luke 2:24)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 651,		
					title: 'Who sat down under a tree and asked the Lord to take away his life?',		
					answer: 'Elijah',		
					reference: '(1 Ki 19:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 652,		
					title: 'What god did the Philistines offer sacrifices to?',		
					answer: 'Dagon',		
					reference: '(Jdg 16:23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 653,		
					title: 'Which judge unknowingly vowed his daughter to the Lord as a burnt offering?',		
					answer: 'Jephthah',		
					reference: '(Jdg 11:30-40)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 654,		
					title: 'God appeared to Jacob on the way to Egypt in a vision at Beer-sheba, but what did he tell him?',		
					answer: 'Don't fear going to Egypt, he would be made into a great nation there',		
					reference: '(Gen 46:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 655,		
					title: 'What did God tell the people not to eat after the flood?',		
					answer: 'Blood',		
					reference: '(Gen 9:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 656,		
					title: 'What punishment was given to Gehazi for his greed?',		
					answer: 'Made leprous',		
					reference: '(2 Ki 5:25-27)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 657,		
					title: 'How did Rahab let the invading Israelites identify her house?',		
					answer: 'She tied a red thread in the window',		
					reference: '(Josh 2:18)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 658,		
					title: 'Which angel told Daniel the meaning of his vision of the ram and the goat?',		
					answer: 'Gabriel',		
					reference: '(Dan 8:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 659,		
					title: 'Which king helped Solomon with his building projects?',		
					answer: 'Hiram, King of Tyre',		
					reference: '(1 Ki 7:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 660,		
					title: 'How many missionary journeys did Paul undertake before his journey to Rome?',		
					answer: 'Three',		
					reference: '(Acts 13 - 21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 661,		
					title: 'What was Timothy advised to take to help with his illnesses?',		
					answer: 'Wine',		
					reference: '(1 Tim 5:23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 662,		
					title: 'What happened to the prophet from Judah who was led to disobey God when a prophet from Bethel lied to him saying he was allowed to come back and share a meal with him?',		
					answer: 'Killed by a lion',		
					reference: '(1 Ki 13:24)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 663,		
					title: 'Who was the goddess of the Ephesians?',		
					answer: 'Diana (Artemis)',		
					reference: '(Acts 19:28)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 664,		
					title: 'How many volunteer soldiers did Gideon have initially?',		
					answer: '32000',		
					reference: '(Jdg 7:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 665,		
					title: 'What will Jesus "drink new in the Kingdom of God"?',		
					answer: 'The fruit of the vine',		
					reference: '(Matt 26:29)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 666,		
					title: 'What objects did Gideon and his army use to defeat the Midianites?',		
					answer: 'Trumpets, pitchers and lamps',		
					reference: '(Jdg 7:15-22)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 667,		
					title: 'Who had a slave named Onesimus?',		
					answer: 'Philemon',		
					reference: '(Phm 1:10-11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 668,		
					title: 'In which province was Thessalonica located?',		
					answer: 'Macedonia',		
					reference: '(Acts 16-18)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 669,		
					title: 'Which is the shortest Psalm?',		
					answer: 'Psalm 117',		
					reference: '(Ps 117)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 670,		
					title: 'How did the townspeople regard Ruth?',		
					answer: 'As a virtuous (worthy) woman',		
					reference: '(Ruth 3:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 671,		
					title: 'In Revelation, how many people from each tribe were "sealed"?',		
					answer: '12000',		
					reference: '(Rev 7:5-8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 672,		
					title: 'Who slept under a juniper tree after fleeing for his life?',		
					answer: 'Elijah',		
					reference: '(1 Ki 19:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 673,		
					title: 'Who thought that the gift of God could be purchased with money?',		
					answer: 'Simon (the sorcerer)',		
					reference: '(Acts 8:18)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 674,		
					title: 'What is described as a "tree of life to them that lay hold upon her"?',		
					answer: 'Wisdom',		
					reference: '(Pro 3:18)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 675,		
					title: 'What relation was John Mark to Barnabas?',		
					answer: 'Cousin / Sister\'s son (KJV)',		
					reference: '(Col 4:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 676,		
					title: 'Finish the proverb: "The rod and reproof give wisdom, but a child left to himself."..',		
					answer: 'Ébringeth his mother to shame',		
					reference: '(Pro 29:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 677,		
					title: 'Why wasn't David allowed to build God\'s house?',		
					answer: 'Because he was a man of war',		
					reference: '(1 Chr 28:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 678,		
					title: 'Which parts of his body did Peter ask Jesus to wash, after being told that unless Jesus washed his feet he would have no part with him?',		
					answer: 'Feet, hands and head',		
					reference: '(John 13:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 679,		
					title: 'What did the Holy Spirit look like when the disciples received it?',		
					answer: 'Tongues of fire',		
					reference: '(Acts 2:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 680,		
					title: 'Which two of the eight signs, or miracles, recorded in John, are also recorded in other gospel records?',		
					answer: 'Feeding of the 5,000 and Jesus walks on water',		
					reference: '(John 6:1; 6:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 681,		
					title: 'Who led the people of Israel into the Promised Land?',		
					answer: 'Joshua',		
					reference: '(Josh 1:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 682,		
					title: 'With what object did Jael kill Sisera?',		
					answer: 'Tent peg',		
					reference: '(Jdg 4:21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 683,		
					title: 'Praise ye him, all his angels: praise ye him, all his hosts, is followed by which line?',		
					answer: 'Praise ye him, sun and moon, praise him, all ye stars of light',		
					reference: '(Ps 148:2-3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 684,		
					title: 'Which of Leah\'s sons brought her mandrakes?',		
					answer: 'Reuben',		
					reference: '(Gen 30:14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 685,		
					title: 'It is "better to obtain wisdom" than what?',		
					answer: 'Gold',		
					reference: '(Pro 16:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 686,		
					title: 'In which book of the Bible do we read of David and Goliath?',		
					answer: '1 Samuel',		
					reference: '(1 Sam 17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 687,		
					title: 'Many of the chief rulers privately believed in Jesus. Why did they not confess this belief publicly?',		
					answer: 'They were afraid the Pharisees would put them out of the synagogue',		
					reference: '(John 12:42)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 688,		
					title: 'When Jesus left Nazareth and began his ministry in Capernaum, what message did he preach?',		
					answer: 'Repent: for the kingdom of heaven is at hand',		
					reference: '(Matt 4:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 689,		
					title: 'According to James, what should we do after "confessing our faults to one another"?',		
					answer: 'Pray for one another',		
					reference: '(Jam 5:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 690,		
					title: 'How old was Joshua when he died?',		
					answer: '110',		
					reference: '(Josh 24:29)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 691,		
					title: 'Who was the king of Judea at the time of Jesus\' birth?',		
					answer: 'Herod (the Great)',		
					reference: '(Matt 2:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 692,		
					title: 'What seed did Manna look like?',		
					answer: 'Coriander',		
					reference: '(Num 11:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 693,		
					title: 'Which disciple brought the boy with five loaves and two fishes to Jesus?',		
					answer: 'Andrew',		
					reference: '(John 6:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 694,		
					title: 'According to James, what should we do when we "fall into temptation"?',		
					answer: 'Count it all joy',		
					reference: '(Jam 1:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 695,		
					title: 'Whose "days are like grass," according to the Psalmist?',		
					answer: 'Man',		
					reference: '(Ps 103:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 696,		
					title: 'Which animal is associated with the first four of the seven seals?',		
					answer: 'Horse',		
					reference: '(Rev 6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 697,		
					title: 'Which kind of bird did Jesus say were "sold two for a farthing"?',		
					answer: 'Sparrows',		
					reference: '(Matt 10:29)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 698,		
					title: 'Who was the father of Abraham?',		
					answer: 'Terah',		
					reference: '(Gen 11:31)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 699,		
					title: 'How were the family warned that someone wanted to kill the baby Jesus?',		
					answer: 'In a dream',		
					reference: '(Matt 2:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 700,		
					title: 'How did the sailors discover Jonah was responsible for the storm?',		
					answer: 'Cast lots',		
					reference: '(John 1:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 701,		
					title: 'What did the chief priest and Pharisees give Judas to enable him to help arrest Jesus?',		
					answer: 'A band of men and officers',		
					reference: '(John 18:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 702,		
					title: 'How old was Josiah when he became king of Judah?',		
					answer: 'Eight',		
					reference: '(2 Ki 22:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 703,		
					title: 'What was the name of Abigail\'s first husband?',		
					answer: 'Nabal',		
					reference: '(1 Sam 25:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 704,		
					title: 'Why did Jephthah flee to the land of Tob?',		
					answer: 'He was illegitimate and his brothers drove him out',		
					reference: '(Jdg 11:1-3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 705,		
					title: 'Where did the hypocrites "love to pray"?',		
					answer: 'Standing in synagogues and on street corners',		
					reference: '(Matt 6:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 706,		
					title: 'Who did Paul heal at Lystra?',		
					answer: 'A lame man',		
					reference: '(Acts 14:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 707,		
					title: 'Which animal did the ten spies liken themselves to, when compared to the people of the land of Canaan?',		
					answer: 'Grasshoppers',		
					reference: '(Num 13:33)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 708,		
					title: 'After Pilate found no guilt in Christ, for what reason did the Jews say that Jesus should die?',		
					answer: 'He claimed to be the Son of God',		
					reference: '(John 19:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 709,		
					title: 'In a parable told by Jesus, two men went up to the temple to pray, a Pharisee and who else?',		
					answer: 'Publican (tax collector)',		
					reference: '(Luke 18:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 710,		
					title: 'Who were the first two disciples to be called?',		
					answer: 'Simon (Peter) and Andrew',		
					reference: '(Matt 4:18-19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 711,		
					title: 'How many sons did Gideon have?',		
					answer: 'Seventy',		
					reference: '(Jdg 8:30)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 712,		
					title: 'On which day of the creation did God create trees and plants?',		
					answer: 'Third',		
					reference: '(Gen 1:11-13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 713,		
					title: 'On which island did Paul preach on his first missionary journey?',		
					answer: 'Cyprus',		
					reference: '(Acts 13:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 714,		
					title: 'Why did the Pharisees deride Jesus when he said, "You cannot serve God and Mammon"?',		
					answer: 'They were covetous (loved money)',		
					reference: '(Luke 16:13-14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 715,		
					title: 'What was Samson\'s offer of reward if the Philistines could solve his riddle?',		
					answer: 'Clothing',		
					reference: '(Jdg 14:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 716,		
					title: 'How many of Nineveh\'s inhabitants could not "discern their left hand from their right hand"?',		
					answer: '120000',		
					reference: '(John 4:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 717,		
					title: 'What did the mighty angel throw into the sea that represented the throwing down of Babylon?',		
					answer: 'A stone like a great millstone',		
					reference: '(Rev 18:21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 718,		
					title: 'God calls us to a life of holiness, but according to Thessalonians what are we told we are doing if we ignore this advice?',		
					answer: 'Despising God',		
					reference: '(1 Th 4:7-8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 719,		
					title: 'How did Paul escape from Damascus?',		
					answer: 'In a basket down the city wall',		
					reference: '(Acts 9:23-25)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 720,		
					title: 'According to the Book of Proverbs, what is "bound in the heart of a child"?',		
					answer: 'Foolishness',		
					reference: '(Pro 22:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 721,		
					title: 'Which men murdered the Levite\'s concubine?',		
					answer: 'The men of Gibeah',		
					reference: '(Jdg 19:15-28)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 722,		
					title: 'What happened when the third vial of wrath was poured on the earth?',		
					answer: 'The rivers and fountains of waters became blood',		
					reference: '(Rev 16:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 723,		
					title: 'On what type of stone were the twelve children of Israel to have their names engraved, as part of the High Priest\'s garments?',		
					answer: 'An onyx',		
					reference: '(Exo 28:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 724,		
					title: 'What sin did Achan commit?',		
					answer: 'Theft',		
					reference: '(Josh 7:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 725,		
					title: 'Who was the father of Saul?',		
					answer: 'Kish',		
					reference: '(1 Sam 14:51)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 726,		
					title: 'What four beasts did Daniel see in a vision?',		
					answer: 'Lion, Bear, Leopard & Terrible beast',		
					reference: '(Dan 7:3-7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 727,		
					title: 'Wisdom is "more precious" than which gems?',		
					answer: 'Rubies',		
					reference: '(Pro 8:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 728,		
					title: 'What did the Israelites borrow from their Egyptian neighbors?',		
					answer: 'Jewels and clothing',		
					reference: '(Exo 3:22)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 729,		
					title: 'Who came into Galilee preaching the Kingdom of God?',		
					answer: 'Jesus',		
					reference: '(Mark 1:14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 730,		
					title: 'What did God create on the fifth day?',		
					answer: 'Underwater creatures and birds',		
					reference: '(Gen 1:20-23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 731,		
					title: 'What Egyptian name did Pharaoh give to Joseph?',		
					answer: 'Zaphnath-paaneah',		
					reference: '(Gen 41:45)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 732,		
					title: 'What did Jesus do before driving the money-changers out of the temple?',		
					answer: 'Made a whip',		
					reference: '(John 2:14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 733,		
					title: 'What reward did Jesus say the twelve apostles would get for forsaking everything and following him?',		
					answer: 'You will sit on twelve thrones judging the twelve tribes of Israel',		
					reference: '(Matt 19:28)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 734,		
					title: 'Who said, "Worthy is the lamb who was slain"?',		
					answer: 'Thousands upon thousands of angels',		
					reference: '(Rev 5:11-12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 735,		
					title: 'Who gave water to the camels of Abraham\'s servant, in answer to his prayer?',		
					answer: 'Rebekah',		
					reference: '(Gen 24:14-19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 736,		
					title: 'In which gospel does Jesus state that he is the "Bread of Life?"',		
					answer: 'John',		
					reference: '(John 6:48)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 737,		
					title: 'How many fish were caught in the miracle of the draught of fishes?',		
					answer: '153',		
					reference: '(John 21:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 738,		
					title: 'From which minor prophet is Jesus quoting when he says, "I am come to set the daughter against her mother"?',		
					answer: 'Micah',		
					reference: '(Mic 7:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 739,		
					title: 'After seeing the destruction of Jericho and Ai, the inhabitants of which city pretended to be travelers from a far off land to make a covenant of peace with the Israelites?',		
					answer: 'Gibeon',		
					reference: '(Josh 9:3-6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 740,		
					title: 'In the parable of the Good Samaritan, who was the first man to pass by the wounded man?',		
					answer: 'Priest',		
					reference: '(Luke 10:31)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 741,		
					title: 'What did Paul do when he couldn't bear to be away from the brethren at Thessalonica any longer?',		
					answer: 'Sent Timothy to encourage them',		
					reference: '(1 Th 3:1-2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 742,		
					title: 'What did James and John want to do to the unwelcoming Samaritan village?',		
					answer: 'Call down fire from heaven',		
					reference: '(Luke 9:54)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 743,		
					title: 'Jesus said not to "swear by your head" because you cannot do what?',		
					answer: 'Make one hair black or white',		
					reference: '(Matt 5:36)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 744,		
					title: 'On the fourth day God made the Sun, Moon and what else?',		
					answer: 'Stars',		
					reference: '(Gen 1:14-18)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 745,		
					title: 'In the New Jerusalem described in Revelation, what are the twelve gates made from?',		
					answer: 'Pearls',		
					reference: '(Rev 21:21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 746,		
					title: 'Which Psalm is entitled "A Prayer of Moses"?',		
					answer: 'Psalm 90',		
					reference: '(Psalms)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 747,		
					title: 'On what day of creation were dry land and seas created?',		
					answer: 'Third',		
					reference: '(Gen 1:9-13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 748,		
					title: 'How many tribes was Jeroboam promised he would rule over?',		
					answer: 'Ten',		
					reference: '(1 Ki 11:31)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 749,		
					title: 'Which brother did Joseph imprison while the others returned to Jacob?',		
					answer: 'Simeon',		
					reference: '(Gen 42:24)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 750,		
					title: 'How many spies did Moses send out to explore the land of Canaan?',		
					answer: 'Twelve',		
					reference: '(Num 13:2-16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 751,		
					title: 'Which bird does Job say is "lacking in wisdom", due to the fact she leaves her eggs on the floor?',		
					answer: 'Ostrich',		
					reference: '(Job 39:13-17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 752,		
					title: 'Whose mother found him a wife from Egypt?',		
					answer: 'Ishmael',		
					reference: '(Gen 21:21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 753,		
					title: 'Noah was a "preacher" of what?',		
					answer: 'Righteousness',		
					reference: '(2 Pe 2:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 754,		
					title: 'Which of the twelve sons of Jacob had a name that means "praise"?',		
					answer: 'Judah',		
					reference: '(Gen 29:35)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 755,		
					title: 'What is the message of the parable that Jesus told Simon the Pharisee?',		
					answer: 'He who has many debts forgiven, loves the one who forgave him more than he who has few debts forgiven.',		
					reference: '(Luke 7:42-43)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 756,		
					title: 'How many men and women were in the temple to watch Samson entertain them?',		
					answer: '3000',		
					reference: '(Jdg 16:27)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 757,		
					title: 'Who escorted the slave with the letter to Philemon?',		
					answer: 'Tychicus',		
					reference: '(Col 4:7-9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 758,		
					title: 'Who was Paul writing to when he wrote "I will receive you and will be a Father unto you and ye shall be my sons and daughters, saith the Lord Almighty"?',		
					answer: 'Corinthians',		
					reference: '(2 Cor 6:17-18)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 759,		
					title: 'What was the name of the servant who had his ear cut off at the arrest of Jesus?',		
					answer: 'Malchus',		
					reference: '(John 18:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 760,		
					title: 'What did Samson carry to the top of the hill overlooking Hebron?',		
					answer: 'City gates',		
					reference: '(Jdg 16:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 761,		
					title: 'Whose house did Paul go to in Caesarea?',		
					answer: 'Philip',		
					reference: '(Acts 21:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 762,		
					title: 'Who went to sleep during one of Paul\'s sermons and fell out of the window?',		
					answer: 'Eutychus',		
					reference: '(Acts 20:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 763,		
					title: 'Which prophet of God told Naaman to wash in the river Jordan to cure his leprosy?',		
					answer: 'Elisha',		
					reference: '(2 Ki 5:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 764,		
					title: 'What occupation did Priscilla have?',		
					answer: 'Tentmaker',		
					reference: '(Acts 18:2-3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 765,		
					title: 'One title of God is El Shaddai, which means what?',		
					answer: 'Almighty God',		
					reference: '(Gen 17:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 766,		
					title: 'What is the seventh commandment?',		
					answer: 'Thou shall not commit adultery',		
					reference: '(Exo 20:14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 767,		
					title: 'How many cities of refuge were on the east side of Jordan?',		
					answer: 'Three',		
					reference: '(Deut 4:41-43)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 768,		
					title: 'What was the name of Joseph\'s (son of Jacob) first born son?',		
					answer: 'Manasseh',		
					reference: '(Gen 41:51)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 769,		
					title: 'According to the Bible what sort of man was Noah?',		
					answer: 'Just / Godly / Blameless',		
					reference: '(Gen 6:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 770,		
					title: 'How many tribes inherited land on the east of Jordan?',		
					answer: 'Two and a half',		
					reference: '(Josh 18:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 771,		
					title: 'What relation was Lois to Timothy?',		
					answer: 'Grandmother',		
					reference: '(2 Tim 1:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 772,		
					title: 'In the parable of the Good Samaritan, who was the second man to pass by the robbed man?',		
					answer: 'Levite',		
					reference: '(Luke 10:30-32)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 773,		
					title: 'What was the name of the city where Lydia was converted?',		
					answer: 'Philippi',		
					reference: '(Acts 16:11-14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 774,		
					title: 'Against which enemy did Jephthah lead Israel?',		
					answer: 'Ammonites',		
					reference: '(Jdg 11:9-11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 775,		
					title: 'What was the name of the prophet who prophesied that Paul would be bound at Jerusalem?',		
					answer: 'Agabus',		
					reference: '(Acts 21:10-11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 776,		
					title: 'How did King Zimri commit suicide?',		
					answer: 'Burned his house down while still inside it',		
					reference: '(1 Ki 16:18)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 777,		
					title: 'In the parable of the laborers in the vineyard how much was each person paid to work?',		
					answer: 'One pence (denarius)',		
					reference: '(Matt 20:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 778,		
					title: 'Whose wife went into labor and gave birth on hearing the news that the Ark of God was captured and that her father-in-law and husband were dead?',		
					answer: 'Phinehas\'',		
					reference: '(1 Sam 4:19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 779,		
					title: 'In Luke\'s account of the Beatitudes who does Jesus say the Kingdom of God belongs to?',		
					answer: 'The poor',		
					reference: '(Luke 6:20)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 780,		
					title: 'For what reason did Isaac say he loved Esau?',		
					answer: 'Isaac ate of his venison',		
					reference: '(Gen 25:28)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 781,		
					title: 'In the ritual cleansing of a leper under the Law of Moses, which animals were to be offered on the eighth day?',		
					answer: 'Lambs',		
					reference: '(Lev 14:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 782,		
					title: 'Who should you "withdraw from", according to the epistles of Thessalonians?',		
					answer: 'Idle/disorderly brethren',		
					reference: '(2 Th 3:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 783,		
					title: 'Psalm 91 verses 11 and 12 are quoted in which New Testament incident?',		
					answer: 'The temptation of Jesus',		
					reference: '(Matt 4:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 784,		
					title: 'How was the earth watered initially before rain?',		
					answer: 'Mist went up from the earth',		
					reference: '(Gen 2:5-6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 785,		
					title: 'What proportion of his goods did Zacchaeus give away to the poor?',		
					answer: 'Half',		
					reference: '(Luke 19:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 786,		
					title: 'How old was Anna the prophetess when she saw Jesus?',		
					answer: 'Eighty-four',		
					reference: '(Luke 2:37)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 787,		
					title: 'What did Rachel steal from her father, Laban, when she left home with her husband Jacob?',		
					answer: 'Household gods / idols',		
					reference: '(Gen 31:19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 788,		
					title: 'The snail is mentioned in which Psalm?',		
					answer: 'Psalm 58',		
					reference: '(Psalms #:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 789,		
					title: 'How does Psalm 96 say we should worship God?',		
					answer: 'In the beauty of holiness',		
					reference: '(Ps 96:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 790,		
					title: 'Why should children listen to "the instruction of a father"?',		
					answer: 'To gain understanding',		
					reference: '(Pro 4:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 791,		
					title: 'What did the disciples say to Jesus before the ascension?',		
					answer: 'Lord will you at this time restore again the kingdom to Israel?',		
					reference: '(Acts 1:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 792,		
					title: 'What did Jesus eat to convince the disciples that he was indeed raised from the dead?',		
					answer: 'Fish and honeycomb',		
					reference: '(Luke 24:42)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 793,		
					title: 'How old was Joseph when he died?',		
					answer: '110',		
					reference: '(Gen 50:22)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 794,		
					title: 'Where was David born?',		
					answer: 'Bethlehem',		
					reference: '(1 Sam 17:58)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 795,		
					title: 'How were the Thessalonians told to "keep their own bodies"?',		
					answer: 'In sanctification and honor',		
					reference: '(1 Th 4:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 796,		
					title: 'How many companions did the Philistines give to Samson at the feast in Timnah?',		
					answer: 'Thirty',		
					reference: '(Jdg 14:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 797,		
					title: 'How many times did Noah send out the dove?',		
					answer: 'Three',		
					reference: '(Gen 8:8-12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 798,		
					title: 'What instruments were used to praise God when the temple foundation was rebuilt?',		
					answer: 'Trumpets and cymbals',		
					reference: '(Ezr 3:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 799,		
					title: 'How many "minor prophets" are there?',		
					answer: 'Twelve',		
					reference: '(Hos 1:1 - Mal 4:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 800,		
					title: 'Honor thy father and thy mother is one of the ten commandments',		
					answer: 'Fifth',		
					reference: '(Exo 20:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 801,		
					title: 'What did Daniel see by the river Hiddekel?',		
					answer: 'A man clothed in linen',		
					reference: '(Dan 10:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 802,		
					title: 'In the time of the Judges, civil war broke out against which tribe?',		
					answer: 'Benjamin',		
					reference: '(Jdg 20)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 803,		
					title: 'Paul thanks God that he did not baptize any of the Corinthians, except for which people?',		
					answer: 'Crispus, Gaius and the household of Stephanas',		
					reference: '(1 Cor 1:14-16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 804,		
					title: 'Which Pharisee said that if the gospel truly comes from God, no-one will be able to stop it spreading?',		
					answer: 'Gamaliel',		
					reference: '(Acts 5:34-39)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 805,		
					title: 'Where does Solomon say that leopards live?',		
					answer: 'Mountains',		
					reference: '(Song 4:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 806,		
					title: 'What did the New Jerusalem look like in the book of Revelation?',		
					answer: 'Like a bride',		
					reference: '(Rev 21:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 807,		
					title: 'Melchizedek was a high priest, but also king of where?',		
					answer: 'Salem',		
					reference: '(Gen 14:18, Heb 7:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 808,		
					title: 'Which king had the longest reign over the Kingdom of Israel?',		
					answer: 'Jeroboam II',		
					reference: '(2 Ki 14:23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 809,		
					title: 'On what day of the week was Christ resurrected?',		
					answer: 'First',		
					reference: '(John 20:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 810,		
					title: 'Paul and Silas were imprisoned during the second missionary journey, but in what city did this happen?',		
					answer: 'Philippi',		
					reference: '(Acts 16:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 811,		
					title: 'What is the shortest book in the Old Testament?',		
					answer: 'Obadiah',		
					reference: '(Oba 1:1-21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 812,		
					title: 'In Matthew\'s account of the Sermon on the Mount, what was the first of the Beatitudes?',		
					answer: 'Blessed are the poor in spirit for theirs is the kingdom of heaven',		
					reference: '(Matt 5:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 813,		
					title: 'Jesus appeared to his disciples after the resurrection beside which sea?',		
					answer: 'Sea of Tiberias (Galilee)',		
					reference: '(John 6:1; 21:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 814,		
					title: 'How many wise men does the Bible say came to visit Jesus?',		
					answer: 'It doesn't say',		
					reference: '(Matt 2:1-12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 815,		
					title: 'Where did Philip preach the good news about the Kingdom of God leading to many baptisms?',		
					answer: 'Samaria',		
					reference: '(Acts 8:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 816,		
					title: 'What did Paul do immediately after receiving his sight back?',		
					answer: 'He was baptized',		
					reference: '(Acts 9:18)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 817,		
					title: 'What was the name of the city where Elijah raised the widow\'s son from the dead?',		
					answer: 'Zarephath',		
					reference: '(1 Ki 17:9-23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 818,		
					title: 'Who said, "To obey is better than sacrifice"?',		
					answer: 'Samuel',		
					reference: '(1 Sam 15:22)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 819,		
					title: 'What was the name of a man who was given the Spirit of God, to enable him to become a good craftsman, and assist with the building of the tabernacle?',		
					answer: 'Bezaleel',		
					reference: '(Exo 31:2-3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 820,		
					title: 'Which prophet told Jeroboam he would rule over ten tribes?',		
					answer: 'Ahijah',		
					reference: '(1 Ki 11:30-31)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 821,		
					title: 'What did Melchizedek give to Abram?',		
					answer: 'Bread and wine',		
					reference: '(Gen 14:18)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 822,		
					title: 'What argument prompted Jesus to tell his disciples that they would judge the twelve tribes in the kingdom?',		
					answer: 'Disputing who was the greatest disciple',		
					reference: '(Luke 22:24-30)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 823,		
					title: 'Who was king of the southern kingdom when the northern kingdom of Israel fell to Assyria?',		
					answer: 'Hezekiah',		
					reference: '(2 Ki 18:9-12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 824,		
					title: 'The fifth trumpet in Revelation is a plague which was also a plague upon Egypt in Exodus',		
					answer: 'Locusts',		
					reference: '(Rev 9:1-4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 825,		
					title: 'In Zechariah, the prophet has a vision of a man riding a red horse and standing under what kind of tree?',		
					answer: 'Myrtle',		
					reference: '(Zec 1:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 826,		
					title: 'For how long did Abdon, son of Hillel, judge Israel?',		
					answer: 'Eight years',		
					reference: '(Jdg 12:13-14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 827,		
					title: 'When the Israelites came to Elim, how many palm trees were there?',		
					answer: 'Seventy',		
					reference: '(Exo 15:27)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 828,		
					title: 'How many rivers did the river in Eden split into once it left the garden?',		
					answer: 'Four',		
					reference: '(Gen 2:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 829,		
					title: 'What was the name of the Sorcerer Paul met on the island of Cyprus?',		
					answer: 'Elymas (Bar-Jesus)',		
					reference: '(Acts 13:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 830,		
					title: 'How much did Ruth glean on her first day in Boaz\'s field?',		
					answer: 'An ephah of barley',		
					reference: '(Ruth 2:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 831,		
					title: 'Who thanked King David for allowing his (David\'s) son Absalom to return to Jerusalem?',		
					answer: 'Joab',		
					reference: '(2 Sam 14:22)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 832,		
					title: 'In the parable of the lamp, where is the candle to be "set once it is lit"?',		
					answer: 'In a candlestick',		
					reference: '(Luke 11:33)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 833,		
					title: 'A wholesome (healing), tongue is described as what?',		
					answer: 'A tree of life',		
					reference: '(Pro 15:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 834,		
					title: 'Three of David\'s mighty men risked their lives against the Philistines to get him a drink of water from where?',		
					answer: 'A well of Bethlehem',		
					reference: '(2 Sam 23:15-16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 835,		
					title: 'What feast was instituted when Queen Esther saved the Jews from destruction?',		
					answer: 'Purim',		
					reference: '(Est 9:24-26)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 836,		
					title: 'What was the name of the field where Abraham buried his wife?',		
					answer: 'Machpelah',		
					reference: '(Gen 23:19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 837,		
					title: 'From which country did Solomon import horses?',		
					answer: 'Egypt',		
					reference: '(1 Ki 10:28)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 838,		
					title: 'What miracle did Jesus perform just before healing Legion of his unclean spirit?',		
					answer: 'Calming of the storm',		
					reference: '(Mark 4:39 - 5:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 839,		
					title: 'Why did Pharaoh give Joseph\'s family the land of Goshen to live in?',		
					answer: 'To keep them separate as they were shepherds, which were an abomination to the Egyptians',		
					reference: '(Gen 46:34)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 840,		
					title: 'After the exile, the Israelites returned and started to rebuild the temple in Jerusalem, but which other prophet along with Zechariah was sent to encourage the completion of the partly built temple?',		
					answer: 'Haggai',		
					reference: '(Hag 2:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 841,		
					title: 'At what place did the writer to the Thessalonians say he'd been given rough treatment?',		
					answer: 'Philippi',		
					reference: '(1 Th 2:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 842,		
					title: 'Who was well reported of at Lystra and Iconium?',		
					answer: 'Timothy',		
					reference: '(Acts 16:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 843,		
					title: 'In John\'s first epistle which three things are said to testify and agree about Jesus?',		
					answer: 'The Spirit, the water and the blood',		
					reference: '(1 Jn 5:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 844,		
					title: 'In Proverbs, how shall the "man\'s belly be satisfied"?',		
					answer: 'By the fruit of his mouth',		
					reference: '(Pro 18:20)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 845,		
					title: 'What did Rahab hide the two spies under?',		
					answer: 'Stalks of flax',		
					reference: '(Josh 2:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 846,		
					title: 'In years, roughly how long did Paul spend in Ephesus?',		
					answer: 'Three years',		
					reference: '(Acts 20:31)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 847,		
					title: 'Which gospel records the fewest of the miracles performed by Jesus?',		
					answer: 'John',		
					reference: '(John 1:1 - 21:25)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 848,		
					title: 'What does Psalm 16 say there is in "the Lord\'s right hand"?',		
					answer: 'Pleasures for evermore',		
					reference: '(Ps 16:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 849,		
					title: 'Who walked barefoot and naked for three years at the Lord\'s command?',		
					answer: 'Isaiah',		
					reference: '(Isa 20:2-3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 850,		
					title: 'Who promised to give their daughters to Shechemites if they agreed to be circumcised, only to kill them instead three days later while they were still sore?',		
					answer: 'Sons of Jacob',		
					reference: '(Gen 34:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 851,		
					title: 'Which god did the people of Lystra think Paul was?',		
					answer: 'Mercurius (Hermes)',		
					reference: '(Acts 14:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 852,		
					title: 'What happened to the sun when the sixth seal was opened?',		
					answer: 'It became as black as sackcloth (of hair)',		
					reference: '(Rev 6:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 853,		
					title: 'What characteristics are attached to the breastplate mentioned in Thessalonians?',		
					answer: 'Faith and love',		
					reference: '(1 Th 5:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 854,		
					title: 'Of which animal were the kings of Israel told not to have lots?',		
					answer: 'Horses',		
					reference: '(Deut 17:14-16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 855,		
					title: 'In Revelation, unclean spirits came out of the mouth of the dragon, in the form of what animals?',		
					answer: 'Frogs',		
					reference: '(Rev 16:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 856,		
					title: 'How old was Noah when the floods came?',		
					answer: '600',		
					reference: '(Gen 7:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 857,		
					title: 'Which animal skins, dyed red, were used as an offering to help make the tabernacle?',		
					answer: 'Rams',		
					reference: '(Exo 25:3-5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 858,		
					title: 'Which king contributes words of wisdom in Proverbs chapter 31?',		
					answer: 'Lemuel',		
					reference: '(Pro 31:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 859,		
					title: 'In which Jewish month is the Passover?',		
					answer: 'Abib',		
					reference: '(Deut 16:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 860,		
					title: 'Who did Daniel see sitting in a throne in his vision of the four beasts?',		
					answer: 'The Ancient of Days',		
					reference: '(Dan 7:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 861,		
					title: 'The Ethiopian eunuch, held what office of responsibility to Candace, queen of the Ethiopians?',		
					answer: 'Treasurer',		
					reference: '(Acts 8:27)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 862,		
					title: 'How does Psalm 100 say we should come before the Lord\'s presence?',		
					answer: 'With singing',		
					reference: '(Ps 100:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 863,		
					title: 'How many concubines did Solomon have?',		
					answer: '300',		
					reference: '(1 Ki 11:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 864,		
					title: 'How did Moses make the bitter waters of Marah drinkable?',		
					answer: 'Threw a piece of wood into the water',		
					reference: '(Exo 15:23-25)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 865,		
					title: 'How did Adam and Eve feel about their nakedness at first?',		
					answer: 'They were not ashamed',		
					reference: '(Gen 2:25)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 866,		
					title: 'Who deceived the worshippers of Baal into attending sacrifices only to destroy them all once they had arrived?',		
					answer: 'Jehu',		
					reference: '(2 Ki 10:18-28)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 867,		
					title: 'The branched candlestick in the tabernacle had its cups carved in the likeness of which plant?',		
					answer: 'Almond blossom',		
					reference: '(Exo 25:33)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 868,		
					title: 'What happened to the soldiers of Gideon who lapped the river water with their tongues like dogs?',		
					answer: 'They were chosen to fight against the Midianites',		
					reference: '(Jdg 7:5-7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 869,		
					title: 'How many sections (or books) is the book of Psalms split into?',		
					answer: 'Five',		
					reference: '(Ps 1; 43; 73; 90; 107)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 870,		
					title: 'How old was Abraham\'s first wife when she died?',		
					answer: '127 years',		
					reference: '(Gen 23:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 871,		
					title: 'To what does the "seventy weeks" prophecy refer?',		
					answer: 'The coming of the Messiah',		
					reference: '(Dan 9:20-27)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 872,		
					title: 'To which tribe did Anna the prophetess belong?',		
					answer: 'Asher',		
					reference: '(Luke 2:36)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 873,		
					title: 'What part of Paul\'s clothing did Agabus use?',		
					answer: 'Girdle (belt)',		
					reference: '(Acts 21:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 874,		
					title: 'David says in the Psalms that "adders\' poison is under their lips"',		
					answer: 'Evil men',		
					reference: '(Ps 140:1-3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 875,		
					title: 'Who was the father in law of Caiaphas, the high priest at the time of Jesus death?',		
					answer: 'Annas',		
					reference: '(John 18:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 876,		
					title: 'Who did Paul take with him on his first missionary journey?',		
					answer: 'Barnabas',		
					reference: '(Acts 13:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 877,		
					title: 'Jesus initially sent the twelve disciples to preach to which group of people?',		
					answer: 'House of Israel',		
					reference: '(Matt 10:5-6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 878,		
					title: 'Where will the believers reign in the Kingdom of God?',		
					answer: 'On Earth',		
					reference: '(Rev 5:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 879,		
					title: 'Who did Joseph\'s brothers sell him to?',		
					answer: 'Ishmaelites',		
					reference: '(Gen 37:28)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 880,		
					title: 'Who shall the "prayer of faith" save?',		
					answer: 'The sick',		
					reference: '(Jam 5:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 881,		
					title: 'Where did Delilah live?',		
					answer: 'Valley of Sorek',		
					reference: '(Jdg 16:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 882,		
					title: 'Who was Paul referring to when he said, "May the Lord grant mercy to his household, for he often refreshed me and was not ashamed of my chains"?',		
					answer: 'Onesiphorus',		
					reference: '(2 Tim 1:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 883,		
					title: 'How many elders witnessed Boaz\'s agreement with the kinsman?',		
					answer: 'Ten',		
					reference: '(Ruth 4:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 884,		
					title: 'According to Job, what is the hope of "a tree that is cut down"?',		
					answer: 'It will sprout again',		
					reference: '(Job 14:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 885,		
					title: 'What should the Israelites not destroy when they besiege a city?',		
					answer: 'Trees for meat',		
					reference: '(Deut 20:19-20)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 886,		
					title: 'What offering did Gideon present to the Lord under the oak tree?',		
					answer: 'A young goat and some unleavened bread',		
					reference: '(Jdg 6:19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 887,		
					title: 'On what island was Paul shipwrecked as he made his way to Rome?',		
					answer: 'Malta',		
					reference: '(Acts 28:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 888,		
					title: 'An excellent wife is a what to her husband?',		
					answer: 'A crown',		
					reference: '(Pro 12:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 889,		
					title: 'To what tribe did Samson belong?',		
					answer: 'Dan',		
					reference: '(Jdg 13:25)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 890,		
					title: 'In which book of the Bible would you find the record of Balaam and his donkey?',		
					answer: 'Numbers',		
					reference: '(Num 22:22-35)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 891,		
					title: 'What are Psalms 120-134 collectively known as?',		
					answer: 'The Songs of Degrees (or Ascents)',		
					reference: '(Ps 120 - 134)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 892,		
					title: 'When Joseph was in prison, whose dream did he correctly interpret to mean he would be restored to his job?',		
					answer: 'Butler',		
					reference: '(Gen 42:32-36)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 893,		
					title: 'What is "sanctified by the word of God and prayer"?',		
					answer: 'God\'s creation',		
					reference: '(1 Tim 4:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 894,		
					title: 'In the parable of the good father, if a son asks for an egg, what would the good father not give him?',		
					answer: 'A scorpion',		
					reference: '(Luke 11:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 895,		
					title: 'Fearing that Saul wanted to kill him, what lie did David ask Jonathan to tell his father if asked why he wasn't at the king\'s table for the New Moon feast?',		
					answer: 'He had gone to Bethlehem for a family gathering',		
					reference: '(1 Sam 20:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 896,		
					title: 'What was the name of the field that Jacob requested to be buried in?',		
					answer: 'Machpelah',		
					reference: '(Gen 50:12-13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 897,		
					title: 'How long did Noah live for after the flood?',		
					answer: '350 years',		
					reference: '(Gen 9:28)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 898,		
					title: 'Paul, Timothy and who else sent their greetings to Thessalonica?',		
					answer: 'Silvanus',		
					reference: '(1 Th 1:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 899,		
					title: 'How many years did Jacob live for?',		
					answer: '147',		
					reference: '(Gen 47:28)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 900,		
					title: 'What animal is "better than a dead lion"?',		
					answer: 'A living dog',		
					reference: '(Ecc 9:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 901,		
					title: 'One of the ten plagues of Egypt was the plague of boils, but which number was it?',		
					answer: 'Sixth',		
					reference: '(Exo 9:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 902,		
					title: 'After being left behind in Berea, in which city did Silas and Timothy meet up with Paul?',		
					answer: 'Corinth',		
					reference: '(Acts 18:1-5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 903,		
					title: 'Who told his wife not to worry that she was barren and said, "am not I better to thee than ten sons"?',		
					answer: 'Elkanah',		
					reference: '(1 Sam 1:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 904,		
					title: 'What does Job say is "poured out like water"?',		
					answer: 'His groanings (roarings)',		
					reference: '(Job 3:24)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 905,		
					title: 'A word "fitly spoken" is like what of gold set in pictures of silver?',		
					answer: 'Apples',		
					reference: '(Pro 25:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 906,		
					title: 'On which occasion in the Bible does it specifically say that believers sung a hymn?',		
					answer: 'Jesus and the disciples celebrating Passover',		
					reference: '(Matt 26:30)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 907,		
					title: 'To which city did Samson go down to and kill thirty men?',		
					answer: 'Ashkelon',		
					reference: '(Jdg 14:19)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 908,		
					title: 'Who was the Persian king when the rebuilding of the temple after the exile was finally complete?',		
					answer: 'Darius',		
					reference: '(Ezr 6:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 909,		
					title: 'What part of King Asa\'s body was diseased?',		
					answer: 'Feet',		
					reference: '(1 Ki 15:23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 910,		
					title: 'Which priest anointed Solomon?',		
					answer: 'Zadok',		
					reference: '(1 Ki 1:39)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 911,		
					title: 'Who does James say is the "source of every good and every perfect gift"?',		
					answer: 'Father of Lights',		
					reference: '(Jam 1:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 912,		
					title: 'Which disciple asked Jesus to show them the Father?',		
					answer: 'Philip',		
					reference: '(John 14:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 913,		
					title: 'What did Athaliah do when she saw her son, Ahaziah, was dead?',		
					answer: 'Destroyed the rest of the royal family',		
					reference: '(2 Ki 11:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 914,		
					title: 'Who had a bed 13',		
					answer: 'Og',		
					reference: '(Deut 3:11)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 915,		
					title: 'Whose handkerchiefs were able to heal the sick?',		
					answer: 'Paul',		
					reference: '(Acts 19:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 916,		
					title: 'How did Daniel react to the vision by the river Hiddekel?',		
					answer: 'He felt ill and weak',		
					reference: '(Dan 10:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 917,		
					title: 'Which Old Testament prophet was given a book to eat by God?',		
					answer: 'Ezekiel',		
					reference: '(Eze 3:2)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 918,		
					title: 'What was the name of the centurion who looked after Paul on the journey to Rome?',		
					answer: 'Julius',		
					reference: '(Acts 27:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 919,		
					title: 'Which book of the Bible comments that "dead flies cause the ointment of the apothecary to send forth a stinking savor?"',		
					answer: 'Ecclesiastes',		
					reference: '(Ecc 10:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 920,		
					title: 'Bread gained by deceit is sweet to a man, but what shall his mouth be filled with afterwards?',		
					answer: 'Gravel',		
					reference: '(Pro 20:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 921,		
					title: 'What does Zechariah see in a vision that destroys the houses of thieves and liars?',		
					answer: 'A thirty foot flying roll',		
					reference: '(Zec 5:1-4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 922,		
					title: 'How long did it take Solomon to build his own house?',		
					answer: 'Thirteen years',		
					reference: '(1 Ki 7:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 923,		
					title: 'At which battle were the Israelites defeated because Joshua attacked without seeking God\'s guidance first?',		
					answer: 'Ai',		
					reference: '(Josh 7:5-12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 924,		
					title: 'In the parable of the debtors, one owed 500 denarii (pence), but how much did the other one owe?',		
					answer: 'Fifty',		
					reference: '(Luke 7:41)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 925,		
					title: 'What was the name of the man who was paralyzed and had been bedridden for eight years?',		
					answer: 'Aeneas',		
					reference: '(Acts 9:33)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 926,		
					title: 'How old was Abram when he first became a father?',		
					answer: 'Eighty-six years',		
					reference: '(Gen 16:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 927,		
					title: 'How old was David when he died?',		
					answer: 'Seventy',		
					reference: '(2 Sam 5:4)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 928,		
					title: 'How long was Noah\'s ark?',		
					answer: '300 cubits / 450 feet',		
					reference: '(Gen 6:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 929,		
					title: 'During Paul\'s third missionary journey, roughly for how long did he minister in the school of Tyrannus at Ephesus?',		
					answer: 'Two years',		
					reference: '(Acts 19:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 930,		
					title: 'What does James say "envying and strife in your heart" brings?',		
					answer: 'Confusion and every evil work',		
					reference: '(Jam 3:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 931,		
					title: 'Which honorable counselor was waiting for the Kingdom of God?',		
					answer: 'Joseph of Arimathea',		
					reference: '(Mark 15:43)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 932,		
					title: 'One of the Ten Commandments forbids the coveting of a neighbor\'s property',		
					answer: 'Tenth',		
					reference: '(Exo 20:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 933,		
					title: 'What did God specifically command concerning the eating of the thanksgiving offering that the Israelites made?',		
					answer: 'They must eat it on the day it is offered.',		
					reference: '(Lev 7:15; 22:30)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 934,		
					title: 'Which tribe\'s blessing from Jacob said they would "dwell at the haven of the sea"?',		
					answer: 'Zebulun',		
					reference: '(Gen 49:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 935,		
					title: 'Jesus accused the Pharisees of hypocritically paying tithes on herbs, and omitting which weightier matters of the law?',		
					answer: 'Judgment, mercy, and faith',		
					reference: '(Matt 23:23)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 936,		
					title: 'Which king of Heshbon would not let the Israelites pass through his land?',		
					answer: 'Sihon',		
					reference: '(Deut 2:30; Jdg 11:19-20)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 937,		
					title: 'What occasion did David write Psalm 105 for?',		
					answer: 'Bringing the ark back to Jerusalem',		
					reference: '(1 Chr 15-16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 938,		
					title: 'Which one of the Ten Commandments was an instruction not to lie (bear false witness)?',		
					answer: 'Ninth',		
					reference: '(Exo 20:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 939,		
					title: 'What was the name of the god that Barnabas was called at Lystra?',		
					answer: 'Jupiter (Zeus)',		
					reference: '(Acts 14:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 940,		
					title: 'How many horns did the ram in Daniel\'s vision have?',		
					answer: 'Two',		
					reference: '(Dan 8:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 941,		
					title: 'Onesimus, was a run away slave from which city?',		
					answer: 'Colosse',		
					reference: '(Col 4:9; Phm 1:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 942,		
					title: 'The disciple Thomas was also known as Didymus, but what does this name mean?',		
					answer: 'Twin',		
					reference: '(John 11:16 / Strongs G1324)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 943,		
					title: 'Which king decreed that the Jews could return to their land to rebuild the temple?',		
					answer: 'Cyrus',		
					reference: '(Ezr 1:1-3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 944,		
					title: 'Isaiah took a cake of what to heal Hezekiah?',		
					answer: 'Figs',		
					reference: '(2 Ki 20:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 945,		
					title: 'Who prayed, "I pray thee, open his eyes that he may see?"',		
					answer: 'Elisha',		
					reference: '(2 Ki 6:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 946,		
					title: 'How many silver shekels did Jeremiah pay to Hanameel for a field in Anathoth?',		
					answer: 'Seventeen',		
					reference: '(Jer 32:9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 947,		
					title: 'In the love poetry of Song of Solomon the lady\'s hair is described as a flock of which animal?',		
					answer: 'Goats',		
					reference: '(Song 4:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 948,		
					title: 'What is the first offering made to the Lord recorded in the Bible?',		
					answer: 'Cain\'s fruit of the ground',		
					reference: '(Gen 4:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 949,		
					title: 'In Revelation 22, who does it say has the right to the tree of life?',		
					answer: 'Those that do God\'s commandments',		
					reference: '(Rev 22:14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 950,		
					title: 'In Proverbs, what metal is the "tongue of the just" likened to?',		
					answer: 'Silver',		
					reference: '(Pro 10:20)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 951,		
					title: 'Which three tribes camped on the northern side of the tabernacle in the wilderness?',		
					answer: 'Dan, Asher, Naphtali',		
					reference: '(Num 2:25-29)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 952,		
					title: 'To where did Paul & Silas flee after upsetting the Jews at Thessalonica?',		
					answer: 'Berea',		
					reference: '(Acts 17:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 953,		
					title: 'How many silver pieces would each Philistine lord give to Delilah if she betrayed Samson?',		
					answer: '1100',		
					reference: '(Jdg 16:5)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 954,		
					title: 'In the parable about a fig tree, when you see the "tree putting forth leaves", what is near?',		
					answer: 'Summer',		
					reference: '(Matt 24:32)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 955,		
					title: 'According to Proverbs, how do those "seeking death" acquire their wealth?',		
					answer: 'By lying',		
					reference: '(Pro 21:6)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 956,		
					title: 'In the prophecy of Isaiah, where will a little child play in the kingdom age?',		
					answer: 'Over the hole of a snake',		
					reference: '(Isa 11:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 957,		
					title: 'In Genesis, who was buried under an oak tree below Bethel?',		
					answer: 'Deborah (Rebekah\'s nurse)',		
					reference: '(Gen 35:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 958,		
					title: 'What color was the High Priest\'s robe?',		
					answer: 'Blue',		
					reference: '(Exo 28:31)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 959,		
					title: 'Who does Paul thank God for because their "faith and love grew exceedingly"?',		
					answer: 'The Thessalonians',		
					reference: '(2 Th 1:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 960,		
					title: 'Which nation does Jeremiah say is dwelling in Gad?',		
					answer: 'Ammon',		
					reference: '(Jer 49:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 961,		
					title: 'In which city were Paul and Barnabas worshipped as gods?',		
					answer: 'Lystra',		
					reference: '(Acts 14:8-12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 962,		
					title: 'What does the name Israel mean?',		
					answer: 'Prevails with God',		
					reference: '(Gen 32:28)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 963,		
					title: 'What must an Israelite do when "building a new house"?',		
					answer: 'Build a guard rail around the roof',		
					reference: '(Deut 22:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 964,		
					title: 'Which prophet said, "Out of Egypt have I called my son"?',		
					answer: 'Hosea',		
					reference: '(Hos 11:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 965,		
					title: 'Deceit is in the heart of them that',		
					answer: 'Imagine evil',		
					reference: '(Pro 12:20)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 966,		
					title: 'Jesus quotes a portion of text from the Old Testament in connection with the parable of the vineyard owner, "The stone which the builders rejected is become the head of the corner:", but which Old Testament book did this come from?',		
					answer: 'Psalms',		
					reference: '(Mark 12:10)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 967,		
					title: 'Where did Paul leave the sick Trophimus?',		
					answer: 'Miletum (Miletus)',		
					reference: '(2 Tim 4:20)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 968,		
					title: 'In a battle against the Syrians, what killed 27,000 of them in the city of Aphek?',		
					answer: 'A wall fell on them',		
					reference: '(1 Ki 20:30)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 969,		
					title: 'What weight of gold was Solomon recorded as acquiring in one year?',		
					answer: '666 talents',		
					reference: '(1 Ki 10:14)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 970,		
					title: 'Who addresses an epistle to the "twelve tribes which are scattered abroad"?',		
					answer: 'James',		
					reference: '(Jam 1:1)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 971,		
					title: 'Who was killed by a wet blanket?',		
					answer: 'Benhadad',		
					reference: '(2 Ki 8:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 972,		
					title: 'In the parable of the Prodigal Son, what portion would the son have received?',		
					answer: 'A third',		
					reference: '(Deut 21:17; Luke 15:12)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 973,		
					title: 'What did Elisha throw into Jericho\'s water supply to "heal" it?',		
					answer: 'Salt',		
					reference: '(2 Ki 2:21)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 974,		
					title: 'With what unusual weapon did Shamgar slay 600 Philistines?',		
					answer: 'A cattle prod (ox goad)',		
					reference: '(Jdg 3:31)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 975,		
					title: 'In which tribe was the city of Ramoth-Gilead?',		
					answer: 'Gad',		
					reference: '(Deut 4:43)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 976,		
					title: 'Why do the four and twenty elders in Revelation give thanks to God?',		
					answer: 'God has taken his power and commenced his reign',		
					reference: '(Rev 11:17)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 977,		
					title: 'David refers to the tribe of Judah as his what in the Psalms?',		
					answer: 'His lawgiver (royal scepter)',		
					reference: '(Ps 60:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 978,		
					title: 'When Isaiah describes the desolation of the last days, a man shall "cast his idols of silver, and his idols of gold, to the moles" and the what?',		
					answer: 'Bats',		
					reference: '(Isa 2:20)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 979,		
					title: 'Who gave thanks to the Lord when she saw the baby Jesus?',		
					answer: 'Anna the Prophetess',		
					reference: '(Luke 2:36-38)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 980,		
					title: 'Children in the region of what age were to be killed, in the hope that the young Jesus would also be killed?',		
					answer: 'Two years and under',		
					reference: '(Matt 2:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 981,		
					title: 'Who is described in the Psalms as "spreading himself like a green bay tree"?',		
					answer: 'The wicked',		
					reference: '(Ps 37:35)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 982,		
					title: 'Aeneas was confined to bed for eight years suffering from the palsy, but which town did he dwell in?',		
					answer: 'Lydda',		
					reference: '(Acts 9:32-33)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 983,		
					title: 'Where was Solomon anointed?',		
					answer: 'Gihon',		
					reference: '(1 Ki 1:38)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 984,		
					title: 'Christ was led away to which high priest first?',		
					answer: 'Annas',		
					reference: '(Luke 3:2; John 18:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 985,		
					title: 'Whose mother does Paul greet in the letter to the Romans?',		
					answer: 'Rufus\'',		
					reference: '(Rom 16:13)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 986,		
					title: 'Which Psalm does Paul quote from in his exhortation at Antioch?',		
					answer: 'Psalm 2',		
					reference: '(Acts 13:33)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 987,		
					title: 'The legs of the lame hanging limp are like what in the mouth of fools?',		
					answer: 'A parable',		
					reference: '(Pro 26:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 988,		
					title: 'How does Peter say a husband should treat his wife?',		
					answer: 'With honor',		
					reference: '(1 Pe 3:7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 989,		
					title: 'After being told by God to remain in Gerar, who told the men there when questioned that his wife was merely his sister?',		
					answer: 'Isaac',		
					reference: '(Gen 26:1-7)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 990,		
					title: 'Why does David say "the daughters of Judah should be glad"?',		
					answer: 'Because of the judgments of the Lord',		
					reference: '(Ps 48:11; 97:8)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 991,		
					title: 'For how many shekels of silver did Abraham purchase the field of Machpelah?',		
					answer: '400',		
					reference: '(Gen 23:16)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 992,		
					title: 'In Ezekiel\'s prophecy, who is said to be the "mother of Jerusalem"?',		
					answer: 'A Hittite',		
					reference: '(Eze 16:3)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 993,		
					title: 'Who did Jesus say was "not far from the Kingdom of God"?',		
					answer: 'One of the Scribes',		
					reference: '(Mark 12:28-34)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 994,		
					title: 'Who succeeded Herod the Great after his death?',		
					answer: 'Archelaus',		
					reference: '(Matt 2:22)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 995,		
					title: 'On Paul\'s journey to Rome, at what location did he meet brethren whom he thanked God for?',		
					answer: 'Appii forum',		
					reference: '(Acts 28:15)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 996,		
					title: 'Proverbs describes a "fair woman without discretion" as like a jewel of gold in what?',		
					answer: 'A pig\'s snout',		
					reference: '(Pro 11:22)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 997,		
					title: 'What does the name Abram mean?',		
					answer: 'High father / Father of heights',		
					reference: '(Gen 17:5 / Strong\'s H87)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 998,		
					title: 'How many begotten sons of David are named in the Bible?',		
					answer: 'Nineteen',		
					reference: '(1 Chr 3:1-9)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 999,		
					title: 'In Luke\'s account of the Sermon on the Mount to who does Jesus say "God is kind"?',		
					answer: 'The unthankful and the evil',		
					reference: '(Luke 6:35)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 1000,		
					title: 'How many cities did the Levites possess?',		
					answer: 'Forty-eight',		
					reference: '(Josh 21:41)',
					choices: [
						'',
						'',
						'',
					]
				}, {		
					id: 1001,		
					title: 'The angel said to Mary that Jesus would "reign over the house" of which Old Testament character?',		
					answer: 'Jacob',		
					reference: '(Luke 1:33)',
					choices: [
						'',
						'',
						'',
					]
				} */
			];
		}
	};
}]);

