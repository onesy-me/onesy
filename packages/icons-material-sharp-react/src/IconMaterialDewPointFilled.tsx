import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDewPointFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DewPointFilled'

      short_name='DewPoint'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M620-520q-25 0-42.5-17.5T560-580q0-13 9.5-30t20.5-32.5q11-15.5 20.5-26.5l9.5-11 9.5 11q9.5 11 20.5 26.5t20.5 32.5q9.5 17 9.5 30 0 25-17.5 42.5T620-520Zm160-120q-25 0-42.5-17.5T720-700q0-13 9.5-30t20.5-32.5q11-15.5 20.5-26.5l9.5-11 9.5 11q9.5 11 20.5 26.5t20.5 32.5q9.5 17 9.5 30 0 25-17.5 42.5T780-640Zm0 240q-25 0-42.5-17.5T720-460q0-13 9.5-30t20.5-32.5q11-15.5 20.5-26.5l9.5-11 9.5 11q9.5 11 20.5 26.5t20.5 32.5q9.5 17 9.5 30 0 25-17.5 42.5T780-400ZM360-120q-83 0-141.5-58.5T160-320q0-48 21-89.5t59-70.5v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q38 29 59 70.5t21 89.5q0 83-58.5 141.5T360-120ZM240-320h240q0-29-12.5-54T432-416l-32-24v-280q0-17-11.5-28.5T360-760q-17 0-28.5 11.5T320-720v280l-32 24q-23 17-35.5 42T240-320Z"/>
    </Icon>
  );
});

IconMaterialDewPointFilled.displayName = 'OnesyIconMaterialDewPointFilled';

export default IconMaterialDewPointFilled;
