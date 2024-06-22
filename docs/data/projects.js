const projects = [
    {
        title: "WebC",
        link: "https://github.com/KDesp73/webc",
        img: "",
        fg: "white"
    },
    {
        title: "Platformer",
        link: "https://github.com/KDesp73/platformer",
        img: "",
        fg: "white"
    },
    {
        title: "Kittify",
        link: "https://github.com/KDesp73/Kittify",
        img: "https://private-user-images.githubusercontent.com/63654361/284087278-b0475e94-21c7-4a58-b2f6-367684dd2cc8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTczOTk0NzgsIm5iZiI6MTcxNzM5OTE3OCwicGF0aCI6Ii82MzY1NDM2MS8yODQwODcyNzgtYjA0NzVlOTQtMjFjNy00YTU4LWIyZjYtMzY3Njg0ZGQyY2M4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjAzVDA3MTkzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ5YTg2MGVjZjg2OGNlYjMyOThkOTBmYzZiMDc4ZDI1MWI3NWE2MzMzNTQyN2VmN2JiMjFkM2UyY2I2NzI1NzAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.v-8KGpU3ENwwZ7pxQyxQr-m5nLpy3VhVzwjcncTUQYE",
        fg: "white"
    },
    {
        title: "cchat",
        link: "https://github.com/KDesp73/cchat",
        img: "https://www.shutterstock.com/image-vector/talk-bubble-speech-icon-blank-600nw-1415472902.jpg",
        fg: "black"
    },
    {
        title: "PawrfectMatch",
        link: "https://github.com/KDesp73/PawrefectMatch",
        img: "https://private-user-images.githubusercontent.com/63654361/330217084-f2da0635-1b21-402a-bc6f-77d19e53bb69.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTY5MzQ2MDksIm5iZiI6MTcxNjkzNDMwOSwicGF0aCI6Ii82MzY1NDM2MS8zMzAyMTcwODQtZjJkYTA2MzUtMWIyMS00MDJhLWJjNmYtNzdkMTllNTNiYjY5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTI4VDIyMTE0OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk2Njk1NmFmNzI1NTFmZGE4OGFkOThmYzRhMmVlYjA0YmZlMTI0M2ExMDMwYTJhYmRmNjI1MzJmMWI4MDM3OTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.tp7beGLJPeDU6424R1xJituNgyy3DNRZqNDZPbPFbKk",
        fg: "black"
    },
    {
        title: "kdscript",
        link: "https://github.com/KDesp73/kdscript",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdcR4EVcK6pzvqQl6GBSrTEsVeA7_UgOFHTSdfx9HQs6DqRQxH4WV2zxqvp2CjfFM9ho&usqp=CAU",
        fg: "black"
    },
    {
        title: "Pong",
        link: "https:/github.com/KDesp73/pong",
        img: "https://private-user-images.githubusercontent.com/63654361/335857312-1222e316-da74-45fa-81ad-d17e96ccc951.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTczOTg2MDgsIm5iZiI6MTcxNzM5ODMwOCwicGF0aCI6Ii82MzY1NDM2MS8zMzU4NTczMTItMTIyMmUzMTYtZGE3NC00NWZhLTgxYWQtZDE3ZTk2Y2NjOTUxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjAzVDA3MDUwOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE2MTAyYjQyYjgzNDhkNDQwMGRiYTk1ZmQ4YjQ5NDk4YjJlYTNiZDhiYmM5MjhmOWY0MzJjODAxOGFmM2Y5MjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.uquEXNoGLlPKAGKF_aORm0tA4n7xVA7k-RdpYUgYOUE",
        fg: "white"
    },
    {
        title: "project-starter.nvim",
        link: "https://github.com/KDesp73/project-starter.nvim",
        img: "",
        fg: "white"
    },
    {
        title: "terminal-todo",
        link: "https://github.com/KDesp73/terminal-todo",
        img: "",
        fg: "white"
    },
    {
        title: "Cli-Pomodoro",
        link: "https://github.com/KDesp73/Cli-Pomodoro",
        img: "",
        fg: "white"
    },
    {
        title: "Docs Site",
        link: "https://kdesp73.github.io/Docs/",
        img: "https://user-images.githubusercontent.com/63654361/215619520-e666a958-6c39-417f-9e14-c702507a10c8.png",
        fg: "white"
    },
    {
        title: "DataBridge library",
        link: "https://github.com/KDesp73/DataBridge",
        img: "https://www.logo.wine/a/logo/Microsoft_Access/Microsoft_Access-Logo.wine.svg",
        fg: "white"
    },
    {
        title: "Swing-Themes-Lib",
        link: "https://github.com/KDesp73/Swing-Themes-Library",
        img: "https://user-images.githubusercontent.com/63654361/218871863-16ae4acc-36ab-4039-9907-198fc741d9ec.jpg",
        fg: "white"
    },
    {
        title: "SyncR",
        link: "https://github.com/KDesp73/SyncR",
        img: "https://user-images.githubusercontent.com/63654361/218872414-29d6ddc2-fdac-4157-bccb-b8b4b1fdaaa6.png",
        fg: "white"
    },
    {
        title: "Ruby Web Server",
        link: "https://github.com/KDesp73/Ruby-Web-Server",
        img: "https://freesvg.org/img/web_server.png",
        fg: "white"
    },
    {
        title: "C++ Chess",
        link: "https://github.com/KDesp73/Chess",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/250px-ChessSet.jpg",
        fg: "white"
    }
];
