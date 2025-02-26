import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowTopLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowTopLeftW100'

      short_name='ArrowTopLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-212v-374H266l154 154-20 20-188-188 188-188 20 20-154 154h442v402h-28Z"/>
    </Icon>
  );
});

IconMaterialArrowTopLeftW100.displayName = 'OnesyIconMaterialArrowTopLeftW100';

export default IconMaterialArrowTopLeftW100;
