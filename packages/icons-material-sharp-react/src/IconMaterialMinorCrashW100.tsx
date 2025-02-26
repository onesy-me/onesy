import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMinorCrashW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinorCrashW100'

      short_name='MinorCrash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m320-711-83-83 19-19 83 83-19 19Zm320 0-19-19 83-83 19 19-83 83Zm-174-45v-148h28v148h-28ZM172-52v-300l83-236h450l83 236v300h-28v-80H200v80h-28Zm40-328h536l-64-180H276l-64 180Zm84.24 164q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm368 0q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM200-160h560v-192H200v192Zm0 0v-192 192Z"/>
    </Icon>
  );
});

IconMaterialMinorCrashW100.displayName = 'OnesyIconMaterialMinorCrashW100';

export default IconMaterialMinorCrashW100;
