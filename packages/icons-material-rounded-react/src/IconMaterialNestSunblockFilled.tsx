import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestSunblockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestSunblockFilled'

      short_name='NestSunblock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-720v-40q0-17 11.5-28.5T120-800q17 0 28.5 11.5T160-760v40q0 17-11.5 28.5T120-680q-17 0-28.5-11.5T80-720Zm0 520v-40q0-17 11.5-28.5T120-280q17 0 28.5 11.5T160-240v40q0 17-11.5 28.5T120-160q-17 0-28.5-11.5T80-200Zm267-450-29 29q-12 12-28.5 12T261-621q-12-12-12-28.5t12-28.5l29-29q12-12 28.5-12t28.5 12q12 12 12 28.5T347-650Zm-57 396-29-28q-12-12-12-28.5t12-28.5q12-12 28.5-12t28.5 12l29 29q12 12 12 28t-12 28q-12 12-28.5 12T290-254Zm270-266-48-64q-10-14-8-30t16-26q14-10 30-8t26 16l96 128q15 20 4 42t-36 22H360q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520h200Zm260 320q-25 0-42.5-17.5T760-260v-440q0-25 17.5-42.5T820-760q25 0 42.5 17.5T880-700v440q0 25-17.5 42.5T820-200ZM80-320v-80q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-80q66 0 113 47t47 113q0 66-47 113T80-320Z"/>
    </Icon>
  );
});

IconMaterialNestSunblockFilled.displayName = 'OnesyIconMaterialNestSunblockFilled';

export default IconMaterialNestSunblockFilled;
