import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotateVerticalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateVerticalFilled'

      short_name='TextRotateVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m552-432-32 89q-4 11-13 17t-20 6q-19 0-29.5-15.5T454-368l137-368q4-11 13.5-17.5T626-760h28q12 0 21.5 6.5T689-736l137 369q7 17-3.5 32T793-320q-11 0-20-6.5T760-344l-32-88H552Zm22-64h132l-64-182h-4l-64 182ZM200-314v-486q0-17 11.5-28.5T240-840q17 0 28.5 11.5T280-800v486l16-15q12-11 28-11t28 12q11 11 11 28t-11 28l-84 84q-12 12-28 12t-28-12l-84-84q-11-11-11-28t12-29q11-11 27-11t28 11l16 15Z"/>
    </Icon>
  );
});

IconMaterialTextRotateVerticalFilled.displayName = 'OnesyIconMaterialTextRotateVerticalFilled';

export default IconMaterialTextRotateVerticalFilled;
