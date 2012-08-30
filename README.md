# jquery-storage

A simple, jQuery plugin for store information using localStorage or cookie.

## Installation

You will need usign a jquery-cookie (https://github.com/carhartl/jquery-cookie)

Include script after the jQuery library (unless you are packaging scripts somehow else):

    <script src="/path/to/jquery.cookie.js"></script>
    <script src="/path/to/jquery.storage.js"></script>

## Usage

To read information

    $('#id').storage();
    $('type').storage();
    $('.class').storage();

To read information (all contents)

    $('#id').storage({'name' : 'test', 'location' : 'cookie'});

To update information or create
    
    $('#id').storage('update');
    
To update information or create (all contents)

    $('#id').storage('update', {'name' : 'test', 'value' : 'test1', 'location' : 'localStorage'});
    
To remove

     $('#id').storage('remove');
    

To remove (all contents)

    $('#id').storage('remove', {'name' : 'test', 'location' : 'localStorage'});

If have support to localStorage

    $('#id').storage('support');

## Authors
[Thyago Quintas](https://github.com/thyagoquintas)