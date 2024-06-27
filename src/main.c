#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#include "webc-core.h"
#include "webc-actions.h"
#include "site.h"

char* SinglePageTemplate(Cstr title, Cstr author, Cstr style)
{
    char* buffer = NULL;

    WEBC_HtmlStart(&buffer, "en");
        WEBC_Head(&buffer, title,
            WEBC_MakeTag(META, 
                WEBC_MakeAttributeList(
                    WEBC_MakeAttribute(ATTR_NAME, "author"),
                    WEBC_MakeAttribute(ATTR_CONTENT, author),
                    NULL
                )
            ),
            NULL
        );

        WEBC_StyleStart(&buffer);
            WEBC_IntegrateFile(&buffer, style);
        WEBC_StyleEnd(&buffer);

        WEBC_BodyStart(&buffer);
            Modifier sidebar_modifier = {
                .class = "sidebar",
            };
            WEBC_Div(&buffer, WEBC_UseModifier(sidebar_modifier), SideBar);

            WEBC_Main(&buffer, NO_ATTRIBUTES, Content);

        WEBC_BodyEnd(&buffer);

    WEBC_HtmlEnd(&buffer);

    return buffer;
}

int main(int argc, char** argv)
{
    WebcAction action = WEBC_ParseCliArgs(argc, argv);

    Cstr root = "site";
    Tree tree = WEBC_MakeTree(root,
        WEBC_MakeRoute("/", SinglePageTemplate("Portfolio", AUTHOR, "./style.css")),
        NULL
    );

    WEBC_HandleAction(action, tree);

    return 0;
}
