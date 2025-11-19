import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialParkFilled = (props: IIcon) => {

  return (
    <Icon
      name='ParkFilled'

      short_name='Park'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-240H195q-24 0-36-21t2-41l119-178h-3q-24 0-35.5-21.5T244-543l203-290q6-8 15-12.5t18-4.5q9 0 18 4.5t15 12.5l203 290q14 20 2.5 41.5T683-480h-3l119 178q14 20 2 41t-36 21H558v120q0 17-11.5 28.5T518-80h-76q-17 0-28.5-11.5T402-120v-120Z"/>
    </Icon>
  );
};

IconMaterialParkFilled.displayName = 'OnesyIconMaterialParkFilled';

export default IconMaterialParkFilled;
