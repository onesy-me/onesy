import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneDisabledW100'

      short_name='PhoneDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M778-138 578-338q-90 81-182.5 123.5T215-172q-18 0-30.5-12T172-214v-78q0-18 10.5-30.5T210-339l68-14q15-3 26 .5t22 14.5l83 85q36-19 77.5-48.5T558-358L142-774q-4-4-4.5-9.5T142-794q5-5 10-5t10 5l636 636q4 4 4.5 9.5T798-138q-5 5-10 5t-10-5ZM382-240l-78-80q-5-5-9.5-6.5t-10.5.5l-68 14q-8 2-12 7t-4 13v78q0 6 4 10t10 4q32 0 79.5-9.5T382-240Zm270-177-20-20q17-21 36-50.5t33-52.5l-85-77q-11-10-14.5-23t-.5-28l18-82q4-17 16.5-27.5T666-788h80q18 0 30 12.5t12 30.5q0 83-38 170t-98 158Zm62-149q21-47 33.5-93t12.5-87q0-6-4-10t-10-4h-80q-8 0-13 4t-7 12l-18 82q-2 6-.5 12.5T634-638l80 72Zm0 0ZM382-240Z"/>
    </Icon>
  );
});

IconMaterialPhoneDisabledW100.displayName = 'OnesyIconMaterialPhoneDisabledW100';

export default IconMaterialPhoneDisabledW100;
