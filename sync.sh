#!/bin/bash

library_path="$repos/c/webc"

build() {
    cd "$library_path" || exit
    make clean
    if [ "$1" -eq 1 ]; then
        make SANITIZE=1
    else
        make
    fi
    echo "Build complete"
}

sync() {
    cp "$repos"/c/webc/build/output/libwebc.so "$repos"/c/webc-site/lib/webc
    cp "$repos"/c/webc/build/output/libwebc.a "$repos"/c/webc-site/lib/webc
    rm -rf "$repos"/c/webc-site/lib/webc/include
    cp -r "$repos"/c/webc/include "$repos"/c/webc-site/lib/webc
    echo "Sync complete"
}

default_behavior() {
    build 1 && sync
}

if [ "$#" -eq 0 ]; then
    default_behavior
else
    for arg in "$@"; do
        case $arg in
            --sync)
                sync
                shift
                ;;
            --build)
                build
                shift
                ;;
            --build-sanitize)
                build 1
                shift
                ;;
            *)
                default_behavior
                ;;
        esac
    done
fi
