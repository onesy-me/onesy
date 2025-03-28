import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanguageSpanish = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageSpanish'

      short_name='LanguageSpanish'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360h160q17 0 28.5 11.5T440-320q0 17-11.5 28.5T400-280H200q-17 0-28.5-11.5T160-320v-320q0-17 11.5-28.5T200-680h200q17 0 28.5 11.5T440-640q0 17-11.5 28.5T400-600H240v80h120q17 0 28.5 11.5T400-480q0 17-11.5 28.5T360-440H240v80Zm360 80q-33 0-56.5-23.5T520-360q0-17 11.5-28.5T560-400q17 0 28.5 11.5T600-360h120v-80H600q-33 0-56.5-23.5T520-520v-80q0-33 23.5-56.5T600-680h120q33 0 56.5 23.5T800-600q0 17-11.5 28.5T760-560q-17 0-28.5-11.5T720-600H600v80h120q33 0 56.5 23.5T800-440v80q0 33-23.5 56.5T720-280H600Z"/>
    </Icon>
  );
});

IconMaterialLanguageSpanish.displayName = 'OnesyIconMaterialLanguageSpanish';

export default IconMaterialLanguageSpanish;
