const stats = require('../lib/haproxy-stats-json')

/* Replace the dataCsvStr with the output csv from your haproxy server
   Eg. http://[your server]:8088/admin?stats;csv*/
const dataCsvStr = `#
pxname,svname,qcur,qmax,scur,smax,slim,stot,bin,bout,dreq,dresp,ereq,econ,eresp,wretr,wredis,status,weight,act,bck,chkfail,chkdown,lastchg,downtime,qlimit,pid,iid,sid,throttle,lbtot,tracked,type,rate,rate_lim,rate_max,check_status,check_code,check_duration,hrsp_1xx,hrsp_2xx,hrsp_3xx,hrsp_4xx,hrsp_5xx,hrsp_other,hanafail,req_rate,req_rate_max,req_tot,cli_abrt,srv_abrt,comp_in,comp_out,comp_byp,comp_rsp,lastsess,last_chk,last_agt,qtime,ctime,rtime,ttime,
http-in,FRONTEND,,,2,58,20000,184262,156478673,3905526680,0,0,674,,,,,OPEN,,,,,,,,,1,2,0,,,,0,5,0,222,,,,0,172565,10489,1128,78,0,,5,224,184262,,,0,0,0,0,,,,,,,,
gmapp,jbossN1,0,0,0,9,,8523,5938546,271282030,,0,,0,0,0,0,UP,1,1,0,3,1,2829,17,,1,3,1,,486,,2,0,,166,L7OK,200,14,0,6708,1741,63,11,0,0,,,,6,0,,,,,2,OK,,0,0,112,128,`

console.log('Array: ', stats.toArray(dataCsvStr))
console.log('Json: ', stats.toJson(dataCsvStr))
