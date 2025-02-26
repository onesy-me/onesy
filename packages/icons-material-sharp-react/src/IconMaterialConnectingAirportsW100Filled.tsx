import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConnectingAirportsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectingAirportsW100Filled'

      short_name='ConnectingAirports'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M633-120 529-296H400q-10 0-17-7t-7-17q0-10 7-17t17-7h129l104-176h14l-52 176h143l30-40h10l-19 64 19 64h-10l-30-40H595l52 176h-14ZM313-440l52-176H222l-30 40h-10l19-64-19-64h10l30 40h143l-52-176h14l104 176h129q10 0 17 7t7 17q0 10-7 17t-17 7H431L327-440h-14Z"/>
    </Icon>
  );
});

IconMaterialConnectingAirportsW100Filled.displayName = 'OnesyIconMaterialConnectingAirportsW100Filled';

export default IconMaterialConnectingAirportsW100Filled;
