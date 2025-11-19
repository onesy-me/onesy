import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardsStarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardsStarW100'

      short_name='CardsStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m495-476 73-44 73 44-20-83 65-56-85-7-33-78-33 78-85 7 65 56-20 83Zm229 248h10l3 27-543 69-64-495 98-9v28l-64 6 54 438 506-64Zm-416-80v-520h520v520H308Zm28-28h464v-464H336v464ZM218-164Zm350-404Z"/>
    </Icon>
  );
});

IconMaterialCardsStarW100.displayName = 'OnesyIconMaterialCardsStarW100';

export default IconMaterialCardsStarW100;
