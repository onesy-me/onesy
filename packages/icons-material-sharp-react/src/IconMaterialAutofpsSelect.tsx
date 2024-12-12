import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutofpsSelect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutofpsSelect'

      short_name='AutofpsSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-592 40-116h4l40 116h-84Zm42 232q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70ZM350-480h48l26-72h112l26 72h48L504-760h-50L350-480ZM120-80v-200h80v200h-80Zm160 0v-200h80v200h-80Zm160 0v-200h80v200h-80Zm160 0v-200h240v200H600Z"/>
    </Icon>
  );
});

IconMaterialAutofpsSelect.displayName = 'OnesyIconMaterialAutofpsSelect';

export default IconMaterialAutofpsSelect;
