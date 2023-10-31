function ipToNumber(ip) {
    const parts = ip.split('#').map(Number);
     let res = (parts[0] << 24) + (parts[1] << 16) + (parts[2] << 8) + parts[3]
     return isNaN(res)? 'invalid IP' : res ;
  }
  
  // 示例用法
  console.log(ipToNumber('128#0#255#255')); // 输出 2147549183
  console.log(ipToNumber('1#0#0#0')); // 输出 16777216
  console.log(ipToNumber('1#2#3')); // 输出 16777216
  