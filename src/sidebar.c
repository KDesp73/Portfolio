#include "site.h"

void SidebarLinks(char** buffer)
{
    Link links[] = {
        (Link){.text = "Intro",.link = "#intro", .target = NULL},
        (Link){.text = "Projects",.link = "#projects", .target = NULL},
        (Link){.text = "Skills",.link = "#skills", .target = NULL},
        (Link){.text = "Contact",.link = "#contact", .target = NULL},
        (Link){.text = "Source Code",.link = "https://github.com/KDesp73/webc", .target = "_blank"}
    };

    for (size_t i = 0; i < ARRAY_LEN(links); ++i) {
        char* link = (char*) malloc(1); 
        memset(link, 0, 1);
        WEBC_Li(&link, NO_ATTRIBUTES, links[i].text); 
        WEBC_Anchor(buffer, WEBC_UseModifier((Modifier) {.href = links[i].link, .target = links[i].target}), link);
        free(link);
    }
}

void SidebarFooter(char** buffer)
{
    WEBC_Paragraph(buffer, NO_ATTRIBUTES, "Made with <a href=\"https://github.com/KDesp73/webc\" target=\"_blank\">webc</a>");
    WEBC_Paragraph(buffer, NO_ATTRIBUTES, "Copyright (c) Konstantinos Despoinidis 2024");
}

void SideBar(char** buffer)
{
    WEBC_H2(buffer, NO_ATTRIBUTES, "KDesp73");
    WEBC_Ul(buffer, NO_ATTRIBUTES, SidebarLinks);
    WEBC_Footer(buffer, NO_ATTRIBUTES, SidebarFooter);
}

