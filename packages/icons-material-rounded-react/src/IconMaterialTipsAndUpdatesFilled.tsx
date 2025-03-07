import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTipsAndUpdatesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TipsAndUpdatesFilled'

      short_name='TipsAndUpdates'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.375 8.625 20 8l1.375-.625L22 6l.625 1.375L24 8l-1.375.625L22 10ZM18.05 3.95 16 3l2.05-.95L19 0l.95 2.05L22 3l-2.05.95L19 6ZM9 22q-.825 0-1.412-.587Q7 20.825 7 20h4q0 .825-.587 1.413Q9.825 22 9 22Zm-3-3q-.425 0-.713-.288Q5 18.425 5 18t.287-.712Q5.575 17 6 17h6q.425 0 .713.288.287.287.287.712t-.287.712Q12.425 19 12 19Zm-.75-3q-1.725-1.025-2.737-2.75Q1.5 11.525 1.5 9.5q0-3.125 2.188-5.312Q5.875 2 9 2q3.125 0 5.312 2.188Q16.5 6.375 16.5 9.5q0 2.025-1.012 3.75-1.013 1.725-2.738 2.75Z"/>
    </Icon>
  );
});

IconMaterialTipsAndUpdatesFilled.displayName = 'OnesyIconMaterialTipsAndUpdatesFilled';

export default IconMaterialTipsAndUpdatesFilled;
