import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPaddingW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='PaddingW100Filled'

      short_name='Padding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M298-606h56v-56h-56v56Zm154 0h56v-56h-56v56Zm154 0h56v-56h-56v56ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
};

IconMaterialPaddingW100Filled.displayName = 'OnesyIconMaterialPaddingW100Filled';

export default IconMaterialPaddingW100Filled;
