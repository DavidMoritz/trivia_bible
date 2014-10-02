app.factory('QuestionFactory', [function QuestionFactory() {
	return {
		getAllQuestions: function getAllQuestions() {
			/* NOTE: do not include 'answer' among 'choices\' */
			return [				
				{		
					id:1,		
					title: 'Who, when accused of being with Jesus, lied and said that he did not know him, three times?',		
					reference: '(Matt 26:69-74)',		
					answer: '(Simon) Peter ',
					choices: [
						'Ruth ',
						'John ',
						'Paul '
					]	
				}, {		
					id:2,		
					title: 'What was the name of the garden where Adam and Eve lived?',		
					reference: '(Gen 2:8)',		
					answer: 'Eden ',
					choices: [
						'Nineveh ',
						'Egypt',
						'Mt. Sinai'
					]
				}, {		
					id:3,		
					title: 'With what food did Jesus feed 5,000 people?',		
					reference: '(Matt 14:19) ',		
					answer: 'Loaves of bread and fishes ',
					choices: [
						'Bread and wine ',
						'Fig ',
						'A meal '
					]
				}, {		
					id:4,		
					title: 'What method did the Romans use to kill Jesus?',		
					reference: '(Mark 15:25)',		
					answer: 'Crucifixion ',
					choices: [
						'Dust of the ground ',
						'Flood ',
						'Stabbing '
					]
				}, {		
					id:5,		
					title: 'From which part of Adam\'s body did God create Eve?',		
					reference: '(Gen 2:21) ',		
					answer: 'Rib ',
					choices: [
						'Stones ',
						'Fig ',
						'Bread and wine '
					]
				}, {		
					id:6,		
					title: 'What was the name of Jesus\' mother?',		
					reference: '(Matt 1:18) ',		
					answer: 'Mary ',
					choices: [
						'Abraham ',
						'Jonathan ',
						'Samson '
					]
				}, {		
					id:7,		
					title: 'Which creature tricked Eve into eating of the forbidden fruit?',		
					reference: '(Gen 3:1-6) ',		
					answer: 'Serpent ',
					choices: [
						'Lion ',
						'Pig ',
						'Sheep '
					]
				}, {		
					id:8,		
					title: 'At Christ\'s crucifixion what did the soldiers place on his head?',		
					reference: '(Matt 27:29)',		
					answer: 'Crown of Thorns ',
					choices: [
						'Ring ',
						'Harp / Lyre ',
						'His (seamless) coat '
					]
				}, {		
					id:9,		
					title: 'What is the first line of the Lord\'s Prayer?',		
					reference: '(Matt 6:9) ',		
					answer: 'Our Father which art in heaven ',
					choices: [
						'Blasphemy against the Holy Spirit ',
						'He was swallowed by a great fish ',
						'Ask God for wisdom, in faith '
					]
				}, {		
					id:10,		
					title: 'What relationship was Ruth to Naomi?',		
					reference: '(Ruth 1:4)',		
					answer: 'Daughter-in-law ',
					choices: [
						'Mother-in-law ',
						'Sister ',
						'Sister-in-law '
					]
				}, {		
					id:11,		
					title: 'Who lied to God when he was asked where his brother was?',		
					reference: '(Gen 4:9) ',		
					answer: 'Cain ',
					choices: [
						'Paul ',
						'Moses ',
						'Bathsheba '
					]
				}, {		
					id:12,		
					title: 'Which Old Testament character showed his faith by being willing to offer his son on an altar to God?',		
					reference: '(Jam 2:21-22)',		
					answer: 'Abraham ',
					choices: [
						'Sarah ',
						'Isaac ',
						'Bathsheba '
					]
				}, {		
					id:13,		
					title: 'What significant event is recorded in Genesis chapters 1 and 2?',		
					reference: '(Gen 1 - 2) ',		
					answer: 'Creation ',
					choices: [
						'Flood ',
						'Original Sin ',
						'First Murder '
					]
				}, {		
					id:14,		
					title: 'What was inscribed above Jesus\' cross?',		
					reference: '(Mark 15:26; Matt 27:27)',		
					answer: 'King of the Jews / This is Jesus, King of the Jews ',
					choices: [
						'Blasphemy against the Holy Spirit ',
						'He hit him with a stone from his sling ',
						'To you I commit my spirit'
					]
				}, {		
					id:15,		
					title: 'Whose mother placed him in an ark of bulrushes?',		
					reference: '(Exo 2:3) ',		
					answer: 'Moses ',
					choices: [
						'Sarah ',
						'Jesse ',
						'Aaron '
					]
				}, {		
					id:16,		
					title: 'For how many days and nights did it rain in the story of the flood?',		
					reference: '(Gen 7:12)',		
					answer: 'Forty ',
					choices: [
						'Fifty ',
						'365 ',
						'Twelve '
					]
				}, {		
					id:17,		
					title: 'What was particularly unique about Jesus\' mother?',		
					reference: '(Matt 1:23) ',		
					answer: 'She was a virgin ',
					choices: [
						'Famine in his home town ',
						'Ask God for wisdom, in faith ',
						'Threw him in a pit and then sold him to strangers '
					]
				}, {		
					id:18,		
					title: 'Who gave gifts to Jesus when he was a young child?',		
					reference: '(Matt 2:7-10)',		
					answer: 'Wise men / magi ',
					choices: [
						'Shepherds ',
						'Ghosts ',
						'Carpenters '
					]
				}, {		
					id:19,		
					title: 'What happened to Jonah after he was thrown overboard?',		
					reference: '(John 1:17) ',		
					answer: 'He was swallowed by a great fish ',
					choices: [
						'Our Father which art in heaven ',
						'Famine in his home town ',
						'Ask God for wisdom, in faith '
					]
				}, {		
					id:20,		
					title: 'In whose image was man created?',		
					reference: '(Gen 1:27)',		
					answer: 'God\'s ',
					choices: [
						'Cain\'s ',
						'Abraham\'s ',
						'woman\'s '
					]
				}, {		
					id:21,		
					title: 'How many apostles did Jesus choose?',		
					reference: '(Luke 6:13) ',		
					answer: 'Twelve ',
					choices: [
						'Sixty-six ',
						'Forty ',
						'5000'
					]
				}, {		
					id:22,		
					title: 'What are the wages of sin?',		
					reference: '(Rom 6:23)',		
					answer: 'Death ',
					choices: [
						'Long hair ',
						'Separation ',
						'Crucifixion '
					]
				}, {		
					id:23,		
					title: 'Who is the first mother mentioned in the Bible?',		
					reference: '(Gen 4:1) ',		
					answer: 'Eve ',
					choices: [
						'Daniel ',
						'Abraham ',
						'John '
					]
				}, {		
					id:24,		
					title: 'Who else, other than the wise men, came to visit Jesus when he was a small child?',		
					reference: '(Luke 2:16)',		
					answer: 'Shepherds ',
					choices: [
						'Sheep ',
						'Carpenters ',
						'Daughters-in-law '
					]
				}, {		
					id:25,		
					title: 'Who lied when he was asked to reveal the source of his great strength?',		
					reference: '(Jdg 16:15) ',		
					answer: 'Samson ',
					choices: [
						'Jonathan ',
						'Matthew ',
						'Ananias & Sapphira '
					]
				}, {		
					id:26,		
					title: 'What was the name of the man Jesus\' mother was engaged to at the time she became pregnant?',		
					reference: '(Matt 1:19)',		
					answer: 'Joseph ',
					choices: [
						'Ruth ',
						'Paul ',
						'David '
					]
				}, {		
					id:27,		
					title: 'Which book of the Bible records many of the hymns David wrote?',		
					reference: '(Ps 1:1-150:6) ',		
					answer: 'Psalms ',
					choices: [
						'Revelation ',
						'Proverbs ',
						'Ecclesiastes '
					]
				}, {		
					id:28,		
					title: 'From what disaster did the Ark save Noah?',		
					reference: '(Gen 7:7)',		
					answer: 'Flood ',
					choices: [
						'Creation ',
						'Dust of the ground ',
						'Crucifixion '
					]
				}, {		
					id:29,		
					title: 'What happened to Jesus forty days after his resurrection?',		
					reference: '(Acts 1:3-11) ',		
					answer: 'He ascended into heaven ',
					choices: [
						'A rich man entering the Kingdom of God ',
						'Our Father which art in heaven ',
						'He hit him with a stone from his sling '
					]
				}, {		
					id:30,		
					title: 'What animals did Jesus cause to run into the sea and drown?',		
					reference: '(Matt 8:32)',		
					answer: 'Pigs ',
					choices: [
						'Goats ',
						'Serpents ',
						'Sheep '
					]
				}, {		
					id:31,		
					title: 'On what were the Ten Commandments written?',		
					reference: '(Deut 5:22) ',		
					answer: 'Two tablets of stone ',
					choices: [
						'Linen clothes ',
						'Harp / Lyre ',
						'Fig '
					]
				}, {		
					id:32,		
					title: 'What did Jesus sleep in after he was born?',		
					reference: '(Luke 2:7)',		
					answer: 'Manger ',
					choices: [
						'By a well ',
						'Tower of Babel ',
						'Garden of Eden '
					]
				}, {		
					id:33,		
					title: 'What was man created from?',		
					reference: '(Gen 2:7) ',		
					answer: 'Dust of the ground ',
					choices: [
						'Flood ',
						'Crucifixion ',
						'Rib'
					]
				}, {		
					id:34,		
					title: 'What did Jesus do to each of the disciples during the Last Supper?',		
					reference: '(John 13:1-5)',		
					answer: 'Washed their feet ',
					choices: [
						'Murder ',
						'With a kiss ',
						'Threatened to divide the child (with a sword) '
					]
				}, {		
					id:35,		
					title: 'To which city did God ask Jonah to take his message?',		
					reference: '(John 1:2) ',		
					answer: 'Nineveh ',
					choices: [
						'Red Sea ',
						'Tower of Babel ',
						'By a well '
					]
				}, {		
					id:36,		
					title: 'Who was David\'s father?',		
					reference: '(Ruth 4:22)',		
					answer: 'Jesse ',
					choices: [
						'Isaac ',
						'God ',
						'Joseph '
					]
				}, {		
					id:37,		
					title: 'Which of the gospels appears last in the Bible?',		
					reference: '(Matt 1:1 - John 21:25) ',		
					answer: 'John ',
					choices: [
						'Joseph ',
						'(Simon) Peter ',
						'Eve '
					]
				}, {		
					id:38,		
					title: 'What is the only sin that cannot be forgiven?',		
					reference: '(Mark 3:29)',		
					answer: 'Blasphemy against the Holy Spirit ',
					choices: [
						'King of the Jews / This is Jesus, King of the Jews ',
						'She was a virgin ',
						'Murder'
					]
				}, {		
					id:39,		
					title: 'How did David defeat Goliath?',		
					reference: '(1 Sam 17:49-50) ',		
					answer: 'He hit him with a stone from his sling ',
					choices: [
						'He ascended into heaven ',
						'He was swallowed by a great fish ',
						'A rich man entering the Kingdom of God '
					]
				}, {		
					id:40,		
					title: 'What did Joseph\'s brothers do to get rid of him?',		
					reference: '(Gen 37:24-27)',		
					answer: 'Threw him in a pit and then sold him to strangers ',
					choices: [
						'Ask God for wisdom, in faith ',
						'He ascended into heaven ',
						'He hit him with a stone from his sling '
					]
				}, {		
					id:41,		
					title: 'Who wrote the letter to Philemon?',		
					reference: '(Phm 1:1) ',		
					answer: 'Paul ',
					choices: [
						'(Simon) Peter ',
						'John',
						'Mary '
					]
				}, {		
					id:42,		
					title: 'In what was Jesus wrapped before he was buried?',		
					reference: '(John 19:40)',		
					answer: 'Linen clothes ',
					choices: [
						'Two tablets of stone ',
						'Good fruit ',
						'Rib '
					]
				}, {		
					id:43,		
					title: 'What was the name of Moses\' brother?',		
					reference: '(Exo 7:1) ',		
					answer: 'Aaron ',
					choices: [
						'Ruth ',
						'(Simon) Peter ',
						'Isaac '
					]
				}, {		
					id:44,		
					title: 'What sin is Cain remembered for?',		
					reference: '(Gen 4:8)',		
					answer: 'Murder ',
					choices: [
						'Raised him from the dead ',
						'Washed their feet ',
						'Dipped his coat in the blood of a goat '
					]
				}, {		
					id:45,		
					title: 'The Lord is my Shepherd, is the opening line to which Psalm?',		
					reference: '(Psalms) ',		
					answer: 'Psalm 23 ',
					choices: [
						'Psalm 30 ',
						'Psalm 150 ',
						'Psalm 119 '
					]
				}, {		
					id:46,		
					title: 'What is the last book of the New Testament?',		
					reference: '(Rev 1:1-22:21)',		
					answer: 'Revelation ',
					choices: [
						'Jude ',
						'Proverbs ',
						'Psalms '
					]
				}, {		
					id:47,		
					title: 'Who wrote the majority of the New Testament letters?',		
					reference: '(Rom 1:1 - Jude 1:25) ',		
					answer: 'Paul ',
					choices: [
						'Abraham ',
						'Mary and Martha ',
						'Aaron '
					]
				}, {		
					id:48,		
					title: 'What was David\'s occupation before he became king?',		
					reference: '(1 Sam 17:15)',		
					answer: 'Shepherd ',
					choices: [
						'Shepherds ',
						'Daughter-in-law ',
						'Pharisees and Sadducees '
					]
				}, {		
					id:49,		
					title: 'Who hid two spies but claimed not to know of their whereabouts when asked?',		
					reference: '(Josh 2:1-5) ',		
					answer: 'Rahab ',
					choices: [
						'Mary ',
						'Ananias & Sapphira ',
						'Sarah '
					]
				}, {		
					id:50,		
					title: 'Whose prayer resulted in his being thrown into a den of lions?',		
					reference: '(Dan 6:7)',		
					answer: 'Daniel ',
					choices: [
						'David ',
						'Mary and Martha ',
						'Abraham '
					]
				}, {		
					id:51,		
					title: 'What was the apparent source of Samson\'s strength?',		
					reference: '(Jdg 16:17) ',		
					answer: 'Long hair ',
					choices: [
						'The Lord’s Prayer ',
						'Blindness ',
						'Wisdom '
					]
				}, {		
					id:52,		
					title: 'From which country did Moses help the Israelites escape from their lives of slavery?',		
					reference: '(Exo 13:3)',		
					answer: 'Egypt ',
					choices: [
						'Syria ',
						'Judea ',
						'Mt. Sinai'
					]
				}, {		
					id:53,		
					title: 'Who was the fourth person in the fiery furnace along with Daniel\'s friends?',		
					reference: '(Dan 3:28) ',		
					answer: 'An angel ',
					choices: [
						'Joseph ',
						'Shepherd ',
						'A ghost '
					]
				}, {		
					id:54,		
					title: 'What did Joseph\'s brothers do to deceive their father to cover up that they had sold Joseph into slavery?',		
					reference: '(Gen 37:31)',		
					answer: 'Dipped his coat in the blood of a goat ',
					choices: [
						'Raised him from the dead ',
						'Rested ',
						'He died'
					]
				}, {		
					id:55,		
					title: 'What kind of leaves did Adam and Eve sew together to make clothes for themselves?',		
					reference: '(Gen 3:7) ',		
					answer: 'Fig ',
					choices: [
						'Stones ',
						'His (seamless) coat ',
						'Rib '
					]
				}, {		
					id:56,		
					title: 'Who did Jesus say was the "father of lies"?',		
					reference: '(John 8:44)',		
					answer: 'The devil ',
					choices: [
						'Washed their feet ',
						'Murder ',
						'He died'
					]
				}, {		
					id:57,		
					title: 'What was the name of the tower that the people were building when God confused their language?',		
					reference: '(Gen 11:4,9) ',		
					answer: 'Tower of Babel ',
					choices: [
						'Nineveh ',
						'Manger ',
						'Garden of Eden '
					]
				}, {		
					id:58,		
					title: 'What is the common name of the prayer that Jesus taught to his disciples?',		
					reference: '(Matt 6:9)',		
					answer: 'The Lord’s Prayer ',
					choices: [
						'Death ',
						'Long hair ',
						'Sermon on the mount'
					]
				}, {		
					id:59,		
					title: 'Whose name means "father of a great multitude"?',		
					reference: '(Gen 17:5) ',		
					answer: 'Abraham ',
					choices: [
						'Moses ',
						'Daniel ',
						'Paul '
					]
				}, {		
					id:60,		
					title: 'Of what did Potiphar\'s wife falsely accuse Joseph resulting in him being thrown into prison?',		
					reference: '(Gen 39:12-20)',		
					answer: 'Rape ',
					choices: [
						'Murder',
						'Washing feet ',
						'Theft '
					]
				}, {		
					id:61,		
					title: 'Which sea did the Israelites cross through to escape the Egyptians?',		
					reference: '(Exo 13:18) ',		
					answer: 'Red Sea ',
					choices: [
						'Nile ',
						'Meditteranean Sea ',
						'Indian '
					]
				}, {		
					id:62,		
					title: 'What is "more difficult than a camel going through the eye of a needle"?',		
					reference: '(Matt 19:24)',		
					answer: 'A rich man entering the Kingdom of God ',
					choices: [
						'God with us ',
						'King of the Jews / This is Jesus, King of the Jews ',
						'Ask God for wisdom, in faith '
					]
				}, {		
					id:63,		
					title: 'For how many years did the Israelites wander in the wilderness?',		
					reference: '(Josh 5:6) ',		
					answer: 'Forty ',
					choices: [
						'Fifty ',
						'Sixty-six ',
						'Seventy-seven '
					]
				}, {		
					id:64,		
					title: 'What does a "good tree" bring forth?',		
					reference: '(Matt 7:17)',		
					answer: 'Good fruit ',
					choices: [
						'His (seamless) coat ',
						'John the Baptist’s head ',
						'Fig '
					]
				}, {		
					id:65,		
					title: 'Which small body part can "boast of great things"?',		
					reference: '(Jam 3:5) ',		
					answer: 'Tongue ',
					choices: [
						'Arms ',
						'Death ',
						'Long hair '
					]
				}, {		
					id:66,		
					title: 'What was the name of Abraham\'s first wife?',		
					reference: '(Gen 17:15)',		
					answer: 'Sarah ',
					choices: [
						'Joseph ',
						'Cain ',
						'John '
					]
				}, {		
					id:67,		
					title: 'What did God do on the seventh day, after he had finished creating everything?',		
					reference: '(Gen 2:1-3) ',		
					answer: 'Rested ',
					choices: [
						'Pushed the pillars over and the temple collapsed ',
						'Dipped his coat in the blood of a goat ',
						'Hunting '
					]
				}, {		
					id:68,		
					title: 'On what day did the apostles receive the Holy Spirit?',		
					reference: '(Acts 2:1-4)',		
					answer: 'Day of Pentecost ',
					choices: [
						'Easter ',
						'Palm Sunday',
						'Good Friday'
					]
				}, {		
					id:69,		
					title: 'At the Last Supper, what items of food and drink did Jesus give thanks for?',		
					reference: '(Matt 26:26-27) ',		
					answer: 'Bread and wine ',
					choices: [
						'Good fruit ',
						'Ring ',
						'Milk and honey '
					]
				}, {		
					id:70,		
					title: 'When Jesus was in the wilderness, what was he tempted to turn into loaves of bread?',		
					reference: '(Matt 4:3)',		
					answer: 'Stones ',
					choices: [
						'A ring ',
						'A meal ',
						'Loaves of bread and fishes '
					]
				}, {		
					id:71,		
					title: 'What were the religious leaders called who continually tried to trap Jesus with their questions?',		
					reference: '(Mark 10:2) ',		
					answer: 'Pharisees and Sadducees ',
					choices: [
						'Wise men / magi ',
						'Prophets ',
						'A ghost '
					]
				}, {		
					id:72,		
					title: 'What miracle did Jesus do for Lazarus?',		
					reference: '(John 11:43-44)',		
					answer: 'Raised him from the dead ',
					choices: [
						'To buy corn ',
						'Hunting ',
						'Rested '
					]
				}, {		
					id:73,		
					title: 'On which mountain were the Israelites given the Ten Commandments?',		
					reference: '(Exo 34:32) ',		
					answer: 'Mt. Sinai',
					choices: [
						'Egypt ',
						'Nineveh ',
						'By a well '
					]
				}, {		
					id:74,		
					title: 'Who was Solomon\'s father?',		
					reference: '(1 Ki 2:12)',		
					answer: 'David ',
					choices: [
						'Mary ',
						'Cain ',
						'Aaron '
					]
				}, {		
					id:75,		
					title: 'What job did Jesus\' earthly father, Joseph, do?',		
					reference: '(Matt 13:55) ',		
					answer: 'Carpenter ',
					choices: [
						'Pharisees and Sadducees ',
						'An angel ',
						'Shepherds '
					]
				}, {		
					id:76,		
					title: 'How did Judas betray Christ?',		
					reference: '(Luke 22:48)',		
					answer: 'With a kiss ',
					choices: [
						'He died',
						'Pushed the pillars over and the temple collapsed ',
						'Rested '
					]
				}, {		
					id:77,		
					title: 'Solomon judged wisely over the rightful mother of a child, but how did he determine who the child belonged to?',		
					reference: '(1 Ki 3:25)',		
					answer: 'Threatened to divide the child (with a sword) ',
					choices: [
						'The devil ',
						'To buy corn ',
						'He died'
					]
				}, {		
					id:78,		
					title: 'Whose father was prepared to sacrifice him on an altar?',		
					reference: '(Gen 22:9) ',		
					answer: 'Isaac ',
					choices: [
						'Samson ',
						'(Simon) Peter ',
						'Abraham'
					]
				}, {		
					id:79,		
					title: 'At the age of twelve, where was Jesus left behind in Jerusalem',		
					reference: '(Luke 2:42-46)',		
					answer: 'In the temple ',
					choices: [
						'Marketplace ',
						'Mt. Sinai',
						'Tower of Babel '
					]
				}, {		
					id:80,		
					title: 'When the disciples saw Jesus walking on water, what did they think he was?',		
					reference: '(Matt 14:26) ',		
					answer: 'A ghost ',
					choices: [
						'Carpenter ',
						'Pharisees and Sadducees ',
						'Daughter-in-law '
					]
				}, {		
					id:81,		
					title: 'What gift did Salome, daughter of Herodias, ask for after she danced for Herod?',		
					reference: '(Matt 14:6-8)',		
					answer: 'John the Baptist’s head ',
					choices: [
						'Stones ',
						'Bread and wine ',
						'Rib '
					]
				}, {		
					id:82,		
					title: 'How did Samson kill all the people in the temple?',		
					reference: '(Jdg 16:30) ',		
					answer: 'Pushed the pillars over and the temple collapsed ',
					choices: [
						'Hunted ',
						'Donkey jawbone ',
						'He died'
					]
				}, {		
					id:83,		
					title: 'Which musical instrument did David play for Saul?',		
					reference: '(1 Sam 16:23)',		
					answer: 'Harp / Lyre ',
					choices: [
						'Violin ',
						'Guitar ',
						'Loot '
					]
				}, {		
					id:84,		
					title: 'What was Esau doing while Jacob stole his blessing?',		
					reference: '(Gen 27:1-3,23) ',		
					answer: 'Hunting ',
					choices: [
						'Rape ',
						'With a kiss ',
						'Murder '
					]
				}, {		
					id:85,		
					title: 'Why did Jacob initially send Joseph\'s brothers into Egypt?',		
					reference: '(Gen 42:2-3)',		
					answer: 'To buy corn ',
					choices: [
						'Pushed the pillars over and the temple collapsed ',
						'Threatened to divide the child (with a sword) ',
						'Create distraction '
					]
				}, {		
					id:86,		
					title: 'Who was David\'s great friend?',		
					reference: '(1 Sam 18:1) ',		
					answer: 'Jonathan ',
					choices: [
						'John ',
						'Jesse ',
						'Bathsheba '
					]
				}, {		
					id:87,		
					title: 'Who said "thy God shall be my God"?',		
					reference: '(Ruth 1:16)',		
					answer: 'Ruth ',
					choices: [
						'Moses ',
						'Cain ',
						'Joseph '
					]
				}, {		
					id:88,		
					title: 'Which of Christ\'s belongings did the soldiers cast lots for after they had crucified him?',		
					reference: '(Matt 27:35) ',		
					answer: 'His (seamless) coat ',
					choices: [
						'Crown of thorns ',
						'Harp / Lyre ',
						'Linen clothes '
					]
				}, {		
					id:89,		
					title: 'What does the name Emmanuel mean?',		
					reference: '(Matt 1:23)',		
					answer: 'God with us ',
					choices: [
						'Ask God for wisdom, in faith ',
						'Famine in his home town ',
						'She was a virgin '
					]
				}, {		
					id:90,		
					title: 'What does James say we should do if we lack wisdom?',		
					reference: '(Jam 1:5) ',		
					answer: 'Ask God for wisdom, in faith ',
					choices: [
						'He was swallowed by a great fish ',
						'Our Father which art in heaven ',
						'Blasphemy against the Holy Spirit '
					]
				}, {		
					id:91,		
					title: 'Where did Jesus meet the woman of Samaria?',		
					reference: '(John 4:7)',		
					answer: 'By a well ',
					choices: [
						'Manger ',
						'Red Sea ',
						'Egypt '
					]
				}, {		
					id:92,		
					title: 'Which disciple tried to walk on water, as Jesus did?',		
					reference: '(Matt 14:29) ',		
					answer: '(Simon) Peter ',
					choices: [
						'Joseph ',
						'Jesse ',
						'Eve '
					]
				}, {		
					id:93,		
					title: 'Why did Elimelech go to live in Moab with his family?',		
					reference: '(Ruth 1:1-2)',		
					answer: 'Famine in his home town ',
					choices: [
						'A rich man entering the Kingdom of God ',
						'He was swallowed by a great fish ',
						'Threw him in a pit and then sold him to strangers '
					]
				}, {		
					id:94,		
					title: 'Who lied about the price they received for a piece of land and died as a result?',		
					reference: '(Acts 5:1-11) ',		
					answer: 'Ananias & Sapphira ',
					choices: [
						'Jonathan ',
						'Eve ',
						'David '
					]
				}, {		
					id:95,		
					title: 'With whom did David commit adultery?',		
					reference: '(2 Sam 11:4)',		
					answer: 'Bathsheba ',
					choices: [
						'Cain ',
						'David ',
						'God’s '
					]
				}, {		
					id:96,		
					title: 'When the Prodigal Son returned, his father gave him a robe, shoes and what other item?',		
					reference: '(Luke 15:22) ',		
					answer: 'Ring ',
					choices: [
						'His (seamless) coat ',
						'Stones ',
						'Rib '
					]
				}, {		
					id:97,		
					title: 'How many books are there in the Bible?',		
					reference: '(Gen 1:1 - Rev 22:21)',		
					answer: 'Sixty-six ',
					choices: [
						'Seventy-seven ',
						'Forty ',
						'Twelve '
					]
				}, {		
					id:98,		
					title: 'What are the names of Lazarus\' sisters?',		
					reference: '(John 11:1-3) ',		
					answer: 'Mary and Martha ',
					choices: [
						'Daniel ',
						'Paul ',
						'Abraham '
					]
				}, {		
					id:99,		
					title: 'Where did Jonah go after being thrown overboard and reaching dry land?',		
					reference: '(John 3:3)',		
					answer: 'Nineveh ',
					choices: [
						'Manger ',
						'By a well ',
						'Red Sea '
					]
				}, {		
					id:100,		
					title: 'For what did Esau sell his birthright to Jacob?',		
					reference: '(Gen 25:30-34) ',		
					answer: 'A meal ',
					choices: [
						'Fig ',
						'Two tablets of stone ',
						'Stones '
					]
				}, {		
					id:101,		
					title: 'What happened to Elimelech in Moab?',		
					reference: '(Ruth 1:3)',		
					answer: 'He died',
					choices: [
						'Dipped his coat in the blood of a goat ',
						'Rape ',
						'Murder '
					]
				}
			];
		}
	};
}]);

