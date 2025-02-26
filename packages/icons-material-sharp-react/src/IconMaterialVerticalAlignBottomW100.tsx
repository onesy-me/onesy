import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalAlignBottomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignBottomW100'

      short_name='VerticalAlignBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-28h536v28H212Zm268-144L316-480l20-20 130 130v-418h28v418l130-130 20 20-164 164Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignBottomW100.displayName = 'OnesyIconMaterialVerticalAlignBottomW100';

export default IconMaterialVerticalAlignBottomW100;
