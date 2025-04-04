import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDisplaySettingsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisplaySettingsFilled'

      short_name='DisplaySettings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-410v20q0 13 8.5 21.5T330-360q13 0 21.5-8.5T360-390v-100q0-13-8.5-21.5T330-520q-13 0-21.5 8.5T300-490v20h-30q-13 0-21.5 8.5T240-440q0 13 8.5 21.5T270-410h30Zm130 0h260q13 0 21.5-8.5T720-440q0-13-8.5-21.5T690-470H430q-13 0-21.5 8.5T400-440q0 13 8.5 21.5T430-410Zm230-160h30q13 0 21.5-8.5T720-600q0-13-8.5-21.5T690-630h-30v-20q0-13-8.5-21.5T630-680q-13 0-21.5 8.5T600-650v100q0 13 8.5 21.5T630-520q13 0 21.5-8.5T660-550v-20Zm-390 0h260q13 0 21.5-8.5T560-600q0-13-8.5-21.5T530-630H270q-13 0-21.5 8.5T240-600q0 13 8.5 21.5T270-570ZM160-200q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v40q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160v-40H160Z"/>
    </Icon>
  );
});

IconMaterialDisplaySettingsFilled.displayName = 'OnesyIconMaterialDisplaySettingsFilled';

export default IconMaterialDisplaySettingsFilled;
