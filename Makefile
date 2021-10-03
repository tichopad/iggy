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

check: typechecke
	make --jobs 2 --keep-going format lint

format:
	yarn run prettier --write "./packages/*/src/**/*.{ts,tsx,md}"

lint:
	yarn run eslint --fix "./packages/*/src/**/*.{ts,tsx}"

typecheck:
	yarn workspaces foreach -ptiv run tsc --noEmit