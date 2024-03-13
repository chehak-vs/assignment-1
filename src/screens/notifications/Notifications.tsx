import {View, Text} from 'react-native';
import React from 'react';
import list from '../../data/data-one.json';
import NotificationsNone from '../../components/notifications-none/NotificationsNone';
import NotificationsCard from '../../components/notifications-card/NotificationsCard';

export default function Notifications() {
  const renderNotifications = () => {
    return list.length === 0 ? <NotificationsNone /> : <NotificationsCard />;
  };
  return <View>{renderNotifications()}</View>;
}