import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlaceItemW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaceItemW100'

      short_name='PlaceItem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-25 0-42.5-17.5T172-232v-336q0-25 17.5-42.5T232-628h100q6 0 10 4t4 10q0 6-4 10t-10 4H232q-14 0-23 9t-9 23v336q0 14 9 23t23 9h496q14 0 23-9t9-23v-336q0-14-9-23t-23-9H628q-6 0-10-4t-4-10q0-6 4-10t10-4h100q25 0 42.5 17.5T788-568v336q0 25-17.5 42.5T728-172H232Zm262-238 80-80q4-4 9.5-4.5T594-490q5 5 5 10t-5 10l-93 93q-9 9-21 9t-21-9l-93-93q-4-4-4.5-9.5T366-490q5-5 10-5t10 5l80 80v-458q0-6 4-10t10-4q6 0 10 4t4 10v458Z"/>
    </Icon>
  );
});

IconMaterialPlaceItemW100.displayName = 'OnesyIconMaterialPlaceItemW100';

export default IconMaterialPlaceItemW100;
