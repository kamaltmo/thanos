let crcTableStorage;
const makeCRCTable = () => {
  let c;
  let crcTable = [];
  for(let n = 0; n < 256; n++){
      c = n;
      for(let k =0; k < 8; k++){
          c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
      }
      crcTable[n] = c;
  }
  return crcTable;
}

const crc32 = (str) => {
  let crcTable = crcTableStorage || (crcTableStorage = makeCRCTable());
  let crc = 0 ^ (-1);

  for (let i = 0; i < str.length; i++ ) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xFF];
  }

  return (crc ^ (-1)) >>> 0;
};

const isUserAlive = ({ username, discriminator }) => Boolean(crc32(`${username}${discriminator}`) % 2);

module.exports = { isUserAlive };