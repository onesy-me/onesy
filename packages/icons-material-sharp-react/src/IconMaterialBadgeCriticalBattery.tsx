import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBadgeCriticalBattery = (props: IIcon) => {

  return (
    <Icon
      name='BadgeCriticalBattery'

      short_name='BadgeCriticalBattery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-120H80v-160h80v-120h720v400H160Zm80-80h520v-240H240v240Z"/>
    </Icon>
  );
};

IconMaterialBadgeCriticalBattery.displayName = 'OnesyIconMaterialBadgeCriticalBattery';

export default IconMaterialBadgeCriticalBattery;
