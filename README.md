# VSCode extension used by Talon Voice
VSCode extension used by my talon scripts.

In very early development. Things will break!

## Features
* andreas.selectTo(line: int)    
    Select from current location to specified line.
* andreas.lineMiddle()    
    Move curser to middle of the current line
* andreas.formatDocument()    
    Format/auto indent talon files

### Jump
Automatically highligts all words on the current line. 
* andreas.jumpSearch(pattern: str)    
    Search and highlight all occurrences of the pattern in the editor.
* andreas.jumpCancel()    
    Cancel search and remove all highlights.
* andreas.jumoAction(action: str, key: str, value: str)    
    Perform action on the specified key. With optional value for some actions.    
    actions: go, before, after, select, delete, extend, replace

## Installation
    npm install -g vsce

    vsce package

## Requirements
* [Command server](https://marketplace.visualstudio.com/items?itemName=pokey.command-server)

## Resources
* [Talon Voice](https://talonvoice.com)
