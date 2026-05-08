var should = require('should');
var helper = require('node-red-node-test-helper');
var node = require('../node.js');

helper.init(require.resolve('node-red'));

describe('meraki-dashboard-api-v1 node', function () {

    before(function (done) {
        helper.startServer(done);
    });

    after(function (done) {
        helper.stopServer(done);
    });

    afterEach(function () {
        helper.unload();
    });

    it('should be loaded', function (done) {
        var flow = [{ id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1' }];
        helper.load(node, flow, function () {
            var n1 = helper.getNode('n1');
            n1.should.have.property('name', 'meraki-dashboard-api-v1');
            done();
        });
    });

    it('should handle getDevice()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDevice',
                getDevice_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateDevice()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateDevice',
                updateDevice_serial: '<node property>', // (1) define node properties
                updateDevice_updateDevice: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceApplianceDhcpSubnets()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceApplianceDhcpSubnets',
                getDeviceApplianceDhcpSubnets_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceAppliancePerformance()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceAppliancePerformance',
                getDeviceAppliancePerformance_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle blinkDeviceLeds()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'blinkDeviceLeds',
                blinkDeviceLeds_serial: '<node property>', // (1) define node properties
                blinkDeviceLeds_blinkDeviceLeds: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceCameraAnalyticsLive()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceCameraAnalyticsLive',
                getDeviceCameraAnalyticsLive_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceCameraAnalyticsOverview()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceCameraAnalyticsOverview',
                getDeviceCameraAnalyticsOverview_serial: '<node property>', // (1) define node properties
                getDeviceCameraAnalyticsOverview_t0: '<node property>', // (1) define node properties
                getDeviceCameraAnalyticsOverview_t1: '<node property>', // (1) define node properties
                getDeviceCameraAnalyticsOverview_timespan: '<node property>', // (1) define node properties
                getDeviceCameraAnalyticsOverview_objectType: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceCameraAnalyticsRecent()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceCameraAnalyticsRecent',
                getDeviceCameraAnalyticsRecent_serial: '<node property>', // (1) define node properties
                getDeviceCameraAnalyticsRecent_objectType: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceCameraAnalyticsZones()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceCameraAnalyticsZones',
                getDeviceCameraAnalyticsZones_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceCameraAnalyticsZoneHistory()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceCameraAnalyticsZoneHistory',
                getDeviceCameraAnalyticsZoneHistory_serial: '<node property>', // (1) define node properties
                getDeviceCameraAnalyticsZoneHistory_zoneId: '<node property>', // (1) define node properties
                getDeviceCameraAnalyticsZoneHistory_t0: '<node property>', // (1) define node properties
                getDeviceCameraAnalyticsZoneHistory_t1: '<node property>', // (1) define node properties
                getDeviceCameraAnalyticsZoneHistory_timespan: '<node property>', // (1) define node properties
                getDeviceCameraAnalyticsZoneHistory_resolution: '<node property>', // (1) define node properties
                getDeviceCameraAnalyticsZoneHistory_objectType: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle generateDeviceCameraSnapshot()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'generateDeviceCameraSnapshot',
                generateDeviceCameraSnapshot_serial: '<node property>', // (1) define node properties
                generateDeviceCameraSnapshot_generateDeviceCameraSnapshot: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceCameraQualityAndRetention()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceCameraQualityAndRetention',
                getDeviceCameraQualityAndRetention_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateDeviceCameraQualityAndRetention()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateDeviceCameraQualityAndRetention',
                updateDeviceCameraQualityAndRetention_serial: '<node property>', // (1) define node properties
                updateDeviceCameraQualityAndRetention_updateDeviceCameraQualityAndRetention: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceCameraSense()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceCameraSense',
                getDeviceCameraSense_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateDeviceCameraSense()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateDeviceCameraSense',
                updateDeviceCameraSense_serial: '<node property>', // (1) define node properties
                updateDeviceCameraSense_updateDeviceCameraSense: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceCameraSenseObjectDetectionModels()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceCameraSenseObjectDetectionModels',
                getDeviceCameraSenseObjectDetectionModels_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceCameraVideoSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceCameraVideoSettings',
                getDeviceCameraVideoSettings_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateDeviceCameraVideoSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateDeviceCameraVideoSettings',
                updateDeviceCameraVideoSettings_serial: '<node property>', // (1) define node properties
                updateDeviceCameraVideoSettings_updateDeviceCameraVideoSettings: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceCameraVideoLink()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceCameraVideoLink',
                getDeviceCameraVideoLink_serial: '<node property>', // (1) define node properties
                getDeviceCameraVideoLink_timestamp: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceCameraWirelessProfiles()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceCameraWirelessProfiles',
                getDeviceCameraWirelessProfiles_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateDeviceCameraWirelessProfiles()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateDeviceCameraWirelessProfiles',
                updateDeviceCameraWirelessProfiles_serial: '<node property>', // (1) define node properties
                updateDeviceCameraWirelessProfiles_updateDeviceCameraWirelessProfiles: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceCellularGatewayLan()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceCellularGatewayLan',
                getDeviceCellularGatewayLan_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateDeviceCellularGatewayLan()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateDeviceCellularGatewayLan',
                updateDeviceCellularGatewayLan_serial: '<node property>', // (1) define node properties
                updateDeviceCellularGatewayLan_updateDeviceCellularGatewayLan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceCellularGatewayPortForwardingRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceCellularGatewayPortForwardingRules',
                getDeviceCellularGatewayPortForwardingRules_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateDeviceCellularGatewayPortForwardingRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateDeviceCellularGatewayPortForwardingRules',
                updateDeviceCellularGatewayPortForwardingRules_serial: '<node property>', // (1) define node properties
                updateDeviceCellularGatewayPortForwardingRules_updateDeviceCellularGatewayPortForwardingRules: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceClients()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceClients',
                getDeviceClients_serial: '<node property>', // (1) define node properties
                getDeviceClients_t0: '<node property>', // (1) define node properties
                getDeviceClients_timespan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createDeviceLiveToolsPing()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createDeviceLiveToolsPing',
                createDeviceLiveToolsPing_serial: '<node property>', // (1) define node properties
                createDeviceLiveToolsPing_createDeviceLiveToolsPing: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceLiveToolsPing()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceLiveToolsPing',
                getDeviceLiveToolsPing_serial: '<node property>', // (1) define node properties
                getDeviceLiveToolsPing_id: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createDeviceLiveToolsPingDevice()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createDeviceLiveToolsPingDevice',
                createDeviceLiveToolsPingDevice_serial: '<node property>', // (1) define node properties
                createDeviceLiveToolsPingDevice_createDeviceLiveToolsPingDevice: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceLiveToolsPingDevice()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceLiveToolsPingDevice',
                getDeviceLiveToolsPingDevice_serial: '<node property>', // (1) define node properties
                getDeviceLiveToolsPingDevice_id: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceLldpCdp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceLldpCdp',
                getDeviceLldpCdp_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceLossAndLatencyHistory()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceLossAndLatencyHistory',
                getDeviceLossAndLatencyHistory_serial: '<node property>', // (1) define node properties
                getDeviceLossAndLatencyHistory_t0: '<node property>', // (1) define node properties
                getDeviceLossAndLatencyHistory_t1: '<node property>', // (1) define node properties
                getDeviceLossAndLatencyHistory_timespan: '<node property>', // (1) define node properties
                getDeviceLossAndLatencyHistory_resolution: '<node property>', // (1) define node properties
                getDeviceLossAndLatencyHistory_uplink: '<node property>', // (1) define node properties
                getDeviceLossAndLatencyHistory_ip: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceManagementInterface()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceManagementInterface',
                getDeviceManagementInterface_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateDeviceManagementInterface()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateDeviceManagementInterface',
                updateDeviceManagementInterface_serial: '<node property>', // (1) define node properties
                updateDeviceManagementInterface_updateDeviceManagementInterface: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle rebootDevice()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'rebootDevice',
                rebootDevice_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceSwitchPorts()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceSwitchPorts',
                getDeviceSwitchPorts_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle cycleDeviceSwitchPorts()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'cycleDeviceSwitchPorts',
                cycleDeviceSwitchPorts_serial: '<node property>', // (1) define node properties
                cycleDeviceSwitchPorts_cycleDeviceSwitchPorts: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceSwitchPortsStatuses()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceSwitchPortsStatuses',
                getDeviceSwitchPortsStatuses_serial: '<node property>', // (1) define node properties
                getDeviceSwitchPortsStatuses_t0: '<node property>', // (1) define node properties
                getDeviceSwitchPortsStatuses_timespan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceSwitchPortsStatusesPackets()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceSwitchPortsStatusesPackets',
                getDeviceSwitchPortsStatusesPackets_serial: '<node property>', // (1) define node properties
                getDeviceSwitchPortsStatusesPackets_t0: '<node property>', // (1) define node properties
                getDeviceSwitchPortsStatusesPackets_timespan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceSwitchPort()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceSwitchPort',
                getDeviceSwitchPort_serial: '<node property>', // (1) define node properties
                getDeviceSwitchPort_portId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateDeviceSwitchPort()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateDeviceSwitchPort',
                updateDeviceSwitchPort_serial: '<node property>', // (1) define node properties
                updateDeviceSwitchPort_portId: '<node property>', // (1) define node properties
                updateDeviceSwitchPort_updateDeviceSwitchPort: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceSwitchRoutingInterfaces()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceSwitchRoutingInterfaces',
                getDeviceSwitchRoutingInterfaces_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createDeviceSwitchRoutingInterface()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createDeviceSwitchRoutingInterface',
                createDeviceSwitchRoutingInterface_serial: '<node property>', // (1) define node properties
                createDeviceSwitchRoutingInterface_createDeviceSwitchRoutingInterface: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceSwitchRoutingInterface()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceSwitchRoutingInterface',
                getDeviceSwitchRoutingInterface_serial: '<node property>', // (1) define node properties
                getDeviceSwitchRoutingInterface_interfaceId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateDeviceSwitchRoutingInterface()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateDeviceSwitchRoutingInterface',
                updateDeviceSwitchRoutingInterface_serial: '<node property>', // (1) define node properties
                updateDeviceSwitchRoutingInterface_interfaceId: '<node property>', // (1) define node properties
                updateDeviceSwitchRoutingInterface_updateDeviceSwitchRoutingInterface: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteDeviceSwitchRoutingInterface()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteDeviceSwitchRoutingInterface',
                deleteDeviceSwitchRoutingInterface_serial: '<node property>', // (1) define node properties
                deleteDeviceSwitchRoutingInterface_interfaceId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceSwitchRoutingInterfaceDhcp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceSwitchRoutingInterfaceDhcp',
                getDeviceSwitchRoutingInterfaceDhcp_serial: '<node property>', // (1) define node properties
                getDeviceSwitchRoutingInterfaceDhcp_interfaceId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateDeviceSwitchRoutingInterfaceDhcp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateDeviceSwitchRoutingInterfaceDhcp',
                updateDeviceSwitchRoutingInterfaceDhcp_serial: '<node property>', // (1) define node properties
                updateDeviceSwitchRoutingInterfaceDhcp_interfaceId: '<node property>', // (1) define node properties
                updateDeviceSwitchRoutingInterfaceDhcp_updateDeviceSwitchRoutingInterfaceDhcp: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceSwitchRoutingStaticRoutes()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceSwitchRoutingStaticRoutes',
                getDeviceSwitchRoutingStaticRoutes_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createDeviceSwitchRoutingStaticRoute()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createDeviceSwitchRoutingStaticRoute',
                createDeviceSwitchRoutingStaticRoute_serial: '<node property>', // (1) define node properties
                createDeviceSwitchRoutingStaticRoute_createDeviceSwitchRoutingStaticRoute: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceSwitchRoutingStaticRoute()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceSwitchRoutingStaticRoute',
                getDeviceSwitchRoutingStaticRoute_serial: '<node property>', // (1) define node properties
                getDeviceSwitchRoutingStaticRoute_staticRouteId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateDeviceSwitchRoutingStaticRoute()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateDeviceSwitchRoutingStaticRoute',
                updateDeviceSwitchRoutingStaticRoute_serial: '<node property>', // (1) define node properties
                updateDeviceSwitchRoutingStaticRoute_staticRouteId: '<node property>', // (1) define node properties
                updateDeviceSwitchRoutingStaticRoute_updateDeviceSwitchRoutingStaticRoute: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteDeviceSwitchRoutingStaticRoute()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteDeviceSwitchRoutingStaticRoute',
                deleteDeviceSwitchRoutingStaticRoute_serial: '<node property>', // (1) define node properties
                deleteDeviceSwitchRoutingStaticRoute_staticRouteId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceSwitchWarmSpare()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceSwitchWarmSpare',
                getDeviceSwitchWarmSpare_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateDeviceSwitchWarmSpare()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateDeviceSwitchWarmSpare',
                updateDeviceSwitchWarmSpare_serial: '<node property>', // (1) define node properties
                updateDeviceSwitchWarmSpare_updateDeviceSwitchWarmSpare: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceWirelessBluetoothSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceWirelessBluetoothSettings',
                getDeviceWirelessBluetoothSettings_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateDeviceWirelessBluetoothSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateDeviceWirelessBluetoothSettings',
                updateDeviceWirelessBluetoothSettings_serial: '<node property>', // (1) define node properties
                updateDeviceWirelessBluetoothSettings_updateDeviceWirelessBluetoothSettings: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceWirelessConnectionStats()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceWirelessConnectionStats',
                getDeviceWirelessConnectionStats_serial: '<node property>', // (1) define node properties
                getDeviceWirelessConnectionStats_t0: '<node property>', // (1) define node properties
                getDeviceWirelessConnectionStats_t1: '<node property>', // (1) define node properties
                getDeviceWirelessConnectionStats_timespan: '<node property>', // (1) define node properties
                getDeviceWirelessConnectionStats_band: '<node property>', // (1) define node properties
                getDeviceWirelessConnectionStats_ssid: '<node property>', // (1) define node properties
                getDeviceWirelessConnectionStats_vlan: '<node property>', // (1) define node properties
                getDeviceWirelessConnectionStats_apTag: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceWirelessLatencyStats()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceWirelessLatencyStats',
                getDeviceWirelessLatencyStats_serial: '<node property>', // (1) define node properties
                getDeviceWirelessLatencyStats_t0: '<node property>', // (1) define node properties
                getDeviceWirelessLatencyStats_t1: '<node property>', // (1) define node properties
                getDeviceWirelessLatencyStats_timespan: '<node property>', // (1) define node properties
                getDeviceWirelessLatencyStats_band: '<node property>', // (1) define node properties
                getDeviceWirelessLatencyStats_ssid: '<node property>', // (1) define node properties
                getDeviceWirelessLatencyStats_vlan: '<node property>', // (1) define node properties
                getDeviceWirelessLatencyStats_apTag: '<node property>', // (1) define node properties
                getDeviceWirelessLatencyStats_fields: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceWirelessRadioSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceWirelessRadioSettings',
                getDeviceWirelessRadioSettings_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateDeviceWirelessRadioSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateDeviceWirelessRadioSettings',
                updateDeviceWirelessRadioSettings_serial: '<node property>', // (1) define node properties
                updateDeviceWirelessRadioSettings_updateDeviceWirelessRadioSettings: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceWirelessStatus()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getDeviceWirelessStatus',
                getDeviceWirelessStatus_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetwork()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetwork',
                getNetwork_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetwork()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetwork',
                updateNetwork_networkId: '<node property>', // (1) define node properties
                updateNetwork_updateNetwork: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetwork()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetwork',
                deleteNetwork_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkAlertsSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkAlertsSettings',
                getNetworkAlertsSettings_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkAlertsSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkAlertsSettings',
                updateNetworkAlertsSettings_networkId: '<node property>', // (1) define node properties
                updateNetworkAlertsSettings_updateNetworkAlertsSettings: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceClientSecurityEvents()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceClientSecurityEvents',
                getNetworkApplianceClientSecurityEvents_networkId: '<node property>', // (1) define node properties
                getNetworkApplianceClientSecurityEvents_clientId: '<node property>', // (1) define node properties
                getNetworkApplianceClientSecurityEvents_t0: '<node property>', // (1) define node properties
                getNetworkApplianceClientSecurityEvents_t1: '<node property>', // (1) define node properties
                getNetworkApplianceClientSecurityEvents_timespan: '<node property>', // (1) define node properties
                getNetworkApplianceClientSecurityEvents_perPage: '<node property>', // (1) define node properties
                getNetworkApplianceClientSecurityEvents_startingAfter: '<node property>', // (1) define node properties
                getNetworkApplianceClientSecurityEvents_endingBefore: '<node property>', // (1) define node properties
                getNetworkApplianceClientSecurityEvents_sortOrder: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceConnectivityMonitoringDestinations()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceConnectivityMonitoringDestinations',
                getNetworkApplianceConnectivityMonitoringDestinations_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceConnectivityMonitoringDestinations()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceConnectivityMonitoringDestinations',
                updateNetworkApplianceConnectivityMonitoringDestinations_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceConnectivityMonitoringDestinations_updateNetworkApplianceConnectivityMonitoringDestinations: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceContentFiltering()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceContentFiltering',
                getNetworkApplianceContentFiltering_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceContentFiltering()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceContentFiltering',
                updateNetworkApplianceContentFiltering_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceContentFiltering_updateNetworkApplianceContentFiltering: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceContentFilteringCategories()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceContentFilteringCategories',
                getNetworkApplianceContentFilteringCategories_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceFirewallCellularFirewallRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceFirewallCellularFirewallRules',
                getNetworkApplianceFirewallCellularFirewallRules_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceFirewallCellularFirewallRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceFirewallCellularFirewallRules',
                updateNetworkApplianceFirewallCellularFirewallRules_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceFirewallCellularFirewallRules_updateNetworkApplianceFirewallCellularFirewallRules: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceFirewallFirewalledServices()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceFirewallFirewalledServices',
                getNetworkApplianceFirewallFirewalledServices_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceFirewallFirewalledService()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceFirewallFirewalledService',
                getNetworkApplianceFirewallFirewalledService_networkId: '<node property>', // (1) define node properties
                getNetworkApplianceFirewallFirewalledService_service: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceFirewallFirewalledService()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceFirewallFirewalledService',
                updateNetworkApplianceFirewallFirewalledService_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceFirewallFirewalledService_service: '<node property>', // (1) define node properties
                updateNetworkApplianceFirewallFirewalledService_updateNetworkApplianceFirewallFirewalledService: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceFirewallInboundFirewallRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceFirewallInboundFirewallRules',
                getNetworkApplianceFirewallInboundFirewallRules_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceFirewallInboundFirewallRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceFirewallInboundFirewallRules',
                updateNetworkApplianceFirewallInboundFirewallRules_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceFirewallInboundFirewallRules_updateNetworkApplianceFirewallInboundFirewallRules: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceFirewallL3FirewallRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceFirewallL3FirewallRules',
                getNetworkApplianceFirewallL3FirewallRules_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceFirewallL3FirewallRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceFirewallL3FirewallRules',
                updateNetworkApplianceFirewallL3FirewallRules_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceFirewallL3FirewallRules_updateNetworkApplianceFirewallL3FirewallRules: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceFirewallL7FirewallRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceFirewallL7FirewallRules',
                getNetworkApplianceFirewallL7FirewallRules_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceFirewallL7FirewallRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceFirewallL7FirewallRules',
                updateNetworkApplianceFirewallL7FirewallRules_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceFirewallL7FirewallRules_updateNetworkApplianceFirewallL7FirewallRules: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceFirewallL7FirewallRulesApplicationCategories()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceFirewallL7FirewallRulesApplicationCategories',
                getNetworkApplianceFirewallL7FirewallRulesApplicationCategories_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceFirewallOneToManyNatRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceFirewallOneToManyNatRules',
                getNetworkApplianceFirewallOneToManyNatRules_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceFirewallOneToManyNatRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceFirewallOneToManyNatRules',
                updateNetworkApplianceFirewallOneToManyNatRules_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceFirewallOneToManyNatRules_updateNetworkApplianceFirewallOneToManyNatRules: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceFirewallOneToOneNatRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceFirewallOneToOneNatRules',
                getNetworkApplianceFirewallOneToOneNatRules_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceFirewallOneToOneNatRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceFirewallOneToOneNatRules',
                updateNetworkApplianceFirewallOneToOneNatRules_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceFirewallOneToOneNatRules_updateNetworkApplianceFirewallOneToOneNatRules: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceFirewallPortForwardingRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceFirewallPortForwardingRules',
                getNetworkApplianceFirewallPortForwardingRules_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceFirewallPortForwardingRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceFirewallPortForwardingRules',
                updateNetworkApplianceFirewallPortForwardingRules_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceFirewallPortForwardingRules_updateNetworkApplianceFirewallPortForwardingRules: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkAppliancePorts()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkAppliancePorts',
                getNetworkAppliancePorts_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkAppliancePort()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkAppliancePort',
                getNetworkAppliancePort_networkId: '<node property>', // (1) define node properties
                getNetworkAppliancePort_portId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkAppliancePort()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkAppliancePort',
                updateNetworkAppliancePort_networkId: '<node property>', // (1) define node properties
                updateNetworkAppliancePort_portId: '<node property>', // (1) define node properties
                updateNetworkAppliancePort_updateNetworkAppliancePort: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceSecurityEvents()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceSecurityEvents',
                getNetworkApplianceSecurityEvents_networkId: '<node property>', // (1) define node properties
                getNetworkApplianceSecurityEvents_t0: '<node property>', // (1) define node properties
                getNetworkApplianceSecurityEvents_t1: '<node property>', // (1) define node properties
                getNetworkApplianceSecurityEvents_timespan: '<node property>', // (1) define node properties
                getNetworkApplianceSecurityEvents_perPage: '<node property>', // (1) define node properties
                getNetworkApplianceSecurityEvents_startingAfter: '<node property>', // (1) define node properties
                getNetworkApplianceSecurityEvents_endingBefore: '<node property>', // (1) define node properties
                getNetworkApplianceSecurityEvents_sortOrder: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceSecurityIntrusion()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceSecurityIntrusion',
                getNetworkApplianceSecurityIntrusion_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceSecurityIntrusion()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceSecurityIntrusion',
                updateNetworkApplianceSecurityIntrusion_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceSecurityIntrusion_updateNetworkApplianceSecurityIntrusion: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceSecurityMalware()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceSecurityMalware',
                getNetworkApplianceSecurityMalware_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceSecurityMalware()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceSecurityMalware',
                updateNetworkApplianceSecurityMalware_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceSecurityMalware_updateNetworkApplianceSecurityMalware: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceSettings',
                getNetworkApplianceSettings_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceSingleLan()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceSingleLan',
                getNetworkApplianceSingleLan_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceSingleLan()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceSingleLan',
                updateNetworkApplianceSingleLan_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceSingleLan_updateNetworkApplianceSingleLan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceStaticRoutes()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceStaticRoutes',
                getNetworkApplianceStaticRoutes_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkApplianceStaticRoute()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkApplianceStaticRoute',
                createNetworkApplianceStaticRoute_networkId: '<node property>', // (1) define node properties
                createNetworkApplianceStaticRoute_createNetworkApplianceStaticRoute: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceStaticRoute()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceStaticRoute',
                getNetworkApplianceStaticRoute_networkId: '<node property>', // (1) define node properties
                getNetworkApplianceStaticRoute_staticRouteId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceStaticRoute()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceStaticRoute',
                updateNetworkApplianceStaticRoute_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceStaticRoute_staticRouteId: '<node property>', // (1) define node properties
                updateNetworkApplianceStaticRoute_updateNetworkApplianceStaticRoute: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkApplianceStaticRoute()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkApplianceStaticRoute',
                deleteNetworkApplianceStaticRoute_networkId: '<node property>', // (1) define node properties
                deleteNetworkApplianceStaticRoute_staticRouteId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceTrafficShaping()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceTrafficShaping',
                getNetworkApplianceTrafficShaping_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceTrafficShaping()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceTrafficShaping',
                updateNetworkApplianceTrafficShaping_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceTrafficShaping_updateNetworkApplianceTrafficShaping: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceTrafficShapingCustomPerformanceClasses()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceTrafficShapingCustomPerformanceClasses',
                getNetworkApplianceTrafficShapingCustomPerformanceClasses_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkApplianceTrafficShapingCustomPerformanceClass()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkApplianceTrafficShapingCustomPerformanceClass',
                createNetworkApplianceTrafficShapingCustomPerformanceClass_networkId: '<node property>', // (1) define node properties
                createNetworkApplianceTrafficShapingCustomPerformanceClass_createNetworkApplianceTrafficShapingCustomPerformanceClass: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceTrafficShapingCustomPerformanceClass()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceTrafficShapingCustomPerformanceClass',
                getNetworkApplianceTrafficShapingCustomPerformanceClass_networkId: '<node property>', // (1) define node properties
                getNetworkApplianceTrafficShapingCustomPerformanceClass_customPerformanceClassId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceTrafficShapingCustomPerformanceClass()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceTrafficShapingCustomPerformanceClass',
                updateNetworkApplianceTrafficShapingCustomPerformanceClass_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceTrafficShapingCustomPerformanceClass_customPerformanceClassId: '<node property>', // (1) define node properties
                updateNetworkApplianceTrafficShapingCustomPerformanceClass_updateNetworkApplianceTrafficShapingCustomPerformanceClass: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkApplianceTrafficShapingCustomPerformanceClass()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkApplianceTrafficShapingCustomPerformanceClass',
                deleteNetworkApplianceTrafficShapingCustomPerformanceClass_networkId: '<node property>', // (1) define node properties
                deleteNetworkApplianceTrafficShapingCustomPerformanceClass_customPerformanceClassId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceTrafficShapingRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceTrafficShapingRules',
                updateNetworkApplianceTrafficShapingRules_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceTrafficShapingRules_updateNetworkApplianceTrafficShapingRules: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceTrafficShapingRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceTrafficShapingRules',
                getNetworkApplianceTrafficShapingRules_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceTrafficShapingUplinkBandwidth()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceTrafficShapingUplinkBandwidth',
                getNetworkApplianceTrafficShapingUplinkBandwidth_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceTrafficShapingUplinkBandwidth()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceTrafficShapingUplinkBandwidth',
                updateNetworkApplianceTrafficShapingUplinkBandwidth_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceTrafficShapingUplinkBandwidth_updateNetworkApplianceTrafficShapingUplinkBandwidth: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceTrafficShapingUplinkSelection()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceTrafficShapingUplinkSelection',
                getNetworkApplianceTrafficShapingUplinkSelection_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceTrafficShapingUplinkSelection()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceTrafficShapingUplinkSelection',
                updateNetworkApplianceTrafficShapingUplinkSelection_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceTrafficShapingUplinkSelection_updateNetworkApplianceTrafficShapingUplinkSelection: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceUplinksUsageHistory()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceUplinksUsageHistory',
                getNetworkApplianceUplinksUsageHistory_networkId: '<node property>', // (1) define node properties
                getNetworkApplianceUplinksUsageHistory_t0: '<node property>', // (1) define node properties
                getNetworkApplianceUplinksUsageHistory_t1: '<node property>', // (1) define node properties
                getNetworkApplianceUplinksUsageHistory_timespan: '<node property>', // (1) define node properties
                getNetworkApplianceUplinksUsageHistory_resolution: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceVlans()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceVlans',
                getNetworkApplianceVlans_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkApplianceVlan()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkApplianceVlan',
                createNetworkApplianceVlan_networkId: '<node property>', // (1) define node properties
                createNetworkApplianceVlan_createNetworkApplianceVlan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceVlansSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceVlansSettings',
                getNetworkApplianceVlansSettings_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceVlansSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceVlansSettings',
                updateNetworkApplianceVlansSettings_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceVlansSettings_updateNetworkApplianceVlansSettings: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceVlan()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceVlan',
                getNetworkApplianceVlan_networkId: '<node property>', // (1) define node properties
                getNetworkApplianceVlan_vlanId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceVlan()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceVlan',
                updateNetworkApplianceVlan_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceVlan_vlanId: '<node property>', // (1) define node properties
                updateNetworkApplianceVlan_updateNetworkApplianceVlan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkApplianceVlan()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkApplianceVlan',
                deleteNetworkApplianceVlan_networkId: '<node property>', // (1) define node properties
                deleteNetworkApplianceVlan_vlanId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceVpnBgp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceVpnBgp',
                getNetworkApplianceVpnBgp_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceVpnBgp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceVpnBgp',
                updateNetworkApplianceVpnBgp_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceVpnBgp_updateNetworkApplianceVpnBgp: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceVpnSiteToSiteVpn()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceVpnSiteToSiteVpn',
                getNetworkApplianceVpnSiteToSiteVpn_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceVpnSiteToSiteVpn()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceVpnSiteToSiteVpn',
                updateNetworkApplianceVpnSiteToSiteVpn_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceVpnSiteToSiteVpn_updateNetworkApplianceVpnSiteToSiteVpn: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkApplianceWarmSpare()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkApplianceWarmSpare',
                getNetworkApplianceWarmSpare_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkApplianceWarmSpare()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkApplianceWarmSpare',
                updateNetworkApplianceWarmSpare_networkId: '<node property>', // (1) define node properties
                updateNetworkApplianceWarmSpare_updateNetworkApplianceWarmSpare: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle swapNetworkApplianceWarmSpare()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'swapNetworkApplianceWarmSpare',
                swapNetworkApplianceWarmSpare_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle bindNetwork()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'bindNetwork',
                bindNetwork_networkId: '<node property>', // (1) define node properties
                bindNetwork_bindNetwork: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkBluetoothClients()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkBluetoothClients',
                getNetworkBluetoothClients_networkId: '<node property>', // (1) define node properties
                getNetworkBluetoothClients_t0: '<node property>', // (1) define node properties
                getNetworkBluetoothClients_timespan: '<node property>', // (1) define node properties
                getNetworkBluetoothClients_perPage: '<node property>', // (1) define node properties
                getNetworkBluetoothClients_startingAfter: '<node property>', // (1) define node properties
                getNetworkBluetoothClients_endingBefore: '<node property>', // (1) define node properties
                getNetworkBluetoothClients_includeConnectivityHistory: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkBluetoothClient()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkBluetoothClient',
                getNetworkBluetoothClient_networkId: '<node property>', // (1) define node properties
                getNetworkBluetoothClient_bluetoothClientId: '<node property>', // (1) define node properties
                getNetworkBluetoothClient_includeConnectivityHistory: '<node property>', // (1) define node properties
                getNetworkBluetoothClient_connectivityHistoryTimespan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkCameraQualityRetentionProfiles()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkCameraQualityRetentionProfiles',
                getNetworkCameraQualityRetentionProfiles_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkCameraQualityRetentionProfile()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkCameraQualityRetentionProfile',
                createNetworkCameraQualityRetentionProfile_networkId: '<node property>', // (1) define node properties
                createNetworkCameraQualityRetentionProfile_createNetworkCameraQualityRetentionProfile: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkCameraQualityRetentionProfile()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkCameraQualityRetentionProfile',
                getNetworkCameraQualityRetentionProfile_networkId: '<node property>', // (1) define node properties
                getNetworkCameraQualityRetentionProfile_qualityRetentionProfileId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkCameraQualityRetentionProfile()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkCameraQualityRetentionProfile',
                updateNetworkCameraQualityRetentionProfile_networkId: '<node property>', // (1) define node properties
                updateNetworkCameraQualityRetentionProfile_qualityRetentionProfileId: '<node property>', // (1) define node properties
                updateNetworkCameraQualityRetentionProfile_updateNetworkCameraQualityRetentionProfile: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkCameraQualityRetentionProfile()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkCameraQualityRetentionProfile',
                deleteNetworkCameraQualityRetentionProfile_networkId: '<node property>', // (1) define node properties
                deleteNetworkCameraQualityRetentionProfile_qualityRetentionProfileId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkCameraSchedules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkCameraSchedules',
                getNetworkCameraSchedules_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkCameraWirelessProfile()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkCameraWirelessProfile',
                createNetworkCameraWirelessProfile_networkId: '<node property>', // (1) define node properties
                createNetworkCameraWirelessProfile_createNetworkCameraWirelessProfile: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkCameraWirelessProfiles()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkCameraWirelessProfiles',
                getNetworkCameraWirelessProfiles_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkCameraWirelessProfile()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkCameraWirelessProfile',
                getNetworkCameraWirelessProfile_networkId: '<node property>', // (1) define node properties
                getNetworkCameraWirelessProfile_wirelessProfileId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkCameraWirelessProfile()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkCameraWirelessProfile',
                updateNetworkCameraWirelessProfile_networkId: '<node property>', // (1) define node properties
                updateNetworkCameraWirelessProfile_wirelessProfileId: '<node property>', // (1) define node properties
                updateNetworkCameraWirelessProfile_updateNetworkCameraWirelessProfile: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkCameraWirelessProfile()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkCameraWirelessProfile',
                deleteNetworkCameraWirelessProfile_networkId: '<node property>', // (1) define node properties
                deleteNetworkCameraWirelessProfile_wirelessProfileId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkCellularGatewayConnectivityMonitoringDestinations()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkCellularGatewayConnectivityMonitoringDestinations',
                getNetworkCellularGatewayConnectivityMonitoringDestinations_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkCellularGatewayConnectivityMonitoringDestinations()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkCellularGatewayConnectivityMonitoringDestinations',
                updateNetworkCellularGatewayConnectivityMonitoringDestinations_networkId: '<node property>', // (1) define node properties
                updateNetworkCellularGatewayConnectivityMonitoringDestinations_updateNetworkCellularGatewayConnectivityMonitoringDestinations: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkCellularGatewayDhcp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkCellularGatewayDhcp',
                getNetworkCellularGatewayDhcp_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkCellularGatewayDhcp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkCellularGatewayDhcp',
                updateNetworkCellularGatewayDhcp_networkId: '<node property>', // (1) define node properties
                updateNetworkCellularGatewayDhcp_updateNetworkCellularGatewayDhcp: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkCellularGatewaySubnetPool()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkCellularGatewaySubnetPool',
                getNetworkCellularGatewaySubnetPool_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkCellularGatewaySubnetPool()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkCellularGatewaySubnetPool',
                updateNetworkCellularGatewaySubnetPool_networkId: '<node property>', // (1) define node properties
                updateNetworkCellularGatewaySubnetPool_updateNetworkCellularGatewaySubnetPool: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkCellularGatewayUplink()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkCellularGatewayUplink',
                getNetworkCellularGatewayUplink_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkCellularGatewayUplink()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkCellularGatewayUplink',
                updateNetworkCellularGatewayUplink_networkId: '<node property>', // (1) define node properties
                updateNetworkCellularGatewayUplink_updateNetworkCellularGatewayUplink: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkClients()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkClients',
                getNetworkClients_networkId: '<node property>', // (1) define node properties
                getNetworkClients_t0: '<node property>', // (1) define node properties
                getNetworkClients_timespan: '<node property>', // (1) define node properties
                getNetworkClients_perPage: '<node property>', // (1) define node properties
                getNetworkClients_startingAfter: '<node property>', // (1) define node properties
                getNetworkClients_endingBefore: '<node property>', // (1) define node properties
                getNetworkClients_statuses: '<node property>', // (1) define node properties
                getNetworkClients_ip: '<node property>', // (1) define node properties
                getNetworkClients_ip6: '<node property>', // (1) define node properties
                getNetworkClients_ip6Local: '<node property>', // (1) define node properties
                getNetworkClients_mac: '<node property>', // (1) define node properties
                getNetworkClients_os: '<node property>', // (1) define node properties
                getNetworkClients_description: '<node property>', // (1) define node properties
                getNetworkClients_recentDeviceConnections: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkClientsApplicationUsage()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkClientsApplicationUsage',
                getNetworkClientsApplicationUsage_networkId: '<node property>', // (1) define node properties
                getNetworkClientsApplicationUsage_clients: '<node property>', // (1) define node properties
                getNetworkClientsApplicationUsage_ssidNumber: '<node property>', // (1) define node properties
                getNetworkClientsApplicationUsage_perPage: '<node property>', // (1) define node properties
                getNetworkClientsApplicationUsage_startingAfter: '<node property>', // (1) define node properties
                getNetworkClientsApplicationUsage_endingBefore: '<node property>', // (1) define node properties
                getNetworkClientsApplicationUsage_t0: '<node property>', // (1) define node properties
                getNetworkClientsApplicationUsage_t1: '<node property>', // (1) define node properties
                getNetworkClientsApplicationUsage_timespan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkClientsOverview()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkClientsOverview',
                getNetworkClientsOverview_networkId: '<node property>', // (1) define node properties
                getNetworkClientsOverview_t0: '<node property>', // (1) define node properties
                getNetworkClientsOverview_t1: '<node property>', // (1) define node properties
                getNetworkClientsOverview_timespan: '<node property>', // (1) define node properties
                getNetworkClientsOverview_resolution: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle provisionNetworkClients()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'provisionNetworkClients',
                provisionNetworkClients_networkId: '<node property>', // (1) define node properties
                provisionNetworkClients_provisionNetworkClients: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkClientsUsageHistories()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkClientsUsageHistories',
                getNetworkClientsUsageHistories_networkId: '<node property>', // (1) define node properties
                getNetworkClientsUsageHistories_clients: '<node property>', // (1) define node properties
                getNetworkClientsUsageHistories_ssidNumber: '<node property>', // (1) define node properties
                getNetworkClientsUsageHistories_perPage: '<node property>', // (1) define node properties
                getNetworkClientsUsageHistories_startingAfter: '<node property>', // (1) define node properties
                getNetworkClientsUsageHistories_endingBefore: '<node property>', // (1) define node properties
                getNetworkClientsUsageHistories_t0: '<node property>', // (1) define node properties
                getNetworkClientsUsageHistories_t1: '<node property>', // (1) define node properties
                getNetworkClientsUsageHistories_timespan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkClient()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkClient',
                getNetworkClient_networkId: '<node property>', // (1) define node properties
                getNetworkClient_clientId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkClientPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkClientPolicy',
                getNetworkClientPolicy_networkId: '<node property>', // (1) define node properties
                getNetworkClientPolicy_clientId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkClientPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkClientPolicy',
                updateNetworkClientPolicy_networkId: '<node property>', // (1) define node properties
                updateNetworkClientPolicy_clientId: '<node property>', // (1) define node properties
                updateNetworkClientPolicy_updateNetworkClientPolicy: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkClientSplashAuthorizationStatus()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkClientSplashAuthorizationStatus',
                getNetworkClientSplashAuthorizationStatus_networkId: '<node property>', // (1) define node properties
                getNetworkClientSplashAuthorizationStatus_clientId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkClientSplashAuthorizationStatus()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkClientSplashAuthorizationStatus',
                updateNetworkClientSplashAuthorizationStatus_networkId: '<node property>', // (1) define node properties
                updateNetworkClientSplashAuthorizationStatus_clientId: '<node property>', // (1) define node properties
                updateNetworkClientSplashAuthorizationStatus_updateNetworkClientSplashAuthorizationStatus: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkClientTrafficHistory()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkClientTrafficHistory',
                getNetworkClientTrafficHistory_networkId: '<node property>', // (1) define node properties
                getNetworkClientTrafficHistory_clientId: '<node property>', // (1) define node properties
                getNetworkClientTrafficHistory_perPage: '<node property>', // (1) define node properties
                getNetworkClientTrafficHistory_startingAfter: '<node property>', // (1) define node properties
                getNetworkClientTrafficHistory_endingBefore: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkClientUsageHistory()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkClientUsageHistory',
                getNetworkClientUsageHistory_networkId: '<node property>', // (1) define node properties
                getNetworkClientUsageHistory_clientId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkDevices()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkDevices',
                getNetworkDevices_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle claimNetworkDevices()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'claimNetworkDevices',
                claimNetworkDevices_networkId: '<node property>', // (1) define node properties
                claimNetworkDevices_claimNetworkDevices: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle vmxNetworkDevicesClaim()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'vmxNetworkDevicesClaim',
                vmxNetworkDevicesClaim_networkId: '<node property>', // (1) define node properties
                vmxNetworkDevicesClaim_vmxNetworkDevicesClaim: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle removeNetworkDevices()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'removeNetworkDevices',
                removeNetworkDevices_networkId: '<node property>', // (1) define node properties
                removeNetworkDevices_removeNetworkDevices: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkEvents()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkEvents',
                getNetworkEvents_networkId: '<node property>', // (1) define node properties
                getNetworkEvents_productType: '<node property>', // (1) define node properties
                getNetworkEvents_includedEventTypes: '<node property>', // (1) define node properties
                getNetworkEvents_excludedEventTypes: '<node property>', // (1) define node properties
                getNetworkEvents_deviceMac: '<node property>', // (1) define node properties
                getNetworkEvents_deviceSerial: '<node property>', // (1) define node properties
                getNetworkEvents_deviceName: '<node property>', // (1) define node properties
                getNetworkEvents_clientIp: '<node property>', // (1) define node properties
                getNetworkEvents_clientMac: '<node property>', // (1) define node properties
                getNetworkEvents_clientName: '<node property>', // (1) define node properties
                getNetworkEvents_smDeviceMac: '<node property>', // (1) define node properties
                getNetworkEvents_smDeviceName: '<node property>', // (1) define node properties
                getNetworkEvents_perPage: '<node property>', // (1) define node properties
                getNetworkEvents_startingAfter: '<node property>', // (1) define node properties
                getNetworkEvents_endingBefore: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkEventsEventTypes()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkEventsEventTypes',
                getNetworkEventsEventTypes_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkFirmwareUpgrades()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkFirmwareUpgrades',
                getNetworkFirmwareUpgrades_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkFirmwareUpgrades()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkFirmwareUpgrades',
                updateNetworkFirmwareUpgrades_networkId: '<node property>', // (1) define node properties
                updateNetworkFirmwareUpgrades_updateNetworkFirmwareUpgrades: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkFirmwareUpgradesRollback()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkFirmwareUpgradesRollback',
                createNetworkFirmwareUpgradesRollback_networkId: '<node property>', // (1) define node properties
                createNetworkFirmwareUpgradesRollback_createNetworkFirmwareUpgradesRollback: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkFloorPlans()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkFloorPlans',
                getNetworkFloorPlans_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkFloorPlan()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkFloorPlan',
                createNetworkFloorPlan_networkId: '<node property>', // (1) define node properties
                createNetworkFloorPlan_createNetworkFloorPlan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkFloorPlan()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkFloorPlan',
                getNetworkFloorPlan_networkId: '<node property>', // (1) define node properties
                getNetworkFloorPlan_floorPlanId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkFloorPlan()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkFloorPlan',
                updateNetworkFloorPlan_networkId: '<node property>', // (1) define node properties
                updateNetworkFloorPlan_floorPlanId: '<node property>', // (1) define node properties
                updateNetworkFloorPlan_updateNetworkFloorPlan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkFloorPlan()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkFloorPlan',
                deleteNetworkFloorPlan_networkId: '<node property>', // (1) define node properties
                deleteNetworkFloorPlan_floorPlanId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkGroupPolicies()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkGroupPolicies',
                getNetworkGroupPolicies_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkGroupPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkGroupPolicy',
                createNetworkGroupPolicy_networkId: '<node property>', // (1) define node properties
                createNetworkGroupPolicy_createNetworkGroupPolicy: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkGroupPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkGroupPolicy',
                getNetworkGroupPolicy_networkId: '<node property>', // (1) define node properties
                getNetworkGroupPolicy_groupPolicyId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkGroupPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkGroupPolicy',
                updateNetworkGroupPolicy_networkId: '<node property>', // (1) define node properties
                updateNetworkGroupPolicy_groupPolicyId: '<node property>', // (1) define node properties
                updateNetworkGroupPolicy_updateNetworkGroupPolicy: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkGroupPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkGroupPolicy',
                deleteNetworkGroupPolicy_networkId: '<node property>', // (1) define node properties
                deleteNetworkGroupPolicy_groupPolicyId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkHealthAlerts()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkHealthAlerts',
                getNetworkHealthAlerts_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkInsightApplicationHealthByTime()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkInsightApplicationHealthByTime',
                getNetworkInsightApplicationHealthByTime_networkId: '<node property>', // (1) define node properties
                getNetworkInsightApplicationHealthByTime_applicationId: '<node property>', // (1) define node properties
                getNetworkInsightApplicationHealthByTime_t0: '<node property>', // (1) define node properties
                getNetworkInsightApplicationHealthByTime_t1: '<node property>', // (1) define node properties
                getNetworkInsightApplicationHealthByTime_timespan: '<node property>', // (1) define node properties
                getNetworkInsightApplicationHealthByTime_resolution: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkMerakiAuthUsers()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkMerakiAuthUsers',
                getNetworkMerakiAuthUsers_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkMerakiAuthUser()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkMerakiAuthUser',
                createNetworkMerakiAuthUser_networkId: '<node property>', // (1) define node properties
                createNetworkMerakiAuthUser_createNetworkMerakiAuthUser: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkMerakiAuthUser()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkMerakiAuthUser',
                getNetworkMerakiAuthUser_networkId: '<node property>', // (1) define node properties
                getNetworkMerakiAuthUser_merakiAuthUserId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkMerakiAuthUser()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkMerakiAuthUser',
                deleteNetworkMerakiAuthUser_networkId: '<node property>', // (1) define node properties
                deleteNetworkMerakiAuthUser_merakiAuthUserId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkMerakiAuthUser()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkMerakiAuthUser',
                updateNetworkMerakiAuthUser_networkId: '<node property>', // (1) define node properties
                updateNetworkMerakiAuthUser_merakiAuthUserId: '<node property>', // (1) define node properties
                updateNetworkMerakiAuthUser_updateNetworkMerakiAuthUser: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkMqttBrokers()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkMqttBrokers',
                getNetworkMqttBrokers_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkMqttBroker()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkMqttBroker',
                createNetworkMqttBroker_networkId: '<node property>', // (1) define node properties
                createNetworkMqttBroker_createNetworkMqttBroker: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkMqttBroker()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkMqttBroker',
                getNetworkMqttBroker_networkId: '<node property>', // (1) define node properties
                getNetworkMqttBroker_mqttBrokerId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkMqttBroker()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkMqttBroker',
                updateNetworkMqttBroker_networkId: '<node property>', // (1) define node properties
                updateNetworkMqttBroker_mqttBrokerId: '<node property>', // (1) define node properties
                updateNetworkMqttBroker_updateNetworkMqttBroker: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkMqttBroker()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkMqttBroker',
                deleteNetworkMqttBroker_networkId: '<node property>', // (1) define node properties
                deleteNetworkMqttBroker_mqttBrokerId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkNetflow()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkNetflow',
                getNetworkNetflow_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkNetflow()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkNetflow',
                updateNetworkNetflow_networkId: '<node property>', // (1) define node properties
                updateNetworkNetflow_updateNetworkNetflow: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkNetworkHealthChannelUtilization()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkNetworkHealthChannelUtilization',
                getNetworkNetworkHealthChannelUtilization_networkId: '<node property>', // (1) define node properties
                getNetworkNetworkHealthChannelUtilization_t0: '<node property>', // (1) define node properties
                getNetworkNetworkHealthChannelUtilization_t1: '<node property>', // (1) define node properties
                getNetworkNetworkHealthChannelUtilization_timespan: '<node property>', // (1) define node properties
                getNetworkNetworkHealthChannelUtilization_resolution: '<node property>', // (1) define node properties
                getNetworkNetworkHealthChannelUtilization_perPage: '<node property>', // (1) define node properties
                getNetworkNetworkHealthChannelUtilization_startingAfter: '<node property>', // (1) define node properties
                getNetworkNetworkHealthChannelUtilization_endingBefore: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkPiiPiiKeys()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkPiiPiiKeys',
                getNetworkPiiPiiKeys_networkId: '<node property>', // (1) define node properties
                getNetworkPiiPiiKeys_username: '<node property>', // (1) define node properties
                getNetworkPiiPiiKeys_email: '<node property>', // (1) define node properties
                getNetworkPiiPiiKeys_mac: '<node property>', // (1) define node properties
                getNetworkPiiPiiKeys_serial: '<node property>', // (1) define node properties
                getNetworkPiiPiiKeys_imei: '<node property>', // (1) define node properties
                getNetworkPiiPiiKeys_bluetoothMac: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkPiiRequests()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkPiiRequests',
                getNetworkPiiRequests_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkPiiRequest()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkPiiRequest',
                createNetworkPiiRequest_networkId: '<node property>', // (1) define node properties
                createNetworkPiiRequest_createNetworkPiiRequest: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkPiiRequest()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkPiiRequest',
                getNetworkPiiRequest_networkId: '<node property>', // (1) define node properties
                getNetworkPiiRequest_requestId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkPiiRequest()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkPiiRequest',
                deleteNetworkPiiRequest_networkId: '<node property>', // (1) define node properties
                deleteNetworkPiiRequest_requestId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkPiiSmDevicesForKey()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkPiiSmDevicesForKey',
                getNetworkPiiSmDevicesForKey_networkId: '<node property>', // (1) define node properties
                getNetworkPiiSmDevicesForKey_username: '<node property>', // (1) define node properties
                getNetworkPiiSmDevicesForKey_email: '<node property>', // (1) define node properties
                getNetworkPiiSmDevicesForKey_mac: '<node property>', // (1) define node properties
                getNetworkPiiSmDevicesForKey_serial: '<node property>', // (1) define node properties
                getNetworkPiiSmDevicesForKey_imei: '<node property>', // (1) define node properties
                getNetworkPiiSmDevicesForKey_bluetoothMac: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkPiiSmOwnersForKey()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkPiiSmOwnersForKey',
                getNetworkPiiSmOwnersForKey_networkId: '<node property>', // (1) define node properties
                getNetworkPiiSmOwnersForKey_username: '<node property>', // (1) define node properties
                getNetworkPiiSmOwnersForKey_email: '<node property>', // (1) define node properties
                getNetworkPiiSmOwnersForKey_mac: '<node property>', // (1) define node properties
                getNetworkPiiSmOwnersForKey_serial: '<node property>', // (1) define node properties
                getNetworkPiiSmOwnersForKey_imei: '<node property>', // (1) define node properties
                getNetworkPiiSmOwnersForKey_bluetoothMac: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSettings',
                getNetworkSettings_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSettings',
                updateNetworkSettings_networkId: '<node property>', // (1) define node properties
                updateNetworkSettings_updateNetworkSettings: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkSmBypassActivationLockAttempt()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkSmBypassActivationLockAttempt',
                createNetworkSmBypassActivationLockAttempt_networkId: '<node property>', // (1) define node properties
                createNetworkSmBypassActivationLockAttempt_createNetworkSmBypassActivationLockAttempt: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmBypassActivationLockAttempt()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmBypassActivationLockAttempt',
                getNetworkSmBypassActivationLockAttempt_networkId: '<node property>', // (1) define node properties
                getNetworkSmBypassActivationLockAttempt_attemptId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmDevices()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmDevices',
                getNetworkSmDevices_networkId: '<node property>', // (1) define node properties
                getNetworkSmDevices_fields: '<node property>', // (1) define node properties
                getNetworkSmDevices_wifiMacs: '<node property>', // (1) define node properties
                getNetworkSmDevices_serials: '<node property>', // (1) define node properties
                getNetworkSmDevices_ids: '<node property>', // (1) define node properties
                getNetworkSmDevices_scope: '<node property>', // (1) define node properties
                getNetworkSmDevices_perPage: '<node property>', // (1) define node properties
                getNetworkSmDevices_startingAfter: '<node property>', // (1) define node properties
                getNetworkSmDevices_endingBefore: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle checkinNetworkSmDevices()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'checkinNetworkSmDevices',
                checkinNetworkSmDevices_networkId: '<node property>', // (1) define node properties
                checkinNetworkSmDevices_checkinNetworkSmDevices: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSmDevicesFields()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSmDevicesFields',
                updateNetworkSmDevicesFields_networkId: '<node property>', // (1) define node properties
                updateNetworkSmDevicesFields_updateNetworkSmDevicesFields: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle lockNetworkSmDevices()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'lockNetworkSmDevices',
                lockNetworkSmDevices_networkId: '<node property>', // (1) define node properties
                lockNetworkSmDevices_lockNetworkSmDevices: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle modifyNetworkSmDevicesTags()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'modifyNetworkSmDevicesTags',
                modifyNetworkSmDevicesTags_networkId: '<node property>', // (1) define node properties
                modifyNetworkSmDevicesTags_modifyNetworkSmDevicesTags: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle moveNetworkSmDevices()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'moveNetworkSmDevices',
                moveNetworkSmDevices_networkId: '<node property>', // (1) define node properties
                moveNetworkSmDevices_moveNetworkSmDevices: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle wipeNetworkSmDevices()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'wipeNetworkSmDevices',
                wipeNetworkSmDevices_networkId: '<node property>', // (1) define node properties
                wipeNetworkSmDevices_wipeNetworkSmDevices: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmDeviceCellularUsageHistory()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmDeviceCellularUsageHistory',
                getNetworkSmDeviceCellularUsageHistory_networkId: '<node property>', // (1) define node properties
                getNetworkSmDeviceCellularUsageHistory_deviceId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmDeviceCerts()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmDeviceCerts',
                getNetworkSmDeviceCerts_networkId: '<node property>', // (1) define node properties
                getNetworkSmDeviceCerts_deviceId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmDeviceConnectivity()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmDeviceConnectivity',
                getNetworkSmDeviceConnectivity_networkId: '<node property>', // (1) define node properties
                getNetworkSmDeviceConnectivity_deviceId: '<node property>', // (1) define node properties
                getNetworkSmDeviceConnectivity_perPage: '<node property>', // (1) define node properties
                getNetworkSmDeviceConnectivity_startingAfter: '<node property>', // (1) define node properties
                getNetworkSmDeviceConnectivity_endingBefore: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmDeviceDesktopLogs()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmDeviceDesktopLogs',
                getNetworkSmDeviceDesktopLogs_networkId: '<node property>', // (1) define node properties
                getNetworkSmDeviceDesktopLogs_deviceId: '<node property>', // (1) define node properties
                getNetworkSmDeviceDesktopLogs_perPage: '<node property>', // (1) define node properties
                getNetworkSmDeviceDesktopLogs_startingAfter: '<node property>', // (1) define node properties
                getNetworkSmDeviceDesktopLogs_endingBefore: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmDeviceDeviceCommandLogs()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmDeviceDeviceCommandLogs',
                getNetworkSmDeviceDeviceCommandLogs_networkId: '<node property>', // (1) define node properties
                getNetworkSmDeviceDeviceCommandLogs_deviceId: '<node property>', // (1) define node properties
                getNetworkSmDeviceDeviceCommandLogs_perPage: '<node property>', // (1) define node properties
                getNetworkSmDeviceDeviceCommandLogs_startingAfter: '<node property>', // (1) define node properties
                getNetworkSmDeviceDeviceCommandLogs_endingBefore: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmDeviceDeviceProfiles()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmDeviceDeviceProfiles',
                getNetworkSmDeviceDeviceProfiles_networkId: '<node property>', // (1) define node properties
                getNetworkSmDeviceDeviceProfiles_deviceId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmDeviceNetworkAdapters()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmDeviceNetworkAdapters',
                getNetworkSmDeviceNetworkAdapters_networkId: '<node property>', // (1) define node properties
                getNetworkSmDeviceNetworkAdapters_deviceId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmDevicePerformanceHistory()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmDevicePerformanceHistory',
                getNetworkSmDevicePerformanceHistory_networkId: '<node property>', // (1) define node properties
                getNetworkSmDevicePerformanceHistory_deviceId: '<node property>', // (1) define node properties
                getNetworkSmDevicePerformanceHistory_perPage: '<node property>', // (1) define node properties
                getNetworkSmDevicePerformanceHistory_startingAfter: '<node property>', // (1) define node properties
                getNetworkSmDevicePerformanceHistory_endingBefore: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle refreshNetworkSmDeviceDetails()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'refreshNetworkSmDeviceDetails',
                refreshNetworkSmDeviceDetails_networkId: '<node property>', // (1) define node properties
                refreshNetworkSmDeviceDetails_deviceId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmDeviceRestrictions()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmDeviceRestrictions',
                getNetworkSmDeviceRestrictions_networkId: '<node property>', // (1) define node properties
                getNetworkSmDeviceRestrictions_deviceId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmDeviceSecurityCenters()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmDeviceSecurityCenters',
                getNetworkSmDeviceSecurityCenters_networkId: '<node property>', // (1) define node properties
                getNetworkSmDeviceSecurityCenters_deviceId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmDeviceSoftwares()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmDeviceSoftwares',
                getNetworkSmDeviceSoftwares_networkId: '<node property>', // (1) define node properties
                getNetworkSmDeviceSoftwares_deviceId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle unenrollNetworkSmDevice()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'unenrollNetworkSmDevice',
                unenrollNetworkSmDevice_networkId: '<node property>', // (1) define node properties
                unenrollNetworkSmDevice_deviceId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmDeviceWlanLists()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmDeviceWlanLists',
                getNetworkSmDeviceWlanLists_networkId: '<node property>', // (1) define node properties
                getNetworkSmDeviceWlanLists_deviceId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmProfiles()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmProfiles',
                getNetworkSmProfiles_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmTargetGroups()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmTargetGroups',
                getNetworkSmTargetGroups_networkId: '<node property>', // (1) define node properties
                getNetworkSmTargetGroups_withDetails: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkSmTargetGroup()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkSmTargetGroup',
                createNetworkSmTargetGroup_networkId: '<node property>', // (1) define node properties
                createNetworkSmTargetGroup_createNetworkSmTargetGroup: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmTargetGroup()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmTargetGroup',
                getNetworkSmTargetGroup_networkId: '<node property>', // (1) define node properties
                getNetworkSmTargetGroup_targetGroupId: '<node property>', // (1) define node properties
                getNetworkSmTargetGroup_withDetails: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSmTargetGroup()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSmTargetGroup',
                updateNetworkSmTargetGroup_networkId: '<node property>', // (1) define node properties
                updateNetworkSmTargetGroup_targetGroupId: '<node property>', // (1) define node properties
                updateNetworkSmTargetGroup_updateNetworkSmTargetGroup: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkSmTargetGroup()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkSmTargetGroup',
                deleteNetworkSmTargetGroup_networkId: '<node property>', // (1) define node properties
                deleteNetworkSmTargetGroup_targetGroupId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmUserAccessDevices()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmUserAccessDevices',
                getNetworkSmUserAccessDevices_networkId: '<node property>', // (1) define node properties
                getNetworkSmUserAccessDevices_perPage: '<node property>', // (1) define node properties
                getNetworkSmUserAccessDevices_startingAfter: '<node property>', // (1) define node properties
                getNetworkSmUserAccessDevices_endingBefore: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkSmUserAccessDevice()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkSmUserAccessDevice',
                deleteNetworkSmUserAccessDevice_networkId: '<node property>', // (1) define node properties
                deleteNetworkSmUserAccessDevice_userAccessDeviceId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmUsers()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmUsers',
                getNetworkSmUsers_networkId: '<node property>', // (1) define node properties
                getNetworkSmUsers_ids: '<node property>', // (1) define node properties
                getNetworkSmUsers_usernames: '<node property>', // (1) define node properties
                getNetworkSmUsers_emails: '<node property>', // (1) define node properties
                getNetworkSmUsers_scope: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmUserDeviceProfiles()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmUserDeviceProfiles',
                getNetworkSmUserDeviceProfiles_networkId: '<node property>', // (1) define node properties
                getNetworkSmUserDeviceProfiles_userId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSmUserSoftwares()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSmUserSoftwares',
                getNetworkSmUserSoftwares_networkId: '<node property>', // (1) define node properties
                getNetworkSmUserSoftwares_userId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSnmp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSnmp',
                getNetworkSnmp_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSnmp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSnmp',
                updateNetworkSnmp_networkId: '<node property>', // (1) define node properties
                updateNetworkSnmp_updateNetworkSnmp: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSplashLoginAttempts()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSplashLoginAttempts',
                getNetworkSplashLoginAttempts_networkId: '<node property>', // (1) define node properties
                getNetworkSplashLoginAttempts_ssidNumber: '<node property>', // (1) define node properties
                getNetworkSplashLoginAttempts_loginIdentifier: '<node property>', // (1) define node properties
                getNetworkSplashLoginAttempts_timespan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle splitNetwork()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'splitNetwork',
                splitNetwork_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchAccessControlLists()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchAccessControlLists',
                getNetworkSwitchAccessControlLists_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchAccessControlLists()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchAccessControlLists',
                updateNetworkSwitchAccessControlLists_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchAccessControlLists_updateNetworkSwitchAccessControlLists: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchAccessPolicies()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchAccessPolicies',
                getNetworkSwitchAccessPolicies_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkSwitchAccessPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkSwitchAccessPolicy',
                createNetworkSwitchAccessPolicy_networkId: '<node property>', // (1) define node properties
                createNetworkSwitchAccessPolicy_createNetworkSwitchAccessPolicy: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchAccessPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchAccessPolicy',
                getNetworkSwitchAccessPolicy_networkId: '<node property>', // (1) define node properties
                getNetworkSwitchAccessPolicy_accessPolicyNumber: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchAccessPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchAccessPolicy',
                updateNetworkSwitchAccessPolicy_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchAccessPolicy_accessPolicyNumber: '<node property>', // (1) define node properties
                updateNetworkSwitchAccessPolicy_updateNetworkSwitchAccessPolicy: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkSwitchAccessPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkSwitchAccessPolicy',
                deleteNetworkSwitchAccessPolicy_networkId: '<node property>', // (1) define node properties
                deleteNetworkSwitchAccessPolicy_accessPolicyNumber: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchAlternateManagementInterface()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchAlternateManagementInterface',
                getNetworkSwitchAlternateManagementInterface_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchAlternateManagementInterface()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchAlternateManagementInterface',
                updateNetworkSwitchAlternateManagementInterface_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchAlternateManagementInterface_updateNetworkSwitchAlternateManagementInterface: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchDhcpServerPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchDhcpServerPolicy',
                getNetworkSwitchDhcpServerPolicy_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchDhcpServerPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchDhcpServerPolicy',
                updateNetworkSwitchDhcpServerPolicy_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchDhcpServerPolicy_updateNetworkSwitchDhcpServerPolicy: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchDscpToCosMappings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchDscpToCosMappings',
                getNetworkSwitchDscpToCosMappings_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchDscpToCosMappings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchDscpToCosMappings',
                updateNetworkSwitchDscpToCosMappings_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchDscpToCosMappings_updateNetworkSwitchDscpToCosMappings: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchLinkAggregations()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchLinkAggregations',
                getNetworkSwitchLinkAggregations_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkSwitchLinkAggregation()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkSwitchLinkAggregation',
                createNetworkSwitchLinkAggregation_networkId: '<node property>', // (1) define node properties
                createNetworkSwitchLinkAggregation_createNetworkSwitchLinkAggregation: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchLinkAggregation()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchLinkAggregation',
                updateNetworkSwitchLinkAggregation_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchLinkAggregation_linkAggregationId: '<node property>', // (1) define node properties
                updateNetworkSwitchLinkAggregation_updateNetworkSwitchLinkAggregation: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkSwitchLinkAggregation()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkSwitchLinkAggregation',
                deleteNetworkSwitchLinkAggregation_networkId: '<node property>', // (1) define node properties
                deleteNetworkSwitchLinkAggregation_linkAggregationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchMtu()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchMtu',
                getNetworkSwitchMtu_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchMtu()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchMtu',
                updateNetworkSwitchMtu_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchMtu_updateNetworkSwitchMtu: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchPortSchedules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchPortSchedules',
                getNetworkSwitchPortSchedules_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkSwitchPortSchedule()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkSwitchPortSchedule',
                createNetworkSwitchPortSchedule_networkId: '<node property>', // (1) define node properties
                createNetworkSwitchPortSchedule_createNetworkSwitchPortSchedule: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkSwitchPortSchedule()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkSwitchPortSchedule',
                deleteNetworkSwitchPortSchedule_networkId: '<node property>', // (1) define node properties
                deleteNetworkSwitchPortSchedule_portScheduleId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchPortSchedule()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchPortSchedule',
                updateNetworkSwitchPortSchedule_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchPortSchedule_portScheduleId: '<node property>', // (1) define node properties
                updateNetworkSwitchPortSchedule_updateNetworkSwitchPortSchedule: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchQosRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchQosRules',
                getNetworkSwitchQosRules_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkSwitchQosRule()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkSwitchQosRule',
                createNetworkSwitchQosRule_networkId: '<node property>', // (1) define node properties
                createNetworkSwitchQosRule_createNetworkSwitchQosRule: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchQosRulesOrder()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchQosRulesOrder',
                getNetworkSwitchQosRulesOrder_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchQosRulesOrder()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchQosRulesOrder',
                updateNetworkSwitchQosRulesOrder_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchQosRulesOrder_updateNetworkSwitchQosRulesOrder: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchQosRule()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchQosRule',
                getNetworkSwitchQosRule_networkId: '<node property>', // (1) define node properties
                getNetworkSwitchQosRule_qosRuleId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkSwitchQosRule()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkSwitchQosRule',
                deleteNetworkSwitchQosRule_networkId: '<node property>', // (1) define node properties
                deleteNetworkSwitchQosRule_qosRuleId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchQosRule()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchQosRule',
                updateNetworkSwitchQosRule_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchQosRule_qosRuleId: '<node property>', // (1) define node properties
                updateNetworkSwitchQosRule_updateNetworkSwitchQosRule: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchRoutingMulticast()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchRoutingMulticast',
                getNetworkSwitchRoutingMulticast_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchRoutingMulticast()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchRoutingMulticast',
                updateNetworkSwitchRoutingMulticast_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchRoutingMulticast_updateNetworkSwitchRoutingMulticast: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchRoutingMulticastRendezvousPoints()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchRoutingMulticastRendezvousPoints',
                getNetworkSwitchRoutingMulticastRendezvousPoints_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkSwitchRoutingMulticastRendezvousPoint()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkSwitchRoutingMulticastRendezvousPoint',
                createNetworkSwitchRoutingMulticastRendezvousPoint_networkId: '<node property>', // (1) define node properties
                createNetworkSwitchRoutingMulticastRendezvousPoint_createNetworkSwitchRoutingMulticastRendezvousPoint: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchRoutingMulticastRendezvousPoint()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchRoutingMulticastRendezvousPoint',
                getNetworkSwitchRoutingMulticastRendezvousPoint_networkId: '<node property>', // (1) define node properties
                getNetworkSwitchRoutingMulticastRendezvousPoint_rendezvousPointId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkSwitchRoutingMulticastRendezvousPoint()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkSwitchRoutingMulticastRendezvousPoint',
                deleteNetworkSwitchRoutingMulticastRendezvousPoint_networkId: '<node property>', // (1) define node properties
                deleteNetworkSwitchRoutingMulticastRendezvousPoint_rendezvousPointId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchRoutingMulticastRendezvousPoint()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchRoutingMulticastRendezvousPoint',
                updateNetworkSwitchRoutingMulticastRendezvousPoint_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchRoutingMulticastRendezvousPoint_rendezvousPointId: '<node property>', // (1) define node properties
                updateNetworkSwitchRoutingMulticastRendezvousPoint_updateNetworkSwitchRoutingMulticastRendezvousPoint: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchRoutingOspf()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchRoutingOspf',
                getNetworkSwitchRoutingOspf_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchRoutingOspf()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchRoutingOspf',
                updateNetworkSwitchRoutingOspf_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchRoutingOspf_updateNetworkSwitchRoutingOspf: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchSettings',
                getNetworkSwitchSettings_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchSettings',
                updateNetworkSwitchSettings_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchSettings_updateNetworkSwitchSettings: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchStacks()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchStacks',
                getNetworkSwitchStacks_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkSwitchStack()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkSwitchStack',
                createNetworkSwitchStack_networkId: '<node property>', // (1) define node properties
                createNetworkSwitchStack_createNetworkSwitchStack: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchStack()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchStack',
                getNetworkSwitchStack_networkId: '<node property>', // (1) define node properties
                getNetworkSwitchStack_switchStackId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkSwitchStack()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkSwitchStack',
                deleteNetworkSwitchStack_networkId: '<node property>', // (1) define node properties
                deleteNetworkSwitchStack_switchStackId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle addNetworkSwitchStack()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'addNetworkSwitchStack',
                addNetworkSwitchStack_networkId: '<node property>', // (1) define node properties
                addNetworkSwitchStack_switchStackId: '<node property>', // (1) define node properties
                addNetworkSwitchStack_addNetworkSwitchStack: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle removeNetworkSwitchStack()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'removeNetworkSwitchStack',
                removeNetworkSwitchStack_networkId: '<node property>', // (1) define node properties
                removeNetworkSwitchStack_switchStackId: '<node property>', // (1) define node properties
                removeNetworkSwitchStack_removeNetworkSwitchStack: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchStackRoutingInterfaces()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchStackRoutingInterfaces',
                getNetworkSwitchStackRoutingInterfaces_networkId: '<node property>', // (1) define node properties
                getNetworkSwitchStackRoutingInterfaces_switchStackId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkSwitchStackRoutingInterface()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkSwitchStackRoutingInterface',
                createNetworkSwitchStackRoutingInterface_networkId: '<node property>', // (1) define node properties
                createNetworkSwitchStackRoutingInterface_switchStackId: '<node property>', // (1) define node properties
                createNetworkSwitchStackRoutingInterface_createNetworkSwitchStackRoutingInterface: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchStackRoutingInterface()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchStackRoutingInterface',
                getNetworkSwitchStackRoutingInterface_networkId: '<node property>', // (1) define node properties
                getNetworkSwitchStackRoutingInterface_switchStackId: '<node property>', // (1) define node properties
                getNetworkSwitchStackRoutingInterface_interfaceId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchStackRoutingInterface()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchStackRoutingInterface',
                updateNetworkSwitchStackRoutingInterface_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchStackRoutingInterface_switchStackId: '<node property>', // (1) define node properties
                updateNetworkSwitchStackRoutingInterface_interfaceId: '<node property>', // (1) define node properties
                updateNetworkSwitchStackRoutingInterface_updateNetworkSwitchStackRoutingInterface: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkSwitchStackRoutingInterface()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkSwitchStackRoutingInterface',
                deleteNetworkSwitchStackRoutingInterface_networkId: '<node property>', // (1) define node properties
                deleteNetworkSwitchStackRoutingInterface_switchStackId: '<node property>', // (1) define node properties
                deleteNetworkSwitchStackRoutingInterface_interfaceId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchStackRoutingInterfaceDhcp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchStackRoutingInterfaceDhcp',
                getNetworkSwitchStackRoutingInterfaceDhcp_networkId: '<node property>', // (1) define node properties
                getNetworkSwitchStackRoutingInterfaceDhcp_switchStackId: '<node property>', // (1) define node properties
                getNetworkSwitchStackRoutingInterfaceDhcp_interfaceId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchStackRoutingInterfaceDhcp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchStackRoutingInterfaceDhcp',
                updateNetworkSwitchStackRoutingInterfaceDhcp_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchStackRoutingInterfaceDhcp_switchStackId: '<node property>', // (1) define node properties
                updateNetworkSwitchStackRoutingInterfaceDhcp_interfaceId: '<node property>', // (1) define node properties
                updateNetworkSwitchStackRoutingInterfaceDhcp_updateNetworkSwitchStackRoutingInterfaceDhcp: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchStackRoutingStaticRoutes()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchStackRoutingStaticRoutes',
                getNetworkSwitchStackRoutingStaticRoutes_networkId: '<node property>', // (1) define node properties
                getNetworkSwitchStackRoutingStaticRoutes_switchStackId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkSwitchStackRoutingStaticRoute()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkSwitchStackRoutingStaticRoute',
                createNetworkSwitchStackRoutingStaticRoute_networkId: '<node property>', // (1) define node properties
                createNetworkSwitchStackRoutingStaticRoute_switchStackId: '<node property>', // (1) define node properties
                createNetworkSwitchStackRoutingStaticRoute_createNetworkSwitchStackRoutingStaticRoute: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchStackRoutingStaticRoute()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchStackRoutingStaticRoute',
                getNetworkSwitchStackRoutingStaticRoute_networkId: '<node property>', // (1) define node properties
                getNetworkSwitchStackRoutingStaticRoute_switchStackId: '<node property>', // (1) define node properties
                getNetworkSwitchStackRoutingStaticRoute_staticRouteId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchStackRoutingStaticRoute()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchStackRoutingStaticRoute',
                updateNetworkSwitchStackRoutingStaticRoute_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchStackRoutingStaticRoute_switchStackId: '<node property>', // (1) define node properties
                updateNetworkSwitchStackRoutingStaticRoute_staticRouteId: '<node property>', // (1) define node properties
                updateNetworkSwitchStackRoutingStaticRoute_updateNetworkSwitchStackRoutingStaticRoute: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkSwitchStackRoutingStaticRoute()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkSwitchStackRoutingStaticRoute',
                deleteNetworkSwitchStackRoutingStaticRoute_networkId: '<node property>', // (1) define node properties
                deleteNetworkSwitchStackRoutingStaticRoute_switchStackId: '<node property>', // (1) define node properties
                deleteNetworkSwitchStackRoutingStaticRoute_staticRouteId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchStormControl()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchStormControl',
                getNetworkSwitchStormControl_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchStormControl()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchStormControl',
                updateNetworkSwitchStormControl_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchStormControl_updateNetworkSwitchStormControl: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSwitchStp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSwitchStp',
                getNetworkSwitchStp_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSwitchStp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSwitchStp',
                updateNetworkSwitchStp_networkId: '<node property>', // (1) define node properties
                updateNetworkSwitchStp_updateNetworkSwitchStp: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkSyslogServers()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkSyslogServers',
                getNetworkSyslogServers_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkSyslogServers()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkSyslogServers',
                updateNetworkSyslogServers_networkId: '<node property>', // (1) define node properties
                updateNetworkSyslogServers_updateNetworkSyslogServers: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkTraffic()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkTraffic',
                getNetworkTraffic_networkId: '<node property>', // (1) define node properties
                getNetworkTraffic_t0: '<node property>', // (1) define node properties
                getNetworkTraffic_timespan: '<node property>', // (1) define node properties
                getNetworkTraffic_deviceType: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkTrafficAnalysis()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkTrafficAnalysis',
                getNetworkTrafficAnalysis_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkTrafficAnalysis()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkTrafficAnalysis',
                updateNetworkTrafficAnalysis_networkId: '<node property>', // (1) define node properties
                updateNetworkTrafficAnalysis_updateNetworkTrafficAnalysis: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkTrafficShapingApplicationCategories()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkTrafficShapingApplicationCategories',
                getNetworkTrafficShapingApplicationCategories_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkTrafficShapingDscpTaggingOptions()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkTrafficShapingDscpTaggingOptions',
                getNetworkTrafficShapingDscpTaggingOptions_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle unbindNetwork()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'unbindNetwork',
                unbindNetwork_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWebhooksHttpServers()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWebhooksHttpServers',
                getNetworkWebhooksHttpServers_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkWebhooksHttpServer()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkWebhooksHttpServer',
                createNetworkWebhooksHttpServer_networkId: '<node property>', // (1) define node properties
                createNetworkWebhooksHttpServer_createNetworkWebhooksHttpServer: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWebhooksHttpServer()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWebhooksHttpServer',
                getNetworkWebhooksHttpServer_networkId: '<node property>', // (1) define node properties
                getNetworkWebhooksHttpServer_httpServerId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWebhooksHttpServer()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWebhooksHttpServer',
                updateNetworkWebhooksHttpServer_networkId: '<node property>', // (1) define node properties
                updateNetworkWebhooksHttpServer_httpServerId: '<node property>', // (1) define node properties
                updateNetworkWebhooksHttpServer_updateNetworkWebhooksHttpServer: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkWebhooksHttpServer()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkWebhooksHttpServer',
                deleteNetworkWebhooksHttpServer_networkId: '<node property>', // (1) define node properties
                deleteNetworkWebhooksHttpServer_httpServerId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkWebhooksWebhookTest()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkWebhooksWebhookTest',
                createNetworkWebhooksWebhookTest_networkId: '<node property>', // (1) define node properties
                createNetworkWebhooksWebhookTest_createNetworkWebhooksWebhookTest: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWebhooksWebhookTest()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWebhooksWebhookTest',
                getNetworkWebhooksWebhookTest_networkId: '<node property>', // (1) define node properties
                getNetworkWebhooksWebhookTest_webhookTestId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessAirMarshal()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessAirMarshal',
                getNetworkWirelessAirMarshal_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessAirMarshal_t0: '<node property>', // (1) define node properties
                getNetworkWirelessAirMarshal_timespan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessAlternateManagementInterface()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessAlternateManagementInterface',
                getNetworkWirelessAlternateManagementInterface_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWirelessAlternateManagementInterface()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWirelessAlternateManagementInterface',
                updateNetworkWirelessAlternateManagementInterface_networkId: '<node property>', // (1) define node properties
                updateNetworkWirelessAlternateManagementInterface_updateNetworkWirelessAlternateManagementInterface: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessBilling()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessBilling',
                getNetworkWirelessBilling_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWirelessBilling()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWirelessBilling',
                updateNetworkWirelessBilling_networkId: '<node property>', // (1) define node properties
                updateNetworkWirelessBilling_updateNetworkWirelessBilling: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessBluetoothSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessBluetoothSettings',
                getNetworkWirelessBluetoothSettings_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWirelessBluetoothSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWirelessBluetoothSettings',
                updateNetworkWirelessBluetoothSettings_networkId: '<node property>', // (1) define node properties
                updateNetworkWirelessBluetoothSettings_updateNetworkWirelessBluetoothSettings: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessChannelUtilizationHistory()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessChannelUtilizationHistory',
                getNetworkWirelessChannelUtilizationHistory_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessChannelUtilizationHistory_t0: '<node property>', // (1) define node properties
                getNetworkWirelessChannelUtilizationHistory_t1: '<node property>', // (1) define node properties
                getNetworkWirelessChannelUtilizationHistory_timespan: '<node property>', // (1) define node properties
                getNetworkWirelessChannelUtilizationHistory_resolution: '<node property>', // (1) define node properties
                getNetworkWirelessChannelUtilizationHistory_autoResolution: '<node property>', // (1) define node properties
                getNetworkWirelessChannelUtilizationHistory_clientId: '<node property>', // (1) define node properties
                getNetworkWirelessChannelUtilizationHistory_deviceSerial: '<node property>', // (1) define node properties
                getNetworkWirelessChannelUtilizationHistory_apTag: '<node property>', // (1) define node properties
                getNetworkWirelessChannelUtilizationHistory_band: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessClientCountHistory()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessClientCountHistory',
                getNetworkWirelessClientCountHistory_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessClientCountHistory_t0: '<node property>', // (1) define node properties
                getNetworkWirelessClientCountHistory_t1: '<node property>', // (1) define node properties
                getNetworkWirelessClientCountHistory_timespan: '<node property>', // (1) define node properties
                getNetworkWirelessClientCountHistory_resolution: '<node property>', // (1) define node properties
                getNetworkWirelessClientCountHistory_autoResolution: '<node property>', // (1) define node properties
                getNetworkWirelessClientCountHistory_clientId: '<node property>', // (1) define node properties
                getNetworkWirelessClientCountHistory_deviceSerial: '<node property>', // (1) define node properties
                getNetworkWirelessClientCountHistory_apTag: '<node property>', // (1) define node properties
                getNetworkWirelessClientCountHistory_band: '<node property>', // (1) define node properties
                getNetworkWirelessClientCountHistory_ssid: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessClientsConnectionStats()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessClientsConnectionStats',
                getNetworkWirelessClientsConnectionStats_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessClientsConnectionStats_t0: '<node property>', // (1) define node properties
                getNetworkWirelessClientsConnectionStats_t1: '<node property>', // (1) define node properties
                getNetworkWirelessClientsConnectionStats_timespan: '<node property>', // (1) define node properties
                getNetworkWirelessClientsConnectionStats_band: '<node property>', // (1) define node properties
                getNetworkWirelessClientsConnectionStats_ssid: '<node property>', // (1) define node properties
                getNetworkWirelessClientsConnectionStats_vlan: '<node property>', // (1) define node properties
                getNetworkWirelessClientsConnectionStats_apTag: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessClientsLatencyStats()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessClientsLatencyStats',
                getNetworkWirelessClientsLatencyStats_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessClientsLatencyStats_t0: '<node property>', // (1) define node properties
                getNetworkWirelessClientsLatencyStats_t1: '<node property>', // (1) define node properties
                getNetworkWirelessClientsLatencyStats_timespan: '<node property>', // (1) define node properties
                getNetworkWirelessClientsLatencyStats_band: '<node property>', // (1) define node properties
                getNetworkWirelessClientsLatencyStats_ssid: '<node property>', // (1) define node properties
                getNetworkWirelessClientsLatencyStats_vlan: '<node property>', // (1) define node properties
                getNetworkWirelessClientsLatencyStats_apTag: '<node property>', // (1) define node properties
                getNetworkWirelessClientsLatencyStats_fields: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessClientConnectionStats()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessClientConnectionStats',
                getNetworkWirelessClientConnectionStats_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectionStats_clientId: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectionStats_t0: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectionStats_t1: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectionStats_timespan: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectionStats_band: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectionStats_ssid: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectionStats_vlan: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectionStats_apTag: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessClientConnectivityEvents()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessClientConnectivityEvents',
                getNetworkWirelessClientConnectivityEvents_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectivityEvents_clientId: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectivityEvents_perPage: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectivityEvents_startingAfter: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectivityEvents_endingBefore: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectivityEvents_t0: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectivityEvents_t1: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectivityEvents_timespan: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectivityEvents_types: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectivityEvents_includedSeverities: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectivityEvents_band: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectivityEvents_ssidNumber: '<node property>', // (1) define node properties
                getNetworkWirelessClientConnectivityEvents_deviceSerial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessClientLatencyHistory()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessClientLatencyHistory',
                getNetworkWirelessClientLatencyHistory_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessClientLatencyHistory_clientId: '<node property>', // (1) define node properties
                getNetworkWirelessClientLatencyHistory_t0: '<node property>', // (1) define node properties
                getNetworkWirelessClientLatencyHistory_t1: '<node property>', // (1) define node properties
                getNetworkWirelessClientLatencyHistory_timespan: '<node property>', // (1) define node properties
                getNetworkWirelessClientLatencyHistory_resolution: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessClientLatencyStats()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessClientLatencyStats',
                getNetworkWirelessClientLatencyStats_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessClientLatencyStats_clientId: '<node property>', // (1) define node properties
                getNetworkWirelessClientLatencyStats_t0: '<node property>', // (1) define node properties
                getNetworkWirelessClientLatencyStats_t1: '<node property>', // (1) define node properties
                getNetworkWirelessClientLatencyStats_timespan: '<node property>', // (1) define node properties
                getNetworkWirelessClientLatencyStats_band: '<node property>', // (1) define node properties
                getNetworkWirelessClientLatencyStats_ssid: '<node property>', // (1) define node properties
                getNetworkWirelessClientLatencyStats_vlan: '<node property>', // (1) define node properties
                getNetworkWirelessClientLatencyStats_apTag: '<node property>', // (1) define node properties
                getNetworkWirelessClientLatencyStats_fields: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessConnectionStats()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessConnectionStats',
                getNetworkWirelessConnectionStats_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessConnectionStats_t0: '<node property>', // (1) define node properties
                getNetworkWirelessConnectionStats_t1: '<node property>', // (1) define node properties
                getNetworkWirelessConnectionStats_timespan: '<node property>', // (1) define node properties
                getNetworkWirelessConnectionStats_band: '<node property>', // (1) define node properties
                getNetworkWirelessConnectionStats_ssid: '<node property>', // (1) define node properties
                getNetworkWirelessConnectionStats_vlan: '<node property>', // (1) define node properties
                getNetworkWirelessConnectionStats_apTag: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessDataRateHistory()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessDataRateHistory',
                getNetworkWirelessDataRateHistory_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessDataRateHistory_t0: '<node property>', // (1) define node properties
                getNetworkWirelessDataRateHistory_t1: '<node property>', // (1) define node properties
                getNetworkWirelessDataRateHistory_timespan: '<node property>', // (1) define node properties
                getNetworkWirelessDataRateHistory_resolution: '<node property>', // (1) define node properties
                getNetworkWirelessDataRateHistory_autoResolution: '<node property>', // (1) define node properties
                getNetworkWirelessDataRateHistory_clientId: '<node property>', // (1) define node properties
                getNetworkWirelessDataRateHistory_deviceSerial: '<node property>', // (1) define node properties
                getNetworkWirelessDataRateHistory_apTag: '<node property>', // (1) define node properties
                getNetworkWirelessDataRateHistory_band: '<node property>', // (1) define node properties
                getNetworkWirelessDataRateHistory_ssid: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessDevicesConnectionStats()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessDevicesConnectionStats',
                getNetworkWirelessDevicesConnectionStats_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessDevicesConnectionStats_t0: '<node property>', // (1) define node properties
                getNetworkWirelessDevicesConnectionStats_t1: '<node property>', // (1) define node properties
                getNetworkWirelessDevicesConnectionStats_timespan: '<node property>', // (1) define node properties
                getNetworkWirelessDevicesConnectionStats_band: '<node property>', // (1) define node properties
                getNetworkWirelessDevicesConnectionStats_ssid: '<node property>', // (1) define node properties
                getNetworkWirelessDevicesConnectionStats_vlan: '<node property>', // (1) define node properties
                getNetworkWirelessDevicesConnectionStats_apTag: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessDevicesLatencyStats()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessDevicesLatencyStats',
                getNetworkWirelessDevicesLatencyStats_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessDevicesLatencyStats_t0: '<node property>', // (1) define node properties
                getNetworkWirelessDevicesLatencyStats_t1: '<node property>', // (1) define node properties
                getNetworkWirelessDevicesLatencyStats_timespan: '<node property>', // (1) define node properties
                getNetworkWirelessDevicesLatencyStats_band: '<node property>', // (1) define node properties
                getNetworkWirelessDevicesLatencyStats_ssid: '<node property>', // (1) define node properties
                getNetworkWirelessDevicesLatencyStats_vlan: '<node property>', // (1) define node properties
                getNetworkWirelessDevicesLatencyStats_apTag: '<node property>', // (1) define node properties
                getNetworkWirelessDevicesLatencyStats_fields: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessFailedConnections()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessFailedConnections',
                getNetworkWirelessFailedConnections_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessFailedConnections_t0: '<node property>', // (1) define node properties
                getNetworkWirelessFailedConnections_t1: '<node property>', // (1) define node properties
                getNetworkWirelessFailedConnections_timespan: '<node property>', // (1) define node properties
                getNetworkWirelessFailedConnections_band: '<node property>', // (1) define node properties
                getNetworkWirelessFailedConnections_ssid: '<node property>', // (1) define node properties
                getNetworkWirelessFailedConnections_vlan: '<node property>', // (1) define node properties
                getNetworkWirelessFailedConnections_apTag: '<node property>', // (1) define node properties
                getNetworkWirelessFailedConnections_serial: '<node property>', // (1) define node properties
                getNetworkWirelessFailedConnections_clientId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessLatencyHistory()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessLatencyHistory',
                getNetworkWirelessLatencyHistory_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyHistory_t0: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyHistory_t1: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyHistory_timespan: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyHistory_resolution: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyHistory_autoResolution: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyHistory_clientId: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyHistory_deviceSerial: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyHistory_apTag: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyHistory_band: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyHistory_ssid: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyHistory_accessCategory: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessLatencyStats()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessLatencyStats',
                getNetworkWirelessLatencyStats_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyStats_t0: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyStats_t1: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyStats_timespan: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyStats_band: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyStats_ssid: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyStats_vlan: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyStats_apTag: '<node property>', // (1) define node properties
                getNetworkWirelessLatencyStats_fields: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessMeshStatuses()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessMeshStatuses',
                getNetworkWirelessMeshStatuses_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessMeshStatuses_perPage: '<node property>', // (1) define node properties
                getNetworkWirelessMeshStatuses_startingAfter: '<node property>', // (1) define node properties
                getNetworkWirelessMeshStatuses_endingBefore: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessRfProfiles()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessRfProfiles',
                getNetworkWirelessRfProfiles_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessRfProfiles_includeTemplateProfiles: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkWirelessRfProfile()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkWirelessRfProfile',
                createNetworkWirelessRfProfile_networkId: '<node property>', // (1) define node properties
                createNetworkWirelessRfProfile_createNetworkWirelessRfProfile: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWirelessRfProfile()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWirelessRfProfile',
                updateNetworkWirelessRfProfile_networkId: '<node property>', // (1) define node properties
                updateNetworkWirelessRfProfile_rfProfileId: '<node property>', // (1) define node properties
                updateNetworkWirelessRfProfile_updateNetworkWirelessRfProfile: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkWirelessRfProfile()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkWirelessRfProfile',
                deleteNetworkWirelessRfProfile_networkId: '<node property>', // (1) define node properties
                deleteNetworkWirelessRfProfile_rfProfileId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessRfProfile()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessRfProfile',
                getNetworkWirelessRfProfile_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessRfProfile_rfProfileId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessSettings',
                getNetworkWirelessSettings_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWirelessSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWirelessSettings',
                updateNetworkWirelessSettings_networkId: '<node property>', // (1) define node properties
                updateNetworkWirelessSettings_updateNetworkWirelessSettings: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessSignalQualityHistory()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessSignalQualityHistory',
                getNetworkWirelessSignalQualityHistory_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessSignalQualityHistory_t0: '<node property>', // (1) define node properties
                getNetworkWirelessSignalQualityHistory_t1: '<node property>', // (1) define node properties
                getNetworkWirelessSignalQualityHistory_timespan: '<node property>', // (1) define node properties
                getNetworkWirelessSignalQualityHistory_resolution: '<node property>', // (1) define node properties
                getNetworkWirelessSignalQualityHistory_autoResolution: '<node property>', // (1) define node properties
                getNetworkWirelessSignalQualityHistory_clientId: '<node property>', // (1) define node properties
                getNetworkWirelessSignalQualityHistory_deviceSerial: '<node property>', // (1) define node properties
                getNetworkWirelessSignalQualityHistory_apTag: '<node property>', // (1) define node properties
                getNetworkWirelessSignalQualityHistory_band: '<node property>', // (1) define node properties
                getNetworkWirelessSignalQualityHistory_ssid: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessSsids()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessSsids',
                getNetworkWirelessSsids_networkId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessSsid()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessSsid',
                getNetworkWirelessSsid_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessSsid_number: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWirelessSsid()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWirelessSsid',
                updateNetworkWirelessSsid_networkId: '<node property>', // (1) define node properties
                updateNetworkWirelessSsid_number: '<node property>', // (1) define node properties
                updateNetworkWirelessSsid_updateNetworkWirelessSsid: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessSsidBonjourForwarding()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessSsidBonjourForwarding',
                getNetworkWirelessSsidBonjourForwarding_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessSsidBonjourForwarding_number: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWirelessSsidBonjourForwarding()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWirelessSsidBonjourForwarding',
                updateNetworkWirelessSsidBonjourForwarding_networkId: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidBonjourForwarding_number: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidBonjourForwarding_updateNetworkWirelessSsidBonjourForwarding: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessSsidDeviceTypeGroupPolicies()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessSsidDeviceTypeGroupPolicies',
                getNetworkWirelessSsidDeviceTypeGroupPolicies_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessSsidDeviceTypeGroupPolicies_number: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWirelessSsidDeviceTypeGroupPolicies()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWirelessSsidDeviceTypeGroupPolicies',
                updateNetworkWirelessSsidDeviceTypeGroupPolicies_networkId: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidDeviceTypeGroupPolicies_number: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidDeviceTypeGroupPolicies_updateNetworkWirelessSsidDeviceTypeGroupPolicies: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessSsidEapOverride()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessSsidEapOverride',
                getNetworkWirelessSsidEapOverride_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessSsidEapOverride_number: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWirelessSsidEapOverride()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWirelessSsidEapOverride',
                updateNetworkWirelessSsidEapOverride_networkId: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidEapOverride_number: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidEapOverride_updateNetworkWirelessSsidEapOverride: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessSsidFirewallL3FirewallRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessSsidFirewallL3FirewallRules',
                getNetworkWirelessSsidFirewallL3FirewallRules_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessSsidFirewallL3FirewallRules_number: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWirelessSsidFirewallL3FirewallRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWirelessSsidFirewallL3FirewallRules',
                updateNetworkWirelessSsidFirewallL3FirewallRules_networkId: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidFirewallL3FirewallRules_number: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidFirewallL3FirewallRules_updateNetworkWirelessSsidFirewallL3FirewallRules: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessSsidFirewallL7FirewallRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessSsidFirewallL7FirewallRules',
                getNetworkWirelessSsidFirewallL7FirewallRules_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessSsidFirewallL7FirewallRules_number: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWirelessSsidFirewallL7FirewallRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWirelessSsidFirewallL7FirewallRules',
                updateNetworkWirelessSsidFirewallL7FirewallRules_networkId: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidFirewallL7FirewallRules_number: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidFirewallL7FirewallRules_updateNetworkWirelessSsidFirewallL7FirewallRules: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessSsidHotspot20()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessSsidHotspot20',
                getNetworkWirelessSsidHotspot20_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessSsidHotspot20_number: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWirelessSsidHotspot20()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWirelessSsidHotspot20',
                updateNetworkWirelessSsidHotspot20_networkId: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidHotspot20_number: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidHotspot20_updateNetworkWirelessSsidHotspot20: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessSsidIdentityPsks()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessSsidIdentityPsks',
                getNetworkWirelessSsidIdentityPsks_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessSsidIdentityPsks_number: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createNetworkWirelessSsidIdentityPsk()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createNetworkWirelessSsidIdentityPsk',
                createNetworkWirelessSsidIdentityPsk_networkId: '<node property>', // (1) define node properties
                createNetworkWirelessSsidIdentityPsk_number: '<node property>', // (1) define node properties
                createNetworkWirelessSsidIdentityPsk_createNetworkWirelessSsidIdentityPsk: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessSsidIdentityPsk()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessSsidIdentityPsk',
                getNetworkWirelessSsidIdentityPsk_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessSsidIdentityPsk_number: '<node property>', // (1) define node properties
                getNetworkWirelessSsidIdentityPsk_identityPskId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWirelessSsidIdentityPsk()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWirelessSsidIdentityPsk',
                updateNetworkWirelessSsidIdentityPsk_networkId: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidIdentityPsk_number: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidIdentityPsk_identityPskId: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidIdentityPsk_updateNetworkWirelessSsidIdentityPsk: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteNetworkWirelessSsidIdentityPsk()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteNetworkWirelessSsidIdentityPsk',
                deleteNetworkWirelessSsidIdentityPsk_networkId: '<node property>', // (1) define node properties
                deleteNetworkWirelessSsidIdentityPsk_number: '<node property>', // (1) define node properties
                deleteNetworkWirelessSsidIdentityPsk_identityPskId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessSsidSchedules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessSsidSchedules',
                getNetworkWirelessSsidSchedules_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessSsidSchedules_number: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWirelessSsidSchedules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWirelessSsidSchedules',
                updateNetworkWirelessSsidSchedules_networkId: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidSchedules_number: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidSchedules_updateNetworkWirelessSsidSchedules: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessSsidSplashSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessSsidSplashSettings',
                getNetworkWirelessSsidSplashSettings_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessSsidSplashSettings_number: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWirelessSsidSplashSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWirelessSsidSplashSettings',
                updateNetworkWirelessSsidSplashSettings_networkId: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidSplashSettings_number: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidSplashSettings_updateNetworkWirelessSsidSplashSettings: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWirelessSsidTrafficShapingRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWirelessSsidTrafficShapingRules',
                updateNetworkWirelessSsidTrafficShapingRules_networkId: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidTrafficShapingRules_number: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidTrafficShapingRules_updateNetworkWirelessSsidTrafficShapingRules: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessSsidTrafficShapingRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessSsidTrafficShapingRules',
                getNetworkWirelessSsidTrafficShapingRules_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessSsidTrafficShapingRules_number: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessSsidVpn()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessSsidVpn',
                getNetworkWirelessSsidVpn_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessSsidVpn_number: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateNetworkWirelessSsidVpn()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateNetworkWirelessSsidVpn',
                updateNetworkWirelessSsidVpn_networkId: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidVpn_number: '<node property>', // (1) define node properties
                updateNetworkWirelessSsidVpn_updateNetworkWirelessSsidVpn: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getNetworkWirelessUsageHistory()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getNetworkWirelessUsageHistory',
                getNetworkWirelessUsageHistory_networkId: '<node property>', // (1) define node properties
                getNetworkWirelessUsageHistory_t0: '<node property>', // (1) define node properties
                getNetworkWirelessUsageHistory_t1: '<node property>', // (1) define node properties
                getNetworkWirelessUsageHistory_timespan: '<node property>', // (1) define node properties
                getNetworkWirelessUsageHistory_resolution: '<node property>', // (1) define node properties
                getNetworkWirelessUsageHistory_autoResolution: '<node property>', // (1) define node properties
                getNetworkWirelessUsageHistory_clientId: '<node property>', // (1) define node properties
                getNetworkWirelessUsageHistory_deviceSerial: '<node property>', // (1) define node properties
                getNetworkWirelessUsageHistory_apTag: '<node property>', // (1) define node properties
                getNetworkWirelessUsageHistory_band: '<node property>', // (1) define node properties
                getNetworkWirelessUsageHistory_ssid: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizations()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizations',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createOrganization()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createOrganization',
                createOrganization_createOrganization: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganization()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganization',
                getOrganization_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganization()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganization',
                updateOrganization_organizationId: '<node property>', // (1) define node properties
                updateOrganization_updateOrganization: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteOrganization()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteOrganization',
                deleteOrganization_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createOrganizationActionBatch()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createOrganizationActionBatch',
                createOrganizationActionBatch_organizationId: '<node property>', // (1) define node properties
                createOrganizationActionBatch_createOrganizationActionBatch: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationActionBatches()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationActionBatches',
                getOrganizationActionBatches_organizationId: '<node property>', // (1) define node properties
                getOrganizationActionBatches_status: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationActionBatch()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationActionBatch',
                getOrganizationActionBatch_organizationId: '<node property>', // (1) define node properties
                getOrganizationActionBatch_actionBatchId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteOrganizationActionBatch()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteOrganizationActionBatch',
                deleteOrganizationActionBatch_organizationId: '<node property>', // (1) define node properties
                deleteOrganizationActionBatch_actionBatchId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationActionBatch()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationActionBatch',
                updateOrganizationActionBatch_organizationId: '<node property>', // (1) define node properties
                updateOrganizationActionBatch_actionBatchId: '<node property>', // (1) define node properties
                updateOrganizationActionBatch_updateOrganizationActionBatch: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationAdaptivePolicyAcls()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationAdaptivePolicyAcls',
                getOrganizationAdaptivePolicyAcls_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createOrganizationAdaptivePolicyAcl()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createOrganizationAdaptivePolicyAcl',
                createOrganizationAdaptivePolicyAcl_organizationId: '<node property>', // (1) define node properties
                createOrganizationAdaptivePolicyAcl_createOrganizationAdaptivePolicyAcl: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationAdaptivePolicyAcl()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationAdaptivePolicyAcl',
                getOrganizationAdaptivePolicyAcl_organizationId: '<node property>', // (1) define node properties
                getOrganizationAdaptivePolicyAcl_id: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationAdaptivePolicyAcl()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationAdaptivePolicyAcl',
                updateOrganizationAdaptivePolicyAcl_organizationId: '<node property>', // (1) define node properties
                updateOrganizationAdaptivePolicyAcl_id: '<node property>', // (1) define node properties
                updateOrganizationAdaptivePolicyAcl_updateOrganizationAdaptivePolicyAcl: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteOrganizationAdaptivePolicyAcl()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteOrganizationAdaptivePolicyAcl',
                deleteOrganizationAdaptivePolicyAcl_organizationId: '<node property>', // (1) define node properties
                deleteOrganizationAdaptivePolicyAcl_id: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationAdaptivePolicySettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationAdaptivePolicySettings',
                getOrganizationAdaptivePolicySettings_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationAdaptivePolicySettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationAdaptivePolicySettings',
                updateOrganizationAdaptivePolicySettings_organizationId: '<node property>', // (1) define node properties
                updateOrganizationAdaptivePolicySettings_updateOrganizationAdaptivePolicySettings: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationAdmins()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationAdmins',
                getOrganizationAdmins_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createOrganizationAdmin()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createOrganizationAdmin',
                createOrganizationAdmin_organizationId: '<node property>', // (1) define node properties
                createOrganizationAdmin_createOrganizationAdmin: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationAdmin()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationAdmin',
                updateOrganizationAdmin_organizationId: '<node property>', // (1) define node properties
                updateOrganizationAdmin_adminId: '<node property>', // (1) define node properties
                updateOrganizationAdmin_updateOrganizationAdmin: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteOrganizationAdmin()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteOrganizationAdmin',
                deleteOrganizationAdmin_organizationId: '<node property>', // (1) define node properties
                deleteOrganizationAdmin_adminId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationApiRequests()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationApiRequests',
                getOrganizationApiRequests_organizationId: '<node property>', // (1) define node properties
                getOrganizationApiRequests_t0: '<node property>', // (1) define node properties
                getOrganizationApiRequests_t1: '<node property>', // (1) define node properties
                getOrganizationApiRequests_timespan: '<node property>', // (1) define node properties
                getOrganizationApiRequests_perPage: '<node property>', // (1) define node properties
                getOrganizationApiRequests_startingAfter: '<node property>', // (1) define node properties
                getOrganizationApiRequests_endingBefore: '<node property>', // (1) define node properties
                getOrganizationApiRequests_adminId: '<node property>', // (1) define node properties
                getOrganizationApiRequests_path: '<node property>', // (1) define node properties
                getOrganizationApiRequests_method: '<node property>', // (1) define node properties
                getOrganizationApiRequests_responseCode: '<node property>', // (1) define node properties
                getOrganizationApiRequests_sourceIp: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationApiRequestsOverview()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationApiRequestsOverview',
                getOrganizationApiRequestsOverview_organizationId: '<node property>', // (1) define node properties
                getOrganizationApiRequestsOverview_t0: '<node property>', // (1) define node properties
                getOrganizationApiRequestsOverview_t1: '<node property>', // (1) define node properties
                getOrganizationApiRequestsOverview_timespan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationApplianceSecurityEvents()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationApplianceSecurityEvents',
                getOrganizationApplianceSecurityEvents_organizationId: '<node property>', // (1) define node properties
                getOrganizationApplianceSecurityEvents_t0: '<node property>', // (1) define node properties
                getOrganizationApplianceSecurityEvents_t1: '<node property>', // (1) define node properties
                getOrganizationApplianceSecurityEvents_timespan: '<node property>', // (1) define node properties
                getOrganizationApplianceSecurityEvents_perPage: '<node property>', // (1) define node properties
                getOrganizationApplianceSecurityEvents_startingAfter: '<node property>', // (1) define node properties
                getOrganizationApplianceSecurityEvents_endingBefore: '<node property>', // (1) define node properties
                getOrganizationApplianceSecurityEvents_sortOrder: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationApplianceSecurityIntrusion()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationApplianceSecurityIntrusion',
                getOrganizationApplianceSecurityIntrusion_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationApplianceSecurityIntrusion()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationApplianceSecurityIntrusion',
                updateOrganizationApplianceSecurityIntrusion_organizationId: '<node property>', // (1) define node properties
                updateOrganizationApplianceSecurityIntrusion_updateOrganizationApplianceSecurityIntrusion: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationApplianceUplinkStatuses()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationApplianceUplinkStatuses',
                getOrganizationApplianceUplinkStatuses_organizationId: '<node property>', // (1) define node properties
                getOrganizationApplianceUplinkStatuses_perPage: '<node property>', // (1) define node properties
                getOrganizationApplianceUplinkStatuses_startingAfter: '<node property>', // (1) define node properties
                getOrganizationApplianceUplinkStatuses_endingBefore: '<node property>', // (1) define node properties
                getOrganizationApplianceUplinkStatuses_networkIds: '<node property>', // (1) define node properties
                getOrganizationApplianceUplinkStatuses_serials: '<node property>', // (1) define node properties
                getOrganizationApplianceUplinkStatuses_iccids: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationApplianceVpnStats()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationApplianceVpnStats',
                getOrganizationApplianceVpnStats_organizationId: '<node property>', // (1) define node properties
                getOrganizationApplianceVpnStats_perPage: '<node property>', // (1) define node properties
                getOrganizationApplianceVpnStats_startingAfter: '<node property>', // (1) define node properties
                getOrganizationApplianceVpnStats_endingBefore: '<node property>', // (1) define node properties
                getOrganizationApplianceVpnStats_networkIds: '<node property>', // (1) define node properties
                getOrganizationApplianceVpnStats_t0: '<node property>', // (1) define node properties
                getOrganizationApplianceVpnStats_t1: '<node property>', // (1) define node properties
                getOrganizationApplianceVpnStats_timespan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationApplianceVpnStatuses()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationApplianceVpnStatuses',
                getOrganizationApplianceVpnStatuses_organizationId: '<node property>', // (1) define node properties
                getOrganizationApplianceVpnStatuses_perPage: '<node property>', // (1) define node properties
                getOrganizationApplianceVpnStatuses_startingAfter: '<node property>', // (1) define node properties
                getOrganizationApplianceVpnStatuses_endingBefore: '<node property>', // (1) define node properties
                getOrganizationApplianceVpnStatuses_networkIds: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationApplianceVpnThirdPartyVPNPeers()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationApplianceVpnThirdPartyVPNPeers',
                getOrganizationApplianceVpnThirdPartyVPNPeers_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationApplianceVpnThirdPartyVPNPeers()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationApplianceVpnThirdPartyVPNPeers',
                updateOrganizationApplianceVpnThirdPartyVPNPeers_organizationId: '<node property>', // (1) define node properties
                updateOrganizationApplianceVpnThirdPartyVPNPeers_updateOrganizationApplianceVpnThirdPartyVpnPeers: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationApplianceVpnVpnFirewallRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationApplianceVpnVpnFirewallRules',
                getOrganizationApplianceVpnVpnFirewallRules_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationApplianceVpnVpnFirewallRules()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationApplianceVpnVpnFirewallRules',
                updateOrganizationApplianceVpnVpnFirewallRules_organizationId: '<node property>', // (1) define node properties
                updateOrganizationApplianceVpnVpnFirewallRules_updateOrganizationApplianceVpnVpnFirewallRules: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationBrandingPolicies()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationBrandingPolicies',
                getOrganizationBrandingPolicies_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createOrganizationBrandingPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createOrganizationBrandingPolicy',
                createOrganizationBrandingPolicy_organizationId: '<node property>', // (1) define node properties
                createOrganizationBrandingPolicy_createOrganizationBrandingPolicy: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationBrandingPoliciesPriorities()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationBrandingPoliciesPriorities',
                getOrganizationBrandingPoliciesPriorities_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationBrandingPoliciesPriorities()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationBrandingPoliciesPriorities',
                updateOrganizationBrandingPoliciesPriorities_organizationId: '<node property>', // (1) define node properties
                updateOrganizationBrandingPoliciesPriorities_updateOrganizationBrandingPoliciesPriorities: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationBrandingPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationBrandingPolicy',
                getOrganizationBrandingPolicy_organizationId: '<node property>', // (1) define node properties
                getOrganizationBrandingPolicy_brandingPolicyId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationBrandingPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationBrandingPolicy',
                updateOrganizationBrandingPolicy_organizationId: '<node property>', // (1) define node properties
                updateOrganizationBrandingPolicy_brandingPolicyId: '<node property>', // (1) define node properties
                updateOrganizationBrandingPolicy_updateOrganizationBrandingPolicy: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteOrganizationBrandingPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteOrganizationBrandingPolicy',
                deleteOrganizationBrandingPolicy_organizationId: '<node property>', // (1) define node properties
                deleteOrganizationBrandingPolicy_brandingPolicyId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationCameraOnboardingStatuses()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationCameraOnboardingStatuses',
                getOrganizationCameraOnboardingStatuses_organizationId: '<node property>', // (1) define node properties
                getOrganizationCameraOnboardingStatuses_serials: '<node property>', // (1) define node properties
                getOrganizationCameraOnboardingStatuses_networkIds: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationCameraOnboardingStatuses()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationCameraOnboardingStatuses',
                updateOrganizationCameraOnboardingStatuses_organizationId: '<node property>', // (1) define node properties
                updateOrganizationCameraOnboardingStatuses_updateOrganizationCameraOnboardingStatuses: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationCellularGatewayUplinkStatuses()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationCellularGatewayUplinkStatuses',
                getOrganizationCellularGatewayUplinkStatuses_organizationId: '<node property>', // (1) define node properties
                getOrganizationCellularGatewayUplinkStatuses_perPage: '<node property>', // (1) define node properties
                getOrganizationCellularGatewayUplinkStatuses_startingAfter: '<node property>', // (1) define node properties
                getOrganizationCellularGatewayUplinkStatuses_endingBefore: '<node property>', // (1) define node properties
                getOrganizationCellularGatewayUplinkStatuses_networkIds: '<node property>', // (1) define node properties
                getOrganizationCellularGatewayUplinkStatuses_serials: '<node property>', // (1) define node properties
                getOrganizationCellularGatewayUplinkStatuses_iccids: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle claimIntoOrganization()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'claimIntoOrganization',
                claimIntoOrganization_organizationId: '<node property>', // (1) define node properties
                claimIntoOrganization_claimIntoOrganization: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle cloneOrganization()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'cloneOrganization',
                cloneOrganization_organizationId: '<node property>', // (1) define node properties
                cloneOrganization_cloneOrganization: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationConfigTemplates()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationConfigTemplates',
                getOrganizationConfigTemplates_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createOrganizationConfigTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createOrganizationConfigTemplate',
                createOrganizationConfigTemplate_organizationId: '<node property>', // (1) define node properties
                createOrganizationConfigTemplate_createOrganizationConfigTemplate: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationConfigTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationConfigTemplate',
                updateOrganizationConfigTemplate_organizationId: '<node property>', // (1) define node properties
                updateOrganizationConfigTemplate_configTemplateId: '<node property>', // (1) define node properties
                updateOrganizationConfigTemplate_updateOrganizationConfigTemplate: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteOrganizationConfigTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteOrganizationConfigTemplate',
                deleteOrganizationConfigTemplate_organizationId: '<node property>', // (1) define node properties
                deleteOrganizationConfigTemplate_configTemplateId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationConfigTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationConfigTemplate',
                getOrganizationConfigTemplate_organizationId: '<node property>', // (1) define node properties
                getOrganizationConfigTemplate_configTemplateId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationConfigTemplateSwitchProfiles()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationConfigTemplateSwitchProfiles',
                getOrganizationConfigTemplateSwitchProfiles_organizationId: '<node property>', // (1) define node properties
                getOrganizationConfigTemplateSwitchProfiles_configTemplateId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationConfigTemplateSwitchProfilePorts()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationConfigTemplateSwitchProfilePorts',
                getOrganizationConfigTemplateSwitchProfilePorts_organizationId: '<node property>', // (1) define node properties
                getOrganizationConfigTemplateSwitchProfilePorts_configTemplateId: '<node property>', // (1) define node properties
                getOrganizationConfigTemplateSwitchProfilePorts_profileId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationConfigTemplateSwitchProfilePort()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationConfigTemplateSwitchProfilePort',
                getOrganizationConfigTemplateSwitchProfilePort_organizationId: '<node property>', // (1) define node properties
                getOrganizationConfigTemplateSwitchProfilePort_configTemplateId: '<node property>', // (1) define node properties
                getOrganizationConfigTemplateSwitchProfilePort_profileId: '<node property>', // (1) define node properties
                getOrganizationConfigTemplateSwitchProfilePort_portId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationConfigTemplateSwitchProfilePort()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationConfigTemplateSwitchProfilePort',
                updateOrganizationConfigTemplateSwitchProfilePort_organizationId: '<node property>', // (1) define node properties
                updateOrganizationConfigTemplateSwitchProfilePort_configTemplateId: '<node property>', // (1) define node properties
                updateOrganizationConfigTemplateSwitchProfilePort_profileId: '<node property>', // (1) define node properties
                updateOrganizationConfigTemplateSwitchProfilePort_portId: '<node property>', // (1) define node properties
                updateOrganizationConfigTemplateSwitchProfilePort_updateOrganizationConfigTemplateSwitchProfilePort: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationConfigurationChanges()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationConfigurationChanges',
                getOrganizationConfigurationChanges_organizationId: '<node property>', // (1) define node properties
                getOrganizationConfigurationChanges_t0: '<node property>', // (1) define node properties
                getOrganizationConfigurationChanges_t1: '<node property>', // (1) define node properties
                getOrganizationConfigurationChanges_timespan: '<node property>', // (1) define node properties
                getOrganizationConfigurationChanges_perPage: '<node property>', // (1) define node properties
                getOrganizationConfigurationChanges_startingAfter: '<node property>', // (1) define node properties
                getOrganizationConfigurationChanges_endingBefore: '<node property>', // (1) define node properties
                getOrganizationConfigurationChanges_networkId: '<node property>', // (1) define node properties
                getOrganizationConfigurationChanges_adminId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationDevices()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationDevices',
                getOrganizationDevices_organizationId: '<node property>', // (1) define node properties
                getOrganizationDevices_perPage: '<node property>', // (1) define node properties
                getOrganizationDevices_startingAfter: '<node property>', // (1) define node properties
                getOrganizationDevices_endingBefore: '<node property>', // (1) define node properties
                getOrganizationDevices_configurationUpdatedAfter: '<node property>', // (1) define node properties
                getOrganizationDevices_productTypes: '<node property>', // (1) define node properties
                getOrganizationDevices_tags: '<node property>', // (1) define node properties
                getOrganizationDevices_tagsFilterType: '<node property>', // (1) define node properties
                getOrganizationDevices_name: '<node property>', // (1) define node properties
                getOrganizationDevices_mac: '<node property>', // (1) define node properties
                getOrganizationDevices_serial: '<node property>', // (1) define node properties
                getOrganizationDevices_model: '<node property>', // (1) define node properties
                getOrganizationDevices_sensorMetrics: '<node property>', // (1) define node properties
                getOrganizationDevices_sensorAlertProfileIds: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationDevicesStatuses()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationDevicesStatuses',
                getOrganizationDevicesStatuses_organizationId: '<node property>', // (1) define node properties
                getOrganizationDevicesStatuses_perPage: '<node property>', // (1) define node properties
                getOrganizationDevicesStatuses_startingAfter: '<node property>', // (1) define node properties
                getOrganizationDevicesStatuses_endingBefore: '<node property>', // (1) define node properties
                getOrganizationDevicesStatuses_components: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationDevicesUplinksLossAndLatency()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationDevicesUplinksLossAndLatency',
                getOrganizationDevicesUplinksLossAndLatency_organizationId: '<node property>', // (1) define node properties
                getOrganizationDevicesUplinksLossAndLatency_t0: '<node property>', // (1) define node properties
                getOrganizationDevicesUplinksLossAndLatency_t1: '<node property>', // (1) define node properties
                getOrganizationDevicesUplinksLossAndLatency_timespan: '<node property>', // (1) define node properties
                getOrganizationDevicesUplinksLossAndLatency_uplink: '<node property>', // (1) define node properties
                getOrganizationDevicesUplinksLossAndLatency_ip: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationInsightApplications()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationInsightApplications',
                getOrganizationInsightApplications_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationInsightMonitoredMediaServers()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationInsightMonitoredMediaServers',
                getOrganizationInsightMonitoredMediaServers_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createOrganizationInsightMonitoredMediaServer()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createOrganizationInsightMonitoredMediaServer',
                createOrganizationInsightMonitoredMediaServer_organizationId: '<node property>', // (1) define node properties
                createOrganizationInsightMonitoredMediaServer_createOrganizationInsightMonitoredMediaServer: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationInsightMonitoredMediaServer()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationInsightMonitoredMediaServer',
                getOrganizationInsightMonitoredMediaServer_organizationId: '<node property>', // (1) define node properties
                getOrganizationInsightMonitoredMediaServer_monitoredMediaServerId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationInsightMonitoredMediaServer()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationInsightMonitoredMediaServer',
                updateOrganizationInsightMonitoredMediaServer_organizationId: '<node property>', // (1) define node properties
                updateOrganizationInsightMonitoredMediaServer_monitoredMediaServerId: '<node property>', // (1) define node properties
                updateOrganizationInsightMonitoredMediaServer_updateOrganizationInsightMonitoredMediaServer: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteOrganizationInsightMonitoredMediaServer()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteOrganizationInsightMonitoredMediaServer',
                deleteOrganizationInsightMonitoredMediaServer_organizationId: '<node property>', // (1) define node properties
                deleteOrganizationInsightMonitoredMediaServer_monitoredMediaServerId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationInventoryDevices()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationInventoryDevices',
                getOrganizationInventoryDevices_organizationId: '<node property>', // (1) define node properties
                getOrganizationInventoryDevices_perPage: '<node property>', // (1) define node properties
                getOrganizationInventoryDevices_startingAfter: '<node property>', // (1) define node properties
                getOrganizationInventoryDevices_endingBefore: '<node property>', // (1) define node properties
                getOrganizationInventoryDevices_usedState: '<node property>', // (1) define node properties
                getOrganizationInventoryDevices_search: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationInventoryDevice()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationInventoryDevice',
                getOrganizationInventoryDevice_organizationId: '<node property>', // (1) define node properties
                getOrganizationInventoryDevice_serial: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationLicenses()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationLicenses',
                getOrganizationLicenses_organizationId: '<node property>', // (1) define node properties
                getOrganizationLicenses_perPage: '<node property>', // (1) define node properties
                getOrganizationLicenses_startingAfter: '<node property>', // (1) define node properties
                getOrganizationLicenses_endingBefore: '<node property>', // (1) define node properties
                getOrganizationLicenses_deviceSerial: '<node property>', // (1) define node properties
                getOrganizationLicenses_networkId: '<node property>', // (1) define node properties
                getOrganizationLicenses_state: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle assignOrganizationLicensesSeats()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'assignOrganizationLicensesSeats',
                assignOrganizationLicensesSeats_organizationId: '<node property>', // (1) define node properties
                assignOrganizationLicensesSeats_assignOrganizationLicensesSeats: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle moveOrganizationLicenses()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'moveOrganizationLicenses',
                moveOrganizationLicenses_organizationId: '<node property>', // (1) define node properties
                moveOrganizationLicenses_moveOrganizationLicenses: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle moveOrganizationLicensesSeats()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'moveOrganizationLicensesSeats',
                moveOrganizationLicensesSeats_organizationId: '<node property>', // (1) define node properties
                moveOrganizationLicensesSeats_moveOrganizationLicensesSeats: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationLicensesOverview()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationLicensesOverview',
                getOrganizationLicensesOverview_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle renewOrganizationLicensesSeats()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'renewOrganizationLicensesSeats',
                renewOrganizationLicensesSeats_organizationId: '<node property>', // (1) define node properties
                renewOrganizationLicensesSeats_renewOrganizationLicensesSeats: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationLicense()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationLicense',
                getOrganizationLicense_organizationId: '<node property>', // (1) define node properties
                getOrganizationLicense_licenseId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationLicense()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationLicense',
                updateOrganizationLicense_organizationId: '<node property>', // (1) define node properties
                updateOrganizationLicense_licenseId: '<node property>', // (1) define node properties
                updateOrganizationLicense_updateOrganizationLicense: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationLoginSecurity()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationLoginSecurity',
                getOrganizationLoginSecurity_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationLoginSecurity()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationLoginSecurity',
                updateOrganizationLoginSecurity_organizationId: '<node property>', // (1) define node properties
                updateOrganizationLoginSecurity_updateOrganizationLoginSecurity: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationNetworks()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationNetworks',
                getOrganizationNetworks_organizationId: '<node property>', // (1) define node properties
                getOrganizationNetworks_configTemplateId: '<node property>', // (1) define node properties
                getOrganizationNetworks_tags: '<node property>', // (1) define node properties
                getOrganizationNetworks_tagsFilterType: '<node property>', // (1) define node properties
                getOrganizationNetworks_perPage: '<node property>', // (1) define node properties
                getOrganizationNetworks_startingAfter: '<node property>', // (1) define node properties
                getOrganizationNetworks_endingBefore: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createOrganizationNetwork()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createOrganizationNetwork',
                createOrganizationNetwork_organizationId: '<node property>', // (1) define node properties
                createOrganizationNetwork_createOrganizationNetwork: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle combineOrganizationNetworks()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'combineOrganizationNetworks',
                combineOrganizationNetworks_organizationId: '<node property>', // (1) define node properties
                combineOrganizationNetworks_combineOrganizationNetworks: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationOpenapiSpec()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationOpenapiSpec',
                getOrganizationOpenapiSpec_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationSaml()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationSaml',
                getOrganizationSaml_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationSaml()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationSaml',
                updateOrganizationSaml_organizationId: '<node property>', // (1) define node properties
                updateOrganizationSaml_updateOrganizationSaml: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationSamlIdps()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationSamlIdps',
                getOrganizationSamlIdps_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createOrganizationSamlIdp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createOrganizationSamlIdp',
                createOrganizationSamlIdp_organizationId: '<node property>', // (1) define node properties
                createOrganizationSamlIdp_createOrganizationSamlIdp: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationSamlIdp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationSamlIdp',
                updateOrganizationSamlIdp_organizationId: '<node property>', // (1) define node properties
                updateOrganizationSamlIdp_idpId: '<node property>', // (1) define node properties
                updateOrganizationSamlIdp_updateOrganizationSamlIdp: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationSamlIdp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationSamlIdp',
                getOrganizationSamlIdp_organizationId: '<node property>', // (1) define node properties
                getOrganizationSamlIdp_idpId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteOrganizationSamlIdp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteOrganizationSamlIdp',
                deleteOrganizationSamlIdp_organizationId: '<node property>', // (1) define node properties
                deleteOrganizationSamlIdp_idpId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationSamlRoles()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationSamlRoles',
                getOrganizationSamlRoles_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle createOrganizationSamlRole()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'createOrganizationSamlRole',
                createOrganizationSamlRole_organizationId: '<node property>', // (1) define node properties
                createOrganizationSamlRole_createOrganizationSamlRole: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationSamlRole()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationSamlRole',
                getOrganizationSamlRole_organizationId: '<node property>', // (1) define node properties
                getOrganizationSamlRole_samlRoleId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationSamlRole()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationSamlRole',
                updateOrganizationSamlRole_organizationId: '<node property>', // (1) define node properties
                updateOrganizationSamlRole_samlRoleId: '<node property>', // (1) define node properties
                updateOrganizationSamlRole_updateOrganizationSamlRole: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteOrganizationSamlRole()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'deleteOrganizationSamlRole',
                deleteOrganizationSamlRole_organizationId: '<node property>', // (1) define node properties
                deleteOrganizationSamlRole_samlRoleId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationSmApnsCert()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationSmApnsCert',
                getOrganizationSmApnsCert_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationSmVppAccounts()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationSmVppAccounts',
                getOrganizationSmVppAccounts_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationSmVppAccount()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationSmVppAccount',
                getOrganizationSmVppAccount_organizationId: '<node property>', // (1) define node properties
                getOrganizationSmVppAccount_vppAccountId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationSnmp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationSnmp',
                getOrganizationSnmp_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateOrganizationSnmp()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'updateOrganizationSnmp',
                updateOrganizationSnmp_organizationId: '<node property>', // (1) define node properties
                updateOrganizationSnmp_updateOrganizationSnmp: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationSummaryTopAppliancesByUtilization()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationSummaryTopAppliancesByUtilization',
                getOrganizationSummaryTopAppliancesByUtilization_organizationId: '<node property>', // (1) define node properties
                getOrganizationSummaryTopAppliancesByUtilization_t0: '<node property>', // (1) define node properties
                getOrganizationSummaryTopAppliancesByUtilization_t1: '<node property>', // (1) define node properties
                getOrganizationSummaryTopAppliancesByUtilization_timespan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationSummaryTopClientsByUsage()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationSummaryTopClientsByUsage',
                getOrganizationSummaryTopClientsByUsage_organizationId: '<node property>', // (1) define node properties
                getOrganizationSummaryTopClientsByUsage_t0: '<node property>', // (1) define node properties
                getOrganizationSummaryTopClientsByUsage_t1: '<node property>', // (1) define node properties
                getOrganizationSummaryTopClientsByUsage_timespan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationSummaryTopClientsManufacturersByUsage()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationSummaryTopClientsManufacturersByUsage',
                getOrganizationSummaryTopClientsManufacturersByUsage_organizationId: '<node property>', // (1) define node properties
                getOrganizationSummaryTopClientsManufacturersByUsage_t0: '<node property>', // (1) define node properties
                getOrganizationSummaryTopClientsManufacturersByUsage_t1: '<node property>', // (1) define node properties
                getOrganizationSummaryTopClientsManufacturersByUsage_timespan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationSummaryTopDevicesByUsage()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationSummaryTopDevicesByUsage',
                getOrganizationSummaryTopDevicesByUsage_organizationId: '<node property>', // (1) define node properties
                getOrganizationSummaryTopDevicesByUsage_t0: '<node property>', // (1) define node properties
                getOrganizationSummaryTopDevicesByUsage_t1: '<node property>', // (1) define node properties
                getOrganizationSummaryTopDevicesByUsage_timespan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationSummaryTopDevicesModelsByUsage()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationSummaryTopDevicesModelsByUsage',
                getOrganizationSummaryTopDevicesModelsByUsage_organizationId: '<node property>', // (1) define node properties
                getOrganizationSummaryTopDevicesModelsByUsage_t0: '<node property>', // (1) define node properties
                getOrganizationSummaryTopDevicesModelsByUsage_t1: '<node property>', // (1) define node properties
                getOrganizationSummaryTopDevicesModelsByUsage_timespan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationSummaryTopSsidsByUsage()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationSummaryTopSsidsByUsage',
                getOrganizationSummaryTopSsidsByUsage_organizationId: '<node property>', // (1) define node properties
                getOrganizationSummaryTopSsidsByUsage_t0: '<node property>', // (1) define node properties
                getOrganizationSummaryTopSsidsByUsage_t1: '<node property>', // (1) define node properties
                getOrganizationSummaryTopSsidsByUsage_timespan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationSummaryTopSwitchesByEnergyUsage()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationSummaryTopSwitchesByEnergyUsage',
                getOrganizationSummaryTopSwitchesByEnergyUsage_organizationId: '<node property>', // (1) define node properties
                getOrganizationSummaryTopSwitchesByEnergyUsage_t0: '<node property>', // (1) define node properties
                getOrganizationSummaryTopSwitchesByEnergyUsage_t1: '<node property>', // (1) define node properties
                getOrganizationSummaryTopSwitchesByEnergyUsage_timespan: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle cloneOrganizationSwitchDevices()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'cloneOrganizationSwitchDevices',
                cloneOrganizationSwitchDevices_organizationId: '<node property>', // (1) define node properties
                cloneOrganizationSwitchDevices_cloneOrganizationSwitchDevices: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationUplinksStatuses()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationUplinksStatuses',
                getOrganizationUplinksStatuses_organizationId: '<node property>', // (1) define node properties
                getOrganizationUplinksStatuses_perPage: '<node property>', // (1) define node properties
                getOrganizationUplinksStatuses_startingAfter: '<node property>', // (1) define node properties
                getOrganizationUplinksStatuses_endingBefore: '<node property>', // (1) define node properties
                getOrganizationUplinksStatuses_networkIds: '<node property>', // (1) define node properties
                getOrganizationUplinksStatuses_serials: '<node property>', // (1) define node properties
                getOrganizationUplinksStatuses_iccids: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationWebhooksAlertTypes()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationWebhooksAlertTypes',
                getOrganizationWebhooksAlertTypes_organizationId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getOrganizationWebhooksLogs()', function (done) {
        var flow = [
            { id: 'n1', type: 'meraki-dashboard-api-v1', name: 'meraki-dashboard-api-v1',
                method: 'getOrganizationWebhooksLogs',
                getOrganizationWebhooksLogs_organizationId: '<node property>', // (1) define node properties
                getOrganizationWebhooksLogs_t0: '<node property>', // (1) define node properties
                getOrganizationWebhooksLogs_t1: '<node property>', // (1) define node properties
                getOrganizationWebhooksLogs_timespan: '<node property>', // (1) define node properties
                getOrganizationWebhooksLogs_perPage: '<node property>', // (1) define node properties
                getOrganizationWebhooksLogs_startingAfter: '<node property>', // (1) define node properties
                getOrganizationWebhooksLogs_endingBefore: '<node property>', // (1) define node properties
                getOrganizationWebhooksLogs_url: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'meraki-dashboard-api-v1-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
});
