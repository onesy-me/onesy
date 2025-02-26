import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrailLengthFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthFilled'

      short_name='TrailLength'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280v-80h240q-14-17-22.5-37T484-440H360v-80h124q5-23 13.5-43t22.5-37H120v-80h560q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H280ZM80-440v-80h240v80H80Zm40 160v-80h120v80H120Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthFilled.displayName = 'OnesyIconMaterialTrailLengthFilled';

export default IconMaterialTrailLengthFilled;
