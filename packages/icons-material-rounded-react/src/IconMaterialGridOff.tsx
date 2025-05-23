import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGridOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOff'

      short_name='GridOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M333-200v-133H200v133h133Zm214 0v-100l-33-33H413v133h134Zm80 0Zm116-133Zm-410-80v-101l-33-33H200v134h133Zm80 0Zm347 0v-134H627v99l35 35h98ZM529-547Zm-329-80Zm347 0v-133H413v98l35 35h99Zm213 0v-133H627v133h133ZM316-760Zm524 525L235-840h525q33 0 56.5 23.5T840-760v525ZM200-120q-33 0-56.5-23.5T120-200v-640l720 720H200Zm591 64L56-792q-11-11-11.5-27.5T56-848q11-11 28-11t28 11l736 736q12 12 11.5 28T847-56q-12 11-28 11.5T791-56Z"/>
    </Icon>
  );
});

IconMaterialGridOff.displayName = 'OnesyIconMaterialGridOff';

export default IconMaterialGridOff;
