import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackspaceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackspaceW100Filled'

      short_name='Backspace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-252q-22 0-41.5-10T306-290L197-445q-11-16-11-35t11-35l109-153q13-18 32-29t42-11h348q25 0 42.5 17.5T788-648v336q0 25-17.5 42.5T728-252H380Zm162-208 94 94q4 4 9.5 4.5T656-366q5-5 5-10t-5-10l-94-94 94-94q4-4 4.5-9.5T656-594q-5-5-10-5t-10 5l-94 94-94-94q-4-4-9.5-4.5T428-594q-5 5-5 10t5 10l94 94-94 94q-4 4-4.5 9.5T428-366q5 5 10 5t10-5l94-94Z"/>
    </Icon>
  );
});

IconMaterialBackspaceW100Filled.displayName = 'OnesyIconMaterialBackspaceW100Filled';

export default IconMaterialBackspaceW100Filled;
