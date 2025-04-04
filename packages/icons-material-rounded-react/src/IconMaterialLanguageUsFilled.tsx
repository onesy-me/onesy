import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanguageUsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageUsFilled'

      short_name='LanguageUs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280q-33 0-56.5-23.5T160-360v-280q0-17 11.5-28.5T200-680q17 0 28.5 11.5T240-640v280h120v-280q0-17 11.5-28.5T400-680q17 0 28.5 11.5T440-640v280q0 33-23.5 56.5T360-280H240Zm360 0q-33 0-56.5-23.5T520-360q0-17 11.5-28.5T560-400q17 0 28.5 11.5T600-360h120v-80H600q-33 0-56.5-23.5T520-520v-80q0-33 23.5-56.5T600-680h120q33 0 56.5 23.5T800-600q0 17-11.5 28.5T760-560q-17 0-28.5-11.5T720-600H600v80h120q33 0 56.5 23.5T800-440v80q0 33-23.5 56.5T720-280H600Z"/>
    </Icon>
  );
});

IconMaterialLanguageUsFilled.displayName = 'OnesyIconMaterialLanguageUsFilled';

export default IconMaterialLanguageUsFilled;
