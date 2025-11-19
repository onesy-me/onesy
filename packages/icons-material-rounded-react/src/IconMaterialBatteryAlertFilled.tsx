import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAlertFilled = (props: IIcon) => {

  return (
    <Icon
      name='BatteryAlertFilled'

      short_name='BatteryAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-40q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v40h80q17 0 28.5 11.5T680-760v640q0 17-11.5 28.5T640-80H320Zm160-320q17 0 28.5-11.5T520-440v-160q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600v160q0 17 11.5 28.5T480-400Zm0 160q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Z"/>
    </Icon>
  );
};

IconMaterialBatteryAlertFilled.displayName = 'OnesyIconMaterialBatteryAlertFilled';

export default IconMaterialBatteryAlertFilled;
