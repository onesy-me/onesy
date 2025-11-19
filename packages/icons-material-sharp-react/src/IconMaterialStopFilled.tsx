import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStopFilled = (props: IIcon) => {

  return (
    <Icon
      name='StopFilled'

      short_name='Stop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-480h480v480H240Z"/>
    </Icon>
  );
};

IconMaterialStopFilled.displayName = 'OnesyIconMaterialStopFilled';

export default IconMaterialStopFilled;
