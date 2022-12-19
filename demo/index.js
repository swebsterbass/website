// single-line comment

/**
 * to launch teh inspector
 * ctrl + shift + i
 * 
 * google javascript commenting guide
 * https://google.github.io/styleguide/jsguide.html
 * JSDoc is the markup language used to annotate JavaScript source code files.
 * https://javascript.info/comments#good-comments
 * https://en.wikipedia.org/wiki/JSDoc
 * javascript datatypes and data structures
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 */

/**
 * the var statement declares a function-scoped or globally-scoped variable, 
 * optionally intializing it to a value.
 */

/**
 * object
 * 
 * javascript equivalent of c++ structs except you can't make instances of these
 * objects.
 * the curly brace notation for creating javascript objects is called object 
 * intializer.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * https://www.w3schools.com/js/js_objects.asp
 */

// this website should look something like this:
// https://pradyuman7.github.io/?ref=hackernoon.com

var Typer = {
    // object properties
    text: '',
    accessCountimer: null,
    index: 0,
    speed: 2,
    file: '',
    accessCount: 0,
    deniedCount: 0,

    /**
     * intializes the Typer's text property with the entire contents of the file
     * located at this.text
     */
    init: function () {
        /** 
         * setInterval()
         * the setInterval() method repeatedly calls a function or executes a 
         * code snippet with a fixed time delay between each call.
         * this function returns an interval ID which uniquely identifies the 
         * interval, so you can remove it later by calling clearInterval().
         * 
         * delay: integer
         *     the time, in milliseconds, the timer should delay in between 
         *     executions of the specified function or code.
         * https://developer.mozilla.org/en-US/docs/Web/API/setInterval
         * 
         * returns
         * -------
         * returns the id of teh timer.
         * use this id with the clearInterval() to cancel the timer.
         * https://www.w3schools.com/jsref/met_win_setinterval.asp
         * 
         * the return value doesn't seem to be standardized behavior, but 
         * from what i have read and seen in the debugger, it is an integer.
         * https://stackoverflow.com/questions/940120/setinterval-settimeout-return-value
         */
        this.accessCountimer = setInterval(function() {
            Typer.flipCursor();
        }, 500);

        // this.accessCountimer = setInterval(Typer.flipCursor, 500);

        /**
         * jQuery.get()
         * load data from the server using an HTTP GET request.
         * 
         * url: String
         *     a string containing teh url to which the request is sent.
         * 
         * success: Function(PlainObject data, String textStatus, jqXHR jqXHR)
         *     a callback function that is executed if the request succeeds. 
         *     required if dataType is procided, but you can use null or 
         *     jQuery.noop as a placeholder.
         * 
         * https://api.jquery.com/jQuery.get/
         */

        // get the contents of the .txt file located at Typer.file and store it 
        // in Typer.text
        $.get(Typer.file, function (data) {
            // i should test out if these 2 lines do anything different because 
            // they look the same to me.
            Typer.text = data;
            Typer.text = Typer.text.slice(0, Typer.text.length - 1);
        });
    },

    content: function () {
        // returns the text wrapped by the tags of the html element with the 
        // console identifier.

        /**
         * $ is used to replicate document.getElementById()
         * https://codedamn.com/news/javascript/dollar-sign-in-js
         * 
         * document
         * 
         * in a browser, the `document` variable is a dom document (in-memory 
         * tree) of an XML document (generally na html dom document).
         * 
         * the `document` variable is not provided by the javascript engine.
         * the `document` variable is provided by the browser via its dom 
         * webapi.
         * the dom webapi is not a standard javascript library.
         * 
         * the `document` variable exists as a global variable.
         * the `document` variable is really a property of the window object,
         * but is made accessible through a global alias.
         * 
         * the presence of the `document` variable tells you that javascript is
         * running in a browser or a library that supports dom such as jsdom.
         * 
         * if (typeof document !== 'undefined') {
         *   // We are in a browser context
         * } else {
         *   // We are in a non-browser context (node without dom library)
         * }
         * 
         * https://datacadamia.com/web/browser/document
         * 
         * dom web api
         * 
         * The DOM Web API is a part of the Web API that implements the DOM API 
         * in the browser to manipulate the DOM representation of a web page.
         * 
         * This api made possible to manipulate programmatically web page (in 
         * fact the dom) and is made available in the browser usually in 
         * javascript (the browser may support other script language but 
         * javascript is the defacto standard).
         * 
         * https://datacadamia.com/web/javascript/browser/dom
         */

        /** 
         * html()
         * the html() method sets or returns the content (innerHTML (i.e. the text 
         * in between the opening and closing tags)) of the selected elements.
         * when this method is used to return content, it returns the content of 
         * the 1st matched element.
         * when this method is used to set content, it overrites the content of all
         * matched elements.
         * 
         * innerHTML()
         * https://www.w3schools.com/jsref/prop_html_innerhtml.asp
         * https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_textcontent_innerhtml_innertext
         */

        /**
         * if i try to test my code by launching the index.html file in chrome, 
         * this line will raise an exception:
         * Access to XMLHttpRequest at 'file:///C:/Users/webst/OneDrive/to_understand/code/website/content.txt' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.
         * 
         * the error is due to something called cross origin request
         * https://www.w3schools.com/Tags/att_script_crossorigin.asp
         * 
         * one way to circumvent this issue is to setup a local server on your 
         * computer for development
         * https://stackoverflow.com/questions/20041656/xmlhttprequest-cannot-load-file-cross-origin-requests-are-only-supported-for-ht/20578692#20578692
         * 
         * a local server is a computer that serves a client within the local 
         * network or lan. that menas in most cases it will not be connected to 
         * the internet or if it does it will be protected with a password so 
         * not everybody can access its services.
         * usually setup for development and testing of web sites having server 
         * side scripting.
         * the main job of a web server is to display website content through 
         * storing, processing, and delivering webpages to users.
         * https://aleron.net/useful-articles/your-question-what-does-a-local-web-server-do.html
         * https://csveda.com/php/web-servers-local-remote-web-servers/
         * 
         * i launched my local server by running 
         * `python3 -m http.server --bind localhost`
         * in the directory containing my website files.
         * even though many online sources say just to run 
         * `python3 -m http.server` (python3) or `python3 -m http.server` 
         * (python2)
         * https://www.askpython.com/python-modules/python-httpserver
         * https://www.educba.com/python-3-http-server/
         * the -m option allows you to launch python3 to execute the contents of
         * the passed in python module. this is necessary to execute the default
         * behavior of a python http server which has been stored in the python 
         * library module http.server
         * https://docs.python.org/3/using/cmdline.html#cmdoption-m
         * 
         * python standard library http.server
         * https://docs.python.org/3/library/http.server.html#module-http.server
         * 
         * i had to scour the internet for why the link that the python server 
         * displayed as its network address was failing to load my content.
         * it was not working because i had to use the --bind option and pass 
         * this option the value `localhost`. without this, the ip address would
         * always be 0.0.0.0 or ::
         * https://stackoverflow.com/questions/54186651/windows-python-http-server-can-not-be-reached
         */
        return $('#console').html();
    },

    write: function (str) {
        // append the input string to the console html element.
        $('#console').append(str);
        return false;
    },

    addText: function (key) {
        if (key.keyCode == 18) {
            Typer.accessCount++;

            if (Typer.accessCount >= 3) {
                Typer.makeAccess();
            }
        } else if (key.keyCode == 20) {
            Typer.deniedCount++;
            if (Typer.deniedCount >= 3) {
                Typer.makeDenied();
            }
        } else if (key.keyCode == 27) {
            Typer.hidepop();
        } else if (Typer.text) {
            var cont = Typer.content();

            // if the last substring is teh cursor, remove it.
            if (cont.substring(cont.length - 1, cont.length) == '|')
                $('#console').html(
                    $('#console').html().substring(0, cont.length - 1),
                );
            if (key.keyCode != 8) {
                Typer.index += Typer.speed;
            } else {
                if (Typer.index > 0) Typer.index -= Typer.speed;
            }
            var text = Typer.text.substring(0, Typer.index);
            /**
             * RegExp
             * a standard builtin object
             * the second parameter is for flags. the 'g' flag means global and
             * indicates that all matches will be found as opposed to stopping 
             * at the 1st match.
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
             */
            var rtn = new RegExp('\n', 'g')

            $('#console').html(text.replace(rtn, '<br/>'));

            /**
             * scrolls a window by a certain amount of pixels in the (x, y)
             * directions.
             * 
             * https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
             */
            window.scrollBy(0, 50);
        }

        if (key.preventDefault && key.keyCode != 122) {
            key.preventDefault();
        }

        if (key.keyCode != 122) {
            // otherway prevent keys default behavior
            key.returnValue = false;
        }
    },

    flipCursor: function () {
        /**
         * if the pipe representing the cursor is present at the end of the 
         * line, then remove it.
         * if the pipe representing the cursor is absent at the end of the line,
         * then add it.
         */
        var cont = this.content();

        if (cont.substring(cont.length - 1, cont.length) == '|')
            $('#console').html(
                $('#console').html().substring(0, cont.length - 1),
            );
        else this.write('|');
    }
}

function replaceUrls(text) {
    /**
     * replaces urls starting with http that also have .me in them, with the 
     * same url up to and excluding the '.me'.
     * 
     * the replacement is an anchor element, but the url is also the display 
     * name of the url.
     */

    // String.prototype.indexOf()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
    var http = text.indexOf('http://');
    var space = text.indexOf('.me ', http);

    // if indexOf returns -1, then the searchString was not found.
    if (space != -1) {
        var url = text.slice(http, space - 1);
        return text.replace(url, '<a href="' + url + '">' + url + '</a>');
    } else {
        return text;
    }
}

Typer.speed = 3;
Typer.file = 'content.txt';
Typer.init();

var timer = setInterval(t, 30)

function t() {
    Typer.addText({ keyCode: 123748});

    // stop the interval checker for typing out content.txt if we have reached 
    // the end of content.txt
    if (Typer.index > Typer.text.length) {
        clearInterval(timer);
    }
}