import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestDisplay = (props: IIcon) => {

  return (
    <Icon
      name='NestDisplay'

      short_name='NestDisplay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200q-99 0-169.5-13.5T240-246v-34h-73q-35 0-59-26t-21-61l27-320q2-31 25-52t55-21h572q32 0 55 21t25 52l27 320q3 35-21 61t-59 26h-73v34q0 19-70.5 32.5T480-200ZM167-360h626l-27-320H194l-27 320Zm313-160Z"/>
    </Icon>
  );
};

IconMaterialNestDisplay.displayName = 'OnesyIconMaterialNestDisplay';

export default IconMaterialNestDisplay;
