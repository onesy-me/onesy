import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDisplayExternalInputFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisplayExternalInputFilled'

      short_name='DisplayExternalInput'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M727-200H600q-17 0-28.5-11.5T560-240q0-17 11.5-28.5T600-280h127l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q11 11 11 28t-11 28L748-108q-11 11-28 11t-28-11q-12-12-12-28.5t12-28.5l35-35Zm-527 80q-33 0-56.5-23.5T120-200v-120q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320v120h120q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120H200Zm-80-520v-120q0-33 23.5-56.5T200-840h120q17 0 28.5 11.5T360-800q0 17-11.5 28.5T320-760H200v120q0 17-11.5 28.5T160-600q-17 0-28.5-11.5T120-640Zm640 0v-120H640q-17 0-28.5-11.5T600-800q0-17 11.5-28.5T640-840h120q33 0 56.5 23.5T840-760v120q0 17-11.5 28.5T800-600q-17 0-28.5-11.5T760-640Z"/>
    </Icon>
  );
});

IconMaterialDisplayExternalInputFilled.displayName = 'OnesyIconMaterialDisplayExternalInputFilled';

export default IconMaterialDisplayExternalInputFilled;
