import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContrastRtlOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContrastRtlOffW100Filled'

      short_name='ContrastRtlOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M842-78 705-215q-46 39-103 61t-122 22q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-65 22-122t61-103L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5Zm-362-82q59 0 111-20t94-55L480-440v280Zm348-320q0 46-11 88.5T787-314q-3 5-9 6t-11-2q-5-3-6.5-8.5T762-329q19-34 28.5-72t9.5-79q0-133-93.5-226.5T480-800v172q0 10-9.5 13.5T454-618L332-740q-14-14-10.5-33t20.5-27q32-14 66.5-21t71.5-7q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480Z"/>
    </Icon>
  );
});

IconMaterialContrastRtlOffW100Filled.displayName = 'OnesyIconMaterialContrastRtlOffW100Filled';

export default IconMaterialContrastRtlOffW100Filled;
