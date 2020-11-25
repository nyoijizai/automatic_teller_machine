# npm run build

# scp -r /printer_test/ 192.168.3.191:~/

# now=`date +%Y%m%d%H%M`

# ssh -tt 192.168.3.191 << start
    #备份
    # echo $now
    # sudo cp -r /data/usoft-fin-web-dist/dist/ /data/usoft-fin-web-dist/dist-backup-$now
    # sudo cp -r ~/usoft-fin-web-dist/dist /data/usoft-fin-web-dist
    # sudo systemctl restart finweb & sudo systemctl status finweb
    # exit
# start
