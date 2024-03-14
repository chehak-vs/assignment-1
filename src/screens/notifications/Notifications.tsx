import {View} from 'react-native';
import React from 'react';

import NotificationsNone from '../../components/notifications-none/NotificationsNone';
import NotificationsCard from '../../components/notifications-card/NotificationsCard';
import list from '../../services/data-one.json';

const Notifications = () => {
  const renderNotifications = () => {
    return list.length === 0 ? <NotificationsNone /> : <NotificationsCard />;
  };
  return <View>{renderNotifications()}</View>;
};

export default Notifications;