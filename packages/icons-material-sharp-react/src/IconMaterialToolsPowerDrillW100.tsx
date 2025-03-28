import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsPowerDrillW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsPowerDrillW100'

      short_name='ToolsPowerDrill'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M270-314h200v-70H270v70Zm-4-272h208v-28H266v28Zm0-80h208v-28H266v28Zm322 104v-28h80v-100h-80v-28h78l30 30v34h78v28h-78v34l-30 30h-78ZM438-412h-28v-118h150v-220H260q-33 0-56.5 23.5T180-670v60q0 33 23.5 56.5T260-530h70v118h-28v-90h-42q-44.55 0-76.27-31.72Q152-565.45 152-610v-60q0-44.55 31.73-76.28Q215.45-778 260-778h328v276H438v90ZM242-286v-126h256v126H242Zm128-354Zm100 326H270h200Z"/>
    </Icon>
  );
});

IconMaterialToolsPowerDrillW100.displayName = 'OnesyIconMaterialToolsPowerDrillW100';

export default IconMaterialToolsPowerDrillW100;
