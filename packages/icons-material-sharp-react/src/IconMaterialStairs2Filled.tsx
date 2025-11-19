import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStairs2Filled = (props: IIcon) => {

  return (
    <Icon
      name='Stairs2Filled'

      short_name='Stairs2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-80h240v-240h240v-240h320v80H640v240H400v240H80Z"/>
    </Icon>
  );
};

IconMaterialStairs2Filled.displayName = 'OnesyIconMaterialStairs2Filled';

export default IconMaterialStairs2Filled;
