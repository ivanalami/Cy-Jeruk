# Cypres-Mina-Alami

### Requirement :
  1. NodeJS v16++
  2. Cypress v10++
  3. Terminal Console
  
### Installation
  1. Open terminal
  2. Go To Project Folder
  3. Run in Terminal :
      ```bash
      npm install
      ```

### Run in Local development
  1. Go To folder test
  2. Install dependencies Cypress 
      ```
      npm install
      ```
  3. Start local server mina-alami
  4. Open `cypress.config.js` change baseUrl to : `http://localhost:8080/` 
     ```javascript
      {
        e2e: {
          baseUrl:"https://dev.p2p.alamisharia.co.id/",
          ...
      }
     ```
   
 ### Run Testing
  1. Open terminal
  2. Go to Project Folder
  3. Run in terminal :
      ```bash
      npm run test
      ```
  
  ### Run Debuging mode in local
  1. Open Terminal
  2. Go to Project Folder
  3. Run in terminal :
      ```bash
      npx cypress open
      ```
      With this command, cypress will open GUI mode. So you can run spesific test for manually.

  ### Development mode

  
