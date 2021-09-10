#!/bin/sh

# Decrypt the file
mkdir $HOME/secrets
# --batch to prevent interactive command
# --yes to assume "yes" for questions
# gpg --quiet --batch --yes --decrypt --passphrase="$DEV_ENCRYPTION_KEY21" \
# --output $HOME/secrets/sec_encryption.json sec_encryption.json.gpg
# gpg --pinentry loopback --quiet --batch --yes --decrypt --passphrase="$DEV_KEY" \
# --output $HOME/.env.dev.encryption .env.dev.encryption.gpg
# gpg --pinentry loopback --quiet --batch --yes --decrypt --passphrase="$STAGING_KEY" \
# --output $HOME/.env.staging.encryption .env.staging.encryption.gpg
# gpg --pinentry loopback --quiet --batch --yes --decrypt --passphrase="$PROD_KEY" \
# --output $HOME/.env.prod.encryption .env.prod.encryption.gpg
gpg --version
gpg  --quiet --batch --yes --decrypt --passphrase="$DEV_KEY" \
--output $HOME/.env.dev.encryption .env.dev.encryption.gpg
gpg  --quiet --batch --yes --decrypt --passphrase="$STAGING_KEY" \
--output $HOME/.env.staging.encryption .env.staging.encryption.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$PROD_KEY" \
--output $HOME/.env.prod.encryption .env.prod.encryption.gpg
