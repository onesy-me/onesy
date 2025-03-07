import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOncologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OncologyFilled'

      short_name='Oncology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-6 43.5T817-198l74 74q11 11 11 28t-11 28q-11 11-28 11t-28-11l-74-74q-18 11-38 16.5t-43 5.5Zm0-80q33 0 56.5-23.5T760-280q0-33-23.5-56.5T680-360q-33 0-56.5 23.5T600-280q0 33 23.5 56.5T680-200ZM160-80q-17 0-28.5-11.5T120-120v-200q0-50 35-85t85-35h80q50 0 85-35t35-85q0-17-11.5-28.5T400-600q-33 0-56.5-23.5T320-680v-160q0-17 11.5-28.5T360-880h160q17 0 28.5 11.5T560-840v40q117 0 198.5 81.5T840-520v61q-33-29-74-45t-86-16q-100 0-170 70t-70 170q0 21 3.5 41t10.5 39h-54q-17 0-28.5 11.5T360-160v40q0 17-11.5 28.5T320-80H160Z"/>
    </Icon>
  );
});

IconMaterialOncologyFilled.displayName = 'OnesyIconMaterialOncologyFilled';

export default IconMaterialOncologyFilled;
