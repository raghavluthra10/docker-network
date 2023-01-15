## note

in case of trying to run the server from docker compose and the DB separetly inside another container, make sure in Dockerfile when all the files are copied from localhost to inside container, make sure to change "host" to "host.docker.internal" from your host name.

If you notice, we have added "external: true" in "volumes" section of docker-compose.yml, that is because we had already made the volume and are trying to mount the volume externally, not at the time of creation of docker network.

## warning

-  make sure that while passing in the volume, you keep "/var/lib/postgresql/data" as the path inside of container because inside of the container, this is where postgres will store all of its data.
