import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRespiratoryRateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RespiratoryRateW100'

      short_name='RespiratoryRate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m610-256 56-55v-49 49l-56 55Zm139 0-55-56v-48 48l55 56ZM480-480ZM132-594v-154h696v280h-28v-252H160v126h-28Zm0 382v-154h28v126h252v28H132ZM522-92q-12.5 0-21.25-8.75T492-122v-120l49-126q3.36-8.85 11.01-14.42Q559.67-388 569-388h97v-106h28v106h95q9.09 0 16.55 5.5Q813-377 817-369l51 127v120q0 12.5-8.75 21.25T838-92h-92q-12.5 0-21.25-8.75T716-122v-58h28v60h96v-117l-49-123h-97v48l55 56-20 20-49.5-50-49.5 50-20-20 56-55v-49h-99l-47 123v117h96v-60h28v54q0 14.17-9.92 24.08Q624.17-92 610-92h-88Zm158-148ZM132-466v-28h76l72 143 159-320 104 207q-7 2-13.63 4.07-6.63 2.08-12.37 5.93l-78-154-160 320-88-178h-59Z"/>
    </Icon>
  );
});

IconMaterialRespiratoryRateW100.displayName = 'OnesyIconMaterialRespiratoryRateW100';

export default IconMaterialRespiratoryRateW100;
