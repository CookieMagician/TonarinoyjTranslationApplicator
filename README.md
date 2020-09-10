

# Tonarinoyj Translation Applicator

> This is a simple chrome/firefox extension that applies translated text above manga chapters on the https://tonarinoyj.jp/ website.

## Table of contents
Use these links to maneuver the read-me.

- [Installation](#installation)
- [Usage](#usage)
- [Plans](#plans)
- [How it works](#how)
- [Hosting](#hosting)
- [Built With](#built)
- [License](#license)


## Installation
If you are on Firefox, please use the official release here:

- [WORK IN PROGRESS].

If you are on Google Chrome, follow these steps:

- Download the Repository as a .zip folder (with the green button "code" button)

- Extract the "Tonarinoyj Translation Applicator" folder onto your computer

- Open chrome and enter "chrome://extensions/" in the search bar

- Enable "developer mode" in the top right corner

- Click on the "Load Unpacked" button in the top left corner, and select the downloaded folder.

The extension should now be installed.

## Usage

- Apply a host in the settings menu

If the host is correct, the translations will be applied automatically when you visit https://tonarinoyj.jp/. Click on the icon of the extension to see if there is a translation available for the specific chapter.

## Plans

Here are some things that are planned for the extensions, ranked in order of importance:

- New interface design.
- Support for multiple host sites.
- Official release on the Chrome extension store.

## How it works

The extension is very simple, and relies on a few things:

A host website is required for the extension to work, currently configured to a free website I am hosting but can easily be changed.

Every chapter release has a unique code that can bee seen in the URL. The extension takes that code, checks if the host website has an image stored in a directory with the same name as the code. This tells the program if a translation is available or not. Basically the owner of the host website creates a folder of the same name as a chapter to tell the extension that a translation is out.

The owner of the host site then fills the folder with transparent images that only contain the translated text or any other edits that are needed. The extension then inserts these images on top of the chapter images on the "tonarinoyj" website. This effectively replaces the text on the images with translated text.

## Hosting

So you want to host your own host website, well I am gonna assume you know a little bit about hosting

- Firstly, you want a webserver, storage server or something similar hosted openly to the internet.
  I use Google Cloud Platform since it is easy to setup, requires no domain name of your own,
  and is virtually free on lower loads. I suggest something similar for this.

- Secondly, you want to create a folder/directory/bucket of the same name as the chapter code from the chapter.
  The chapter code is the code after "https://tonarinoyj.jp/episode/" in the URL to the RAW chapter.

- In this folder/directory/bucket you will store transparent images that only contain text and edits that are required.
  
  <div style="width: 100%;">
    <figure>
      <img src="https://i.imgur.com/LMbTBVH.png" width="450px" height="650px">
      <figcaption style="text-align: center;">Regular translated manga page</figcaption>
    </figure>
  
    <figure>
      <img src="https://storage.googleapis.com/opmtranslations/13933686331704862945/27.png" width="450px" height="650px">
      <figcaption style="text-align: center;">How a page should look for hosting</figcaption>
    </figure>

  </div>
  
- The first image should be 0.png, and can contain whatever, it is just used by the extension to test if the translation is out.

- Index the rest of the images based on witch page they represent, "1.png" for the first page etc.

- Double spreads counts as two pages, and should be represented by "x.png" and "x+1.png"

Now type in the base URL to your website in the options for the extension, and it dose the rest by itself.

## Known Issues

No known issues for now!


## Built with

- [jQuery - Ajax](http://www.w3schools.com/jquery/jquery_ref_ajax.asp) - jQuery simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development.

## License

MIT
