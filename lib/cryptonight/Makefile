LIBS = -lm
CC = emcc -O3 -s SINGLE_FILE=1  -s NO_FILESYSTEM=1  -s 'EXTRA_EXPORTED_RUNTIME_METHODS=["ccall", "cwrap"]'  --llvm-lto 1 -s TOTAL_MEMORY=67108864  -s WASM=1 -s "BINARYEN_TRAP_MODE='allow'"   -s LINKABLE=1 -s EXPORT_ALL=1
CFLAGS =  -Wall -msse2


.PHONY: default all clean

default: cn.js
all: default

OBJECTS = $(patsubst %.c, %.o, $(wildcard *.c))
HEADERS = $(wildcard *.h)

%.o: %.c $(HEADERS) $(CC) $(CFLAGS) -c $< -o $@

.PRECIOUS: $(TARGET) $(OBJECTS)

cn.js: $(OBJECTS)
	$(CC) $(OBJECTS) -Wall $(LIBS) -o cn.js

clean:
	-rm -f *.o
	-rm -f cn.js
