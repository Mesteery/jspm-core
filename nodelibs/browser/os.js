var exports = {},
    _dewExec = false;
function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports.endianness = function () {
    return "LE";
  };

  exports.hostname = function () {
    if (typeof location !== "undefined") {
      return location.hostname;
    } else return "";
  };

  exports.loadavg = function () {
    return [];
  };

  exports.uptime = function () {
    return 0;
  };

  exports.freemem = function () {
    return Number.MAX_VALUE;
  };

  exports.totalmem = function () {
    return Number.MAX_VALUE;
  };

  exports.cpus = function () {
    return [];
  };

  exports.type = function () {
    return "Browser";
  };

  exports.release = function () {
    if (typeof navigator !== "undefined") {
      return navigator.appVersion;
    }

    return "";
  };

  exports.networkInterfaces = exports.getNetworkInterfaces = function () {
    return {};
  };

  exports.arch = function () {
    return "javascript";
  };

  exports.platform = function () {
    return "browser";
  };

  exports.tmpdir = exports.tmpDir = function () {
    return "/tmp";
  };

  exports.EOL = "\n";

  exports.homedir = function () {
    return "/";
  };

  return exports;
}

var os = dew();

var EOL = os.EOL;
var arch = os.arch;
var cpus = os.cpus;
var endianness = os.endianness;
var freemem = os.freemem;
var getNetworkInterfaces = os.getNetworkInterfaces;
var homedir = os.homedir;
var hostname = os.hostname;
var loadavg = os.loadavg;
var networkInterfaces = os.networkInterfaces;
var platform = os.platform;
var release = os.release;
var tmpDir = os.tmpDir;
var tmpdir = os.tmpdir;
var totalmem = os.totalmem;
var type = os.type;
var uptime = os.uptime;

export { EOL, arch, cpus, os as default, endianness, freemem, getNetworkInterfaces, homedir, hostname, loadavg, networkInterfaces, platform, release, tmpDir, tmpdir, totalmem, type, uptime };
