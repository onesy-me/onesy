import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageArrowUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageArrowUpW100'

      short_name='ImageArrowUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480ZM172-172v-616h356v28H200v560h560v-283h28v311H172Zm146-134h332L548-442 448-318l-64-74-66 86Zm413-265v-203l-90 88-19-19 123-123 123 123-19 19-90-88v203h-28Z"/>
    </Icon>
  );
});

IconMaterialImageArrowUpW100.displayName = 'OnesyIconMaterialImageArrowUpW100';

export default IconMaterialImageArrowUpW100;
