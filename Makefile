.DEFAULT_GOAL := build

lint:
	./node_modules/.bin/standard --fix src

clean:
	rm -Rf ./dist

build: clean lint
	./node_modules/.bin/unbuild

release:
	./node_modules/.bin/standard-version
