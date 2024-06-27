#ifndef SITE_H
#define SITE_H

#include "webc-core.h"

#define AUTHOR "Konstantinos Despoinidis"

typedef struct {
    Cstr text;
    Cstr link;
    Cstr target;
} Link;

typedef struct {
    Cstr title;
    Cstr link;
    Cstr lang;
    Cstr license;
    Cstr desc;
} Project;

void SidebarLinks(char** buffer);
void SidebarFooter(char** buffer);
void SideBar(char** buffer);

void Intro(char** buffer, Cstr name, Cstr about);
void Projects(char** buffer);
void Skills(char** buffer);
void Contact(char** buffer);
void Content(char** buffer);


#endif // SITE_H
