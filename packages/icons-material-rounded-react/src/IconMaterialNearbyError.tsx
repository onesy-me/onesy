import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearbyError = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyError'

      short_name='NearbyError'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-240q-17 0-28.5-11.5T800-280v-240q0-17 11.5-28.5T840-560q17 0 28.5 11.5T880-520v240q0 17-11.5 28.5T840-240Zm0 160q-17 0-28.5-11.5T800-120q0-17 11.5-28.5T840-160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80Zm-360 0q-15 0-29.5-6T424-104L104-424q-12-12-18-26.5T80-480q0-15 6-29.5t18-26.5l320-320q12-12 26.5-18t29.5-6q15 0 29.5 6t26.5 18l169 169q8 8 11.5 16.5T720-651q0 23-15.5 37T669-600q-10 0-19-3.5T633-615L480-768 192-480l288 288 153-153q8-8 17.5-11.5T669-360q20 0 35.5 14t15.5 37q0 11-3.5 19.5T705-273L536-104q-12 12-26.5 18T480-80Zm-28-252L332-452q-6-6-9-13t-3-15q0-8 3-15t9-13l120-120q6-6 13-9t15-3q8 0 15 3t13 9l120 120q6 6 9 13t3 15q0 8-3 15t-9 13L508-332q-6 6-13 9t-15 3q-8 0-15-3t-13-9Z"/>
    </Icon>
  );
});

IconMaterialNearbyError.displayName = 'OnesyIconMaterialNearbyError';

export default IconMaterialNearbyError;
