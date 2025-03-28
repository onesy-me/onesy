import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanguageUsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageUsW100'

      short_name='LanguageUs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-306v-348h28v320h172v-320h28v348H212Zm308 0v-68h28v40h172v-132H520v-188h228v68h-28v-40H548v132h200v188H520Z"/>
    </Icon>
  );
});

IconMaterialLanguageUsW100.displayName = 'OnesyIconMaterialLanguageUsW100';

export default IconMaterialLanguageUsW100;
