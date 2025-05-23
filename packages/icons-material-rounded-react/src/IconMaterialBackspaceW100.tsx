import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackspaceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackspaceW100'

      short_name='Backspace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-252q-22 0-41.5-10T306-290L197-445q-11-16-11-35t11-35l109-153q13-18 32-29t42-11h348q25 0 42.5 17.5T788-648v336q0 25-17.5 42.5T728-252H380Zm380-28v-400 400Zm-380 0h348q12 0 22-10t10-22v-336q0-12-10-22t-22-10H380q-15 0-28.5 7.5T330-654L219-499q-6 8-6 19t6 19l111 155q8 11 21.5 18.5T380-280Zm162-180 94 94q4 4 9.5 4.5T656-366q5-5 5-10t-5-10l-94-94 94-94q4-4 4.5-9.5T656-594q-5-5-10-5t-10 5l-94 94-94-94q-4-4-9.5-4.5T428-594q-5 5-5 10t5 10l94 94-94 94q-4 4-4.5 9.5T428-366q5 5 10 5t10-5l94-94Z"/>
    </Icon>
  );
});

IconMaterialBackspaceW100.displayName = 'OnesyIconMaterialBackspaceW100';

export default IconMaterialBackspaceW100;
