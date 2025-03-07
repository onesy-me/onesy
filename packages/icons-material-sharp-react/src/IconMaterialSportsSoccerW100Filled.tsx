import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsSoccerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsSoccerW100Filled'

      short_name='SportsSoccer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-72 27.5-135.5T234-726q47-47 110.5-74.5T480-828q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132Zm182-418 74-24 20-72q-32-53-82-90t-112-54l-68 48v74l168 118Zm-364 0 168-118v-74l-68-48q-62 17-111 54t-81 90l20 72 72 24Zm-56 286 68-6 42-68-60-182-76-26-56 40q0 72 17 129t65 113Zm238 104q26 0 53-4.5t57-13.5l36-78-38-62H372l-36 62 36 78q27 9 54.5 13.5T480-160ZM380-346h202l60-184-162-114-162 114 62 184Zm338 82q48-56 65-113t17-129l-54-38-78 22-60 184 42 68 68 6Z"/>
    </Icon>
  );
});

IconMaterialSportsSoccerW100Filled.displayName = 'OnesyIconMaterialSportsSoccerW100Filled';

export default IconMaterialSportsSoccerW100Filled;
