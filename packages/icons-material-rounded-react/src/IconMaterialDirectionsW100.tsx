import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsW100'

      short_name='Directions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M374-506h192v33q0 8 7.5 11.5T587-464l42-42q6-6.27 6-14.64 0-8.36-6.4-14.63L587-576q-6-6-13.5-3.08-7.5 2.91-7.5 11.08v34H376q-12.75 0-21.37 8.62Q346-516.75 346-504v104q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-106Zm106.2 360q-11.2 0-22.16-4.5Q447.07-155 438-164L164-438q-9-8.96-13.5-19.78-4.5-10.83-4.5-22.02 0-11.2 4.5-22.16Q155-512.93 164-522l274-274q8.96-9 19.78-13.5 10.83-4.5 22.02-4.5 11.2 0 22.16 4.5Q512.93-805 522-796l274 274q9 8.96 13.5 19.78 4.5 10.83 4.5 22.02 0 11.2-4.5 22.16Q805-447.07 796-438L522-164q-8.96 9-19.78 13.5-10.83 4.5-22.02 4.5ZM320-320l138 138q9 9 22 9t22-9l276-276q9-9 9-22t-9-22L502-778q-9-9-22-9t-22 9L182-502q-9 9-9 22t9 22l138 138Zm160-160Z"/>
    </Icon>
  );
});

IconMaterialDirectionsW100.displayName = 'OnesyIconMaterialDirectionsW100';

export default IconMaterialDirectionsW100;
