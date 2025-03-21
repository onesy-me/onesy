import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRsvp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rsvp'

      short_name='Rsvp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-390v-180q0-13 8.5-21.5T70-600h110q25 0 42.5 17.5T240-540v40q0 18-10.5 33T204-444l20 46q6 14-2.5 26T198-360q-8 0-15-4.5T173-377l-27-63h-46v50q0 13-8.5 21.5T70-360q-13 0-21.5-8.5T40-390Zm360-30v-30h-80q-17 0-28.5-11.5T280-490v-70q0-17 11.5-28.5T320-600h110q13 0 21.5 8.5T460-570q0 13-8.5 21.5T430-540h-90v30h80q17 0 28.5 11.5T460-470v70q0 17-11.5 28.5T420-360H310q-13 0-21.5-8.5T280-390q0-13 8.5-21.5T310-420h90Zm200-43 34-116q3-9 10.5-15t17.5-6q14 0 22.5 11.5T689-563l-53 182q-3 9-10.5 15t-17.5 6h-16q-10 0-17.5-6T564-381l-53-182q-4-14 4.5-25.5T538-600q10 0 17.5 6t10.5 15l34 116Zm120 73v-180q0-13 8.5-21.5T750-600h110q25 0 42.5 17.5T920-540v40q0 25-17.5 42.5T860-440h-80v50q0 13-8.5 21.5T750-360q-13 0-21.5-8.5T720-390ZM100-500h80v-40h-80v40Zm680 0h80v-40h-80v40Z"/>
    </Icon>
  );
});

IconMaterialRsvp.displayName = 'OnesyIconMaterialRsvp';

export default IconMaterialRsvp;
