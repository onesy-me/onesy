import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJavascriptW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JavascriptW100'

      short_name='Javascript'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-376v-84h28v56h90v-180h28v208H252Zm244 0v-64h28v36h112v-66H496v-114h168v64h-28v-36H524v66h140v114H496Z"/>
    </Icon>
  );
});

IconMaterialJavascriptW100.displayName = 'OnesyIconMaterialJavascriptW100';

export default IconMaterialJavascriptW100;
