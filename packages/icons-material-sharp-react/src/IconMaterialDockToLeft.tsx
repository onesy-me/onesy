import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDockToLeft = (props: IIcon) => {

  return (
    <Icon
      name='DockToLeft'

      short_name='DockToLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-200h120v-560H640v560Zm-440 0h360v-560H200v560Zm440 0h120-120Zm-520 80v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialDockToLeft.displayName = 'OnesyIconMaterialDockToLeft';

export default IconMaterialDockToLeft;
