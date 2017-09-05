/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

// define SideBarLinks
var sideBarLinks = [
					{ 'href' :'/dashboard', title : 'Dashboard' , icon : 'dashboard' , active : true },
					{ 'href' :'/charts', title : 'Charts' , icon : 'perm_media' , active : false },
					{ 'href' :'/table', title : 'Table List' , icon : 'content_paste' , active : false },
					{ 'href' :'/typography', title : 'Typography' , icon : 'unarchive' , active : false },
					{ 'href' :'/icons', title : 'Icons' , icon : 'bubble_chart' , active : false },
					{ 'href' :'/maps', title : 'Maps' , icon : 'location_on' , active : false },
					{ 'href' :'/notify', title : 'Notifications' , icon : 'notifications' , active : false }
					];
exports.getDashboard = (req, res) => {
  res.render('Pages/dashboard', {
    title: 'Dashboard' , sideBarLinks : sideBarLinks
  });
};


exports.getCharts = (req, res) => {
  res.render('Pages/charts', {
    title: 'Charts' , sideBarLinks : sideBarLinks
  });
};


exports.getTables = (req, res) => {
  res.render('tables', {
    title: 'Tables', sideBarLinks : sideBarLinks
  });
};

exports.getTypography = (req, res) => {
  res.render('typography', {
    title: 'Typography', sideBarLinks : sideBarLinks
  });
};



exports.getIcons = (req, res) => {
  res.render('icons', {
    title: 'Material Icons' , sideBarLinks : sideBarLinks
  });
};


exports.getMaps = (req, res) => {
  res.render('maps', {
    title: 'Maps' , sideBarLinks : sideBarLinks
  });
};



exports.getNotifications = (req, res) => {
  res.render('notify', {
    title: 'Notifications' , sideBarLinks : sideBarLinks
  });
};
