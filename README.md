## cypress

#### step-step
- npm init -y
- npm install cypress (will be installed the latest version)
- npx cypress -v (to check version of cypress)
- npx cypress open (to open the cypress)

#### cypress 1st test
- create file under `cypress>integration` folder
- at the top, mention the word `/// <reference types="cypress" />`
- write a test function. to write a test, we need a test runner --> using `mocha` (Mocha comes built-in with cypress)
- npx cypress open (run the test)
- access elements

#### how to access elements
- jika class tidak bisa ditemukan, maka cypress by default akan menunggu hingga 4000ms sebelum mengirim AssertionError.

#### reference
- channel youtube `Automation step by step` by Raghav