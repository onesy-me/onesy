import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHelpClinicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelpClinicW100'

      short_name='HelpClinic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.04-296q5.96 0 9.96-4.02 4-4.03 4-9.98v-120q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98v120q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM480-532q11 0 19.5-8.5T508-560q0-11-8.5-19.5T480-588q-11 0-19.5 8.5T452-560q0 11 8.5 19.5T480-532ZM272-172q-24.75 0-42.37-17.63Q212-207.25 212-232v-312q0-14.25 6.38-27 6.37-12.75 17.62-21l208-157q15.68-12 35.84-12Q500-761 516-749l208 157q11.25 8.25 17.63 21 6.37 12.75 6.37 27v312q0 24.75-17.62 42.37Q712.75-172 688-172H272Zm0-28h416q14 0 23-9t9-23v-312q0-8-3.5-14.5T707-570L499-726q-8-7-19-7t-19 7L253-570q-6 5-9.5 11.5T240-544v312q0 14 9 23t23 9Zm208-267Z"/>
    </Icon>
  );
});

IconMaterialHelpClinicW100.displayName = 'OnesyIconMaterialHelpClinicW100';

export default IconMaterialHelpClinicW100;
