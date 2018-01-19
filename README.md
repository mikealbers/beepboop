# _Beep-Boop_

#### _This is the Beep-Boop program, 01/19/18_

#### By _**Michael Albers**_

## Description

_Rules for Beep-Boop from the assignment:_

* First, here are the rules of Beep-Boop:

* Numbers that contain a 0 are replaced (all digits) with "Beep!".

* Numbers that contain a 1 are replaced (all digits) with a "Boop!".

* Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that".

## Methodology

_The following specs are included in the program:_

* Take a numerical input from user and return all numbers up to that number, replacing numbers according to the above rules.

* Program does nothing to alphabetical characters.
  - Example Input: Let me try to break your code!
  - Example Output: Please enter a number

* Program replaces 0 with "Beep!"
  - Example Input: 0
  - Example Output: ["Beep!"]

* Program replaces 1 with "Boop!"
  - Example Input: 10
  - Example Output: ["Boop!"]

* Program replaces numbers divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that".
  - Example In: 310
  - Example Out: ["I'm sorry, Dave. I'm afraid I can't do that".]

* The program moves the consonant to the end of the word if it starts with a consonant - X
  - Example In: Banana
  - Example Out: ananaB
  - Exception: Chin (would become hinC)

* The program adds "ay" to a multi-letter word that has just gotten a consonant added at the end. - X
  - Example In: ananaB
  - Example Out: ananaBay

* The program moves consecutive consonants to the end of the word - X
  - Example In: Chin
  - Example Out: hinC

* The program adds "ay" to a multi-letter word that has just gotten consecutive consonants added at the end. - X (implicit in step above)
  - Example In: inCh
  - Example Out: inChay

* The program checks if the word starts with "qu" and moves it to the end. - X
  - Example In: queen
  - Example Out: eenqu

* The program adds "ay" to a multi-letter word that have just gotten consecutive consonants added at the end. - (implicit in the step above)
  - Example In: eenqu
  - Example Out: eenquay

* The program takes in a sentence and applies the above rules to each word.
 - Example In: I am Oliver Queen.
 - Example Out: Iway amWay Oliverway eenQuay
 - Example In: This is a test of the program
 - Example Out: isThay isway away esttay ofway ethay ogrampray

* Pretty up the sentence

* Output sentence in pig Latin

* Refactor code

## Setup/Installation Requirements

* _Download the files from the repository_
* _Open the files with the browser of your choice._

## Known Bugs

_There are no known issues at this time._

## Support and contact details

_You can contact me at albersmichael@tutanota.com _

## Technologies Used

_Uses HTML, CSS, javascript, and jQuery._

### License

*Distributed under the GPL*

Copyright (c) 2018 **_Michael Albers_**
