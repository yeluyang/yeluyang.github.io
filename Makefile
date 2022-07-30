.PHONY:all
all:

.PHONY: post_%
post_%:
	touch $(shell date -Idate)-$*.md
