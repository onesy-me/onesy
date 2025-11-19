import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowMenuOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowMenuOpen'

      short_name='ArrowMenuOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-160v-640q0-17 11.5-28.5T400-840q17 0 28.5 11.5T440-800v640q0 17-11.5 28.5T400-120q-17 0-28.5-11.5T360-160Zm160-168v-304q0-14 12-19t22 5l138 138q12 12 12 28t-12 28L554-314q-10 10-22 5t-12-19Z"/>
    </Icon>
  );
});

IconMaterialArrowMenuOpen.displayName = 'OnesyIconMaterialArrowMenuOpen';

export default IconMaterialArrowMenuOpen;
