#include "site.h"
#include "webc-core.h"

#include <ctype.h>
#include <string.h>

char* capitalize_first_letter(const char *str) {
    if (str != NULL && strlen(str) > 0) {
        char *copy = malloc(strlen(str) + 1);
        strcpy(copy, str);
        copy[0] = toupper(copy[0]);
        return copy;
    }
    return NULL;
}

void Section(char** buffer, Cstr title)
{
    Modifier m = {
        .id = title
    };
    char* t = capitalize_first_letter(title);
    WEBC_H1(buffer, WEBC_UseModifier(m), t);
    free(t);
    WEBC_Br(buffer);
}

void Intro(char** buffer, Cstr name, Cstr about)
{
    Section(buffer, "intro");
    
    char* par = clib_format_text("Hello there! My name is %s<br><br>%s", name, about);
    WEBC_Paragraph(buffer, NO_ATTRIBUTES, par);
    free(par);
}

void ShowProject(char** buffer, Project project)
{
    WEBC_DivStart(buffer, WEBC_UseModifier((Modifier) {.class = "project"}));
        char* anchor = (char*) malloc(1);
        memset(anchor, 0, 1);
        WEBC_Anchor(&anchor, WEBC_UseModifier((Modifier) {.href = project.link, .target = "_blank"}), project.title);
        WEBC_H2(buffer, NO_ATTRIBUTES, anchor);
        free(anchor);

        char* subtitle = clib_format_text("<b>Language:</b> %s | <b>License:</b> %s", project.lang, project.license);
        WEBC_Paragraph(buffer, NO_ATTRIBUTES, subtitle);
        free(subtitle);

        WEBC_Paragraph(buffer, NO_ATTRIBUTES, project.desc);

    WEBC_DivEnd(buffer);
}

void Projects(char** buffer)
{
    Section(buffer, "projects");

    Project projects[] = {
        (Project) {
            .title = "webc",
            .link = "https://github.com/KDesp73/webc",
            .lang = "C",
            .license = "MIT",
            .desc = "A library that allows you to write websites (like this one!) using C"
        },
        (Project) {
            .title = "kdscript",
            .link = "https://github.com/KDesp73/kdscript",
            .lang = "Python",
            .license = "MIT",
            .desc = "My very own interpreted programming language"
        },
        (Project) {
            .title = "Chess",
            .link = "https://github.com/KDesp73/Chess",
            .lang = "C++",
            .license = "MIT",
            .desc = "Two player chess with a tui and a gui implementation"
        },
        (Project) {
            .title = "Kittify",
            .link = "https://github.com/KDesp73/Kittify",
            .lang = "Java",
            .license = "MIT",
            .desc = "A modern, api-equipped music player for any PC"
        },
        (Project) {
            .title = "DataBridge",
            .link = "https://github.com/KDesp73/DataBridge",
            .lang = "Java",
            .license = "MIT",
            .desc = "An easy-to-use and fully extendable Java to DBMS connector library"
        },
        (Project) {
            .title = "project-starter.nvim",
            .link = "https://github.com/KDesp73/project-starter.nvim",
            .lang = "Lua",
            .license = "The Unlicense",
            .desc = "A neovim plugin to help you quickstart you development by creating the project structure"
        },
        (Project) {
            .title = "platformer",
            .link = "https://github.com/KDesp73/platformer",
            .lang = "C",
            .license = "MIT",
            .desc = "A platformer written in C using the raylib library, featuring a level builder"
        },
    };

    for(size_t i = 0; i < ARRAY_LEN(projects); ++i){
        ShowProject(buffer, projects[i]);
    }
    
}

void Skills(char** buffer)
{
    Section(buffer, "skills");
    WEBC_Paragraph(buffer, NO_ATTRIBUTES, "I am familiar with the following technologies");



    WEBC_Img(buffer, WEBC_UseModifier((Modifier) {.src = "https://skillicons.dev/icons?i=c,cpp,java,py,ruby,rails,html,css,js"}));
    WEBC_Img(buffer, WEBC_UseModifier((Modifier) {.src = "https://skillicons.dev/icons?i=electron,arduino,git,linux,processing,wordpress,neovim,cmake,svelte"}));
    WEBC_Img(buffer, WEBC_UseModifier((Modifier) {.src = "https://skillicons.dev/icons?i=lua,sqlite,kotlin,androidstudio,firebase"}));

}

void Contact(char** buffer)
{
    Section(buffer, "contact");

    char* email_anchor = (char*) malloc(1);
    memset(email_anchor,0,1);
    WEBC_Anchor(&email_anchor, WEBC_UseModifier((Modifier) {.href = "mailto:despoinidisk@gmail.com"}), "despoinidisk@gmail.com");
    char* email_paragraph = clib_format_text("Email: %s", email_anchor);
    free(email_anchor);
    WEBC_Paragraph(buffer, NO_ATTRIBUTES, email_paragraph);
    free(email_paragraph);
    
    char* github_anchor = (char*) malloc(1);
    memset(github_anchor,0,1);
    WEBC_Anchor(&github_anchor, WEBC_UseModifier((Modifier) {.href = "https://github.com/KDesp73"}), "@KDesp73");
    char* github_paragraph = clib_format_text("Github: %s", github_anchor);
    free(github_anchor);
    WEBC_Paragraph(buffer, NO_ATTRIBUTES, github_paragraph);
    free(github_paragraph);

}

void Seperator(char** buffer)
{
    WEBC_Br(buffer);
    WEBC_Br(buffer);
    WEBC_Hr(buffer);
    WEBC_Br(buffer);
    WEBC_Br(buffer);
}

void Content(char** buffer)
{
    Intro(buffer, AUTHOR, "I am a Software and Electronics Engineering Student located at Thessaloniki, Greece");
    Seperator(buffer);
    Projects(buffer);
    Seperator(buffer);
    Skills(buffer);
    Seperator(buffer);
    Contact(buffer);
}
