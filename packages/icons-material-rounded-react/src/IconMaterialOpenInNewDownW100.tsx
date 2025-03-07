import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInNewDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewDownW100'

      short_name='OpenInNewDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v214q0 6-4 10t-10 4q-6 0-10-4t-4-10v-214q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10h214q6 0 10 4t4 10q0 6-4 10t-10 4H232Zm509-28L382-558q-4-4-4-10t4-10q4-4 10-4t10 4l358 358v-166q0-6 4-10t10-4q6 0 10 4t4 10v184q0 13-8.5 21.5T758-172H574q-6 0-10-4t-4-10q0-6 4-10t10-4h167Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewDownW100.displayName = 'OnesyIconMaterialOpenInNewDownW100';

export default IconMaterialOpenInNewDownW100;
