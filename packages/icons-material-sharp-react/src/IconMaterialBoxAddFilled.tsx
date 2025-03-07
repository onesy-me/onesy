import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoxAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxAddFilled'

      short_name='BoxAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-608l92-112h536l92 112v225q-19-7-39-11.5t-41-4.5q-33 0-63.5 7.5T640-488v-152H320v320l160-80 58 29q-8 21-13 43.5t-5 46.5q0 45 16 86.5t46 74.5H120Zm600 0v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM216-720h528l-34-40H250l-34 40Z"/>
    </Icon>
  );
});

IconMaterialBoxAddFilled.displayName = 'OnesyIconMaterialBoxAddFilled';

export default IconMaterialBoxAddFilled;
