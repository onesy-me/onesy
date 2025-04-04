import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoCrashW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoCrashW100'

      short_name='NoCrash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-743-76-75 19-20 57 57 142-142 19 19-161 161ZM172-52v-300l83-236h450l83 236v300h-28v-80H200v80h-28Zm40-328h536l-64-180H276l-64 180Zm-12 28v192-192Zm96.24 136q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm368 0q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM200-160h560v-192H200v192Z"/>
    </Icon>
  );
});

IconMaterialNoCrashW100.displayName = 'OnesyIconMaterialNoCrashW100';

export default IconMaterialNoCrashW100;
