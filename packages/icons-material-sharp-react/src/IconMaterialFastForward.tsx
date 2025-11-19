import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFastForward = (props: IIcon) => {

  return (
    <Icon
      name='FastForward'

      short_name='FastForward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M100-240v-480l360 240-360 240Zm400 0v-480l360 240-360 240ZM180-480Zm400 0Zm-400 90 136-90-136-90v180Zm400 0 136-90-136-90v180Z"/>
    </Icon>
  );
};

IconMaterialFastForward.displayName = 'OnesyIconMaterialFastForward';

export default IconMaterialFastForward;
