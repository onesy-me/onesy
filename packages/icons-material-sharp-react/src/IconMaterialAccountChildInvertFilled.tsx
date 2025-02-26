import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountChildInvertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountChildInvertFilled'

      short_name='AccountChildInvert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-880q50 0 85 35t35 85q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-50 35-85t85-35Zm0 280q47 0 93 11t83 31q38 19 61 45t23 57v232q0 17-8 33.5T710-160q-14 14-32.5 26T636-112v-90q0-38-52.5-62T480-288q-50 0-96.5 20.5T326-214q38 15 78 21t82 7h34v104q-7 2-14.5 2H490q-36 0-82.5-8T319-113q-42-17-70.5-44.5T220-224v-232q0-31 23-57t60-45q38-20 84-31t93-11Zm0 240q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Z"/>
    </Icon>
  );
});

IconMaterialAccountChildInvertFilled.displayName = 'OnesyIconMaterialAccountChildInvertFilled';

export default IconMaterialAccountChildInvertFilled;
