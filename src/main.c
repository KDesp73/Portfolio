#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#include "webc-core.h"
#include "webc-actions.h"

void address_content(char** buffer)
{
    PlainText(buffer, "Written by ");
    Anchor(buffer, MakeAttributeList(MakeAttribute(ATTR_HREF, "KDesp73"), MakeAttribute(ATTR_TARGET, "_blank"), NULL), "KDesp73");
    Br(buffer);
    PlainText(buffer, "Source code at: ");
    Anchor(buffer, MakeAttributeList(MakeAttribute(ATTR_HREF, "KDesp73/webc"), MakeAttribute(ATTR_TARGET, "_blank"), NULL), "webc");
}

void text_demo(char** buffer){
    for (size_t i = 1; i <= 6; ++i) {
        Heading(buffer, NO_ATTRIBUTES, i, clib_format_text("Heading %zu", i));
    }
    Paragraph(buffer, NO_ATTRIBUTES, "Hello from C");
}

void list_fruits(char** buffer)
{
    CstrArray fruits = clib_cstr_array_make(
        "apple", "banana", "cherry", "watermelon", "pear", NULL
    );
    CstrArray colors = clib_cstr_array_make(
        "red", "yellow", "red", "green", "lightgreen", NULL
    );

    for(size_t i = 0; i < fruits.count; ++i){
        Li(buffer, 
            MakeAttributeList(
                MakeAttribute(ATTR_STYLE, clib_format_text("color: %s;", colors.items[i])), 
                MakeAttribute(ATTR_CLASS, "item"), 
                NULL
            ), 
            fruits.items[i]
        );
    }
}

char* Index()
{
    char* buffer = NULL;

    HtmlStart(&buffer, "en");
    Head(&buffer, "WebC Example",
        MakeTag(META,
            MakeAttributeList(
                MakeAttribute(ATTR_NAME, "author"),
                MakeAttribute(ATTR_CONTENT, "Konstantinos Despoinidis"),
                NULL
            )
        ),
        MakeTag(BASE, 
            MakeAttributeList(
                MakeAttribute(ATTR_HREF, "https://www.github.com"),
                MakeAttribute(ATTR_TARGET, "_blank"),
                NULL
            )
        ),
        NULL
    );

    ScriptStart(&buffer);
        Javascript(&buffer, "INFO = (str) => { console.log('[INFO] ' + str); }");
        Javascript(&buffer, "INFO('Website made by KDesp73')");
        Javascript(&buffer, "INFO('Using webc')");
    ScriptEnd(&buffer);


    BodyStart(&buffer);
        Div(
            &buffer,
            MakeAttributeList(MakeAttribute(ATTR_STYLE, "background-color: grey;"), NULL),
            text_demo
        );

        Input(&buffer, MakeAttributeList(MakeAttribute(ATTR_STYLE, "color: red;"), NULL));
        Br(&buffer);
        Hr(&buffer);
        Abbr(&buffer, MakeAttributeList(MakeAttribute(ATTR_TITLE, "World Health Organization"), NULL), "WHO");

        Address(&buffer, NO_ATTRIBUTES, address_content);

        Modifier image_modifier = {
            .src = "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
            .alt = "chameleon",
            .width = 500,
            .height = 300,
        };

        Img(&buffer, UseModifier(image_modifier));

        Ul(&buffer, MakeAttributeList(MakeAttribute(ATTR_STYLE, "background-color: #181818;"), NULL), list_fruits);
        text_demo(&buffer);

    BodyEnd(&buffer);
    HtmlEnd(&buffer);

    return buffer;
}

char* About()
{
    char* buffer = NULL;
    HtmlStart(&buffer, "en");
    Head(&buffer, "About",
        MakeTag(META, 
            MakeAttributeList(
                MakeAttribute(ATTR_NAME, "author"),
                MakeAttribute(ATTR_CONTENT, "Konstantinos Despoinidis"),
                NULL
            )
        ),
        MakeTag(BASE, 
            MakeAttributeList(
                MakeAttribute(ATTR_HREF, "https://www.github.com"),
                MakeAttribute(ATTR_TARGET, "_blank"),
                NULL
            )
        ),
        NULL
    );

    BodyStart(&buffer);
        Heading(&buffer, NO_ATTRIBUTES, 1, "About");
        Anchor(&buffer, MakeAttributeList(MakeAttribute(ATTR_HREF, "KDesp73"), NULL), "Github");
        Paragraph(&buffer, MakeAttributeList(MakeAttribute(ATTR_STYLE, "color: red;"), NULL), "Test");
    BodyEnd(&buffer);
    HtmlEnd(&buffer);

    return buffer;
}

void form(char** buffer)
{
    Input(buffer, MakeAttributeList(
        MakeAttribute(ATTR_TYPE, "text"),
        MakeAttribute(ATTR_NAME, "greeting"),
        MakeAttribute(ATTR_VALUE, "Hello"),
        NULL
    ));
    Input(buffer, MakeAttributeList(
        MakeAttribute(ATTR_TYPE, "text"),
        MakeAttribute(ATTR_NAME, "name"),
        MakeAttribute(ATTR_VALUE, "World"),
        NULL
    ));
    Input(buffer, MakeAttributeList(
        MakeAttribute(ATTR_TYPE, "submit"),
        NULL
    ));
}

char* Forms()
{
    char* buffer = NULL;
    HtmlStart(&buffer, "en");
    Head(&buffer, "Forms",
        MakeTag(META, 
            MakeAttributeList(
                MakeAttribute(ATTR_NAME, "author"),
                MakeAttribute(ATTR_CONTENT, "Konstantinos Despoinidis"),
                NULL
            )
        ),
        NULL
    );

    BodyStart(&buffer);
        Heading(&buffer, NO_ATTRIBUTES, 1, "Contact");

        Modifier form_modifier = {
            .method = "get",
            .action = "index.html"
        };

        H2(&buffer, NO_ATTRIBUTES, "GET form");
        Form(&buffer, UseModifier(form_modifier), form);

        Br(&buffer);
        Br(&buffer);
        Br(&buffer);

        form_modifier.method = "post";
        H2(&buffer, NO_ATTRIBUTES, "POST form");
        Form(&buffer, UseModifier(form_modifier), form);

    BodyEnd(&buffer);
    HtmlEnd(&buffer);

    return buffer;
}

int main(int argc, char** argv)
{
    WebcAction action = ParseCliArgs(argc, argv);

    Cstr root = "site";
    Tree tree = MakeTree(root,
        MakeRoute("/", Index()),
        MakeRoute("/about", About()),
        MakeRoute("/forms", Forms()),
        NULL
    );

    HandleAction(action, tree);

    return 0;
}


