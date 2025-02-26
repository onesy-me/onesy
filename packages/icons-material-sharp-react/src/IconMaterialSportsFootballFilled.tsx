import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsFootballFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsFootballFilled'

      short_name='SportsFootball'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M363-121q-47 5-113.5-2.5T148-148q-14-32-23.5-100T120-364l243 243Zm95-16L136-459q17-75 49.5-136.5T261-701q43-43 104.5-74.5T498-823l324 324q-16 74-47 136t-74 105q-45 44-107.5 75.5T458-137Zm-82-183 264-264-56-56-264 264 56 56Zm462-274L595-839q48-6 118 2t99 25q18 40 25 103.5t1 114.5Z"/>
    </Icon>
  );
});

IconMaterialSportsFootballFilled.displayName = 'OnesyIconMaterialSportsFootballFilled';

export default IconMaterialSportsFootballFilled;
