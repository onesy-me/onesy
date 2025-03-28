import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArOnYou = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArOnYou'

      short_name='ArOnYou'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-800q134 0 227 93t93 227q0 134-93 227t-227 93q-134 0-227-93t-93-227q0-134 93-227t227-93Zm0 560q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm0-100q48 0 86-27.5t54-72.5H340q16 45 54 72.5t86 27.5ZM340-560q0 17 11.5 28.5T380-520q17 0 28.5-11.5T420-560q0-17-11.5-28.5T380-600q-17 0-28.5 11.5T340-560Zm200 0q0 17 11.5 28.5T580-520q17 0 28.5-11.5T620-560q0-17-11.5-28.5T580-600q-17 0-28.5 11.5T540-560ZM40-720v-200h200v80H120v120H40Zm0 680v-200h80v120h120v80H40Zm680 0v-80h120v-120h80v200H720Zm120-680v-120H720v-80h200v200h-80ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialArOnYou.displayName = 'OnesyIconMaterialArOnYou';

export default IconMaterialArOnYou;
