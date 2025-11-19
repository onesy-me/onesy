import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolbarFilled = (props: IIcon) => {

  return (
    <Icon
      name='ToolbarFilled'

      short_name='Toolbar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-640v-200h720v200H120Zm0 520v-440h720v440H120Z"/>
    </Icon>
  );
};

IconMaterialToolbarFilled.displayName = 'OnesyIconMaterialToolbarFilled';

export default IconMaterialToolbarFilled;
