#ifndef SITE_H
#define SITE_H

#include "webc-core.h"

#define AUTHOR "Konstantinos Despoinidis"

typedef struct {
    Cstr text;
    Cstr link;
    Cstr target;
} Link;


void SidebarLinks(char** buffer);
void SidebarFooter(char** buffer);
void SideBar(char** buffer);

void Intro(char** buffer, Cstr name, Cstr about);
void Content(char** buffer);


#endif // SITE_H
