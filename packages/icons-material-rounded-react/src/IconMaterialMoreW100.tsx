import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreW100'

      short_name='More'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-252q-22 0-41.5-10T306-290L197-445q-11-16-11-35t11-35l109-153q13-18 32-29t42-11h348q25 0 42.5 17.5T788-648v336q0 25-17.5 42.5T728-252H380Zm380-28v-400 400Zm-380 0h348q12 0 22-10t10-22v-336q0-12-10-22t-22-10H380q-15 0-28.5 7.5T330-654L219-499q-6 8-6 19t6 19l111 155q8 11 21.5 18.5T380-280Zm-6-172q11 0 19.5-8.5T402-480q0-11-8.5-19.5T374-508q-11 0-19.5 8.5T346-480q0 11 8.5 19.5T374-452Zm140 0q11 0 19.5-8.5T542-480q0-11-8.5-19.5T514-508q-11 0-19.5 8.5T486-480q0 11 8.5 19.5T514-452Zm140 0q11 0 19.5-8.5T682-480q0-11-8.5-19.5T654-508q-11 0-19.5 8.5T626-480q0 11 8.5 19.5T654-452Z"/>
    </Icon>
  );
});

IconMaterialMoreW100.displayName = 'OnesyIconMaterialMoreW100';

export default IconMaterialMoreW100;
