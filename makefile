all: run

clean:
	rm -rf node_modules

setup: clean
	npm install

run: setup
	node index.js