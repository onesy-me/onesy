import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecordVoiceOverW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecordVoiceOverW100Filled'

      short_name='RecordVoiceOver'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m787-372-20-20q41-41 64.5-94.5T855-600q0-60-23.5-113.5T767-808l20-20q44 44 70 103t26 125q0 66-26 125t-70 103ZM653-506l-20-20q15-15 23.5-34t8.5-40q0-23-8.5-41T633-674l20-20q18 18 29 41.5t11 52.5q0 27-11 51.5T653-506Zm-308 14q-45 0-76.5-31.5T237-600q0-45 31.5-76.5T345-708q45 0 76.5 31.5T453-600q0 45-31.5 76.5T345-492ZM77-212v-52q0-26 13-43.5t37-28.5q48-23 106-37.5T345-388q54 0 112 14.5T563-336q24 11 37 28.5t13 43.5v52H77Z"/>
    </Icon>
  );
});

IconMaterialRecordVoiceOverW100Filled.displayName = 'OnesyIconMaterialRecordVoiceOverW100Filled';

export default IconMaterialRecordVoiceOverW100Filled;
