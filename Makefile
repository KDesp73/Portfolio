CC = gcc


SANITIZERS = 
CFLAGS = -Wall -ggdb -Ilib/webc/include -Iinclude -DDEBUG
LDFLAGS = -Llib/webc -lwebc

ifdef SANITIZE
	SANITIZERS = -fsanitize=address,undefined
endif

CFLAGS += $(SANITIZERS)
LDFLAGS += $(SANITIZERS)

SRC_DIR = src
INCLUDE_DIR = include
BUILD_DIR = build

# List all the source files
SRC_FILES = $(wildcard $(SRC_DIR)/*.c)

# Generate the corresponding object file names
OBJ_FILES = $(patsubst $(SRC_DIR)/%.c,$(BUILD_DIR)/%.o,$(SRC_FILES))

# Target: the final executable
TARGET = webc-site

# Default target, build the executable
all: $(BUILD_DIR) $(TARGET)
	export LD_LIBRARY_PATH=$(LD_LIBRARY_PATH):$(pwd)/lib/webc

# Rule to create the build directory
$(BUILD_DIR):
	mkdir -p $(BUILD_DIR)

# Rule to build the executable
$(TARGET): $(OBJ_FILES)
	$(CC) -o $@ $^ $(LDFLAGS)

# Rule to build object files from source files
$(BUILD_DIR)/%.o: $(SRC_DIR)/%.c
	$(CC) $(CFLAGS) -c -o $@ $<

# Clean rule to remove generated files
clean:
	rm -rf $(BUILD_DIR) $(TARGET)

compile_commands.json: $(SRC_FILES)
	bear -- make

# Phony target to avoid conflicts with file names
.PHONY: all clean

