import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHandshakeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandshakeW100Filled'

      short_name='Handshake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M468-135q-14 0-25-9.5T432-170q0-8 3.5-18t10.5-17l126-126q5-5 5-10t-5-10q-5-5-10.5-4.5T552-351L426-225q-7 7-16 10.5t-18 3.5q-15 0-25.5-10.5T356-247q0-9 4-18.5t10-15.5l126-126q5-5 5-10t-5-10q-5-5-10.5-4.5T476-427L350-301q-6 6-15.5 10t-18.5 4q-15 0-25.5-10.5T280-323q0-9 3.5-18t10.5-16l114-114q5-5 5-10t-5-10q-5-5-10.5-4.5T388-491L274-377q-6 6-15.5 10t-18.5 4q-16 0-26-10t-10-26q0-9 3.5-18t10.5-16l167-167q10-10 23-10t23 10l44 44q11 11 24.5 15t27.5 4q28 0 46-18t18-46q0-14-5.5-28T569-654l-30-30q-23-23-25.5-53.5T533-788q14-14 32-21t37-7q18 0 35 6.5t31 20.5l172 172q11 11 18 28t7 37q0 20-7 37t-18 28L502-149q-6 6-15.5 10t-18.5 4ZM135-462q-22-20-33.5-45.5T90-559q0-21 7.5-40.5T121-635l154-154q12-12 26.5-19t31.5-7q17 0 33 7t28 19l155 155q7 7 10.5 15.5T563-601q0 15-10.5 26T527-564q-10 0-18.5-3.5T493-578l-43-43q-17-17-42-17t-42 17L203-458q-14 14-33.5 12T135-462Z"/>
    </Icon>
  );
});

IconMaterialHandshakeW100Filled.displayName = 'OnesyIconMaterialHandshakeW100Filled';

export default IconMaterialHandshakeW100Filled;
