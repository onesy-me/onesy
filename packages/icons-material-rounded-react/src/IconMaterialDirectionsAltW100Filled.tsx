import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltW100Filled'

      short_name='DirectionsAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.2-146q-11.2 0-22.16-4.5Q447.07-155 438-164L164-438q-9-8.96-13.5-19.78-4.5-10.83-4.5-22.02 0-11.2 4.5-22.16Q155-512.93 164-522l274-274q8.96-9 19.78-13.5 10.83-4.5 22.02-4.5 11.2 0 22.16 4.5Q512.93-805 522-796l274 274q9 8.96 13.5 19.78 4.5 10.83 4.5 22.02 0 11.2-4.5 22.16Q805-447.07 796-438L522-164q-8.96 9-19.78 13.5-10.83 4.5-22.02 4.5ZM590-466 470-346q-4 4-4.5 9.5t4.72 10.72Q475-321 480-321q5 0 10-5l133-133q9-9 9-21t-9-21L490-634q-4-4-9.5-4.5t-10.72 4.72Q465-629 465-624q0 5 5 10l120 120H330q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h260Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAltW100Filled.displayName = 'OnesyIconMaterialDirectionsAltW100Filled';

export default IconMaterialDirectionsAltW100Filled;
