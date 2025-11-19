import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeskFilled = (props: IIcon) => {

  return (
    <Icon
      name='DeskFilled'

      short_name='Desk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240v-480h800v480h-80v-80H640v80h-80v-400H160v400H80Zm560-320h160v-80H640v80Zm0 160h160v-80H640v80Z"/>
    </Icon>
  );
};

IconMaterialDeskFilled.displayName = 'OnesyIconMaterialDeskFilled';

export default IconMaterialDeskFilled;
