/**
 * Parking / visibility features per car (Canada trim).
 * null = unknown — verify on build & price.
 * backupCamera = rearview camera (mandatory on new vehicles in Canada since 2018).
 * parkingSensors = ultrasonic park assist (not camera-based Tesla vision).
 */
export const safetyByCarId = {
  1: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "rear" },
  2: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  3: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  27: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "rear" },
  4: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "rear" },
  5: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  6: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "360° surround view" },
  7: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  8: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  9: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  10: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "rear" },
  11: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  12: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  13: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  14: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  15: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  16: { backupCamera: true, parkingSensors: null },
  17: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  18: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "rear" },
  19: { backupCamera: true, parkingSensors: null },
  20: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "8-camera vision (no ultrasonic)" },
  32: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "8-camera vision (no ultrasonic)" },
  33: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "8-camera vision (no ultrasonic)" },
  21: { backupCamera: true, parkingSensors: false, parkingSensorsDetail: "camera-based (no ultrasonic)" },
  22: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  23: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "rear" },
  24: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "rear" },
  25: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "rear" },
  26: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  28: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  29: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  30: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "360° surround view (Premier+)" },
  31: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "360° surround view (Premier+)" },
  34: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  35: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "front + rear" },
  36: { backupCamera: true, parkingSensors: true, parkingSensorsDetail: "360° surround view" },
};

const defaults = {
  backupCamera: null,
  parkingSensors: null,
  parkingSensorsDetail: null,
};

export function getSafetyForCar(carId) {
  return { ...defaults, ...safetyByCarId[carId] };
}

/** Compare drawer / table label */
export function formatSafety(value, detail) {
  if (value === true) return detail ? `Yes (${detail})` : "Yes";
  if (value === false) return detail ? `No (${detail})` : "No";
  return "—";
}
