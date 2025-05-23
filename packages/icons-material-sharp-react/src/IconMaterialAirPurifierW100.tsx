import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirPurifierW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirPurifierW100'

      short_name='AirPurifier'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-508q0-44.55 31.73-76.28Q235.45-788 280-788h280q44.55 0 76.28 31.72Q668-724.55 668-680v40h-28v-40q0-33-23.5-56.5T560-760H280q-33 0-56.5 23.5T200-680v480h440v-80h28v108H172Zm248-200q44.55 0 76.27-31.73Q528-435.45 528-480t-31.73-76.28Q464.55-588 420-588t-76.27 31.72Q312-524.55 312-480t31.73 76.27Q375.45-372 420-372Zm0-28q-33 0-56.5-23.5T340-480q0-33 23.5-56.5T420-560q33 0 56.5 23.5T500-480q0 33-23.5 56.5T420-400Zm234-106v-28h10q17.22 0 30.61-7.5T716-566q11-23 31.26-35.5Q767.53-614 792-614h10v28h-10q-17.22 0-30.61 7.5T740-554q-11 23-31.26 35.5Q688.47-506 664-506h-10Zm0 160v-28h10q17.22 0 30.61-7.5T716-406q11-21 31.26-34.5Q767.53-454 792-454h10v28h-10q-17.22 0-30.61 7.5T740-394q-11 23-31.26 35.5Q688.47-346 664-346h-10Zm-14 146H200h440Z"/>
    </Icon>
  );
});

IconMaterialAirPurifierW100.displayName = 'OnesyIconMaterialAirPurifierW100';

export default IconMaterialAirPurifierW100;
