#!/bin/bash

library_path="$repos/c/webc"

build() {
    cd $library_path
    make clean && make
}

sync() {
    cp $repos/c/webc/libwebc.so $repos/c/webc-site/lib/webc
    rm -rf $repos/c/webc-site/lib/webc/include
    cp -r $repos/c/webc/include $repos/c/webc-site/lib/webc
}

build && sync
