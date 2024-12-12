import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChecklistRtlW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistRtlW100'

      short_name='ChecklistRtl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M641-257 536-362l19-19 85 85 170-170 19 20-188 189Zm0-280L536-642l19-19 85 85 170-170 19 20-188 189ZM132-326v-28h308v28H132Zm0-280v-28h308v28H132Z"/>
    </Icon>
  );
});

IconMaterialChecklistRtlW100.displayName = 'OnesyIconMaterialChecklistRtlW100';

export default IconMaterialChecklistRtlW100;
