/*
I don't want anybody to find my email on my page and then spam me with junk. 
So, I just store a bad ROT1 version of anything that could be used to spam me.
This is all assuming that web crawlers don't have a javascript engine.

Don't take this to be exemplary of my coding skill, this is seriously just 
something hacked together so I could have a resume on Github and not be spammed.
*/

jQuery.noConflict()(function($) {
    var encryptedValues = {
        email: ["nbyxjuufl,sftvnfAhnbjm/dpn", -1], // rot by -1
        phone: ["%/-.&\x1D33-*1356", 3],  // rot by +3
    };

    // Thanks stackoverflow
    var rot = function(str, offset) {
        return str.replace(/./g, function(c) { 
            return String.fromCharCode(c.charCodeAt(0) + offset);
        });
    };

    // 'decrypt' is a strong word for what's going on here
    var decryptVariable = function(name) {
        var hashEntry = encryptedValues[name];
        return rot(hashEntry[0], hashEntry[1]);
    };

    const email = decryptVariable("email");

    $("#contact-info #value-comes-from-js").html(
        // actually I really don't want anybody contacting me by phone before they email me now that I think about it
        // [decryptVariable("email"), decryptVariable("phone")].join("<br />")
        `<a href="mailto:${email}">${email}</a>`
        );

});
