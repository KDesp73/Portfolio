#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#include "webc-actions.h"
#include "webc-templates/spp.h"

int main(int argc, char** argv)
{
    WebcAction action = WEBC_ParseCliArgs(argc, argv);
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
            .title = "PawrfectMatch",
            .link = "https://github.com/KDesp73/PawrfectMatch",
            .lang = "Kotlin",
            .license = "MIT",
            .desc = "An android app to help you find your furry friend and more! "
        },
        (Project) {
            .title = "cchat",
            .link = "https://github.com/KDesp73/cchat",
            .lang = "C",
            .license = "GPL-3.0",
            .desc = "A simple chat service for the terminal written in C"
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

    Cstr skills[] = {
        "c",
        "cpp",
        "java",
        "py",
        "ruby",
        "rails",
        "html",
        "css",
        "js",
        "electron",
        "arduino",
        "git",
        "linux",
        "processing",
        "wordpress",
        "neovim",
        "cmake",
        "svelte",
        "lua",
        "sqlite",
        "kotlin",
        "androidstudio",
        "firebase"
    };
    
    
    SinglePagePortfolio portfolio = {
        .title = "Portfolio",
        .author = "Konstantinos Despoinidis",
        .email = "despoinidisk@gmail.com",
        .year = 2024,
        .github_username = "KDesp73",
        .about =  "I am a Software and Electronics Engineering Student located at Thessaloniki, Greece",
        .style_path = "./style.css",
        .projects = projects,
        .projects_count = ARRAY_LEN(projects),
        .skills = skills,
        .skills_count = ARRAY_LEN(skills)
    };

    Cstr root = "docs";
    Tree tree = WEBC_MakeTree(root,
        WEBC_MakeRoute("/", WEBC_SinglePagePortfolioTemplate(portfolio)),
        NULL
    );

    WEBC_HandleAction(action, tree);

    return 0;
}
