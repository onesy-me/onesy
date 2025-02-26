import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpenW100'

      short_name='FileOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-696h374l162 162v292h-28v-278H572v-148H240v640h386v28H212Zm666 30L734-246v127h-28v-175h175v28H753l144 144-19 20Zm-638-58v-640 640Z"/>
    </Icon>
  );
});

IconMaterialFileOpenW100.displayName = 'OnesyIconMaterialFileOpenW100';

export default IconMaterialFileOpenW100;
