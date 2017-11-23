module.exports = (Franz) => {
  const getNotifications = function getNotifications() {

    Franz.setBadge(1);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getNotifications);
};
