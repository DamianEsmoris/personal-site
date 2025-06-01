readonly CONTAINER_NAME='personal-site-database-1'
source database/.env

payload=$(cat <<EOF
USE ${MYSQL_DATABASE};
$(cat database/structure.sql)
$(cat database/inserts.sql)
EOF
)

sudo docker exec -i $CONTAINER_NAME sh -c 'exec mysql -uroot -p"${MYSQL_ROOT_PASSWORD}"' <<<$payload;
