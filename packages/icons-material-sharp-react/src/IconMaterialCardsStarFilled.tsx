import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardsStarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardsStarFilled'

      short_name='CardsStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m489-460 91-55 91 55-24-104 80-69-105-9-42-98-42 98-105 9 80 69-24 104ZM148-75 74-672l126-14v486h532l5 53-589 72Zm132-205v-600h600v600H280Z"/>
    </Icon>
  );
});

IconMaterialCardsStarFilled.displayName = 'OnesyIconMaterialCardsStarFilled';

export default IconMaterialCardsStarFilled;
