import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSchool = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='School'

      short_name='School'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialSchool.displayName = 'OnesyIconMaterialSchool';

export default IconMaterialSchool;
