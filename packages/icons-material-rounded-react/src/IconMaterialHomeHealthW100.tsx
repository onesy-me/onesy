import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeHealthW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeHealthW100'

      short_name='HomeHealth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M446-406v66q0 14.17 9.88 24.08 9.88 9.92 24 9.92t24.12-9.92q10-9.91 10-24.08v-66h66q14.17 0 24.08-9.88 9.92-9.88 9.92-24T604.08-464q-9.91-10-24.08-10h-66v-66q0-14.17-9.88-24.08-9.88-9.92-24-9.92T456-564.08q-10 9.91-10 24.08v66h-66q-14.17 0-24.08 9.88-9.92 9.88-9.92 24t9.92 24.12q9.91 10 24.08 10h66ZM272-172q-24.75 0-42.37-17.63Q212-207.25 212-232v-312q0-14.25 6.38-27 6.37-12.75 17.62-21l208-157q15.68-12 35.84-12Q500-761 516-749l208 157q11.25 8.25 17.63 21 6.37 12.75 6.37 27v312q0 24.75-17.62 42.37Q712.75-172 688-172H272Zm0-28h416q14 0 23-9t9-23v-312q0-8-3.5-14.5T707-570L499-726q-8-7-19-7t-19 7L253-570q-6 5-9.5 11.5T240-544v312q0 14 9 23t23 9Zm208-267Z"/>
    </Icon>
  );
});

IconMaterialHomeHealthW100.displayName = 'OnesyIconMaterialHomeHealthW100';

export default IconMaterialHomeHealthW100;
