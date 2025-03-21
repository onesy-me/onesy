import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextFieldsAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFieldsAltW100Filled'

      short_name='TextFieldsAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M100-200h760q8.5 0 14.25 5.75T880-180q0 8.5-5.75 14.25T860-160H100q-8.5 0-14.25-5.75T80-180q0-8.5 5.75-14.25T100-200Zm660-94v-480q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03v480q0 6.07-3.95 10.03-3.96 3.97-10 3.97-6.05 0-10.05-3.97-4-3.96-4-10.03ZM289-425l-57 137q-2 4-5 6t-7.92 2q-8.08 0-12.08-6t-1-13l202-483q1-2 3.21-4t4.79-2h7.76q3.24 0 5.24 2t3 4l201 480q3 8-1.86 15T618-280q-4.56 0-8.47-2.67-3.9-2.66-5.53-7.33l-56-135H289Zm11-27h237L419-736 300-452Z"/>
    </Icon>
  );
});

IconMaterialTextFieldsAltW100Filled.displayName = 'OnesyIconMaterialTextFieldsAltW100Filled';

export default IconMaterialTextFieldsAltW100Filled;
