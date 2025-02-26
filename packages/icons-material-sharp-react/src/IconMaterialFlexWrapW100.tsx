import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlexWrapW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexWrapW100'

      short_name='FlexWrap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-132v-286h176v286H92Zm300 0v-286h176v286H392Zm300 0v-286h176v286H692Zm-272-28h120v-230H420v230ZM92-542v-286h176v286H92Zm300 0v-286h176v286H392Zm300 0v-286h176v286H692Zm-572-28h120v-230H120v230Zm610 0h110v-230H730v230Z"/>
    </Icon>
  );
});

IconMaterialFlexWrapW100.displayName = 'OnesyIconMaterialFlexWrapW100';

export default IconMaterialFlexWrapW100;
