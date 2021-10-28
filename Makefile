# Build

build: codegen
	yarn build

codegen:
	yarn codegen-plugin-schema build
	yarn run graphql-codegen

# Test

test:
	yarn test

# Static analysis

check: typecheck
	make --jobs 2 --keep-going format lint

format:
	yarn run prettier --loglevel silent --write "./packages/*/src/**/*.{ts,tsx,md}"

lint:
	yarn run eslint --cache --fix "./packages/*/src/**/*.{ts,tsx}"

# "yarn workspaces foreach -pv run typecheck" ignores dependency tree but has uglier output
# "yarn build -c typecheck" checks dependents first, but ignores already checked ones
typecheck:
	yarn build -c typecheck