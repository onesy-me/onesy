import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditLocationAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationAltW100'

      short_name='EditLocationAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-828q23.63 0 46.81 3.5Q550-821 571-813l-21 22q-17-5-33.78-7.5Q499.43-801 480-801q-106 0-175.5 72T235-547q0 75 67.5 179.5T480-169q110-94 177.5-198.5T725-547q0-23-3.5-43.5T712-631l22-22q9 25 14 51.07t5 54.93q0 79-61 176.5T512-160q-6.64 6-15.09 9-8.46 3-16.91 3-8 0-16-2.5t-15-8.5q-36-33-78-78t-78.5-96.5q-36.5-51.5-61-106T207-547q0-120 78.5-200.5T480-828Zm0 281Zm216.95-228.05L686-786 490-590q-2 2.07-3 4.66-1 2.58-1 5.34v2q0 5.2 3.4 8.6 3.4 3.4 8.6 3.4h2q2.76 0 5.34-1 2.59-1 4.66-3l196-196-9.05-9.05ZM734-794l20-20q5-5 6.5-10.5T758-834l-4-4q-4-4-9.5-2.5T734-834l-20 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialEditLocationAltW100.displayName = 'OnesyIconMaterialEditLocationAltW100';

export default IconMaterialEditLocationAltW100;
