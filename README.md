# Ancient-Greek-Vocab-API

This API is the backend of the flashcard app [Mnemosyne](https://github.com/coleenhuang/Mnemosyne).  
It was built using Node, Express and PostgresQL. Testing was conducted with Mocha, Chai and Supertest.

## Endpoints

## GET  
### /parts  
returns a list of verbs with all six principal parts and their meanings

### /folders  
returns a list of folders  

/folders/:folder_id  
returns the sets within a specific folder

### /sets  
returns a list of all sets

/sets/:set_id  
returns the vocab for a specific set

### /vocab  
returns all vocab and definitions  

### /irregular (under construction)

/verbs
parameter   
tense - limits the results to a certain tense

returns the conjugations of the verb

/nouns  
returns the declined forms of the nouns
