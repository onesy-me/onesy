import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSweepFilled = (props: IIcon) => {

  return (
    <Icon
      name='SweepFilled'

      short_name='Sweep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-240v-80h240v80H400Zm-158 0L14-467.8 71-525l171 171 366.87-367L666-664 242-240Zm318-160v-80h240v80H560Zm160-160v-80h240v80H720Z"/>
    </Icon>
  );
};

IconMaterialSweepFilled.displayName = 'OnesyIconMaterialSweepFilled';

export default IconMaterialSweepFilled;
