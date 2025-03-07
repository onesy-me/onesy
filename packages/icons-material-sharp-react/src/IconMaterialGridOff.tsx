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
      <path d="M333-200v-133H200v133h133Zm214 0v-100l-33-33H413v133h134Zm80 0Zm116-133Zm-410-80v-101l-33-33H200v134h133Zm80 0Zm347 0v-134H627v99l35 35h98ZM529-547Zm-329-80Zm347 0v-133H413v98l35 35h99Zm213 0v-133H627v133h133ZM316-760Zm524 525L235-840h605v605ZM120-120v-720l720 720H120Zm699 92L28-820l56-56L876-84l-57 56Z"/>
    </Icon>
  );
});

IconMaterialGridOff.displayName = 'OnesyIconMaterialGridOff';

export default IconMaterialGridOff;
