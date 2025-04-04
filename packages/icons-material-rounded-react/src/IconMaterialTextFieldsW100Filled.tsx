import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextFieldsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFieldsW100Filled'

      short_name='TextFields'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M342.88-212q-5.88 0-10.38-4.08-4.5-4.09-4.5-9.92v-493H147q-6.25 0-10.62-4.32-4.38-4.33-4.38-10.5 0-6.18 4.08-10.18 4.09-4 9.92-4h392q6.25 0 10.63 4.12 4.37 4.12 4.37 10t-4.08 10.38q-4.09 4.5-9.92 4.5H357v492q0 6.25-4.12 10.62-4.12 4.38-10 4.38Zm353 0q-5.88 0-9.88-4.08-4-4.09-4-9.92v-298H579q-6.25 0-10.62-4.32-4.38-4.33-4.38-10.5 0-6.18 4.08-10.18 4.09-4 9.92-4h235q6.25 0 10.63 4.12 4.37 4.12 4.37 10t-4.08 10.38q-4.09 4.5-9.92 4.5H710v298q0 5.83-4.12 9.92-4.12 4.08-10 4.08Z"/>
    </Icon>
  );
});

IconMaterialTextFieldsW100Filled.displayName = 'OnesyIconMaterialTextFieldsW100Filled';

export default IconMaterialTextFieldsW100Filled;
