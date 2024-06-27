#include "site.h"
#include "webc-core.h"

void Intro(char** buffer, Cstr name, Cstr about)
{
    WEBC_H1(buffer, NO_ATTRIBUTES, "Intro")
    
    char* par = clib_format_text("Hello there! My name is %s<br><br>%s", name, about);
    WEBC_Paragraph(buffer, NO_ATTRIBUTES, par);
    free(par);
}

void Content(char** buffer)
{
    Intro(buffer, AUTHOR, "I am a Software and Electronics Engineering Student located at Thessaloniki, Greece");
}
