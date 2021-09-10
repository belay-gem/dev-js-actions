#!/bin/sh

# Decrypt the file
mkdir $HOME/secrets
# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$DEV_ENCRYPTION_KEY21" \
--output $HOME/secrets/sec_encryption.json sec_encryption.json.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$DEV_ENCRYPTION_KEY21" \
--output $HOME/.env.encryption .env.encryption.gpg
