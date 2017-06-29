var app = {
    AppLoad: function(data, app){

  		console.log('data', data);
  		console.log('app', app);
      document.getElementById('webframe').src = app.configValues.embedUrl + app.configValues.displayMode;
    }
  };
