import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloatPortrait = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatPortrait'

      short_name='FloatPortrait'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 976q-33 0-56.5-23.5T160 896V256q0-33 23.5-56.5T240 176h480q33 0 56.5 23.5T800 256v320q0 17-11.5 28.5T760 616q-17 0-28.5-11.5T720 576V256H240v640h240q17 0 28.5 11.5T520 936q0 17-11.5 28.5T480 976H240Zm400 0q-17 0-28.5-11.5T600 936V736q0-17 11.5-28.5T640 696h120q17 0 28.5 11.5T800 736v200q0 17-11.5 28.5T760 976H640Zm-120-80H240V256h480v360H600q-33 0-56.5 23.5T520 696v200Z"/>
    </Icon>
  );
});

IconMaterialFloatPortrait.displayName = 'OnesyIconMaterialFloatPortrait';

export default IconMaterialFloatPortrait;
