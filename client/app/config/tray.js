export function tray($state) {
  win.on('minimize', function() {
    this.hide();
    let tray = new gui.Tray({ icon: 'icon.png' });
    let menu = new gui.Menu();
    let showWindow = () => {
      win.show();
      tray.remove();
      tray = null;
    };
    menu.append(new gui.MenuItem({ type: 'checkbox', label: 'List', click: function() {
      $state.transitionTo('list');
      showWindow();
    }}));
    menu.append(new gui.MenuItem({ type: 'checkbox', label: 'Add', click: function() {
      $state.transitionTo('add');
      showWindow();
    }}));
    menu.append(new gui.MenuItem({ type: 'checkbox', label: 'Options', click: function() {
      $state.transitionTo('options');
      showWindow();
    }}));
    menu.append(new gui.MenuItem({ type: 'checkbox', label: 'Exit', click: function() {
      win.close();
    }}));
    tray.menu = menu;
    tray.on('click', function() {
      showWindow();
    });
  });
};
