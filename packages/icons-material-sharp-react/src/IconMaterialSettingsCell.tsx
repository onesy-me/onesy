import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsCell = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsCell'

      short_name='SettingsCell'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320 0q-17 0-28.5-11.5T280-40q0-17 11.5-28.5T320-80q17 0 28.5 11.5T360-40q0 17-11.5 28.5T320 0Zm160 0q-17 0-28.5-11.5T440-40q0-17 11.5-28.5T480-80q17 0 28.5 11.5T520-40q0 17-11.5 28.5T480 0Zm160 0q-17 0-28.5-11.5T600-40q0-17 11.5-28.5T640-80q17 0 28.5 11.5T680-40q0 17-11.5 28.5T640 0ZM240-160v-800h480v800H240Zm80-80h320v-40H320v40Zm0-120h320v-400H320v400Zm0-480h320v-40H320v40Zm0 0v-40 40Zm0 600v-40 40Z"/>
    </Icon>
  );
});

IconMaterialSettingsCell.displayName = 'OnesyIconMaterialSettingsCell';

export default IconMaterialSettingsCell;
