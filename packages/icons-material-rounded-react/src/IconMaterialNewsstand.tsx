import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewsstand = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Newsstand'

      short_name='Newsstand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160q-17 0-28.5-11.5T80-200q0-17 11.5-28.5T120-240h720q17 0 28.5 11.5T880-200q0 17-11.5 28.5T840-160H120Zm80-160q-17 0-28.5-11.5T160-360v-240q0-17 11.5-28.5T200-640q17 0 28.5 11.5T240-600v240q0 17-11.5 28.5T200-320Zm160 0q-17 0-28.5-11.5T320-360v-400q0-17 11.5-28.5T360-800q17 0 28.5 11.5T400-760v400q0 17-11.5 28.5T360-320Zm160 0q-17 0-28.5-11.5T480-360v-400q0-17 11.5-28.5T520-800q17 0 28.5 11.5T560-760v400q0 17-11.5 28.5T520-320Zm275-20q-14 8-30.5 3.5T740-355L620-565q-8-14-3.5-30.5T635-620q14-8 30.5-3.5T690-605l120 210q8 14 3.5 30.5T795-340Z"/>
    </Icon>
  );
});

IconMaterialNewsstand.displayName = 'OnesyIconMaterialNewsstand';

export default IconMaterialNewsstand;
