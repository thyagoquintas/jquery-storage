# jquery-storage

A simple, jQuery plugin for store information using localStorage or cookie.

## Installation

You will need usign a jquery-cookie (https://github.com/carhartl/jquery-cookie)

Include script after the jQuery library (unless you are packaging scripts somehow else):

    <script src="/path/to/jquery.cookie.js"></script>
    <script src="/path/to/jquery.storage.js"></script>

## Usage

To read information

    $.storage( { 'key' : 'foo'} );
    JSON.parse($.storage( { 'key' : 'foo'} ));

To read information (all contents)

    $.storage({'key' : 'foo', 'location' : 'cookie'});
    JSON.parse($.storage({'key' : 'foo', 'location' : 'cookie'}));

To update information or create
    
    $.storage('update', { 'key' : 'foo', 'value' : 'bar' });
    
To update information or create (all contents)

    $.storage('update', {'key' : 'foo', 'value' : 'bar', 'location' : 'localStorage'});
    
To remove

     $.storage('remove', { 'key' : 'foo' });
    
To remove (all contents)

    $.storage('remove', {'key' : 'foo', 'location' : 'cookie'});

If have support to localStorage

    $.storage('support');

To clear all storage

     $.storage('clear');
    
To clear all storage (all contents)

    $.storage('clear', {'location' : 'cookie'});

## Authors
[Thyago Quintas](https://github.com/thyagoquintas)