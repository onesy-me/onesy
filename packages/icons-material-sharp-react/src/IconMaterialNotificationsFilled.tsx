import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationsFilled = (props: IIcon) => {

  return (
    <Icon
      name='NotificationsFilled'

      short_name='Notifications'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-88h120v88q80 20 130 84.5T720-560v280h80v80H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Z"/>
    </Icon>
  );
};

IconMaterialNotificationsFilled.displayName = 'OnesyIconMaterialNotificationsFilled';

export default IconMaterialNotificationsFilled;
