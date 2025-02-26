import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJavascript = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Javascript'

      short_name='Javascript'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360v-100h60v40h60v-180h60v240H240Zm240 0v-80h60v20h80v-40H480v-140h200v80h-60v-20h-80v40h140v140H480Z"/>
    </Icon>
  );
});

IconMaterialJavascript.displayName = 'OnesyIconMaterialJavascript';

export default IconMaterialJavascript;
