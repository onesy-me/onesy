import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChecklistFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistFilled'

      short_name='Checklist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M222-200 80-342l56-56 85 85 170-170 56 57-225 226Zm0-320L80-662l56-56 85 85 170-170 56 57-225 226Zm298 240v-80h360v80H520Zm0-320v-80h360v80H520Z"/>
    </Icon>
  );
});

IconMaterialChecklistFilled.displayName = 'OnesyIconMaterialChecklistFilled';

export default IconMaterialChecklistFilled;
