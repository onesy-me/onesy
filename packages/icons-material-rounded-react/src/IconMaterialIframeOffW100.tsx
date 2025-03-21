import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIframeOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IframeOffW100'

      short_name='IframeOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-24.75 0-42.37-17.63Q132-247.25 132-272v-416q0-24.75 17.63-42.38Q167.25-748 192-748h20v40L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5L708-212H192Zm0-28h488L280-640H160v368q0 14 9 23t23 9Zm636-448v420q0 7-4.32 10.5t-9.5 3.5q-5.18 0-9.68-3.59-4.5-3.58-4.5-10.41v-372H457q-12.44 0-23.72-5T414-658l-39-39q-6.92-7.81-8.46-16.41Q365-722 368-730t10.5-13q7.5-5 17.5-5h372q24.75 0 42.38 17.62Q828-712.75 828-688ZM704-514v112q0 7.24-4.4 10.62-4.4 3.38-9.5 3.38t-9.6-3.62Q676-395.24 676-402v-114H562q-6.76 0-10.38-4.4-3.62-4.4-3.62-9.5t3.38-9.6q3.38-4.5 10.62-4.5h112q12.75 0 21.38 8.62Q704-526.75 704-514Z"/>
    </Icon>
  );
});

IconMaterialIframeOffW100.displayName = 'OnesyIconMaterialIframeOffW100';

export default IconMaterialIframeOffW100;
