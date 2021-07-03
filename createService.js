var Service = require('node-windows').Service
     // Create a new service object
     var svc = new Service({
          name:'ScanSolutionAPI',
          description: 'scan solution api server',
          script: 'D:\\Developer\\ScanSolutionAPI\\index.js'
     });

     // Listen for the "install" event, which indicates the
     // process is available as a service.

     svc.on('install',function(){
                svc.start();
     });

     svc.install();

     svc.start();