import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorBatteryW100 = (props: IIcon) => {

  return (
    <Icon
      name='DetectorBatteryW100'

      short_name='DetectorBattery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-240h320v-120H360v120Zm-108 28v-176h456v54h40v68h-40v54H252Zm-52-548v80h560v-80H200Zm94 108 30 80h312l30-80H294Zm9 108-39-108h-92v-136h616v136h-92l-42 108H303ZM200-760v80-80Z"/>
    </Icon>
  );
};

IconMaterialDetectorBatteryW100.displayName = 'OnesyIconMaterialDetectorBatteryW100';

export default IconMaterialDetectorBatteryW100;
