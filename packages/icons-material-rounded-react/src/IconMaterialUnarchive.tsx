import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnarchive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Unarchive'

      short_name='Unarchive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-253q17 0 28.5-11.5T520-293v-128l36 36q11 11 28 11t28-11q11-11 11-28t-11-28L508-544q-12-12-28-12t-28 12L348-441q-11 11-11 28t11 28q11 11 28 11t28-11l36-36v128q0 17 11.5 28.5T480-253ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"/>
    </Icon>
  );
});

IconMaterialUnarchive.displayName = 'OnesyIconMaterialUnarchive';

export default IconMaterialUnarchive;
