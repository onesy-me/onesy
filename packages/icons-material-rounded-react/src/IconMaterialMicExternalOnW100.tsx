import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicExternalOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOnW100'

      short_name='MicExternalOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M224-656q-9-12-13.5-26t-4.5-28q0-39.17 27.38-66.58Q260.76-804 299.88-804q39.12 0 66.62 27.42Q394-749.17 394-710q0 14-4.5 28T376-656H224Zm186.11 500q-51.11 0-87.61-36.43Q286-228.85 286-280h-1q-11 0-19.71-7.88-8.71-7.87-10.29-19.12l-28-272q-2-13.5 7.25-23.25T257-612h86q13.5 0 22.75 9.75T373-579l-28 272q-1.58 11.25-10.29 19.12Q326-280 315-280h-1q0 40 28.2 68t67.8 28q39.6 0 67.8-28.2Q506-240.4 506-280v-400q0-51.15 36.39-87.58 36.4-36.42 87.5-36.42 51.11 0 87.61 36.42Q754-731.15 754-680v510q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-510q0-39.6-28.2-67.8Q669.6-776 630-776q-39.6 0-67.8 28.2Q534-719.6 534-680v400q0 51.15-36.39 87.57-36.4 36.43-87.5 36.43ZM283-308h34l27-276h-88l27 276Zm34-276h-61 88-27Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOnW100.displayName = 'OnesyIconMaterialMicExternalOnW100';

export default IconMaterialMicExternalOnW100;
