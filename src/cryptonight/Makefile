#CC = emcc -s SINGLE_FILE=1  -s NO_FILESYSTEM=1  -s 'EXTRA_EXPORTED_RUNTIME_METHODS=["ccall", "cwrap"]'  --llvm-lto 1 -s TOTAL_MEMORY=67108864  -s "BINARYEN_TRAP_MODE='allow'"   -s LINKABLE=1
SINGLE_FILE=1
CC=emcc
CFLAGS=-O3 -s 'EXTRA_EXPORTED_RUNTIME_METHODS=["ccall", "cwrap"]' -s WASM=1 -s LINKABLE=1 -s EXPORT_ALL=1 -s SINGLE_FILE=$(SINGLE_FILE) -Wall -msse2

default: cn.js
all: default

OBJECTS = $(patsubst %.c, %.o, $(wildcard *.c))
HEADERS = $(wildcard *.h)

%.o: %.c $(HEADERS) $(CC) $(CFLAGS) -c $< -o $@

cn.js: $(OBJECTS)
	$(CC) $(CFLAGS) $(OBJECTS) -o cn.js

clean:
	-rm -f *.o
	-rm -f cn.js
	-rm -f cn.wasm
