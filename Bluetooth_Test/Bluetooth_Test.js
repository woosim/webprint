(function() {
  'use strict';
  
  const PRINTER_SERVICE = "a9fe5e12-de71-4020-b2cf-8bf764fb0a8d";
  const PRINTER_RX_CHARACTERISTIC = "a9fe5e12-de71-4020-b2cf-8bf765fb0a8d";
  const PRINTER_TX_CHARACTERISTIC = "a9fe5e12-de71-4020-b2cf-8bf766fb0a8d";
  const CLIENT_CHARACTERISTIC_CONFIG = "00002902-0000-1000-8000-00805f9b34fb";
  
  class BluetoothTest {
    constructor {
      this.device = null;
      this.server = null;
    }
    request() {
      let options = {filters:[{sercivess:[ PRINTER_SERVICE ]}]};
      return navigator.bluetooth.requestDevice(options)
      .then(device => {
        this.device = device;
      })
    }
  connect() {
    if (!this.device) {
      return Promise.reject("Device is not connec.");
    }
    return this.device.gatt.connect()
  }
  
})();
