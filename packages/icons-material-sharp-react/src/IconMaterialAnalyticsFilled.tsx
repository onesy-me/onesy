import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAnalyticsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnalyticsFilled'

      short_name='Analytics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm160-160h80v-200h-80v200Zm320 0h80v-400h-80v400Zm-160 0h80v-120h-80v120Zm0-200h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialAnalyticsFilled.displayName = 'OnesyIconMaterialAnalyticsFilled';

export default IconMaterialAnalyticsFilled;
