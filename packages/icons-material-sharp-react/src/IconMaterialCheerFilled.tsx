import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheerFilled'

      short_name='Cheer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m312-751-40-120 56-18 40 119-56 19Zm138-49v-120h60v120h-60Zm198 49-56-19 40-119 56 19-40 119ZM874-40 590-83l-67-209 52-100 56 175 37-11-119-372 127-75 188 355h56L874-40ZM86-40 40-320h56l188-355 127 75-119 372 37 11 56-175 52 100-67 209L86-40Z"/>
    </Icon>
  );
});

IconMaterialCheerFilled.displayName = 'OnesyIconMaterialCheerFilled';

export default IconMaterialCheerFilled;
