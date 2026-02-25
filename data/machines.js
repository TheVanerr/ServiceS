// ============================================================
//  machines.js - Tum Makine Verilerini Birlestiren Aggregator
//  Her makinenin kendi dosyasi: lym.js, vdl1.js, vdl2.js ...
//  Bu dosya onlari tek bir machineData nesnesi altinda toplar.
// ============================================================
const machineData = {
  ...lymData,
  ...vdl1Data,
  ...vdl2Data,
  ...kbn1Data,
  ...kbn2Data,
  ...rtsData,
  ...knvData,
  ...pytData,
  ...ultData,
  ...mstData
};