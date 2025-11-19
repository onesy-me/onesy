import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAlertFilled = (props: IIcon) => {

  return (
    <Icon
      name='BatteryAlertFilled'

      short_name='BatteryAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-720h120v-80h160v80h120v720H280Zm160-320h80v-240h-80v240Zm40 160q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Z"/>
    </Icon>
  );
};

IconMaterialBatteryAlertFilled.displayName = 'OnesyIconMaterialBatteryAlertFilled';

export default IconMaterialBatteryAlertFilled;
