import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarbuds2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Earbuds2W100Filled'

      short_name='Earbuds2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M657-92v-364h211v177h-75v187H657ZM514-242q-54.32 0-92.66-36.23Q383-314.45 383-368q0-52.76 38.34-89.38T514-494h51v252h-51ZM167-464v-187H92v-177h211v364H167Zm228-150v-252h51q53.52 0 92.26 36.71T577-739.68Q577-686 538.26-650q-38.74 36-92.26 36h-51Z"/>
    </Icon>
  );
});

IconMaterialEarbuds2W100Filled.displayName = 'OnesyIconMaterialEarbuds2W100Filled';

export default IconMaterialEarbuds2W100Filled;
