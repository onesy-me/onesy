import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTitleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TitleW100Filled'

      short_name='Title'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-212v-507H253v-29h455v29H495v507h-29Z"/>
    </Icon>
  );
});

IconMaterialTitleW100Filled.displayName = 'OnesyIconMaterialTitleW100Filled';

export default IconMaterialTitleW100Filled;
