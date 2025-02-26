import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallMerge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMerge'

      short_name='CallMerge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-160-56-56 200-200v-269L337-582l-57-57 200-200 201 201-57 57-104-104v301L296-160Zm368 1L536-286l57-57 127 128-56 56Z"/>
    </Icon>
  );
});

IconMaterialCallMerge.displayName = 'OnesyIconMaterialCallMerge';

export default IconMaterialCallMerge;
