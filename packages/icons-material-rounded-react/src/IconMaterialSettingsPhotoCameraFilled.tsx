import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsPhotoCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPhotoCameraFilled'

      short_name='SettingsPhotoCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-80q-25 0-42.5-17.5T520-140v-200q0-25 17.5-42.5T580-400h60l28-28q6-6 13.5-9t15.5-3h46q8 0 15.5 3t13.5 9l28 28h60q25 0 42.5 17.5T920-340v200q0 25-17.5 42.5T860-80H580Zm140-80q33 0 56.5-23.5T800-240q0-33-23.5-56.5T720-320q-33 0-56.5 23.5T640-240q0 33 23.5 56.5T720-160ZM411-80q-17 0-30-11t-15-28l-12-89q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l8-66q3-27 23-44.5t47-17.5h96q27 0 47 17.5t23 44.5l8 66q13 5 24.5 12t22.5 15l60-26q25-11 50.5-2t39.5 32l47 82q14 23 8.5 49T832-547l-67 51q-11 8-22.5 12t-25.5 4h-94q0-58-41.5-99T482-620q-59 0-99.5 40.5T342-480q0 48 27.5 84t70.5 50v232q0 14-8 24t-21 10Z"/>
    </Icon>
  );
});

IconMaterialSettingsPhotoCameraFilled.displayName = 'OnesyIconMaterialSettingsPhotoCameraFilled';

export default IconMaterialSettingsPhotoCameraFilled;
