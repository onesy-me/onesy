import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChecklistW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistW100'

      short_name='Checklist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M237-257 132-362l19-19 85 85 170-170 19 20-188 189Zm0-280L132-642l19-19 85 85 170-170 19 20-188 189Zm284 211v-28h308v28H521Zm0-280v-28h308v28H521Z"/>
    </Icon>
  );
});

IconMaterialChecklistW100.displayName = 'OnesyIconMaterialChecklistW100';

export default IconMaterialChecklistW100;
