import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHelicopter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Helicopter'

      short_name='Helicopter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-440v-240q-100 0-170 70t-70 170h240Zm160 160v-400h-80v320H120v80h400Zm80-128 240-24v-48H600v72ZM520-80H120v-80h400v80Zm80-120H40v-240q0-134 93-227t227-93h240v200h200l40-80h80v280l-320 32v128Zm160-600H120v-80h640v80ZM600-408v-72 72Zm-80 128Z"/>
    </Icon>
  );
});

IconMaterialHelicopter.displayName = 'OnesyIconMaterialHelicopter';

export default IconMaterialHelicopter;
