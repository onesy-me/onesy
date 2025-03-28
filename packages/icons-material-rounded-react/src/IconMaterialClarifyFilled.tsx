import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClarifyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClarifyFilled'

      short_name='Clarify'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280h200q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360H280q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280Zm400-400q-17 0-28.5 11.5T640-640v320q0 17 11.5 28.5T680-280q17 0 28.5-11.5T720-320v-320q0-17-11.5-28.5T680-680ZM280-440h200q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520H280q-17 0-28.5 11.5T240-480q0 17 11.5 28.5T280-440Zm0-160h200q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680H280q-17 0-28.5 11.5T240-640q0 17 11.5 28.5T280-600ZM160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Z"/>
    </Icon>
  );
});

IconMaterialClarifyFilled.displayName = 'OnesyIconMaterialClarifyFilled';

export default IconMaterialClarifyFilled;
