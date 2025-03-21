import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPostOfficeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOfficeW100Filled'

      short_name='LocalPostOffice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-296h160v-212q0-78.33 54.83-133.17Q401.67-828 480-828h160q78.33 0 133.17 54.83Q828-718.33 828-640v508h-28v-120H588v120H132Zm228-154L160-400v32l200 114 200-114v-32L360-286Zm228 6h212v-360q0-66-47-113t-113-47H480q-66 0-113 47t-47 113v212h268v148ZM426-586v-28h268v28H426Z"/>
    </Icon>
  );
});

IconMaterialLocalPostOfficeW100Filled.displayName = 'OnesyIconMaterialLocalPostOfficeW100Filled';

export default IconMaterialLocalPostOfficeW100Filled;
