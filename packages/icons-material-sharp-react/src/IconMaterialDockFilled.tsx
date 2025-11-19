import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDockFilled = (props: IIcon) => {

  return (
    <Icon
      name='DockFilled'

      short_name='Dock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-40v-80h320v80H320Zm-80-160v-720h480v720H240Zm80-200h320v-320H320v320Z"/>
    </Icon>
  );
};

IconMaterialDockFilled.displayName = 'OnesyIconMaterialDockFilled';

export default IconMaterialDockFilled;
