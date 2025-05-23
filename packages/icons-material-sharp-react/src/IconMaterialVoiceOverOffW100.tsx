import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVoiceOverOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceOverOffW100'

      short_name='VoiceOverOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M453-588 335-708h10q45 0 76.5 31.5T453-600v12ZM77-212v-52q0-26 13-43t37-29q48-24 106-38t112-14q47 0 91 9.5t75 20.5L373-496q-7 2-13.5 3t-14.5 1q-45 0-76.5-31.5T237-600q0-8 1-15t3-13L77-792l20-20 700 700-20 20-164-164v44H77Zm28-28h480v-24q0-16-9-27.5T549-312q-38-20-94.5-34T345-360q-53 0-109.5 14T141-312q-15 8-25.5 19T105-264v24Zm240 0Zm442-132-20-20q41-41 64.5-94.5T855-600q0-60-23.5-113.5T767-808l20-20q44 44 70 103t26 125q0 66-26 125t-70 103ZM653-506l-20-20q15-15 23.5-34t8.5-40q0-23-8.5-41T633-674l20-20q18 18 29 41.5t11 52.5q0 27-11 51.5T653-506Z"/>
    </Icon>
  );
});

IconMaterialVoiceOverOffW100.displayName = 'OnesyIconMaterialVoiceOverOffW100';

export default IconMaterialVoiceOverOffW100;
