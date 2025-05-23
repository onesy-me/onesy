import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGlobeUkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlobeUkW100Filled'

      short_name='GlobeUk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q18 0 34.5-2t33.5-6l-48-72H360v-40q0-33 23.5-56.5T440-360h80v-120h-80q-17 0-28.5-11.5T400-520v-80h-18q-26 0-44-17.5T320-661q0-9 2.5-18t7.5-17l62-91q-101 29-166.5 113T160-480h40v-40q0-17 11.5-28.5T240-560h80q17 0 28.5 11.5T360-520v40q0 17-11.5 28.5T320-440v40q0 33-23.5 56.5T240-320h-37q42 72 115 116t162 44Zm304-222q8-23 12-47.5t4-50.5q0-112-68-197.5T560-790v110q33 0 56.5 23.5T640-600v80q19 0 34 4.5t29 18.5l81 115ZM480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialGlobeUkW100Filled.displayName = 'OnesyIconMaterialGlobeUkW100Filled';

export default IconMaterialGlobeUkW100Filled;
