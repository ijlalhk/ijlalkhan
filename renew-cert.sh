#!/bin/sh

# Use Certbot to renew certificates
certbot renew --nginx --quiet

# Reload Nginx to apply new certificates
nginx -s reload

