import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPharmacyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPharmacyFilled'

      short_name='LocalPharmacy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M204-120q-42 0-65.5-33T128-225l72-215-72-215q-13-39 10.5-72t65.5-33h424l41-113q7-20 25.5-28.5T733-903q20 7 28.5 25.5T763-839l-29 79h22q42 0 65.5 33t10.5 72l-72 215 72 215q13 39-10.5 72T756-120H204Zm236-160h80v-120h120v-80H520v-120h-80v120H320v80h120v120Zm-236 80h552l-80-240 80-240H204l80 240-80 240Zm0 0 80-240-80-240h552l-80 240 80 240H204Z"/>
    </Icon>
  );
});

IconMaterialLocalPharmacyFilled.displayName = 'OnesyIconMaterialLocalPharmacyFilled';

export default IconMaterialLocalPharmacyFilled;
