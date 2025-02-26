import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalAlignTopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignTopW100'

      short_name='VerticalAlignTop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-760v-28h536v28H212Zm254 588v-418L336-460l-20-20 164-164 164 164-20 20-130-130v418h-28Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignTopW100.displayName = 'OnesyIconMaterialVerticalAlignTopW100';

export default IconMaterialVerticalAlignTopW100;
