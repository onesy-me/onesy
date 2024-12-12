import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChecklistRtlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistRtlFilled'

      short_name='ChecklistRtl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M655-200 513-342l56-56 85 85 170-170 56 57-225 226Zm0-320L513-662l56-56 85 85 170-170 56 57-225 226ZM80-280v-80h360v80H80Zm0-320v-80h360v80H80Z"/>
    </Icon>
  );
});

IconMaterialChecklistRtlFilled.displayName = 'OnesyIconMaterialChecklistRtlFilled';

export default IconMaterialChecklistRtlFilled;
