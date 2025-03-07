import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPharmacyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPharmacyW100'

      short_name='LocalPharmacy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M248-172q-31 0-49-25t-8-54l63-189-63-189q-10-29 8-54t49-25h400l47-131q2-5 7.5-7.5t10.5-.5q5 2 7.5 7.5t.5 10.5l-43 121h34q31 0 49 25t8 54l-63 189 63 189q10 29-8 54t-49 25H248Zm218-144h28v-110h110v-28H494v-110h-28v110H356v28h110v110ZM248-200h464q17 0 26-13t4-29l-66-198 66-198q5-16-4-29t-26-13H248q-17 0-26 13t-4 29l66 198-66 198q-5 16 4 29t26 13Zm232-240Z"/>
    </Icon>
  );
});

IconMaterialLocalPharmacyW100.displayName = 'OnesyIconMaterialLocalPharmacyW100';

export default IconMaterialLocalPharmacyW100;
