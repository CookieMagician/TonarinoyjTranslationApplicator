

# Opm Translation Extension

> This is a simple chrome extension that applies translated text above OPM manga panels




# How it works


The extension is very simple, and relies on a few things:

A host website is required for the extension to work, currently configured to a free website I am hosting but can easily be changed.

Every chapter release has a unique code that can bee seen in the URL. The extension takes that code, checks if the host website has an image stored in a directory with the same name as the code. This tells the program if a translation is available or not. Basically the owner of the host website creates a folder of the same name as a chapter to tell the extension that a translation is out.

The owner of the host site then fills the folder with transparent images that only contain the translated text or any other edits that are needed. The extension then inserts these images on top of the chapter images on the "tonarinoyj" website. This effectively replaces the text on the images with translated text.

# Known Issues

The extension is currently very buggy, and has a few known big issues:

- The images that are applied over already loaded images do not appear in the right place.

- Translations can be applied twice, but this should not be able to happen and causes JavaScript errors. Please reload the page before attempting to apply a translation again.

# Installation

In case you wan to install and try the extension, follow these steps

- Download the Repositiory as a .zip folder

- Extract the OPM translate folder onto your computer

- Open chrome and enter "chrome://extensions/" in the search bar

- Enable "developer mode" in the top right corner

- Click on the "Load Unpacked" button in the top left corner, and select the downloaded folder.

The extension should now be installed.

# Usage

- Click the puzzle piece icon on the chrome taskbar.

- Pin the opm translation extension to the taskbar.

- Click on the extensions icon.

- Click on open options.

- Input host website in the options tab and press save.

- Browse to a chapter of One Punch Man on the "tonarinoyj" website.

- Click on the extension again, and it will now tell you if there is a translation available or not.

- If there is a translation available, press the "apply" button.

- The translation should now be applied.



## Built with

- [jQuery - Ajax](http://www.w3schools.com/jquery/jquery_ref_ajax.asp) - jQuery simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development.

## License
