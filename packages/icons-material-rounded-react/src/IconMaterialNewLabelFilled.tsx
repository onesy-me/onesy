import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewLabelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabelFilled'

      short_name='NewLabel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160q-17 0-28.5-11.5T200-200v-80h-80q-17 0-28.5-11.5T80-320q0-17 11.5-28.5T120-360h80v-80q0-17 11.5-28.5T240-480q17 0 28.5 11.5T280-440v80h80q17 0 28.5 11.5T400-320q0 17-11.5 28.5T360-280h-80v80q0 17-11.5 28.5T240-160Zm280-40q-17 0-28.5-11.5T480-240v-120q0-33-23.5-56.5T400-440h-40v-40q0-33-23.5-56.5T280-560H160q-17 0-28.5-11.5T120-600v-80q0-33 23.5-56.5T200-760h400q20 0 37.5 9t28.5 25l141 200q15 21 15 46t-15 46L666-234q-11 16-28.5 25t-37.5 9h-80Z"/>
    </Icon>
  );
});

IconMaterialNewLabelFilled.displayName = 'OnesyIconMaterialNewLabelFilled';

export default IconMaterialNewLabelFilled;
