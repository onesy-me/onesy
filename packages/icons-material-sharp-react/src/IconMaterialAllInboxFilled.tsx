import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllInboxFilled = (props: IIcon) => {

  return (
    <Icon
      name='AllInboxFilled'

      short_name='AllInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-440q34 0 57-23.5t23-56.5h160v-280H320v280h160q0 33 23.5 56.5T560-440ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z"/>
    </Icon>
  );
};

IconMaterialAllInboxFilled.displayName = 'OnesyIconMaterialAllInboxFilled';

export default IconMaterialAllInboxFilled;
